# Orthodoxia

A free, open-source, bilingual (Arabic/English) platform for studying Scripture, early Christian
history, the Church Fathers, and Coptic Orthodox apologetics. Every claim on it is meant to be
traceable to its source.

> Orthodoxia is an independent study project. It is not an official publication of the Coptic
> Orthodox Church and does not claim its endorsement.

## Status (2026-10-11)

| Area | Status |
|---|---|
| Phase 0: research, licensing audit, architecture | **Done**: see [`docs/phase-0/`](docs/phase-0/README.md) and [ADRs](docs/adr/README.md) |
| Bilingual site shell (`/en/`, `/ar/`): home, about, sources | **Implemented** |
| **Bible reader**: Arabic (Van Dyck) and English (KJV or Septuagint), with the deuterocanon, at `/{en,ar}/bible/` | **Implemented**. See [docs/BIBLE.md](docs/BIBLE.md). Arabic deuterocanon provenance is under review |
| Cross-reference explorer (Arcs + Threads) at `/en/explore/` | **Implemented**, vendored from upstream. English UI only for now |
| Explorer in Arabic, shared header, parity verification | Planned (Phase 1) |
| Bible search, side-by-side view, bookmarks | Planned (Phase 2) |
| Apologetics, doctrine, Fathers, history content | Planned (Phases 3–4). **Requires theological reviewers** |
| Deuterocanonical books / Coptic canon profile | Planned (Phase 5). **Requires reviewer sign-off and data** |
| AI research assistant | Planned (Phase 6). No AI is used on the site |

The cross-references currently cover only the 66 books in the OpenBible.info dataset. The site says
so wherever they appear.

## Quick start

Requires Node.js 24 (see `.nvmrc`).

```sh
npm install
npm run check      # typecheck, lint, tests, content validation (all workspaces)
npm run build      # builds everything into dist/
npm run preview    # serves dist/ locally at http://localhost:8787
```

See [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) for the per-app dev servers.

## Repository layout

```text
apps/web/                 Astro content site (home, about, sources; later all content pages)
apps/explorer/            Upstream Bible Cross-References explorer (git subtree, see PATCHES.md)
packages/bible/           Bible model: USFM/Wikisource parsers, canon, editions, psalm numbering
packages/content-schema/  Zod schemas for sources, articles and review status
data/bible/               Pinned raw Bible texts (SHA-256) and their build output
content/sources/          Source registry: one YAML per source, with verified license
scripts/                  build-site, validate-content, generate-hero-arcs
docs/                     Architecture, decisions, guides, Phase 0 reports
```

## Documentation

[Architecture](docs/ARCHITECTURE.md) ·
[Bible reader](docs/BIBLE.md) ·
[Development](docs/DEVELOPMENT.md) ·
[Deployment](docs/DEPLOYMENT.md) ·
[Data sources](docs/DATA_SOURCES.md) ·
[Licensing](docs/LICENSING.md) ·
[Content guidelines](docs/CONTENT_GUIDELINES.md) ·
[Theological review](docs/THEOLOGICAL_REVIEW.md) ·
[Roadmap](docs/ROADMAP.md) ·
[Contributing](CONTRIBUTING.md) ·
[Changelog](CHANGELOG.md)

## License

Code: [MIT](LICENSE). Original content: [CC BY-SA 4.0](LICENSE-CONTENT.md). Third-party data keeps
its own license; see [`/sources/`](docs/DATA_SOURCES.md). The explorer is based on
[Bible Cross-References](https://github.com/trekhleb/bible-cross-references) by Oleksii Trekhleb
(MIT). Cross-reference data comes from [OpenBible.info](https://www.openbible.info/labs/cross-references/)
(CC BY 4.0), modified by re-indexing to KJV verse numbering. Scripture text is from the Berean
Standard Bible (public domain).
