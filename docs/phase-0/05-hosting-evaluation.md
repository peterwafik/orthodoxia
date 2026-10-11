# Phase 0 — Zero-Cost Hosting Evaluation

Verified against official docs on **2026-10-11**. Re-verify before any migration; free tiers change.

| | GitHub Pages | Cloudflare (Workers static assets / Pages) | Netlify Free | Vercel Hobby |
|---|---|---|---|---|
| Site size | ≤ 1 GB | no total cap found (unverified) | unverified | 100 MB CLI upload |
| Files per deploy | not stated | **20,000** (Free) | unverified | 15,000 |
| Max file | 100 MiB (git hard block) | **25 MiB** per asset | unverified | not stated |
| Bandwidth | 100 GB/month **soft** | static asset requests "free and unlimited" | ~15 GB/month (300 credits, 20/GB; deploys also cost credits) | 100 GB Fast Data Transfer |
| Builds | 10/hour soft; 10-min deploy timeout | Pages: 500/month | credits per deploy | 100 deploys/day |
| Use restrictions | Public repo on Free; not for "online business"; donation links allowed | none found | none found | "non-commercial personal use only"; donations explicitly not commercial |
| On overage | soft limit, GitHub may contact | static assets unmetered | **every site on account paused** until next cycle | feature locked for 30 days |
| Surprise charges | no | no (paid is opt-in) | no (hard cap) | no |

Sources: docs.github.com (pages-limits, terms-for-additional-products, about-large-files, actions billing);
developers.cloudflare.com (pages/platform/limits, workers/platform/limits, workers/static-assets/billing-and-limitations,
workers/platform/pricing); netlify.com/pricing + docs.netlify.com credit-based plans; vercel.com/docs/limits, /plans/hobby,
/limits/fair-use-guidelines.

## Recommendation

**Primary: Cloudflare static assets (free)** — unmetered static bandwidth, no commercial restriction,
20k-file cap is ample (Phase 1 ≈ <100 files; even per-verse Bible pages are deferred to a later
decision because 31k+ verse pages × 2 locales would exceed 20k files — Bible pages will be per-chapter).

**Fallback: GitHub Pages** — zero extra accounts, same static `dist/`. The CI workflow will support
both targets via one input so switching hosts is a one-line change (rollback plan, §10.2).

**Not recommended:** Netlify Free (low bandwidth, account-wide pause); Vercel Hobby (personal
non-commercial wording and 100 MB upload cap; the explorer + datasets already ≈ 18 MB for two locales).

### Constraints carried into the design

- Keep every generated file < 25 MiB (largest today: 4.9 MB cross-reference JSON). A CI check will fail the build otherwise.
- Keep total file count < 20,000; CI reports the count.
- No `Accept-Language` redirect on `/` (would need a Worker script → metered requests).
