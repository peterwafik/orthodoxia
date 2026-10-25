# Faith & Evidence (`/en/apologetics/`, `/ar/apologetics/`)

A bilingual Christian apologetics and evidence centre inside Orthodoxia. It is static: records are typed TypeScript files,
validated by tests, built into Astro pages and a build-time search index. It adds no paid service and no server.

## What is where

| Thing | Path |
| --- | --- |
| Schema | `apps/web/src/data/apologetics/types.ts` |
| Source catalogue (S01–S61 seeds, S62 site Bible reader) | `.../sources.ts` |
| Topics and the question backlog (about 120) | `.../questions.ts` |
| Articles (one file per question) | `.../articles/<question-id>.ts` |
| Glossary, journeys, timeline, methodology/about text | `.../glossary.ts`, `journeys.ts`, `timeline.ts`, `pages.ts` |
| Link-check result | `.../link-report.json` (written by the script below) |
| Pages | `apps/web/src/pages/[lang]/apologetics/` |
| Labels, search, helpers | `apps/web/src/lib/apologetics/` |
| Tests | `.../apologetics.test.ts`, `lib/apologetics/normalize.test.ts` |
| Article writing rules | `docs/apologetics/ARTICLE_GUIDE.md` |
| Coverage report | `docs/apologetics/COVERAGE.md` (generated) |

## Commands (from the repository root)

- `npm run check`: type checks and all tests, including schema, citation, publication-gate and search normalisation tests.
- `npm run apologetics:links`: checks every external source link once (polite, one at a time) and records the result.
- `npm run apologetics:coverage`: regenerates `COVERAGE.md`.
- `npm run build`: builds the whole site as usual; nothing extra is needed to deploy.

## Add a source

Add a row to `sources.ts` with the next id. Set `access` to what the linked page is (not what has been reviewed) and leave
`review: 'discovered'`. Record the standpoint only if documented; otherwise `not_established` or `modern_scholar_unspecified`.
Set `sameWitnessAs` if it is another host of a work already listed. Run `npm run apologetics:links`.

## Add a question or an article

Add the question to `questions.ts` (it appears in the backlog until it is answered). To answer it, create
`articles/<question-id>.ts` following `ARTICLE_GUIDE.md`. Keep `state: 'draft'` and `reviewers: []`.

## Publication gate

An article is `published` only with at least one reviewer who has a name and an ISO review date; the test fails otherwise. Articles written by the editorial team carry `state: 'draft'` and `reviewers: []` in the data, and the pages show no draft or review notices (`SHOW_REVIEW_NOTICES = false` in `lib/apologetics/index.ts`; set it to `true` to bring the banner, byline and "proposed" labels back). Setting `SHOW_DRAFTS = false` builds only published articles. To record a review, set `state: 'published'`, add the reviewers, and bump `revision` and `updated`.

## Fr Luka Maher's book

«حقيقة وجود الله» is source S59: `awaiting_copy`, metadata only. No chapter, quotation or page number is recorded. The tests forbid
using S59, S60 or S61 as evidence. When an authorised copy exists: record edition and rights, extract a private outline outside the
repository, map each verified argument to the questions in topic A, trace its scientific and historical references to the originals,
have them reviewed, then write original explanations with exact citations.

## Limits

- There is no login, database or admin area in this static site. Editing is by pull request, which gives an audit trail through git.
  An authenticated editor, import jobs and a corrections inbox would need the server infrastructure this project does not have yet.
- Corrections: `CORRECTIONS_URL` in `lib/apologetics/ui.ts` is empty, so the button copies a report instead of sending anything.
- Visitor preferences (starting point, saved questions, journey progress, reading depth) live in `localStorage` only.
- Open source gaps: Mary (early witnesses, kinship terminology, Theotokos), Cyril and conciliar texts, Jewish messianic readings in
  Jewish scholars' words, primary texts for comparative religion, ethics and afterlife, and original scientific sources.
