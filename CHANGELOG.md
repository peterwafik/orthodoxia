# Changelog

## Unreleased

### Added
- Phase 0 research: an audit of the upstream explorer and CrossRefViz, a data-source and licensing
  audit, a hosting evaluation, an architecture proposal, a UI/UX proposal, MVP scope, a backlog,
  and four ADRs.
- npm-workspaces monorepo. The upstream Bible Cross-References explorer is vendored via git
  subtree at `23e7f90`.
- `@orthodoxia/content-schema`: Zod schemas for sources, review status and article front matter, with tests.
- A source registry of 14 entries with licenses verified on 2026-10-11, plus a validator.
- Astro content site in English and Arabic (RTL): a bilingual landing page, home with real-data
  arcs, About, Sources, and a 404 page.
- Build script that merges both apps and enforces hosting limits. Cloudflare static-assets config.
  GitHub Actions CI.
- Bible reader: three editions (KJV with the deuterocanon and Psalm 151; Brenton Septuagint
  with the KJV NT; Arabic Van Dyck with the Wikisource deuterocanon). About 4,000 static chapter
  pages, verse anchors, footnotes, and edition and language switching that keeps your place
  (including Septuagint/Hebrew psalm numbering). The raw sources are pinned by SHA-256 and
  Wikisource revision ID.
- `@orthodoxia/bible` package: USFM and Wikisource parsers, canon profile (draft), editions,
  psalm mapping, and cross-edition location mapping, with 22 tests.
- Build-time internal link checker.

- Bible interpretation in the reader: the St. Mark Church commentary (stmarkos.org, used with
  permission) imported verse by verse from 52 PDFs (16,967 entries), validated against the Bible;
  Fr. Tadros Malaty's commentary linked for the books it does not cover; select a verse to read its
  interpretation. `@orthodoxia/commentary` package and `npm run commentary:import`.

### Changed (explorer)
- Removed Google Analytics. Removed the nested lockfile.
- Integrated into the site: navy/ivory/gold palette and site fonts, the site's brand,
  navigation, language switch and footer.
- Full Arabic version at `/ar/explore/`: every interface string, Arabic book and genre names (also
  on the canvas), Arabic search ("يوحنا 3: 16", "مزمور ٢٣"), and the Smith–Van Dyck text. The axis
  stays Genesis→Revelation left to right. See `apps/explorer/PATCHES.md`.
- The explorer follows the light/dark theme chosen anywhere on the site (or the system's), with the
  site's theme icon in its header. Light mode draws the arcs as ink on ivory with a deepened genre
  palette (≥ 3.8:1 contrast).
