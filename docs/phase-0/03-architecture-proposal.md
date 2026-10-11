# Phase 0 · Step 3 — Architecture Proposal

Status: **Proposed** — awaiting owner decisions listed in §8.

## 1. Recommendation in one paragraph

A **static-first npm-workspaces monorepo** with two front-end apps that build into **one static
site**: (1) a content site built with **Astro** (static output, built-in i18n routing, typed content
collections, React islands, Pagefind search) for every page that needs SEO — home, articles,
doctrine, fathers, history, Bible text pages; and (2) the **upstream trekhleb visualization vendored
via `git subtree`** as its own Vite app, served under `/{lang}/explore/`. Shared domain code
(canon, references, content schemas) lives in small workspace packages. Content is Markdown/MDX +
JSON in Git, validated at build time. Deployment is a GitHub Actions build pushed to **Cloudflare
static hosting (free)**, with GitHub Pages as a drop-in fallback. No server, no database, no AI API,
no paid service in Phases 1–5.

## 2. Why this shape

| Requirement | How it is met |
|---|---|
| $0 deployment | Pure static files; Cloudflare free static requests are documented as "free and unlimited"; GitHub Actions is free for public repos (verified 2026-10-11, see `05-hosting-evaluation.md`) |
| Interactive visualization, parity | Upstream code kept nearly intact as its own app → parity by construction; `git subtree pull` to take upstream fixes |
| SEO for hundreds of articles in two languages | Astro pre-renders HTML per page per locale; zero JS on non-interactive pages |
| Arabic + English, RTL | Astro i18n routing (`/en/…`, `/ar/…`), `dir` set per locale in the base layout; CSS logical properties throughout |
| Search | Pagefind (static, sharded index, loads only fragments needed) for content; upstream's reference parser for passage lookup |
| Content review workflow | Front-matter `reviewStatus`, enforced by Zod schemas at build; PR review via `CODEOWNERS`; unreviewed content cannot render as "Reviewed" |
| Future knowledge graph | Typed relationship records (JSON) with provenance in `content/relationships/`; same shape later maps 1:1 onto PostgreSQL tables |
| Future AI assistant | Retrieval corpus = the validated content collections; no change to the static site needed until Phase 6 |
| Future backend | `services/api/` is created only when needed; static JSON contracts become API contracts |

Rejected alternatives:

- **Next.js on Vercel**: capable, but Hobby is limited to non-commercial personal use and 100 MB
  uploads; SSR is unnecessary; heavier client JS for content pages.
- **Single Vite SPA (extend upstream)**: no SEO for content without hand-rolled pre-rendering; no
  i18n routing; content pipeline would be bespoke.
- **Docusaurus/VitePress**: docs-oriented; weaker for a custom visual identity and React islands
  with WebGL.

## 3. Repository layout (only what Phase 1 needs; grows on demand)

```text
orthodoxia/
├── apps/
│   ├── web/                     Astro content site (home, about, sources, articles, Bible pages later)
│   └── explorer/                git-subtree of trekhleb/bible-cross-references + small, listed patches
├── packages/
│   ├── canon/                   canon profiles, book IDs/aliases (en/ar), versification registry
│   └── content-schema/          Zod schemas: ContentSource, Article, ReviewStatus, Relationship…
├── content/
│   ├── sources/                 source registry (one YAML per source; license + verification date)
│   ├── apologetics/{en,ar}/     MDX articles (Phase 3)
│   └── relationships/           editorial relationships with provenance (Phase 5)
├── scripts/                     validate/, build-indexes/ (added when used)
├── docs/                        ADRs, phase reports, guides
└── .github/workflows/ci.yml     check → build both apps → merge dist → deploy
```

`packages/reference-engine`, `search-core`, `ui`, `services/api` from the master prompt's diagram are
**deliberately not created** until code exists to put in them (Rule 10).

## 4. Build & deploy flow

```
npm ci
npm run check            # typecheck + lint + format + vitest across workspaces + content validation
npm run build -w explorer   BASE_PATH=/en/explore/  → dist/en/explore   (and /ar/explore with ar locale)
npm run build -w web        → dist/
                         merge → one static dist/ → deploy (Cloudflare) | upload-pages-artifact (GH Pages)
```

The explorer is built once per locale (≈9 MB each, dominated by data). To avoid duplicating the
~8.9 MB of JSON datasets, both locale builds will point at one shared `/data/` path — a small,
documented patch to upstream's `fetch-dataset.ts` base URL.

## 5. Data model strategy

Canonical identifiers are **OSIS-style book IDs** (already used by upstream and OpenBible.info),
extended with OSIS IDs for deuterocanonical books (`Tob`, `Jdt`, `AddEsth`, `Wis`, `Sir`, `Bar`,
`EpJer`, `1Macc`, `2Macc`, `PrAzar`, `Sus`, `Bel`, `Ps151`/Ps 151 handling, etc. — exact list subject
to theological review). Every entity in master-prompt §8 becomes a Zod schema in
`packages/content-schema`; the TypeScript types are inferred from the schemas, so the build fails on
invalid content. `confidence` scores are **omitted** (§8.3: no methodology yet).

Canon support is staged:

1. **Phase 1** — upstream 66-book KJV-versified dataset, labeled with an explicit coverage notice
   ("This visualization currently covers the 66 books present in the OpenBible.info dataset; the
   deuterocanonical books read in the Coptic Orthodox Church are not yet included.").
2. **Phase 5** — `CanonProfile` data (`books`, `order`, `genres`, `versificationId`) replaces
   upstream's constants; first profile `coptic-orthodox` after reviewer sign-off.

## 6. i18n & RTL

- Locales `en` (default) and `ar`; URLs `/en/...`, `/ar/...`; `/` redirects by `Accept-Language`
  is **not** possible on pure static hosting without a function, so `/` shows a bilingual landing
  that links both (no JS redirect needed; avoids SEO duplicate-content issues via `hreflang`).
- `<html lang dir>` per locale; CSS logical properties (`margin-inline-start`, etc.) only.
- UI strings in typed dictionaries (`apps/web/src/i18n/{en,ar}.ts`); missing keys fail typecheck.
- Visualization axis keeps canonical left-to-right order in Arabic until user-tested (§5.8).
- Arabic search normalization (alef/hamza forms, ta marbuta/ha, alef maqsura/ya, tatweel, harakat)
  will be one documented, unit-tested function used both at index time and query time (Phase 2).

## 7. Cost profile

| Item | Phase 1 cost |
|---|---|
| Hosting (Cloudflare free static or GitHub Pages) | $0 |
| CI (GitHub Actions, public repo) | $0 |
| Domain | none — provider subdomain (`*.workers.dev`/`*.pages.dev` or `*.github.io`) |
| Analytics | none (optionally Cloudflare Web Analytics, free & cookieless — owner decision, off by default) |
| AI | none |

## 8. Decisions needed from the owner

1. **Hosting**: Cloudflare (recommended; requires a free Cloudflare account + API token stored as a
   GitHub secret) or GitHub Pages (zero extra accounts).
2. **Integration strategy**: confirm Option A (subtree-vendored explorer + Astro content site).
3. **Repository**: name, GitHub owner, and that it will be **public** (required for free Pages and
   free Actions minutes). Proposed project license: **MIT** for code (matches upstream);
   content license decided separately (proposed CC BY-SA 4.0 for original articles — owner/reviewer call).
4. **Project display name** (EN/AR) — placeholder used until decided.
5. **Theological reviewers** — names/roles to list in `THEOLOGICAL_REVIEW.md`. Not a blocker for
   Phase 1 (no doctrinal content ships), but a blocker for publishing anything in Phase 3.
