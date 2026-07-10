# BR Pest Control — Patterns And Conventions

## Governing Rule
Local SEO and conversion come before decorative polish. Every page should help visitors confirm coverage, trust Ben, and contact him quickly.

## Content Rules
1. Use UK English throughout.
2. Do not publish the residential street address.
3. Do not invent services, guarantees, opening hours, or review text.
4. Keep service copy short and practical: problem, risk, call Ben.
5. Area pages must include genuinely local details and cannot be town-name swaps.

## Component Rules
1. Use Astro components by default.
2. Add client JavaScript only where interaction requires it.
3. Keep contact form behaviour in a small script or endpoint, not a React island.
4. Put shared business constants in `src/data/site.ts`.
5. Use content collections for editable service, area, and testimonial copy.

## SEO Rules
1. One H1 per page.
2. Unique title and meta description per route.
3. Use service-area `LocalBusiness`/`PestControl` JSON-LD without street address.
4. Link home, services, wasp removal, and area pages together.
5. Wasp nest removal should be the lead service in ordering and messaging.

## Accessibility Rules
1. Keep colour contrast high.
2. Use semantic landmarks and headings.
3. Ensure focus-visible styles are obvious.
4. Form labels must be explicit and errors understandable.
5. Click-to-call links need accessible text, not only icons.

## Styling Rules
1. Use a strong red primary colour with white text.
2. Support with dark charcoal, warm off-white, and neutral greys.
3. Mobile-first spacing and layout.
4. Avoid visual clutter that competes with the call CTA.

## Build Rule
Run `npm run build` before handing work back after implementation.
