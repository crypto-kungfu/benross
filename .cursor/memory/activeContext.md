# BR Pest Control — Active Context

*Last updated: 2026-06-30*

## Current Focus
Phase 1 build and the premium redesign are complete. The current focus is launch preparation: configure live email, swap placeholder imagery for Ben's real photos, deploy to Vercel, and validate SEO output.

## Decisions
- Astro + Tailwind CSS is the stack.
- Vercel is the deployment target.
- Use a placeholder BR monogram for v1 and swap the final asset later.
- Publish only confirmed services.
- Do not publish Ben's residential street address anywhere.
- Contact form will use an Astro API route and Resend once environment variables are configured.
- Astro 7 uses `src/content.config.ts` with explicit `glob` loaders for content collections.
- `path-to-regexp` is overridden to `6.3.0` to clear the current Vercel adapter transitive audit advisory.
- Primary nav is Home / Services / Areas / About / Contact. Wasp Nest Removal stays as a page (linked from home/services) but is out of the nav.
- Maps use Leaflet + OpenStreetMap (no API key). `CoverageMap.astro` uses `circleMarker` (avoids Leaflet default-marker asset path) + a coverage `circle`, with lazy `IntersectionObserver` init; bundle only ships on `/areas`, home, and town pages.
- Imagery is centralised in `src/data/images.ts` (slug→category map for services, slug map for areas) rather than per-file frontmatter — 12 services map to 5 category images. Images live in `src/assets/images/` for `astro:assets` webp optimisation. All current images are AI-generated placeholders to be swapped for Ben's photos.
- Type uses self-hosted Inter (`@fontsource-variable/inter`, family "Inter Variable").
- Project page gutters use `.site-container` instead of Tailwind's reserved `container` utility so mobile content keeps the intended side spacing.

## Current Risks
- Remaining three review texts are not available.
- Opening hours and any public response-time promise are not confirmed.
- WhatsApp click-to-chat is not confirmed.
- Final logo and real photos are pending — all site imagery is currently AI-generated placeholder.
- Live email cannot be proven until a Resend API key and verified sender are configured.
- Analytics and call tracking are not yet configured.

## Immediate Next Steps
1. Configure `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in Vercel.
2. Swap placeholder imagery in `src/assets/images/` for Ben's real photos; add remaining review copy and final logo when supplied.
3. Deploy to Vercel and connect `brpestcontrol.co.uk`.
4. Validate schema (incl. new ItemList on `/areas`), sitemap, and Lighthouse before launch.
