# Holy Mass: the Liturgy journey

`/en/holy-mass/` and `/ar/holy-mass/` open a page with three cards (the Liturgies of St. Cyril, St. Gregory and St. Basil); each card opens the journey for that liturgy at `/en/holy-mass/cyril/`, `/gregory/` or `/basil/` (and the same in `/ar/`). There is no liturgy switch inside the journey, only a link back to the cards. The Divine Liturgy as one continuous flight: scrolling the
page lays 31 line drawings softly behind the text; as you scroll, each one dissolves into the next at the stop where the scene changes.


The page is minimal: the drawings sit softly behind the page, each stop is a short chat in front of it,
and the list of the 52 stops (in five chapters) hides behind a hamburger button.

## How it works

| Part | Where | What it does |
| --- | --- | --- |
| Artwork | `Holy Mass/Holy Mass Background Images/` (the 31 PNG sources) and `apps/web/public/holy-mass-bg/01.webp`–`31.webp` (what the site serves, about 4 MB in all) | Fetched only when the reader is near them. The earlier film (`content/art/holy-mass-film/`) is no longer served. |
| Timeline | `apps/web/src/lib/holy-mass/backdrop.ts` | Which stop each of the 31 pictures opens at (`STARTS`, a fraction means part-way down a stop) and how visible each one is at a scroll position: a dissolve that finishes as the new stop reaches the top. Pure arithmetic, tested. |
| Player | `apps/web/src/lib/holy-mass/backdrop-player.ts` | One stacked `<img>` per picture, opacity set by the timeline, the two neighbours on each side fetched early. |
| Stops | `apps/web/src/data/holy-mass.ts`, `holy-mass-says.ts` | The 52 stops (titles, what happens, what it means, scripture), the five scenes' captions and notes, and one draft sentence per speaker per stop (what the priest, the deacon and the people do or say). |
| Texts | `content/liturgy/` (format in its README), `scripts/liturgy/build.ts` → `apps/web/public/liturgy/<liturgy>.json` | The prayers, one plain-text file per stop (`common/` or a liturgy's own folder), each with a required `source:` line. The build checks every file, names the file and line of a problem, and prints how many stops each liturgy has text for. |
| Reading | `apps/web/src/lib/liturgy/`, `apps/web/src/lib/holy-mass/reading.ts`, `script-view.ts`, `load.ts` | The parser, the resolution of a liturgy, the saved language and size choice, the lines shown for a stop, and the loader. All pure and tested. |
| Layers | `apps/web/src/lib/holy-mass/layers.ts` | Which of the five layers the reader shows: steps, priest, deacon, people, meaning. Saved in the browser. Pure logic, tested. |
| Page | `apps/web/src/pages/[lang]/holy-mass/index.astro` (the three cards) and `holy-mass/[liturgy].astro` (the journey; icons in `components/holy-mass/Icon.astro`) | Layout, scroll → film, layers, deep links, options. |

- **Scroll drives the camera.** A stop is "settled" when its section is at the top of the panel; in
  between, the film is part-way to the next stop. Rail clicks and Next/Previous scroll smoothly, so a
  long jump is a flight through the scenes.
- **Five scenes.** I the sanctuary screen (the iconostasis, with the priest entering barefoot), II the
  choir and the Word (the raised khorus, lecterns, cymbals and triangle), III the nave at the kiss of
  peace, IV the haikal and the altar (ciborium, apse with Christ and the four living creatures), V
  communion and heaven (the cloud staircase up to Christ enthroned).
- **Seams.** Each link clip starts on the real last frame of one dive and ends on the real first frame of
  the next, so the cuts are invisible. There is no link between scenes IV and V (the video services
  refused to make one), so those two dissolve into each other. Scene V's dive is not a generated video:
  it is a slow zoom of its still, made locally with ffmpeg.
- **The film is the background.** The scenes and their flights fill the screen behind the text, dimmed and
  softened by a cream wash so the words stay readable. Scrolling plays them.
- **A hamburger for the journey.** The list of stops is hidden. The hamburger button (top corner) slides it
  over the film as a drawer; choosing a stop, the close button, Escape or a tap outside closes it.
- **Each stop is a chat.** What the **priest**, the **deacon** and the **people** say appears as chat
  bubbles (priest and deacon at the start side, the people at the end side, mirrored in Arabic), each with
  its icon and colour. Under the bubbles are the **steps happening in the altar** and the **meaning behind**: one paragraph per stop, in the page language only, summarising two books (see `apps/web/src/data/holy-mass-meaning.ts`: the whole-Mass book on the rites, and Michael Mina's lecture notes, which cover only the consecration, stops 21, 34 and 35). There is no "In the picture" line and no "More" section. The liturgy picker (St. Basil, St. Gregory, St. Cyril) and the text size are behind the options button.
- **Five switches.** A bar at the bottom has five buttons: **Priest**, **Deacon**, **People**, **Steps**
  and **Meaning**. Each shows or hides its aspect on its own, and the choice is remembered; all five
  start on. A speaker who says nothing at the current stop has a dashed, dimmer button.
- **The prayers and the drafts.** A stop with a text file shows its **script** in the order it is said: the
  steps as small italic rubrics, and each speaker's lines as bubbles. The five switches filter the script, the
  text-size control (Options) makes the text larger or smaller; both are saved. Each script is credited
  to its source under the text, and the Sources page lists the sources. A stop **without** a text file keeps
  the one-sentence draft summaries (not prayer texts, not reviewed by clergy) and says the text has not been
  added yet. At first only stops 29 and 30 have text files (their short standard dialogue).
- **Adding texts.** Put a file in `content/liturgy/common/` (or a liturgy's folder when it differs), as in
  `content/liturgy/README.md`, and run `npm run liturgy`. The texts' source and permission are the
  responsibility of whoever adds them; the `source:` line makes them visible.
- **Importing a whole book.** `scripts/liturgy/import/` turns a book with a text layer into these files. It was
  written for *The Divine Liturgies of Saints Basil, Gregory and Cyril* (Coptic, English and Arabic, Fr. Jacob
  Nadian, St. Bishoy Coptic Orthodox Church of Toronto), which prints "Priest:", "Deacon:" and "People:" (and the
  Arabic "الكاهن:", "الشماس:", "الشعب:") before every part. Three steps, each run by hand:
  `rites-extract.cjs` saves every page's text pieces with their position; `rites-gen.cjs` splits each page into
  rubrics and speaker blocks (English and Arabic of the same part together), repairs the PDF's reversed lam+alef
  letters against the words the older reader (`pdftotext`) finds on the same page, and writes the files; then
  `npm run liturgy`. The page ranges of each stop (from the book's contents list, for all three liturgies) are in
  `rites-gen.cjs`; edit them to move a prayer. The files are credited to the book; the right to use the book is
  the responsibility of whoever publishes the result. The generated files in `content/liturgy/` should not be
  committed or deployed until that is settled.
- **Deep links.** `#29-lift-up-your-hearts` opens that stop; the address and the place are kept as the
  reader moves, and a "resume" link is offered on the next visit.
- **Reduced motion.** The stage shows the still of the current scene, with no video.
- **Phones.** The lighter 854 × 480 clips with a short GOP are served on narrow or touch screens.
- **One language at a time.** `/en/` shows English only and `/ar/` shows Arabic only; the language link in
  the site header switches. Nothing of the other language is shown: no second title, no second text, and
  the credit line is in the page language too (a text file can give `source-ar:` for the Arabic page,
  otherwise the page points to the Sources page). A prayer part that exists only in the other language is
  left out, and the stop says "Part of this text is not yet available in English" (or Arabic). The film has
  no text in it.

## The film and its provenance

All five scenes are AI-generated clay dioramas, rebuilt after a first set was judged not faithful to a
Coptic church. They follow the features described by copticheritage.org and ukmidcopts.org: the solid
wooden iconostasis with three curtained doors, the Last Supper and the apostles above, the free-standing
altar under its ciborium, the raised khorus, the apse with Christ and the four living creatures, barefoot
clergy, and cymbals and a triangle as the only instruments. Details, prompts, job ids and which clips were
refused: `content/art/holy-mass-film/README.md`.

The film is **not yet approved**: every religious detail needs the review below. (The earlier single
deep-zoom picture, `content/art/holy-mass/`, is retired and no longer used by the site.)

## Content status

Every stop is a **draft**, marked as such on the page.

- **Order and titles** follow the outline of <https://www.copticorthodoxliturgy.com/> (headings only,
  read on 2026-10-14). Four connecting stops are marked "general" (7, 13, 18, 20). The mock-up's list
  of stops 27–34 was not in liturgical order (it put the Institution Narrative after the Memorial),
  so the sequence follows the reference outline and the Liturgy instead.
- **Explanations** (what happens, what it means, the silent meditation, the notes on the scenes) are
  original short texts written for this site, with scripture references. None has been reviewed by
  clergy. The "Pray silently" lines are labelled as personal meditations, not liturgical texts.
- **Prayer texts are not included.** Only the short standard dialogue of stops 29 and 30 ("The Lord be
  with you all… Lift up your hearts… Let us give thanks… It is meet and right") is shown, in English
  and Arabic. Every other prayer shows "The text of this prayer will be added from an authorized
  translation". No prayer is invented (master prompt §7.4).
- **The three liturgies.** The selector (St. Basil, St. Gregory, St. Cyril) is in place and its choice
  is remembered. Stops in the anaphora whose text differs among the three (31–39) say so. Separate
  texts per liturgy are not yet included, because they need an authorized source.
- **Scripture links** open the chapter in the site's reader (KJV in English, Van Dyck in Arabic).

### Sources

- Outline of the order: copticorthodoxliturgy.com (Vespers, Matins, The Offertory, The Liturgy of the
  Word, The Liturgy of the Faithful, The Distribution). Its prayer texts were not copied.
- **Not yet used:** the illustrated flipbook *رحلة في السماء* (fliphtml5.com/qhddq/vdey). It could not
  be read programmatically. To use it as a source for the ritual actions, the owner should provide the
  PDF or screenshots. Nothing in the page claims to be taken from it.
- Fathers' commentary is not yet included (nothing was invented); the panel has no such section.

## Review checklist (before presenting this as authoritative)

For each stop: sequence; priest, deacon and people roles; translation and terminology; symbolic
interpretation and scripture references; applicability to Basil, Gregory and Cyril; sources and
licensing. Record the result in `reviewStatus` (not yet in the data model; the draft notice is shown
on every stop until it is).

## Not built yet

These are in the master prompt and are the natural next steps:

- Hotspots on the scenes (censer, altar, Gospel book, …), with a "show all" toggle.
- "Follow the Mass" mode (large text, no animation) and a fuller "Study" mode.
- Prayer texts, transliteration and Coptic, from an authorized translation, per liturgy.
- Fathers' commentary and per-stop sources.
- Separate URLs per liturgy and stop (`/liturgy/basil/29-…`); today the stop is in the address fragment.
- A full-screen film mode.
- Bookmarks of a prayer beyond the remembered place.
- A generated flight from scene IV into scene V, and a generated dive for scene V (both were refused by the video filters).
