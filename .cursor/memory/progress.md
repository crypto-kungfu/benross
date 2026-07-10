# BR Pest Control — Progress

*Last updated: 2026-06-30*

## Foundation

### Done
- ✅ Development brief received and treated as source of truth.
- ✅ Deployment preference confirmed as Vercel.
- ✅ Logo v1 direction confirmed as placeholder monogram now, final asset later.
- ✅ Memory Bank created with project context and cognition modules.
- ✅ Astro + Tailwind + Vercel project scaffolded.
- ✅ Content collections created for confirmed services, areas, and testimonials.
- ✅ Shared layout, navigation, footer, mobile call bar, SEO metadata, and JSON-LD components built.
- ✅ Core pages built: home, services, wasp nest removal, about, contact, and four area pages.
- ✅ Contact form and `/api/contact` endpoint built with Zod validation, honeypot, and Resend integration.
- ✅ Robots, sitemap integration, favicon, Open Graph placeholder, README, env example, and git repo initialised.
- ✅ `npm run build` passes.
- ✅ `npm audit --omit=dev` reports 0 vulnerabilities.
- ✅ IDE diagnostics show no linter errors.

### Premium Redesign (2026-06-30)
- ✅ Reworked primary nav to Home, Services, Areas, About, Contact (Wasp Nest Removal demoted from nav, page retained). Active-state highlighting added to Header (desktop + mobile).
- ✅ Footer rebuilt with Explore / Areas / Contact columns plus a copyright/credentials row.
- ✅ Added geo coordinates per area + `mapCenter` to `site.ts`.
- ✅ Interactive coverage maps via Leaflet + OpenStreetMap (`CoverageMap.astro`): circleMarkers (no marker-asset path issues), soft coverage circles, popups, lazy `IntersectionObserver` init, scoped bundle on map pages only.
- ✅ New `/areas` overview page (full coverage map, AreaCards, CTA band, ItemList JSON-LD). Included in sitemap.
- ✅ Per-town `CoverageMap` + area image added to `AreaLayout`.
- ✅ Self-hosted Inter via `@fontsource-variable/inter`; added shadow/accent design tokens.
- ✅ New components: `SectionHeading`, `AreaCard`, inline-SVG `Icon` set. `ServiceCard` upgraded to image-led cards; `TrustStrip` refreshed with icons.
- ✅ Redesigned home hero (full-bleed image + charcoal gradient + stat cards); refreshed services, about (portrait), and contact sections.
- ✅ AI-generated placeholder imagery in `src/assets/images/` (hero, 5 service categories, about portrait, 4 area photos) optimised via `astro:assets` to webp; `public/og-image.jpg` replaces the SVG OG placeholder.
- ✅ Verified in browser at desktop + mobile (390px): nav correct, Leaflet tiles + markers render, images load, mobile menu + call bar work.
- ✅ Fixed mobile edge spacing by replacing the conflicting Tailwind `container` utility with a project-specific `.site-container` wrapper and aligning the sticky call bar gutter.

### In Progress
- 🚧 Launch preparation.

### Pending
- ⏳ Deploy to Vercel.
- ⏳ Configure live contact-form email environment variables.
- ⏳ Run post-deploy Lighthouse and Rich Results checks.

## Launch Blockers
- ⏳ Exact text for Steve Taylor review and two further reviews.
- ⏳ Decision on full names vs first names only for reviews.
- ⏳ Confirm final services: proofing/exclusion, birds, moths.
- ⏳ Confirm WhatsApp click-to-chat.
- ⏳ Confirm opening hours or response-time promise.
- ⏳ Supply final logo asset and real photos if available (current imagery in `src/assets/images/` is AI-generated placeholder — swap for Ben's own photos).
- ⏳ Configure Resend environment variables and verified sender.
- ⏳ Deploy to Vercel and connect `brpestcontrol.co.uk`.
- ⏳ Validate schema in Google Rich Results.
- ⏳ Add analytics and call tracking.
