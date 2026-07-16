# BR Pest Control Website

Astro + Tailwind website for BR Pest Control, a service-area pest control business based in Ripon, North Yorkshire.

## Priorities
- Local SEO for Ripon, Boroughbridge, Thirsk, and Bedale.
- Fast mobile conversion through click-to-call and a short enquiry form.
- Confirmed services only.
- No published residential street address.

## Commands
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Environment
Copy `.env.example` to `.env` locally if testing the contact endpoint.

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=rossben@hotmail.co.uk
CONTACT_FROM_EMAIL="BR Pest Control <enquiries@brpestcontrol.co.uk>"
PUBLIC_SITE_URL=https://brpestcontrol.co.uk
PUBLIC_PLAUSIBLE_DOMAIN=brpestcontrol.co.uk
```

`CONTACT_FROM_EMAIL` must be a verified sender or verified domain in Resend before live delivery works. The recommended live setup is:

1. Verify `brpestcontrol.co.uk` in Resend.
2. Add the DNS records Resend gives you.
3. Set `CONTACT_FROM_EMAIL` to `BR Pest Control <enquiries@brpestcontrol.co.uk>`.
4. Set `CONTACT_TO_EMAIL` to the inbox Ben wants enquiries delivered to.
5. Add the same values in Vercel project environment variables for production.

## Deploy
Deploy to Vercel and set the environment variables above. The domain target is:

```text
brpestcontrol.co.uk
```

## Launch Gaps
- Remaining review text from Dan/Ben.
- Final logo asset and real photos.
- Confirm WhatsApp, opening hours, and any public response-time promise.
- Add analytics and call tracking once the preferred provider is confirmed.
- Validate schema in Google Rich Results before launch.
