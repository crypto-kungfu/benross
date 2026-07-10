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
  const to = process.env.CONTACT_TO_EMAIL ?? 'rossben@hotmail.co.uk';
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return json(
      {
        message: 'The enquiry form is not configured yet. Please call us on 07411 841 699.',
      },
      503,
    );
  }

  const resend = new Resend(apiKey);
  const subject = `New ${enquiry.pestType} enquiry from ${enquiry.name}`;
  const text = [
    'New enquiry from BR Pest Control website',
    '',
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Email: ${enquiry.email}`,
    `Town: ${enquiry.town}`,
    `Pest type: ${enquiry.pestType}`,
    '',
    'Message:',
    enquiry.message,
  ].join('\n');

  const result = await resend.emails.send({
    from,
    to,
    subject,
    text,
    replyTo: enquiry.email,
  });

  if (result.error) {
    return json(
      {
        message: 'The enquiry could not be sent. Please call us on 07411 841 699.',
      },
      502,
    );
  }

  return json({ message: 'Thanks, your enquiry has been sent.' });
};
