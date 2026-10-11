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

### Changed (explorer)
- Removed Google Analytics. Removed the nested lockfile.
