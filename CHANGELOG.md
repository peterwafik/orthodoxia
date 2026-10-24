# Changelog

## Unreleased: new artwork behind the Holy Mass journey

- The five clay-diorama scenes and their video flights are replaced by 31 line drawings, laid translucently behind the text and dissolving one into the next as the reader scrolls through the stops (preparation, the Word, the litanies, the Anaphora, the fraction, communion and heaven). Each liturgy page uses the same sequence.
- Each drawing is shown whole (never cropped) on desktop, centred, with its edges faded into the page colour; empty space beside it is the plain page background.
- The images ship as WebP (about 4 MB instead of 70 MB of PNG and 33 MB of video).

## Unreleased: verse popup shows only the cross-reference link

- The popup that opens when a verse is selected, in English and Arabic, no longer shows the machine-translation note, the link to the Arabic original, the link to the St. Mark PDF page or the links to Fr. Tadros Malaty's pages. Only the cross-reference link remains. Entries from Fr. Tadros Malaty keep a plain-text credit to him, with no link (the owner's decision; his permission was to credit and link).

## Unreleased: saints on the Holy Mass cards

- Each of the three liturgy cards has a drawing of its saint at the top, traced from the reference icons supplied for the project (halo, hair, thick beard, robes, hands holding a book) with the facial features and lettering erased: St. Cyril the bishop with the cross on his omophorion and a stack of Gospels, St. Gregory with the two large crosses on his omophorion, raising a hand in blessing and holding a book, and St. Basil the monk holding a tablet with a cross.

## Unreleased: drawings on the home cards

- Each home-page card has a small line drawing at its top, in the same thin accent line as the headline drawing: an open Bible, cross-reference arcs, a verse threading out to its references, a chalice with a cross, a branching timeline, and a cross in a circle.

## Unreleased: one footer for the whole site

- A new compact footer, the same on every page including the cross-reference and threads pages: two slim rows: the site name and its sections (Bible, Holy Mass, Church history, Cross-references, Read with threads), a thin vertical divider, then the project pages (About, Sources & licenses); below, "An online study project in English and Arabic" and a copyright line. No dividing line above the footer. The cross-reference explorer's own credits line is removed; its views still fill the window, with the footer one scroll below. The home page card for Sources and licenses is removed (the footer links to it), and the explorer's menu no longer lists Sources.

## Unreleased: evidence window on the church-history page

- In the comparison table, the link to the verses and early witnesses the Coptic Church cites now opens a window on
  the same page with the claim, the full text of every cited verse (each verse is a link to its place in the Bible) and
  the early witnesses, instead of leaving for the Bible reader. A link in the window still opens the point there.

## Unreleased: church-history comparison and Coptic evidence

- The church-history comparison now covers 29 points of faith in seven groups, starting with the faith every church
  holds in common. Each point is written in one frame in all churches, so agreement shows as identical words and
  difference as different bold words; rows are marked "In common" or "Differs", there is a "Show only the differences"
  switch, and the popup of each church lists where it agrees and differs with the Coptic Orthodox Church.
- New family 44 in the Bible reader's topics: the Bible verses and early witnesses (writings, councils, manuscripts)
  the Coptic Orthodox Church cites for each point of faith, with links to the chapters, and a link from each row of the
  comparison. Draft text, not reviewed by clergy.

## Unreleased: Holy Mass chooser

- Holy Mass now opens a page with three cards (St. Cyril, St. Gregory, St. Basil); each opens the journey for that liturgy at /en/holy-mass/<liturgy>/. The liturgy switch inside the journey is removed (the choice is made first). "Sources" is removed from the header menu; it stays reachable from the footer and the About page.

## Unreleased: full-width pages

- Every page, and its header, now spans the whole window with side margins that scale with it (they used to stop at 72rem), so content follows the window when it is resized or zoomed out. Reading text (the Bible, About, Sources) fills that width instead of a narrow column. The church-history timeline scales with the window, and every group title sits at the same corner of its band.

## Unreleased: church history

- New page /en/church-history/ and /ar/church-history/: an interactive timeline from AD 33 to today with the Coptic Orthodox Church as the centre line and 14 other churches branching from it, each in its own colour. Threads light up on hover; clicking one opens a popup (closed with ✕) with its date, the reason for the division, what changed in belief and the Coptic Orthodox view, with a grapevine drawn in the margin, and churches close in faith grouped in tinted bands (also in the comparison chips and table); below the timeline a table compares any churches you choose. In the top menu and on the home page. Draft texts, not reviewed by clergy (docs/CHURCH_HISTORY.md).

## Unreleased: home page

- Home page redesigned as six cards (Bible, Cross-references, Read with threads, Holy Mass, About, Sources) under a line drawing of an open book, a Coptic cross and arcs, in the light and dark themes. The credits and disclaimer block is removed from the home page (it stays on Sources). Light is now the default theme on every page, including the explorer; the system dark preference is no longer followed, and a saved choice still wins.

## Unreleased: topic markers

- Bible reader: an optional floating button opens a panel of 43 topic families with about 1,300 subtopics in English and Arabic; ticking a topic colours the verses of the chapter that belong to it. Verses come from Nave's Topical Bible (1903, public domain) plus hand-listed passages, so every subtopic has verses (see docs/TOPICS.md; rebuild with `npm run topics`). Ticking a main topic selects all its subtopics, and unticking it restores the subtopics ticked before. Not reviewed by clergy.

## Unreleased

### Added
- Holy Mass journey (`/en/holy-mass/`, `/ar/holy-mass/`): the Divine Liturgy as a scroll-driven flight.
  Scrolling 52 stops in five chapters plays a film of five clay-diorama scenes of a Coptic church (the
  sanctuary screen, the choir and the Word, the nave at the kiss of peace, the haikal and the altar,
  communion and heaven), joined by camera flights from one scene to the next and ending on Christ
  enthroned. Lighter clips for phones, Arabic and English, deep links, resume, liturgy selector,
  both-languages toggle and reduced-motion support. The scenes were generated with Higgsfield and rebuilt
  to follow Coptic practice (solid iconostasis, ciborium over the altar, raised khorus, barefoot clergy);
  they are unreviewed by clergy. The earlier deep-zoom picture and its tile build are removed. Content is
  draft: prayer texts are pending an authorized translation. See docs/HOLY_MASS.md.
- Holy Mass panel simplified: five icon switches (Steps, Priest, Deacon, People, Meaning) choose what is shown,
  each as a row with a round icon so the step sits beside the words, and the choice is remembered. Draft
  one-sentence summaries of what the priest, deacon and people do or say at every stop, in Arabic and English
  (not prayer texts; unreviewed). The silent meditation, scripture and notes moved under "More"; the stops,
  options and liturgy picker are icon buttons; a shorter picture area on phones.
- Holy Mass full texts: the page can show everything said at each stop, as a script in the order it is said
  (steps, priest, deacon, people), in Arabic and English (Coptic and transliteration ready), with a language
  picker, a text-size control, and the source of every text. The texts are plain files in `content/liturgy/`
  checked by `npm run liturgy`; a file without a `source:` line fails the build. Stops without text keep
  their draft summaries. Only the short dialogue of stops 29 and 30 is included so far.
- Holy Mass page redesigned to be minimal: the film plays softly behind the page, the list of stops hides
  behind a hamburger button, and each stop is a chat (priest, deacon and people bubbles, then the steps in
  the altar and the meaning behind). Five switches at the bottom show or hide each aspect. One language at
  a time: the English page shows no Arabic and the Arabic page no English, including the credit line (new
  optional `source-ar:` line in the text files).
- Fr. Tadros Yacoub Malaty's commentary, published with his permission, for the 402 chapters
  without St. Mark text (Job, Proverbs to Malachi, Wisdom, Sirach, Esther, parts of Exodus,
  Chronicles, Ezra and Psalms). It is shown verse by verse in Arabic, credited and linked to his
  page on every entry, and translated into English by machine (unreviewed) through the same
  pipeline (`--source=malaty`). Baruch, 1–2 Maccabees and the Greek additions to Esther and
  Daniel remain without commentary (45 chapters).
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
  permission) imported verse by verse from 52 PDFs (17,430 entries), validated against the Bible;
  Fr. Tadros Malaty's commentary linked for the books it does not cover; select a verse to read its
  interpretation in a bubble beneath it. `@orthodoxia/commentary` package and
  `npm run commentary:import`.
- English interpretation: the St. Mark commentary translated from Arabic (AI translation, marked
  as not yet reviewed, linked to the Arabic original), chunked with stable ids and hashes, checked
  and merged by `npm run translate:prepare|check|merge`; glossary and rules in
  docs/translation/INSTRUCTIONS.md. Chapters without St. Mark text link to Fr. Tadros Malaty in
  both languages; a permission request is drafted (docs/translation/PERMISSION-REQUEST-MALATY.md).
- Minimal reading page: the chapter alone, notes behind an info button, a one-line footer.
- Commentary text quality: the Gospels are read with Poppler; reversed ligatures, displaced
  punctuation, quotation marks and brackets, page numbers and headings in the text are corrected in
  all books, every correction logged in `content/commentary/stmark/corrections.json`; verse
  quotations are replaced by the Van Dyck text. Psalms verse coverage rose from 74% to 98%.

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
