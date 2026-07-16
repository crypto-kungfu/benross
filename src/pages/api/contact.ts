import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { z } from 'zod';
import { serviceOptions, townOptions } from '../../data/site';

export const prerender = false;

const field = z
  .unknown()
  .transform((value) => (typeof value === 'string' ? value.trim() : ''));

const contactSchema = z.object({
  name: field.pipe(z.string().min(2, 'Please enter your name.').max(100)),
  phone: field.pipe(z.string().min(7, 'Please enter a valid phone number.').max(30)),
  email: field.pipe(z.string().email('Please enter a valid email address.').max(160)),
  town: field.pipe(z.string().refine((value) => townOptions.includes(value), 'Please choose a town.')),
  pestType: field.pipe(z.string().refine((value) => serviceOptions.includes(value), 'Please choose a pest type.')),
  message: field.pipe(z.string().min(10, 'Please add a short message.').max(2000)),
  company: field,
});

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const formatEmailAddress = (value: string) => value.trim();

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    town: formData.get('town'),
    pestType: formData.get('pestType'),
    message: formData.get('message'),
    company: formData.get('company'),
  });

  if (!parsed.success) {
    return json(
      {
        message: parsed.error.issues[0]?.message ?? 'Please check the form and try again.',
      },
      400,
    );
  }

  const enquiry = parsed.data;

  if (enquiry.company) {
    return json({ message: 'Thanks, your enquiry has been sent.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from || !to) {
    return json(
      {
        message: 'The enquiry form is not configured yet. Please call us on 07411 841 699.',
      },
      503,
    );
  }

  const resend = new Resend(apiKey);
  const subject = `New ${enquiry.pestType} enquiry from ${enquiry.name}`;
  const submittedAt = new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Europe/London',
  });
  const text = [
    'New enquiry from BR Pest Control website',
    '',
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Email: ${enquiry.email}`,
    `Town: ${enquiry.town}`,
    `Pest type: ${enquiry.pestType}`,
    `Submitted: ${submittedAt}`,
    '',
    'Message:',
    enquiry.message,
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; color: #252a33; line-height: 1.6;">
      <h1 style="margin: 0 0 16px; color: #16191f; font-size: 22px;">New enquiry from BR Pest Control website</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tbody>
          <tr><td style="padding: 8px 0; font-weight: 700;">Name</td><td style="padding: 8px 0;">${escapeHtml(enquiry.name)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">Phone</td><td style="padding: 8px 0;"><a href="tel:${escapeHtml(enquiry.phone)}">${escapeHtml(enquiry.phone)}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(enquiry.email)}">${escapeHtml(enquiry.email)}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">Town</td><td style="padding: 8px 0;">${escapeHtml(enquiry.town)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">Pest type</td><td style="padding: 8px 0;">${escapeHtml(enquiry.pestType)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">Submitted</td><td style="padding: 8px 0;">${escapeHtml(submittedAt)}</td></tr>
        </tbody>
      </table>
      <h2 style="margin: 24px 0 8px; color: #16191f; font-size: 16px;">Message</h2>
      <div style="max-width: 640px; white-space: pre-wrap; border-left: 4px solid #c8102e; padding: 12px 16px; background: #fff8f3;">${escapeHtml(enquiry.message)}</div>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: formatEmailAddress(from),
      to: formatEmailAddress(to),
      subject,
      text,
      html,
      replyTo: enquiry.email,
    });

    if (!result.error) {
      return json({ message: 'Thanks, your enquiry has been sent.' });
    }

    console.error('Resend contact form error:', result.error);
  } catch (error) {
    console.error('Resend contact form exception:', error);
  }

  return json(
    {
      message: 'The enquiry could not be sent. Please call us on 07411 841 699.',
    },
    502,
  );
};
