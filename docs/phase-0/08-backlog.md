# Phase 0 · Step 6 — Prioritized Backlog

Complexity: S (≤½ day) · M (1–2 days) · L (3–5 days) · XL (>1 week). Estimates are for one developer
with AI assistance and will be re-estimated at each phase start.

## Phase 0 — Foundation

| ID | Task | Depends | Cx | Acceptance criteria |
|---|---|---|---|---|
| P0-01 | Owner decisions: hosting, integration option, repo name/owner, display name, licenses | — | S | Recorded as ADR-0001…0004 |
| P0-02 | `git init`, `.gitattributes` (LF), `.editorconfig`, MIT `LICENSE`, `README` | P0-01 | S | Clean clone builds on Windows + Linux |
| P0-03 | npm workspaces root; shared TS (strict), ESLint, Prettier, Vitest configs | P0-02 | M | `npm run check` passes on empty workspaces |
| P0-04 | `git subtree add` upstream at `23e7f90` → `apps/explorer`; record patch list in `apps/explorer/PATCHES.md` | P0-02 | S | Upstream's 162 tests pass inside our repo |
| P0-05 | Scaffold Astro app `apps/web` with i18n (`en`,`ar`), base layout, design tokens, fonts self-hosted | P0-03 | M | `/en/` and `/ar/` render with correct `lang`/`dir` |
| P0-06 | `packages/content-schema`: Zod schemas for `ContentSource`, `ReviewStatus`, `Article` front-matter | P0-03 | M | Unit tests: invalid status / missing license fails |
| P0-07 | `content/sources/*.yaml` registry seeded from the data-source audit; validator script | P0-06 | S | CI fails on missing license/verification date |
| P0-08 | CI workflow: check → build → merge dist → guards (file < 25 MiB, count < 20k) → deploy | P0-04, P0-05 | M | Green run on `main`; deploy job gated on checks |
| P0-09 | First deployment; verify live URL over HTTPS, both locales | P0-08 | S | Live URL loads; recorded in DEPLOYMENT.md |
| P0-10 | Docs: ARCHITECTURE, DEVELOPMENT, DEPLOYMENT, DATA_SOURCES, LICENSING, CONTENT_GUIDELINES, THEOLOGICAL_REVIEW, CONTRIBUTING, ROADMAP, CHANGELOG | P0-02 | M | Each describes only implemented reality + labeled plans |

## Phase 1 — Public foundation & cross-references

| ID | Task | Depends | Cx | Acceptance criteria |
|---|---|---|---|---|
| P1-01 | Explorer patch: remove GA plugin; configurable base path + shared `/data/` dataset path | P0-04 | S | No requests to googletagmanager; both locales load one copy of data |
| P1-02 | Explorer patch: externalize UI strings; add `ar` dictionary; `dir=rtl` chrome; axis stays LTR | P1-01 | L | All visible strings localized; upstream tests still pass |
| P1-03 | Explorer patch: data-driven counts; canon coverage notice | P1-01 | S | No hardcoded "66"/"31,102" in UI strings |
| P1-04 | Explorer patch: our header/branding + link back to site; language switch keeps `?ref=` | P1-02 | M | Round-trip EN↔AR keeps passage & filters |
| P1-05 | Homepage per wireframe; static arcs preview image generated at build | P0-05 | M | Lighthouse perf ≥ 90 (mobile) measured |
| P1-06 | `/about` + `/sources` (generated from registry) in both languages | P0-07 | M | Every dataset in use appears with license + attribution |
| P1-07 | Mobile nav (header + bottom tab bar + menu sheet) | P0-05 | M | Usable at 360 px; touch targets ≥ 44 px |
| P1-08 | Accessible references list for focused passage | P1-01 | M | Screen reader can read the passage's references without the canvas |
| P1-09 | axe-core + Playwright smoke tests (desktop/mobile, en/ar) in CI | P1-05 | M | Zero critical a11y violations |
| P1-10 | Parity verification run against `04-feature-parity-checklist.md` | P1-04 | M | Every row ✅ or documented ⚠️ |
| P1-11 | 404 page, `robots.txt`, `sitemap.xml` with hreflang, OG images | P1-05 | S | Validated by a sitemap/hreflang check script |

## Phase 2 — Bible Explorer & search (headline items)

| ID | Task | Depends | Cx |
|---|---|---|---|
| P2-01 | Verify & import public-domain Arabic Van Dyck (source + SHA pin + versification check) | registry | L |
| P2-02 | Per-chapter static Bible pages `/{lang}/bible/{book}/{ch}` (≈1,189 × 2 files) | P2-01 | L |
| P2-03 | Arabic normalization function + tests; Pagefind index EN/AR | P2-02 | M |
| P2-04 | Verse ↔ explorer deep links; local bookmarks (IndexedDB/localStorage); reading prefs | P2-02 | M |
| P2-05 | Parallel EN/AR view; citation popovers | P2-02 | M |

## Phase 3+ (epics only; detailed at phase start)
- P3: article schema + MDX components (Scripture popover, citation, review badge), review workflow
  via PR + CODEOWNERS, 25–50 reviewed questions. **Blocked on reviewers.**
- P4: Fathers library from public-domain ANF/NPNF (Wikisource/archive.org scans, not CCEL/New Advent
  files), historical sources archive.
- P5: canon-profile refactor of explorer core; deuterocanon data; typed editorial relationships;
  prophecy explorer; journeys.
- P6: retrieval corpus, local RAG prototype, evaluation set; hosted inference only with budget.
