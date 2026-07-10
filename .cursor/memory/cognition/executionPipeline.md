# Execution Pipeline — Build And Verify Flow

## Pre-Flight
1. Load Memory Bank context.
2. Identify affected files and scope.
3. Check for source-of-truth facts in `BR-Pest-Control-Dev-Brief.md`.
4. Avoid editing unrelated files.

## Implementation Order
1. Data and content constants.
2. Content collection schemas.
3. Shared components.
4. Page layouts.
5. Route pages.
6. Contact endpoint.
7. SEO and deployment support files.
8. Verification and Memory Bank updates.

## Verification
```bash
npm run build
```

When contact credentials are unavailable, verify that the endpoint validates input and returns a clear configuration error rather than claiming live delivery.

## Post-Flight
Update:
- `activeContext.md`
- `progress.md`

Only update broader memory files when project rules or requirements have changed.
