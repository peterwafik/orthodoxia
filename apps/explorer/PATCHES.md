# Local changes to the vendored explorer

`apps/explorer/` is a `git subtree` of
[trekhleb/bible-cross-references](https://github.com/trekhleb/bible-cross-references) (MIT),
imported at upstream commit `23e7f90` (2026-09-28). Every change here is a potential merge conflict
when upstream is pulled, so each one is listed with the files it touches. New files are prefixed
with an Orthodoxia comment.

## 1. Privacy and packaging

| Change                                    | Files                                           | Reason                                                |
| ----------------------------------------- | ----------------------------------------------- | ----------------------------------------------------- |
| Removed the Google Analytics build plugin | `vite/analytics.ts` (deleted), `vite.config.ts` | No third-party tracking (privacy by default)          |
| Removed `package-lock.json`               | `package-lock.json` (deleted)                   | The monorepo's root lockfile manages the dependencies |

## 2. Site theme (navy, ivory, gold; site fonts)

| Change                                                                                                 | Files                                                                                                  |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Design tokens remapped to the site palette; fonts Inter / Source Serif 4 / Noto Sans & Naskh Arabic    | `src/shared/styles/global.css`, `src/shared/lib/mount.tsx` (font imports), `package.json` (Fontsource) |
| Visualization surface `#0d0d0d` → navy `#0e1a33`; axis colors                                          | `src/visualizations/shared/palette.ts`, `src/visualizations/arcs/axis-painter.ts`                      |
| Genre colors History, Major Prophets, Acts lightened 8–16% to keep ≥ 4.5:1 contrast on navy (same hue) | `src/visualizations/shared/palette.ts`                                                                 |
| Translucent overlays and first frame, manifest, theme-color: navy                                      | `*.module.css` in arcs/threads/legend, `vite/first-frame.ts`, `vite/offline.ts`, `vite/site-head.ts`   |

## 3. Light and dark theme

The explorer follows the site's theme: the reader's choice (saved by any page under
`orthodoxia:theme`) or else light (the default), and switches live from the same header icon as
the rest of the site.

- `src/shared/lib/theme.ts`, `theme-script.ts` (new): current theme, `useTheme()`, `setTheme()`, and the
  inline script that applies the saved theme before first paint (injected by `vite/locale.ts`).
- `index.html`, `threads/index.html`, `debug/index.html`: no longer force `data-theme="dark"`.
- `palette.ts`: `VIZ_COLORS` per theme, and a light genre palette (each color deepened to 80%:
  ≥ 3.8:1 on ivory). It is mirrored as `--genre-*` CSS variables in `global.css` for the HTML swatches
  (`GenreToggles`, `PassagePanel`, `ThreadsStage`), and `palette.test.ts` (new) checks both themes' contrast.
- `glow.ts`: the compositor has a light mode, which lays the accumulated light over ivory as ink
  instead of screen-blending it over navy. `arc-scene.ts`, `webgl.ts`, `arcs-controller.ts` and
  `ArcsStage.tsx` have a `setTheme` path that updates the clear color, the palette uniform and the axis.
- `axis-painter.ts`, `threads-drawing.ts`, `ThreadsStage.tsx`: colors come from the theme.
- `LoadingArcs.tsx`: multiplied color in light mode instead of additive white light.
- CSS overlays use `color-mix()` with theme tokens; `vite/first-frame.ts` uses `light-dark()`.
- `SiteNav.tsx`: the theme toggle (the site's half-filled circle icon).

## 4. Site shell

| Change                                                                                                                                | Files                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| The site's brand (Coptic cross + name, links to the site home) and the page name replace the title                                    | `src/app/Explorer.tsx`, `src/app/Explorer.module.css`, `src/shared/ui/SiteNav.tsx` (new) |
| Header gets the site navigation: language switch (keeps view and passage) and a site menu                                             | `src/visualizations/shared/components/VizPage.tsx`, `src/shared/ui/SiteNav.*` (new)      |
| `MenuButton` gains `iconOnly`; new `SiteMenuIcon`; previous/next chevrons mirror in RTL                                               | `MenuButton.tsx`, `src/shared/ui/icons.tsx`, `icons.module.css`                          |
| The footer is the site's own, the same on every page (no credits in the explorer); the explorer's header menu no longer lists Sources | `src/shared/ui/SiteFooter.tsx`, `SiteNav.tsx`, `VizPage.tsx`                             |
| Site name, author and `og:locale` / structured data are the site's                                                                    | `vite/site.ts`, `vite/site-head.ts`                                                      |

## 5. Arabic

The explorer is built once per language: `LOCALE=ar` gives `/ar/explore/` (see
`scripts/build-site.ts` at the repository root).

| Change                                                                                                                  | Files                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Build-time locale (`__LOCALE__` define, `LOCALE` env fallback in Node)                                                  | `src/i18n/locale.ts` (new), `vite.config.ts`                                                                                          |
| Every UI string in an English/Arabic catalogue                                                                          | `src/i18n/messages.ts` (new); string edits in ~20 components under `src/app/` and `src/visualizations/`                               |
| HTML `lang`/`dir`, titles, descriptions, noscript per language                                                          | `vite/locale.ts` (new), `vite.config.ts`                                                                                              |
| Arabic book and genre names; `Book.englishName`/`englishReferenceName` keep English for importers                       | `src/core/bible/names-ar.ts` (new), `books.ts`, `genres.ts`                                                                           |
| Search accepts Arabic and English names (diacritics, hamza, article, "سفر/إنجيل" ignored; Arabic-Indic digits)          | `src/core/bible/book-lookup.ts`, `reference-parse.ts`, tests in `names-ar.test.ts` (new)                                              |
| Smith–Van Dyck Arabic text as translation `svd` (default in Arabic), pinned in `data/sources.json`                      | `data/raw/arb-vd_usfm.zip`, `scripts/data/importers/vandyck.ts` (+test, new), `datasets.ts`, `ids.ts`, `src/translations/registry.ts` |
| BSB importer matches English names regardless of locale                                                                 | `scripts/data/importers/bsb.ts`                                                                                                       |
| The visualizations keep left-to-right geometry (Genesis → Revelation) in Arabic; Threads' verse text and header are RTL | `ArcsStage.tsx`, `ThreadsStage.tsx`; canvas labels without Latin fallbacks in `axis-painter.ts`, `threads-drawing.ts`                 |

Not patched, configured instead: deploy path and origin come from `BASE_PATH` and `SITE_ORIGIN`.

## Updating from upstream

```sh
git subtree pull --prefix=apps/explorer https://github.com/trekhleb/bible-cross-references.git main --squash
npm install
npm run check -w apps/explorer
LOCALE=ar npm run build -w apps/explorer   # the Arabic build must still work
```

Resolve conflicts with the tables above. New upstream UI strings must be added to
`src/i18n/messages.ts` (search for string literals in changed components). Re-run the parity
checklist (`docs/phase-0/04-feature-parity-checklist.md`) and record the new upstream commit here.

## Site look (glass header, lit background)

The header is a floating glass bar and the page has the site's lit background, as on every other page. The site menu also lists Holy Mass, Church history and Faith & Evidence. Files: `src/shared/styles/global.css` (glass tokens), `src/visualizations/shared/components/VizPage.module.css`, `src/shared/ui/SiteNav.tsx`, `src/i18n/messages.ts`.

## Hand-picked pairs: Christ, prophecies, symbols

243 pairs, each a prediction or figure and its fulfilment, with a short title in English and Arabic,
in three kinds (`src/christ-links/christ-links-data.ts`):

- **About Jesus** (118): prophecies of Christ and their fulfilment, and figures of Christ Himself
  (Micah 5:2 → Matthew 2:6; Isaac carrying the wood → John 19:17).
- **Prophecies** (73): predictions fulfilled later in the Bible's history (Isaiah 44:28 → Ezra 1:1–2,
  1 Kings 13:2 → 2 Kings 23:15–16, Joshua 6:26 → 1 Kings 16:34).
- **Symbols** (52): figures the Church reads of the Virgin, the Church, the sacraments and the
  Christian life (the burning bush → Luke 1:35; the live coal → John 6:53–56; the Red Sea → 1 Cor 10:1–2).

110 were chosen by hand from the start; 81 were found in the two Coptic Orthodox commentaries the site
carries (Fr. Tadros Yacoub Malaty; the St. Mark Church): every place where a commentary calls one verse
a symbol of, or a prophecy fulfilled in, a passage it cites (1,181 candidates) was read against both
texts and kept only when the two share the same setting and meaning (`source` records which
commentary; the titles are the site's own, none of the commentaries' wording is shown); 52 more are
hand-checked symbols and prophecies of the Coptic tradition that the New Testament confirms (Jacob's
ladder and Gideon's fleece in the Theotokia, Babel and Pentecost, Hagar and Sarah, the Holy Family's
coming to Egypt in Isaiah 19:1).

- `src/christ-links/` (new): the list, its index (`christ-links.ts`, link IDs from 100,000,000 so they
  never meet the cross-reference index) and tests (real verses, the two sides apart, one of the kinds).
- Each kind is a category (see Categories below); pairs are drawn in gold, both ways in Threads whatever
  the direction (`ThreadsStage.tsx`, `threads-drawing.ts`), across the Bible and on a focused passage in
  Arcs (`ArcsStage.tsx`; `u_palette` gets an 11th entry, a bright gold: `arc-shaders.ts`, `webgl.ts`
  `GOLD_PALETTE_INDEX`; `buildArcInstancesOf`/`joinArcInstances` in `arc-instances.ts`), and counted in the
  stats (`ArcsExplorer.tsx`). The details panel lists them first, labelled About Jesus, Prophecy or
  Symbol (`PassagePanel.tsx`).
- Only About Jesus pairs make a passage "about Christ" for the computed About Jesus links
  (`scripts/data/link-reasons.ts`).
- `palette.ts`: `VizColors.accent`; `icons.tsx`: `ChristIcon`; `messages.ts`: the `christ` strings.

## Why two passages are linked (link reasons)

OpenBible.info links say nothing about why two passages belong together, and many have no visible
connection. At build time every link gets a reason, the first that holds (BSB text, the site's topic
list from `apps/web/src/lib/topics/`). Readers' votes are not used anywhere (they rank how helpful
readers found a link, not whether it is right):

| Category / tag  | When                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------- |
| Quotation       | Old ↔ New Testament, sharing a run of 4+ words, 2+ of them meaningful                    |
| Same wording    | the same within one Testament (parallel accounts, repeated laws and phrases)             |
| Topic: …        | both in one specific subtopic of the site's topic list (≤ 150 verses; smallest named)    |
| Shared words: … | 2+ uncommon words, one fairly rare (≤ 120 verses), or 1 word in ≤ 12 verses; never names |
| (unclear)       | none of these: never shown (no category offers them)                                     |

Apart from that reason, a link is **About Jesus** when both passages are about Christ and one is in the
New Testament. A passage is about Christ when it is listed under a specific topic (≤ 150 verses) of the
site's Christ-centred families (21–24 His person, Incarnation, life, miracles; 35–36 prophecies of the
Messiah, symbols fulfilled in Him) or is an end of a prophecy or symbol; opposite an Old Testament
passage, a New Testament verse that names Him counts too (`about` in the reasons file). Such a link is
shown under its own category, its text reason (if any) beside the "About Jesus" tag; being about
Christ is reason enough to show it. 14,245 links qualify; samples read as real pointers to Christ
(e.g. Gen 22:8 → Rev 5:12, 2 Cor 10:1 → Isa 42:3).

Then each verse lists only its 10 strongest references and its 10 strongest "referenced by" (by
category, then the weight of the evidence: a longer shared run, a smaller topic, rarer words); each
side keeps its own (`sides` in the reasons file), so a verse doesn't lose a link because the passage
it points to is popular. `collectConnections` applies the side; Arcs draws a link listed at either end.
76,946 links are shown by default (of 344,799); spot checks across all 66 books found most clearly related.

- `scripts/data/link-reasons.ts` (new, run by `data:build` after `build.ts`) →
  `public/data/cross-references/openbible-reasons.json`; rules in `src/link-reasons/evidence.ts`,
  file format in `format.ts`, reader in `link-reasons.ts`, browser download in
  `fetch-link-reasons.ts` (all new).
- `scripts/data/audit-links.ts` (new, last step of `data:build`): walks all 31,102 verses through the
  pages' own code, for the default categories and each category alone, and fails the build if a drawn
  link has no reason or belongs to a category not chosen, a verse exceeds 10 links each way, threads
  and arcs disagree, or a prophecy/symbol link is broken.
- `viz-data.ts` / `viz-datasets.ts`: the reasons load (and preload, and cache offline) with the other datasets.
- `PassagePanel.tsx` (+ `.module.css`): a reason tag on every reference; a passage that is both a
  reference and points back is listed once; `messages.ts` (`reasons`).

## Categories instead of community votes

Upstream's Filters menu set a minimum of readers' votes (default 4). It is replaced by a Categories
menu: one checkbox per kind of link (About Jesus, Prophecies, Symbols, Quotations, Same wording,
Same topic, Shared words), each with its count, all on by default. Links with no reason are never shown. Arcs,
Threads and the details follow at once; the choice is kept in the URL (`show=jesus,quotation`,
`show=none`; the old `votes` parameter is ignored).

- `link-filter.ts`: `LinkFilter` is `{ hiddenGenres, categories }` (no `minVotes`); `LINK_CATEGORIES`,
  `toggleCategory`; `compileLinkFilter`/`selectLinks`/`collectConnections` take the reasons (every
  caller passes `data.linkReasons`) and keep upstream's argument shapes, ignoring votes.
- `components/CategoriesMenu.tsx` (new; `FiltersMenu.tsx` removed), `category-counts.ts` (new),
  `controls.module.css`, `icons.tsx` (`CategoriesIcon`), `messages.ts` (`categories`), `explorer-location.ts`.
- Every arc and thread has the same weight: `arc-instances.ts` `ARC_WEIGHT` and `threads-drawing.ts`
  replace `voteWeight` (kept for the debug page's tests).
- Threads' separate "Prophecies & symbols" toggle is gone: the category does the same.

## Selecting a passage

Arcs: every arc stays visible, faded (`arc-scene.ts` `REST_GLOW` 0.9; upstream 1), and fades further
(`DIMMED_GLOW` 0.45) while a passage is hovered (`arcs-controller.ts`) or focused, whose own arcs are
drawn solid on top. Threads draws
every verse's threads faded at rest and the picked verse's clearly (`threads-drawing.ts`).

## Header menus open above the page

The glass header's blur makes it its own layer, so the page body (drawn after it) covered the menus'
popovers: Categories, Genres and the site menu opened invisibly. `.header` gets `position: relative;
z-index: 20` (`src/visualizations/shared/components/VizPage.module.css`).

## Local builds on Windows

`scripts/data/lib/files.ts`: `writeFileAtomic` overwrites the file in place when Windows refuses to
rename over it (`EPERM`, e.g. while a dev server holds the dataset open). No effect elsewhere.
