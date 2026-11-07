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

## Prophecies and symbols of Christ

A hand-picked list of Old Testament prophecies and symbols, each paired with where the New Testament
shows it fulfilled (e.g. Micah 5:2 → Matthew 2:6; Isaac carrying the wood → John 19:17), with a short
title in English and Arabic. It sits beside the OpenBible links, which carry no reason of their own.

- `src/christ-links/` (new): the list (`christ-links-data.ts`), its index (`christ-links.ts`, link IDs
  from 100,000,000 so they never meet the cross-reference index) and tests that every reference is a
  real verse, Old Testament first and New Testament second.
- Threads: a "Prophecies & symbols" toggle (remembered) draws only these pairs, both ways, in the site's
  gold, and hides the direction switch. `ThreadsExplorer.tsx`, `ThreadsStage.tsx` (+ `.module.css`),
  `threads-drawing.ts` (`threadColor`), `controls.module.css` (`.christ`), `icons.tsx` (`ChristIcon`).
- Details panel (both views): a "Fulfilled in Christ" section first, titled per prophecy or symbol.
  `PassagePanel.tsx` (+ `.module.css`).
- Arcs: previewing one of these links draws its gold arc from its ends (`buildArcInstancesOf` in
  `arc-instances.ts`, used by `ArcsStage.tsx`).
- `palette.ts`: `VizColors.accent`; `messages.ts`: the `christ` strings.

## Why two passages are linked (link reasons)

OpenBible.info links say nothing about why two passages belong together, and many have no visible
connection. At build time every link gets a reason, the first that holds (BSB text, the site's topic
list from `apps/web/src/lib/topics/`); links with none are hidden by default:

| Tag             | When                                                                                    |
| --------------- | --------------------------------------------------------------------------------------- |
| Quotation       | Old ↔ New Testament, sharing a run of 4+ words, 2+ of them meaningful                   |
| Same wording    | the same within one Testament (parallel accounts, repeated laws and phrases)            |
| Topic: …        | both in one specific subtopic of the site's topic list (≤ 150 verses; smallest named)   |
| Shared words: … | 2+ uncommon words, one fairly rare (≤ 120 verses), or 1 very rare word (≤ 25); no names |
| Related theme   | none of these, but 50+ readers' votes                                                   |

Then each verse keeps only its 10 strongest links leaving it and the 10 strongest reaching it.
With the default 4-vote filter about 39,000 links show instead of 153,419; spot checks of each tag
across the Bible found roughly 85–95% clearly related. Filters → "Show links without a clear
connection" brings the rest back.

- `scripts/data/link-reasons.ts` (new, run by `data:build` after `build.ts`) →
  `public/data/cross-references/openbible-reasons.json`; rules in `src/link-reasons/evidence.ts`,
  file format in `format.ts`, reader in `link-reasons.ts` (all new).
- `viz-data.ts` / `viz-datasets.ts`: the reasons load (and preload, and cache offline) with the other datasets.
- `link-filter.ts`: `LinkFilter.showUnclear`; `compileLinkFilter`, `selectLinks` and `collectConnections`
  take the reasons (all callers pass `data.linkReasons`); URL `unclear=show` (`explorer-location.ts`).
- Arcs: focusing a passage hides every other arc (`arc-scene.ts`, `DIMMED_GLOW` 0.28 → 0), and its
  prophecies and symbols of Christ are drawn in gold (`u_palette` gets an 11th entry, a bright gold:
  `arc-shaders.ts`, `webgl.ts` `GOLD_PALETTE_INDEX`; `buildArcInstancesOf`/`joinArcInstances` in
  `arc-instances.ts`, used by `ArcsStage.tsx`). Threads draws every verse's threads faded at rest (alpha 0.1–0.35, upstream 0.18–0.68) and the
  picked verse's clearly (`threads-drawing.ts`).
- `FiltersMenu.tsx` (checkbox), `PassagePanel.tsx` (+ `.module.css`: a reason tag on every reference; a
  passage that is both a reference and points back is listed once), `messages.ts` (`reasons`).
