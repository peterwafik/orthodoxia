# ADR 0002 — Vendor the explorer with git subtree, build the content site with Astro

**Status:** Accepted, 2026-10-11

## Context
The upstream explorer (React 19, Vite 8, Three.js, MIT) is mature and still changing fast: its
first commit was 2026-09-25. It has no router, no i18n and no content pipeline. The platform needs
hundreds of SEO-friendly bilingual pages. See `docs/phase-0/01-upstream-audit.md`.

## Decision
- `apps/explorer` is a `git subtree --squash` of upstream, built unchanged except for the patches
  listed in `apps/explorer/PATCHES.md`, and served under `/{lang}/explore/`.
- `apps/web` is an Astro 7 static site (the same Vite 8 toolchain) for every content page.
- `scripts/build-site.ts` merges both builds into one `dist/`.

## Alternatives rejected
- Porting upstream into Astro islands means a large refactor, loses parity, and makes merges painful.
- Growing the platform inside upstream means hand-building routing, i18n and SEO.
- An iframe of the live upstream site gives no control over canon, i18n or privacy.
- CrossRefViz is AGPL-3.0 and its theme data is AI-generated (see the audit).

## Consequences
- Upstream fixes arrive with `git subtree pull`, so the parity checklist stays meaningful.
- The explorer keeps its own header until P1-04 adds a shared header.
- Two build pipelines, run by one script.
