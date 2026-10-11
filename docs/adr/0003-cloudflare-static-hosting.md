# ADR 0003 — Cloudflare static assets (Free), GitHub Pages as fallback

**Status:** Accepted, 2026-10-11

## Context
Free-tier terms were verified on 2026-10-11 (`docs/phase-0/05-hosting-evaluation.md`).

## Decision
Deploy `dist/` as Workers static assets with no Worker script (`wrangler.jsonc`). Under the Free
plan, Cloudflare's docs describe static-asset requests as "free and unlimited". CI deploys from
`main` once `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are set as repository secrets.

## Constraints we accept
- Each file must be ≤ 25 MiB and a deploy ≤ 20,000 files. `scripts/build-site.ts` enforces both.
- No server-side language redirect on `/`, because a Worker script would make requests metered.

## Rollback
The same `dist/` deploys to GitHub Pages (`actions/upload-pages-artifact` + `deploy-pages`) with
no code changes. Only the workflow's deploy job changes.

## Costs
$0. The Free plan cannot incur charges, and moving to the paid plan is an explicit opt-in.
