# BR Pest Control — Project Brief

## One Line
Lead-generation website for BR Pest Control, a Ripon-based sole trader, built to win local pest-control searches and make calling or enquiring frictionless.

## Source Of Truth
- Primary brief: `BR-Pest-Control-Dev-Brief.md`
- Domain: `brpestcontrol.co.uk`
- Client: BR Pest Control, operated by Ben Ross
- Build partner: TechTribe

## Business Details
| Field | Value |
|-------|-------|
| Trading name | BR Pest Control |
| Operator | Ben Ross |
| Base | Ripon, North Yorkshire |
| Coverage | Ripon, Boroughbridge, Thirsk, Bedale and surrounding North Yorkshire |
| Sectors | Domestic, commercial, farm/agricultural |
| Phone | 07411 841 699 |
| Email | rossben@hotmail.co.uk |
| Facebook | facebook.com/BenRosspestcontrol |
| Credentials | RSPH Level 2 Award in Pest Management, BPCA member, fully insured |

## Non-Negotiable Address Rule
Ben's registered address is residential. Do not publish the street address anywhere in the UI, content, schema, metadata, README, or generated assets.

Present BR Pest Control as a service-area business. Display only "Ripon, North Yorkshire" and the covered towns. Schema may use `addressLocality`, `addressRegion`, and `addressCountry`, but no street address.

## Primary Objectives
1. Local SEO: rank for town-level and "near me" pest-control searches across the service area.
2. Conversion: make phone calls and enquiries obvious on every page, especially on mobile.

Everything else is secondary.

## Site Structure
- `/`
- `/services`
- `/wasp-nest-removal`
- `/about`
- `/contact`
- `/pest-control-ripon`
- `/pest-control-boroughbridge`
- `/pest-control-thirsk`
- `/pest-control-bedale`

The four area pages are the local SEO engine and must not be thin duplicates.

## Confirmed Services
- Wasp nest removal (hero service)
- Rats
- Mice
- Moles
- Squirrels
- Rabbits
- Fleas
- Cluster flies
- Ants
- Bed bugs
- General insect and crawling pest control
- Commercial and farm contract work

## Excluded Until Confirmed
Do not publish service claims for proofing/exclusion, birds, or moths until Ben confirms them.

## Content Assets
- Confirmed testimonial: Mike Taylor, Jul 2024.
- Review theme: fast, efficient response.
- Remaining review text is pending from Dan/Ben.
- Final logo asset and photos are pending.

## Definition Of Done
- All planned pages built, responsive, accessible, and written in UK English.
- Area pages use genuinely localised content.
- Contact form validates input, blocks simple spam, and can deliver to Ben's inbox once env vars are configured.
- Schema, sitemap, robots.txt, Open Graph metadata, and unique titles/descriptions are present.
- No lorem ipsum, no invented services, and no published residential street address.
