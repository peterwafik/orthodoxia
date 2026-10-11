# Development

## Requirements
- Node.js 24 (`.nvmrc`); npm 11.
- Git with `core.autocrlf=false` on Windows. `.gitattributes` forces LF line endings, and
  upstream's Prettier check fails on CRLF.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Installs all workspaces |
| `npm run dev:web` | Astro dev server for the content site (http://localhost:4321/en/) |
| `npm run dev:explorer` | The explorer's own dev server (http://localhost:5173/) |
| `npm run check` | Explorer: typecheck, lint, format, 162 tests. Schema: typecheck + tests. Web: `astro check` + tests. Then content validation |
| `npm run bible` | Verifies the pinned Bible sources and rebuilds `data/bible/build/` (`bible:update` re-downloads and re-pins) |
| `npm run validate:content` | Validates `content/sources/*.yaml` only |
| `npm run build` | Builds the whole site into `dist/` and enforces hosting limits |
| `npm run preview` | Serves `dist/` with Wrangler at http://localhost:8787 |

Set `ASTRO_TELEMETRY_DISABLED=1` (CI does) or run `npx astro telemetry disable` once.

## Regenerating the homepage arcs
The hero image is drawn from real data. After the explorer's dataset changes, run:

```sh
npm run data:build -w apps/explorer
node scripts/generate-hero-arcs.ts      # rewrites apps/web/src/data/hero-arcs.json
```

## Adding a UI string
Add it to `apps/web/src/i18n/en.ts` and `ar.ts`. Type checking and the dictionary test fail if
either file is missing a key. New Arabic copy needs native review before release.

## Adding a source to the registry
Create `content/sources/<id>.yaml` (the file name must equal `id`), fill in every required field
of `ContentSource`, quote the license sentence, and record the page and date you checked it on.
Run `npm run validate:content`.

## Pulling upstream explorer changes
See `apps/explorer/PATCHES.md`.

## How to add an article, verify citations, add translations, or migrate to a backend
None of these exist yet. These sections will be written when the features are built (Phases 2–6).
