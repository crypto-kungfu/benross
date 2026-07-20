# BR Pest Control — Active Context

*Last updated: 2026-07-20*

## Current Focus
Launch preparation. Hero uses the outdoor van portrait with a left-only charcoal gradient (~40% fade to transparent) so Ben and the van stay clear on the right. Area town photos are Wikimedia Commons originals; credential line is BASIS PROMPT registered. Contact form is wired to Resend and awaits live Resend env vars/domain verification.

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
- Imagery is centralised in `src/data/images.ts`. Area photos are real Wikimedia/Geograph shots with attribution in `image-credits.ts` + footer. Service/about imagery still mostly AI placeholders. Hero uses Ben's outdoor van portrait (`src/assets/images/hero.jpg`) with CSS left/right charcoal gradients (stronger on desktop; lighter on mobile). Mobile crop uses `scale-[1.45] origin-left object-[70%_center]`; desktop is `object-right`.
- Credential line is BASIS PROMPT registered (not BPCA). Official logo in `src/assets/images/badges/`; PROMPT Verified artwork also downloaded there if needed later.
- Type uses self-hosted Inter (`@fontsource-variable/inter`, family "Inter Variable").
- Project page gutters use `.site-container` instead of Tailwind's reserved `container` utility so mobile content keeps the intended side spacing.

## Current Risks
- Remaining three review texts are not available.
- Opening hours and any public response-time promise are not confirmed.
- WhatsApp click-to-chat is not confirmed.
- Final logo and real photos are pending — all site imagery is currently AI-generated placeholder.
- Live email cannot be proven until `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, and a verified Resend sender/domain are configured.
- Analytics and call tracking are not yet configured.

## Immediate Next Steps
1. Configure `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in Vercel after verifying the sender/domain in Resend.
2. Swap placeholder imagery in `src/assets/images/` for Ben's real photos; add remaining review copy and final logo when supplied.
3. Deploy to Vercel and connect `brpestcontrol.co.uk`.
4. Validate schema (incl. new ItemList on `/areas`), sitemap, and Lighthouse before launch.
