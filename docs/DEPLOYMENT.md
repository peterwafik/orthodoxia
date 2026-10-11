# Deployment

Target: Cloudflare Workers static assets, Free plan (ADR 0003). Cost: $0.

## One-time setup (owner)

1. Create a free Cloudflare account. No payment method is needed for the Free plan.
2. Pick one of these deployment paths:
   - **From your machine:** run `npx wrangler login` (opens a browser), then `npm run build` and
     `npx wrangler deploy`. Wrangler prints the `*.workers.dev` URL.
   - **From CI (recommended):** in Cloudflare, create an API token with the "Edit Cloudflare
     Workers" template. In GitHub → Settings → Secrets and variables → Actions, add:
     - secret `CLOUDFLARE_API_TOKEN`
     - secret `CLOUDFLARE_ACCOUNT_ID` (Cloudflare dashboard → Workers & Pages → Account ID)
     - variable `SITE_ORIGIN` = the site's URL, e.g. `https://orthodoxia.<subdomain>.workers.dev`
3. Push to `main`. The `deploy` job runs only after `check` passes. Without the token it logs a
   message and skips.

## Verifying a deployment
A deployment counts as done only after these checks pass on the live URL:
- `/`, `/en/`, `/ar/`, `/en/about/`, `/ar/sources/` return 200 over HTTPS.
- `/en/explore/?ref=Isa.53.5` renders the arcs and the passage panel.
- `/does-not-exist/` returns the 404 page.

## Rollback
- Cloudflare: `npx wrangler rollback`, or pick an earlier version in the dashboard.
- Switching hosts: the same `dist/` works on GitHub Pages (see ADR 0003).

## Deployment log

| Date | Commit | URL | Verified by |
|---|---|---|---|
| — | — | Not deployed yet | — |
