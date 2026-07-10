# Development Brief — BR Pest Control Website

**Client:** BR Pest Control (Ben Ross) · **Built by:** TechTribe
**Domain:** `brpestcontrol.co.uk`
**Status:** Approved — ready to build

---

## 0. How to use this brief

This document is written to be handed to Cursor as the source of truth for the build. Read the whole thing before scaffolding. If anything here conflicts with a later instruction in the editor, ask before assuming.

**Stack decision (change here if needed):**
> Build with **Astro + Tailwind CSS**, deployed to **Cloudflare Pages** (or Netlify). Content lives in Astro content collections (markdown/MDX) so non-component copy can be edited without touching layout. Contact form handled by a serverless function or a form provider (Netlify Forms / Formspree / Cloudflare).
>
> *Alternative if a CMS is wanted:* Next.js (App Router) + Sanity. Only choose this if Ben or TechTribe needs in-browser content editing — otherwise Astro is the lighter, faster, cheaper option for a site this size.

UK English throughout (colour, optimise, centre, organise, licence/practise where relevant).

---

## 1. Objective

Get Ben found first when someone in his patch searches for a pest controller, and make it effortless to call or enquire. This is a **lead-generation site for a sole trader**, not a brochure. Two things matter above all:

1. **Local SEO** — rank for town-level and "near me" searches across his coverage area.
2. **Conversion** — phone number and enquiry form visible everywhere, friction near zero.

Everything else is secondary to those two.

---

## 2. The business

| Field | Detail |
|---|---|
| Trading name | BR Pest Control |
| Operator | Ben Ross (sole trader) |
| Base | Ripon, North Yorkshire |
| Coverage | Ripon, Boroughbridge, Thirsk, Bedale and surrounding North Yorkshire |
| Sectors | Domestic · Commercial · Farm/agricultural |
| Phone | 07411 841 699 |
| Email | rossben@hotmail.co.uk |
| Facebook | facebook.com/BenRosspestcontrol |
| Credentials | RSPH Level 2 Award in Pest Management (cert 500/8797/6, passed 09/05/2022, Pelsis Academy) · BPCA member · Fully insured |
| Strapline | "Professional, reliable & efficient · Fully insured" |
| Friendly tagline | "Here to help with all your pest problems, no matter how large or small" |

**⚠️ Address:** Ben's registered address (15 Brewster Terrace, Ripon, HG4 2HY) is **residential**. Do **not** publish the street address. Present the business as **service-area based** — show towns covered and "Ripon, North Yorkshire" only. Use the postcode/town for local schema, not as a displayed shopfront address.

---

## 3. Services

Lead with **wasp nest removal** — it's the most-requested job and the strongest theme in his reviews. Then the full list:

**Confirmed / strongly evidenced**
- Wasp nest removal *(hero service)*
- Rats
- Mice
- Moles
- Squirrels
- Rabbits
- Fleas
- Cluster flies
- Ants
- Bed bugs
- General insect / crawling pest control
- Commercial & farm contract work

**To confirm with Ben before publishing** *(leave out if unconfirmed — don't invent capability)*
- Proofing / exclusion work
- Birds (pigeons, seagulls)
- Moths

Each pest should be a short, scannable block: problem → why it matters → "call Ben". Don't write essays; trades customers want reassurance and a phone number, not a biology lesson.

---

## 4. Site structure

```
/                       Home
/services               Services overview (links to anchors or per-pest blocks)
/wasp-nest-removal      Dedicated page — highest-value service
/about                  Ben, credentials, insurance, BPCA/RSPH
/contact                Form + phone + coverage map

Area landing pages (the SEO engine — one per town):
/pest-control-ripon
/pest-control-boroughbridge
/pest-control-thirsk
/pest-control-bedale
```

The four area pages are **not optional decoration** — they are the core local-SEO strategy. Each targets "pest control [town]" and feeds "near me" intent. Build them from a **single templated layout** with town-specific content (town name, nearby landmarks/villages, a localised intro, the same services and reviews). Avoid thin/duplicate content: each page needs genuinely town-specific copy in the intro and at least one locally-flavoured paragraph, not just a find-and-replace of the town name.

---

## 5. Page-by-page requirements

**Home**
- Hero: friendly tagline, strong primary CTA (click-to-call) + secondary (enquiry form).
- Trust strip: Fully insured · RSPH qualified · BPCA member · 5★ reviews.
- Services grid (lead with wasps).
- Coverage statement + links to the four area pages.
- 2–3 testimonials.
- Sticky/persistent call button on mobile.

**Wasp nest removal**
- Standalone page, optimised for "wasp nest removal [town]" and "wasp nest removal near me".
- Fast-response angle (his reviews repeatedly praise speed — make that the promise).
- Clear CTA above the fold.

**Services**
- All pests, each with a short block. Internal links to area pages.

**About**
- Ben as a real, local, qualified one-man operation — that's the selling point against faceless nationals.
- Credentials, insurance, BPCA/RSPH badges.

**Contact**
- Enquiry form (see §7), click-to-call, email, coverage map.
- Reassure on response time.

**Area pages (×4)**
- H1: "Pest Control in [Town]".
- Localised intro, services, testimonials, CTA. NAP consistent on every page.

---

## 6. Design & brand

- **Palette:** strong red with white text (existing brand), neutral/dark supporting tones. Keep it clean and high-contrast.
- **Logo:** "BR" monogram from existing business-card collateral. *(Ask Dan whether to use the existing mark or generate a tidied wordmark.)*
- **Tone:** approachable, trustworthy, local. Not corporate.
- **Mobile-first.** Most of these searches happen on a phone, mid-problem ("there's a wasp nest in the shed"). Prioritise the mobile call CTA.
- Accessible: proper contrast ratios, semantic headings, alt text, focus states.

---

## 7. Functional requirements

- **Click-to-call** (`tel:`) on every page — sticky on mobile.
- **Enquiry form:** name, phone, email, town (dropdown of coverage towns + "other"), pest type, message. Spam protection (honeypot + provider-side). On submit, email to `rossben@hotmail.co.uk`. Success/failure states handled gracefully — no dead ends.
- **No `<form>`-tag pitfalls** if any React is involved — use proper handlers.
- Email obfuscation to reduce scraping.
- Optional: WhatsApp click-to-chat (his number) — confirm with Ben first.

---

## 8. SEO requirements (non-negotiable — this is the product)

- **Schema.org:** `LocalBusiness` / `PestControl` markup with `areaServed` (the four towns + North Yorkshire), service-area business (no published street address), phone, opening hours, and `aggregateRating` if review counts allow.
- **NAP consistency:** name, area, phone identical site-wide — must match the Google Business Profile exactly (GBP is the #1 priority deliverable and lives outside the site, but the site must reinforce it).
- Unique `<title>` and meta description per page, town-targeted on area pages.
- Clean semantic HTML, one H1 per page, logical heading order.
- `sitemap.xml` + `robots.txt`.
- Open Graph / Twitter cards for social shares.
- Fast Core Web Vitals (Astro should make this trivial — keep JS minimal).
- Internal linking: home ↔ services ↔ area pages.
- Google Analytics / a lightweight privacy-friendly analytics + call tracking so leads are measurable (the proposal promised Ben he'd see enquiries — wire this up).

---

## 9. Content assets on file

**Reviews (4× 5★ — testimonial-ready). Confirmed text:**
- *Mike Taylor (Jul 2024):* "We had 3 wasp nests at our house, and Ben treated them quickly and efficiently. A terrific service — highly recommended."
- *Steve Taylor (Jan 2024):* praise for Ben, fast response *(full text in project notes — Dan to paste exact wording).*
- Two further 5★ reviews on file — Dan to supply exact text before launch.

> All four hammer the same theme: **fast, efficient response**. Build the messaging around that.

**Brand:** red/white palette, "BR" monogram.
**Coverage:** Ripon, Boroughbridge, Thirsk, Bedale (confirmed from directory listings).

---

## 10. Placeholders to fill / confirm before launch

- [ ] Exact text of remaining two reviews
- [ ] Final services list (proofing/exclusion, birds, moths — confirm with Ben)
- [ ] Whether to show full reviews with names or first-name-only
- [ ] Logo: existing monogram vs. new wordmark
- [ ] WhatsApp click-to-chat — yes/no
- [ ] Opening hours / response-time promise to state publicly
- [ ] Photos (Ben's own van/jobs if available — far better than stock)

---

## 11. Definition of done

- All pages above built, responsive, accessible.
- Area pages templated with genuine town-specific content.
- Form delivers to Ben's inbox and is spam-protected.
- Schema valid (test in Google Rich Results).
- Lighthouse: green Performance / SEO / Accessibility / Best Practices on mobile.
- `sitemap.xml`, `robots.txt`, OG tags present.
- Analytics + call tracking live.
- Deployed to `brpestcontrol.co.uk` with HTTPS.
- No placeholder/lorem text remaining; no published street address.

---

*Brief prepared for handoff to Cursor. NAP and service-area details must stay consistent with the Google Business Profile — that listing is the highest-priority lead source and the site exists to reinforce it.*
