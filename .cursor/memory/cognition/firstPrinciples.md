# First Principles — Decomposition Protocol

## Clarify The Problem
For each task, state whether it is about content, SEO, conversion, platform, styling, or form delivery.

## Fundamentals
- The site exists to generate pest-control leads.
- Local SEO and conversion are the top priorities.
- Astro should keep the site fast and mostly static.
- Content should be editable through collections where practical.
- The business is service-area based and must not expose a residential street address.
- UK English is required.

## Constraints
- Use only confirmed services.
- Use town-specific area content.
- Keep mobile call CTA prominent.
- Keep JavaScript minimal.
- Validate contact form server-side.
- Never commit secrets.

## Assumptions To Challenge
- Whether a new page is needed or existing content can handle the job.
- Whether a claim is evidenced in the brief.
- Whether a design flourish helps conversion.
- Whether dynamic rendering is necessary.

## Minimal Correct Change
Prefer data and content updates first, then reusable components, then page-level layout. Avoid broad abstractions until repeated patterns are real.
