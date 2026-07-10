# BR Pest Control — Tech Context

## Stack
| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Astro | Static-first pages with content collections |
| Styling | Tailwind CSS plus global tokens | Mobile-first, accessible contrast |
| Language | TypeScript strict | Avoid `any` |
| Deployment | Vercel | User preference; supported with `@astrojs/vercel` |
| Form endpoint | Astro API route on Vercel | `src/pages/api/contact.ts`, `prerender = false` |
| Email delivery | Resend | Requires `RESEND_API_KEY` |
| Maps | Leaflet + OpenStreetMap | No API key; client script in `CoverageMap.astro`, lazy-loaded |
| Fonts | `@fontsource-variable/inter` | Self-hosted (family "Inter Variable") |
| Imagery | `astro:assets` | Source JPGs in `src/assets/images/`, optimised to webp at build |
| Analytics | Plausible/GA placeholder | Wire only when domain/choice is confirmed |

## Package Notes
- Astro is installed from the current npm release line.
- Content collections use `src/content.config.ts` and `astro/loaders` `glob()` loaders.
- `package.json` includes an npm override for `path-to-regexp@6.3.0` to avoid the vulnerable transitive version pulled through Vercel routing utilities.
- `leaflet` (+ `@types/leaflet`) powers interactive coverage maps; bundle ships only on pages that include `CoverageMap.astro`.
- `@fontsource-variable/inter` self-hosts Inter (imported in `global.css`).
- Image→content mapping lives in `src/data/images.ts` (service category map + area map) instead of per-file frontmatter image fields.

## Commands
```bash
npm install
npm run dev
npm run build
npm run preview
```

Run `npm run build` after substantive implementation work.

## Environment Variables
```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=rossben@hotmail.co.uk
CONTACT_FROM_EMAIL=
PUBLIC_SITE_URL=https://brpestcontrol.co.uk
PUBLIC_PLAUSIBLE_DOMAIN=brpestcontrol.co.uk
```

`CONTACT_FROM_EMAIL` must be a verified sender/domain in Resend before live email delivery.

## File Map
```text
src/components/layout/        Header, Footer, MobileCallBar
src/components/seo/           Meta, JsonLd
src/components/ui/            Buttons, cards, trust strip
src/components/forms/         ContactForm
src/content.config.ts         Astro content collection schemas and loaders
src/content/services/*.md     Confirmed service copy
src/content/areas/*.md        Local SEO area copy
src/content/testimonials/*.md Review content
src/data/site.ts              NAP, nav, areas, contact constants
src/layouts/BaseLayout.astro  Shared page shell
src/layouts/AreaLayout.astro  Area landing page template
src/pages/*.astro             Static content pages
src/pages/api/contact.ts      Vercel serverless contact endpoint
src/styles/global.css         Tailwind imports and project tokens
```

## Rendering Model
Prefer static pages. The build prerenders all public pages, while the Vercel adapter bundles the contact API endpoint for request-time handling. Keep client-side JavaScript minimal and purposeful.

## Platform Notes
- Vercel can deploy Astro with `@astrojs/vercel`.
- Astro API routes that must run at request time should export `prerender = false`.
- Do not add a complex `vercel.json` unless a real deploy issue requires it.

## Security Notes
- Never commit `.env` files.
- Do not expose Resend secrets client-side.
- Validate contact form input server-side.
- Honeypot submissions should return a generic success response to avoid teaching bots.
