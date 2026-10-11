# Phase 0 · Step 1 — Open-Source Audit

Audit date: 2026-10-11. All findings below come from cloning and building the repositories locally,
not from their READMEs alone. Items marked _(README claim)_ were not independently re-verified.

## 1. trekhleb/bible-cross-references

| Item | Finding (verified) |
|---|---|
| Repository | https://github.com/trekhleb/bible-cross-references, HEAD `23e7f90` (2026-09-28). The repo is new: 8 commits, first commit 2026-09-25. This is a ground-up 2026 rewrite, not the older D3 version some articles describe. |
| License (code) | **MIT**, © 2026 Oleksii Trekhleb (`LICENSE`). Compatible with any license we choose. |
| License (data) | Bible text: Berean Standard Bible (stated public domain). Cross-references: OpenBible.info, **CC BY 4.0** (attribution required; data is "modified: re-indexed to KJV verse numbering"). Both raw files are committed in `data/raw/` and pinned by SHA-256 in `data/sources.json`. See `02-data-source-audit.md` for independent verification. |
| Framework | React 19.3 + Vite 8 (rolldown) + TypeScript 6 (strict), plain CSS Modules. No router library; no UI kit. |
| Runtime deps | `react`, `react-dom`, `react-icons` (Lucide + Material icons), `three` 0.186 (WebGL). Very lean dependency footprint. |
| Tooling | ESLint 10 + typescript-eslint, Prettier, Vitest 5, Node ≥ 24. |
| Size | ~11.7k lines of TS/TSX across `src/`, `scripts/`, `sw/`, `vite/`. |
| Tests | **28 test files, 162 tests, all pass** locally. `tsc -b` clean, ESLint clean. Prettier check fails on Windows only because `core.autocrlf=true` converts line endings — not an upstream defect, but our repo needs a `.gitattributes` with `* text=auto eol=lf`. |
| Build | `npm run build` succeeds in ~1.3 s (after data build). `dist/` = **9.1 MB** total. |

### Architecture

```
data/raw/            committed upstream files (bsb.txt 4.3 MB, openbible zip 2.0 MB) + sha256 pins
scripts/data/        fetch.ts / build.ts; one importer per source (bsb.ts, openbible.ts) with tests
src/core/            framework-free domain: books, genres, KJV versification, verse refs,
                     passage parsing/formatting, dataset formats + runtime validation
src/translations/    translation "plugins" (manifest + registry + loader + text search)
src/cross-references/ cross-reference "plugins" (manifest + registry + bidirectional CSR index)
src/visualizations/  arcs/ (Three.js WebGL), threads/ (Canvas 2D), shared/ panels, filters, gestures
src/app/             host app: URL state, view switch; visualizations never import each other
sw/                  service worker (offline cache, scoped to base path)
vite/                build plugins: SEO head/OG/structured data, sitemap, first-frame, offline, analytics
```

Notable design qualities worth preserving:

- **Plugin registries** for translations and cross-reference sources — the natural seam for adding
  an Arabic text, a Septuagint-based English text, and our own editorial relationship datasets.
- **Provenance built into the dataset format** (`DatasetProvenance`: url, sha256, retrievedAt,
  snapshotDate, plus `ImportNotice[]`). This already matches our "every relationship has provenance"
  requirement at the dataset level.
- **Dense verse indexing** (`Versification` maps refs ↔ zero-based indices in O(1) with typed arrays)
  and **CSR columnar links** (`offsets/targetStart/targetEnd/votes`) — compact and fast.
- **Visualization contract** (`src/visualizations/visualization.ts`): host owns URL + passage +
  filter; each view is a lazy chunk. A new view (e.g. Prophecy explorer) plugs in here.

### Visualization engine

- **Arcs**: Three.js WebGL with instanced geometry and custom shaders (`arc-instances.ts`,
  `arc-shaders.ts`, `arc-scene.ts`). Axis/labels painted separately (`axis-painter.ts`). This is the
  correct choice for ~150k–345k arcs; SVG/DOM would not scale. Three.js is the largest chunk
  (526 kB, 130 kB gzip), lazy-loaded.
- **Threads**: Canvas 2D reading view (`threads-drawing.ts`, `spine-layout.ts`).
- Loading screen draws a cheap Canvas preview of the arcs; a build plugin pre-renders the first frame.

### Dataset format and size

| Generated file | Size (raw, uncompressed) | Content |
|---|---|---|
| `data/cross-references/openbible.json` | 4.92 MB | 344,799 links (CSR columns + votes) |
| `data/translations/bsb.json` | 3.95 MB | 31,102 verses, canonical order |

Both load in full on first visit (then cached by the service worker). Acceptable for one
translation; adding Arabic + a second English text means per-translation lazy loading must stay
per-file (it already is) and we should consider per-book sharding later.

### Verified feature inventory → parity checklist

See `04-feature-parity-checklist.md` (derived from source files, not the README).

### Performance considerations

- Default filter shows links with ≥ 4 votes (153,419 of 344,799); filter menu goes down to all links.
- Honors `prefers-reduced-motion` in arcs controller, loader and panels.
- Offline-first via service worker; installable PWA manifest.
- Total first-load payload is dominated by data (~8.9 MB uncompressed JSON; gzip/brotli from the host
  will shrink JSON substantially). Must be measured on the chosen host in Phase 1.

### Limitations for Coptic Orthodox canon support (the key finding)

1. **The 66-book canon is a module constant**: `BOOK_DEFINITIONS` in `src/core/bible/books.ts`
   ("The 66 books of the Protestant canon"), `GENRE_DEFINITIONS` in `genres.ts` ("standard Protestant
   grouping"), and `KJV_CHAPTER_VERSE_COUNTS`. 26 source files import `BOOKS`/`BookId`/`GENRES`.
   `VersificationId` is the literal type `'kjv'` only.
2. Text strings hardcode "66 books" and "31,102 verses" (loading label, Threads aria-label).
3. Datasets are validated against exactly KJV versification (31,102 verses); a deuterocanonical
   text would fail validation today.
4. No i18n: `<html lang="en">`, English strings inline in components, no RTL handling.
5. Genre grouping is Protestant; the Coptic/Septuagint ordering and grouping differ.
6. Google Analytics plugin (`vite/analytics.ts`) is hardcoded to the author's GA property and
   origin; it is inert elsewhere but should be removed in our fork (privacy policy).

Good news: because canon, genres and versification are centralized, a **canon-profile refactor**
(books + order + genres + versification supplied as data rather than constants) is a bounded,
testable change — estimated as one of the larger Phase 5 tasks, not a rewrite. Typed arrays
(`Uint8Array` for chapter numbers) already accommodate Psalm 151.

### Integration options evaluated

| Option | Pros | Cons | Verdict |
|---|---|---|---|
| **A. Vendor upstream as its own app in our monorepo (git subtree), deployed under `/{lang}/explore/`; content site built separately and merged into one static output** | Keeps upstream mergeable (`git subtree pull`); zero rewrite; parity is automatic; our patches stay small and reviewable | Two build pipelines; shared header must be duplicated or shared via a small package | **Recommended** |
| B. Port upstream components into an Astro/Next site as React islands | One build; shared layout | Large refactor of a 2-week-old codebase that is still changing daily; upstream merges become painful; risk of parity loss | Not now |
| C. Fork upstream and grow the whole platform inside it | Simplest start | Upstream is a single-purpose SPA with no router, no i18n, no content pipeline; SEO for hundreds of articles would be hand-built | Rejected |
| D. Embed live upstream site via iframe | Trivial | No canon/i18n control, no deep integration, depends on a third-party site | Rejected |

## 2. lggcs/crossrefviz

| Item | Finding (verified) |
|---|---|
| Repository | https://github.com/lggcs/crossrefviz, HEAD `6a28e44` (2026-02-12), 36 commits. |
| License | **GNU AGPL-3.0** (`LICENSE`). Copying its code into our app would make our whole served application AGPL. |
| Architecture | A single 2,839-line `index.html` (inline JS, Tailwind via CDN, one `<canvas>`), plus Python helper scripts. |
| Data | `openbible.json` **43.7 MB** (same OpenBible.info source, re-encoded), `verses-1769.json` 4.8 MB (KJV), `verse_themes.json` 4.5 MB, `bible_difficulties.json` 0.4 MB. README states first visit downloads ~49 MB. |
| Themes | README: themes are "AI-generated using Ollama models", "inspired by Rainbow Study Bible". Unreviewed AI classification — not acceptable as theological data under our source rules. |
| "Bible difficulties" | 1,521 entries of `{title, url, source, bible_verse}` — links to third-party sites (kjvtoday, defendinginerrancy, answersingenesis, etc.). Link-only, but from sources outside the Coptic Orthodox tradition. |

**Verdict: do not adopt code or data.** The one transferable idea — a thematic filter layer and a
per-verse "difficult question" marker — will be reimplemented independently from our own reviewed
content (Modules A.5 and C). Upstream trekhleb's renderer is technically superior (WebGL instancing
vs. Canvas 2D, 9 MB vs. 49 MB).
