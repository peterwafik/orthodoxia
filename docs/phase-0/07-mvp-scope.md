# Phase 0 · Step 5 — MVP Scope (first public release = end of Phase 1)

## Must have (release blockers)

1. Static site deployed over HTTPS on a free provider subdomain, by CI from `main`.
2. Bilingual shell: `/en/` and `/ar/` with correct `lang`/`dir`, language switch preserving the page,
   `hreflang` alternates, light/dark theme.
3. Homepage per §3 wireframe (hero, static arcs preview, entry cards **only for released sections**,
   "how we source and review" section).
4. Cross-reference explorer (Arcs + Threads) from upstream, under `/{lang}/explore/`, passing the
   feature-parity checklist (P1–P26) or documenting each deviation.
5. **Canon coverage notice** on the explorer and About page.
6. Attribution: OpenBible.info (CC BY 4.0, with "modified: re-indexed to KJV numbering"), BSB (PD),
   upstream MIT notice, font licenses — in footer/credits and `/sources`.
7. `/about` (purpose, method, source hierarchy, explicit "not an official publication of the Coptic
   Orthodox Church", roadmap line) and `/sources` generated from the source registry.
8. Explorer UI strings localized to Arabic (chrome only; the BSB text stays English — see below).
9. Accessibility: keyboard reachable, visible focus, skip link, AA contrast, axe-core with zero
   critical violations on every page in CI.
10. No third-party trackers, no paid service, no secrets in the bundle.
11. CI: typecheck, lint, format, unit tests, content/schema validation, file-size/count guard, build.

## Should have (in Phase 1 if time allows)
- Playwright smoke tests (desktop + mobile viewport) for home → explore → focus passage → share URL.
- Lighthouse CI budget report (performance ≥ 90 on home, measured not assumed).
- Accessible text list of a focused passage's references beside the canvas.

## Explicitly NOT in the MVP
- Arabic **Bible text** in the explorer — needs a verified public-domain Van Dyck source and
  versification mapping (Phase 2). Arabic users see English verse text with Arabic UI, clearly labeled.
- Deuterocanonical books and Coptic canon profile (Phase 5, after reviewer sign-off).
- Bible Explorer pages, search beyond reference lookup, bookmarks (Phase 2).
- Any apologetics, doctrine, patristic or historical **content** (Phases 3–4; needs reviewers).
- AI anything (Phase 6). User accounts (Phase 7).
