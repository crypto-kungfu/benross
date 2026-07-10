# Cognition — Master Orchestrator

This module defines the reasoning pipeline for non-trivial BR Pest Control tasks.

## Session Start
1. Verify `.cursor/memory/` exists.
2. Load:
   - `activeContext.md`
   - `progress.md`
   - `cognition/cognition.md`
3. Load additional memory as required:
   - `projectbrief.md`
   - `productContext.md`
   - `techContext.md`
   - `patterns.md`
   - `cognition/firstPrinciples.md`
   - `cognition/scientificMethod.md`
   - `cognition/adversarial.md`
   - `cognition/metaCognition.md`
   - `cognition/executionPipeline.md`

## Pipeline
| Step | Module | Action |
|------|--------|--------|
| 1 | First principles | Clarify the actual product goal and constraints |
| 2 | First principles | Separate source-of-truth facts from assumptions |
| 3 | Cognition | Compare viable solution paths |
| 4 | Adversarial | Attack SEO, conversion, accessibility, and privacy risks |
| 5 | Scientific method | Verify uncertain platform or build behaviour |
| 6 | Meta-cognition | Check consistency with Memory Bank and brief |
| 7 | Execution pipeline | Implement, verify, and update memory |

## Hard Stops
- Residential street address appears in UI, content, schema, metadata, README, or generated files.
- Unconfirmed services are published as available.
- Area pages become thin duplicates.
- Contact form exposes secrets client-side.
- Build is handed back without an attempted `npm run build`.

## After Meaningful Change
Update `activeContext.md` and `progress.md`. Update `patterns.md`, `techContext.md`, `productContext.md`, or `projectbrief.md` only when enduring rules or requirements change.
