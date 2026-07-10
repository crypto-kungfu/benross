# Scientific Method — Verification Protocol

Use this when platform behaviour, build output, form delivery, or SEO implementation is uncertain.

## Loop
1. Observe the actual behaviour or error.
2. Form one concrete hypothesis.
3. Predict what would confirm or falsify it.
4. Run the smallest useful check.
5. Conclude, fix, and record durable findings in memory if needed.

## Common Checks
| Question | Check |
|----------|-------|
| Type and build health | `npm run build` |
| Astro route output | Inspect build output or run preview |
| API route behaviour | Exercise `/api/contact` locally when env vars exist |
| SEO metadata | Inspect generated page source or build output |
| Rich result validity | Google Rich Results test before launch |

## Avoid
- Claiming email delivery works without configured credentials.
- Shipping a workaround before understanding a build error.
- Treating visual success as SEO success.
