# Feature-Parity Checklist — trekhleb/bible-cross-references @ `23e7f90`

Derived from the source code (file references given), not only the README. Each item must be
either ✅ preserved in our build or ⚠️ explicitly documented as changed, with a reason.
Status column is filled during Phase 1 verification.

| # | Feature | Evidence in upstream source | Our status |
|---|---|---|---|
| P1 | Arcs view: every verse on one axis Genesis→Revelation, links drawn as WebGL arcs colored by genre | `visualizations/arcs/arc-scene.ts`, `arc-shaders.ts`, `arc-instances.ts` | ☐ |
| P2 | Zoom (wheel, pinch, `+`/`-` keys) and pan (drag, arrow keys); `0` resets view | `arcs-controller.ts` `#onKeyDown`, `shared/gestures.ts` | ☐ |
| P3 | Hover/touch-and-hold-slide passage preview with link count | `arcs-controller.ts`, `shared/link-summary.ts`, `LinkStats.tsx` | ☐ |
| P4 | Focus a passage: highlighted connections + details panel (text, genre breakdown, every reference with its text, each a link) | `shared/components/PassagePanel.tsx` | ☐ |
| P5 | Genre breakdown expand/collapse remembered between visits | `PassagePanel.tsx` → `useBooleanPreference('genre-breakdown-expanded')` (localStorage) | ☐ |
| P6 | Reference search ("John 3:16", "Ps 23", ranges, aliases) | `ReferenceSearch.tsx`, `core/bible/reference-parse.ts`, `book-lookup.ts` | ☐ |
| P7 | Filters: vote threshold (all, ≥0 … ≥100; default ≥4) | `shared/link-filter.ts`, `FiltersMenu.tsx` | ☐ |
| P8 | Filters: hide genres; genre legend and toggles | `GenreMenu.tsx`, `GenreToggles.tsx`, `GenreLegend.tsx` | ☐ |
| P9 | Range cross-references (target = verse range) handled | `formats.ts` `targetStart/targetEnd`; commits `cf7b6d4`, `fac990c` | ☐ |
| P10 | Threads view: read a chapter; threads from each verse to a whole-Bible book bar | `visualizations/threads/*` | ☐ |
| P11 | Threads direction toggle: Points to / Pointed from / Both | `ThreadsExplorer.tsx` | ☐ |
| P12 | Cross-view links: "Read in context" (Arcs→Threads), "Show in Arcs" (Threads→Arcs) | `visualization.ts` `passageLinks`, `app/views.ts` | ☐ |
| P13 | Shareable URLs: `?ref=John.3.16`, `?votes=`, `?hide=`; browser history via pushState | `app/explorer-location.ts`, `use-explorer-location.ts` | ☐ |
| P14 | Copy passage quote with share link (secure contexts only, graceful fallback) | `shared/passage-quote.ts` | ☐ |
| P15 | Mobile: bottom sheet details (drag up/down), touch gestures | `shared/use-bottom-sheet.ts`, `gestures.ts` | ☐ |
| P16 | Keyboard: arrows pan, `+/-` zoom, `0` reset, `Esc` clears focus; `Esc` closes menus | `arcs-controller.ts`, `MenuButton.tsx` | ☐ |
| P17 | Reduced motion respected (arcs animation, loader, panels, sheet) | `matchMedia('(prefers-reduced-motion…)')` + CSS media queries | ☐ |
| P18 | Light/dark theme following system, overridable via `data-theme` | `shared/styles/global.css` | ☐ |
| P19 | Animated loading preview + pre-rendered first frame | `LoadingArcs.tsx`, `vite/first-frame.ts` | ☐ |
| P20 | Offline support (service worker scoped to base path) + installable PWA manifest | `sw/service-worker.ts`, `vite/offline.ts` | ☐ |
| P21 | SEO head: canonical, Open Graph, Twitter cards, structured data; `sitemap.xml` | `vite/site-head.ts`, `vite/site.ts` | ☐ |
| P22 | Credits/attribution of data sources in the UI | `shared/components/Credits.tsx`, `SiteFooter.tsx` | ☐ |
| P23 | Internal `/debug/` page: dataset stats, provenance, import notices, verse inspector, text search | `features/debug/*` | ☐ |
| P24 | WebGL availability check with fallback messaging | `shared/webgl.ts`, `VizDataBoundary.tsx` | ☐ |
| P25 | Data pipeline: SHA-256-pinned raw sources, idempotent build, runtime validation of datasets | `scripts/data/*`, `core/datasets/formats.ts`, `core/lib/validation.ts` | ☐ |
| P26 | Error boundary around views | `shared/ui/ErrorBoundary.tsx` | ☐ |

## Planned, documented deviations

| Upstream behavior | Our change | Reason |
|---|---|---|
| Google Analytics injected for trekhleb.dev origin (`vite/analytics.ts`) | Remove plugin | Privacy-by-default; no third-party tracking in Phase 1 |
| English-only UI strings, `<html lang="en">` | Externalize strings; add `ar` locale with `dir="rtl"` for chrome only | Arabic is first-class (§5.8). The axis itself stays canonical left→right in both locales until user-tested (§5.8 last rule) |
| Branding, footer, base path `/bible-cross-references/` | Our branding; base path `/{lang}/explore/` | Integration into the platform shell |
| "66 books" / "31,102 verses" strings | Data-driven counts + visible **canon coverage notice** | §3.1 "Do not present the original dataset as complete coverage of the Coptic Orthodox canon" |
| Protestant genre grouping | Kept in Phase 1 (labeled as the dataset's grouping); replaced by canon-profile genres in Phase 5 | Requires reviewed canon profile first |
