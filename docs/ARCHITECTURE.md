# Architecture

Current as of 2026-10-11. Decisions and their reasons are in [`adr/`](adr/README.md). The full
proposal, including future phases, is in [`phase-0/03-architecture-proposal.md`](phase-0/03-architecture-proposal.md).

## What exists today

```
                    ┌───────────── npm run build (scripts/build-site.ts) ─────────────┐
content/sources/*.yaml ─┐                                                             │
packages/content-schema ─┼─► apps/web (Astro 7, static) ──► dist/                     │
apps/web/src/data/hero-arcs.json ┘                         ├── index.html (bilingual landing)
                                                           ├── en/, ar/  (home, about, sources)
apps/explorer (upstream Vite app) ── BASE_PATH=/en/explore/ ► dist/en/explore/  (Arcs, Threads, data)
                                                                                      │
                                       guards: file ≤ 25 MiB, ≤ 20,000 files ◄─────────┘
dist/ ──► Cloudflare Workers static assets (wrangler.jsonc, no Worker script)
```

| Piece | Responsibility | Key files |
|---|---|---|
| `apps/web` | Every content page. Typed EN/AR dictionaries, RTL via `dir` and logical CSS, hreflang/canonical tags, a source registry page | `src/layouts/Base.astro`, `src/i18n/`, `src/lib/sources.ts` |
| `apps/explorer` | The upstream cross-reference visualization, nearly unmodified | `PATCHES.md`, `src/core/`, `src/visualizations/` |
| `packages/content-schema` | Zod schemas; TypeScript types are inferred from them | `src/source.ts`, `src/review.ts`, `src/article.ts` |
| `content/sources` | The source registry: license, verification URL and date, usage rule | one YAML per source |
| `scripts/` | Build orchestration, content validation, hero-image data generation | `build-site.ts`, `validate-content.ts`, `generate-hero-arcs.ts` |

## Rules the code enforces

- A source with usage `import` must allow redistribution and must not be all-rights-reserved or of
  unknown license. CC BY sources must carry attribution text. A source marked `inUse` must be
  importable. (`packages/content-schema/src/source.ts`, with tests)
- Review status `reviewed` or `published` requires a named reviewer and a date. (`review.ts`)
- The Arabic dictionary has exactly the English keys. (`apps/web/src/i18n/i18n.test.ts` and the type system)
- The build fails if any output file exceeds 25 MiB or the file count exceeds 20,000.

## Known gaps

- The explorer's UI is English only and lives at `/en/explore/`. Arabic pages link there with a note.
- The explorer keeps upstream's header and footer. It does not link back to the home page yet (P1-04).
- There is no ESLint/Prettier config for `apps/web` or `packages/` yet. Type checks and tests cover them.
- There are no automated accessibility or end-to-end tests yet (P1-09).
