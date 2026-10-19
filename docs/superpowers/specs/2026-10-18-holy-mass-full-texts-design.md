# Holy Mass: the full texts, followed along and explained

Status: draft for review, 2026-10-18. Scope: the Holy Mass journey page (`/en/holy-mass/`, `/ar/holy-mass/`).

## Goal

Let a reader follow **everything said** at the Holy Mass, stop by stop, as in Coptic Reader, and
understand it: the explanation (steps, meaning, the picture) stays beside the text. This replaces the
current one-sentence draft summaries with the real prayer texts as they are added.

Who it is for: Coptic Orthodox worshippers and learners following the service on a phone or a laptop,
in Arabic and English (Coptic and transliteration later).

Success: a reader can pick St. Basil, St. Gregory or St. Cyril, choose the languages, and read each
stop's script in order with the speaker of every line clear, switch speakers and steps on and off, and
see where each text comes from. Stops without text say so honestly.

## Decisions already made

- **Texts:** the prayers are church tradition, but each wording is a translation with a source. The
  project builds the system and does not copy a published translation without its owner. Texts are
  supplied as files; nothing is written from memory. No permission-request step is built.
- **Languages:** Arabic and English now, with fields ready for Coptic and Coptic in Arabic or English
  letters (transliteration).
- **Approach A:** one ordered script per stop. The existing layer switches filter it.

## Content model

Files live in `content/liturgy/`:

```
content/liturgy/
  README.md          the format, with an example
  common/<slug>.txt  parts shared by the three liturgies
  basil/<slug>.txt   parts of St. Basil that differ (a file here overrides common/)
  gregory/<slug>.txt
  cyril/<slug>.txt
```

`<slug>` is a stop's slug from `apps/web/src/data/holy-mass.ts` (e.g. `lift-up-your-hearts`).

A file is a header, then blocks separated by blank lines:

```
source: <translation, translator or publisher, licence or permission, URL>   (required)

@rubric
en| The priest turns to the people.
ar| يلتفت الكاهن إلى الشعب.

@priest
en| The Lord be with you all.
ar| الرب مع جميعكم.
note| en: A greeting used throughout the service.

@people
en| And with your spirit.
ar| ومع روحك أيضًا.
```

- **Speakers:** `rubric` (a step or instruction), `priest`, `deacon`, `people`. A bishop or celebrant is
  `priest`, a reader is `deacon`, the choir and a text said by all are `people`.
- **Languages:** `en|`, `ar|`, `cop|`, `tr|`. A block needs at least one. Continuation lines start
  with a space. Plain text, UTF-8, right-to-left Arabic as is.
- **note|:** an optional short explanation of that block, one line per language
  (`note| en: …`, `note| ar: …`), written by the site, not part of the prayer.
- **Resolution:** for a stop and a liturgy, `<liturgy>/<slug>.txt` wins, else `common/<slug>.txt`, else
  the stop has no text yet.
- **Provenance:** `source:` is required in every file. The build fails without it.

## Build

`scripts/liturgy/build.ts` (run by `npm run build` and `dev:web`):

1. Parses every file with `lib/liturgy/parse.ts` (pure, tested).
2. Checks: the slug is a real stop; the speaker is known; every block has at least one language;
   `source:` is present; no `cop|` or `tr|` without a language it belongs to; no duplicate files.
3. Writes `apps/web/public/liturgy/<liturgy>.json`:
   `{ liturgy, stops: { <slug>: { source, blocks: [{ role, en?, ar?, cop?, tr?, note?: {en?, ar?} }] } } }`.
   Each liturgy has all stops resolved (the common ones copied in), so the page fetches one file.
4. Prints a coverage table: per liturgy, stops with text and per-language block counts.
5. Writes `apps/web/src/data/liturgy-sources.json`: the distinct sources, for the Sources page.

Generated JSON is git-ignored. A missing `content/liturgy/` is not an error.

## Page

- **Loading:** when a liturgy is selected (saved choice, else St. Basil) the page fetches its JSON
  once. The static shell (steps, meaning, film, summaries) works without it.
- **The script of a stop:** blocks in order. A `rubric` is shown as a step row (steps layer). A
  speaker block is a row with the speaker's round icon and colour (existing layers). Blocks of a
  hidden layer are hidden. Language lines appear in the languages chosen; a block missing a chosen
  language shows the others and no blank.
- **Meaning:** a block's `note` appears under it when the Meaning layer is on; the stop's "what it
  means" and the picture note stay at the end of the stop.
- **Fallback:** a stop without text keeps its draft one-sentence summaries, marked as drafts, plus a
  line "The text of this prayer has not been added yet".
- **Options:** a language picker (Arabic, English; Coptic and transliteration appear only when some text
  has them) replaces "Both languages"; the choice is saved; the page language is the default. A text-size
  control (three sizes), saved.
- **Sources:** under a stop's script, "Text: <source>" (linked when the source has a URL). The Sources
  page lists the distinct sources.
- **Long stops:** the panel scrolls through the script as now; the film stays at the stop's frame.
- **Accessibility:** the same icon buttons and labels; Arabic is `dir="rtl"` per line; Coptic uses a
  suitable font only when Coptic text exists.

## Units

| Unit | Purpose |
| --- | --- |
| `lib/liturgy/parse.ts` | Parse one file into blocks and a source; report errors with line numbers. |
| `lib/liturgy/resolve.ts` | Resolve a stop's script for a liturgy (override rules); coverage. |
| `scripts/liturgy/build.ts` | Validate all files, emit JSON and coverage. |
| `lib/holy-mass/reading.ts` | Language and size preferences, saved; which languages a block can show. |
| `holy-mass.astro` (script) | Load a liturgy's JSON, render each stop's script, apply layers and languages. |

## First content

Only stops 29 and 30 move from code into `common/lift-up-your-hearts.txt` and
`common/it-is-fitting-and-right.txt` (their short, widely used dialogue, with a source line saying it was
written for this site). Everything else shows the fallback until texts are supplied.

## Testing

- Parser: valid files; each error (no source, unknown speaker, empty block, bad language, line numbers).
- Resolve: override, fallback to common, missing stop.
- Reading preferences: parse, save, defaults.
- Build: a fixture directory produces the expected JSON and coverage.
- Browser: desktop and phone, Arabic and English; layers and languages filter the script; fallback and
  sources show.

## Out of scope

Audio, hymn notation, a Coptic font until Coptic text exists, per-line highlighting while reading,
other services (Agpeya, Pascha), and any copying of a translation without its owner.

## Phases

1. The system and the view, with stops 29 and 30.
2. Texts supplied, stop by stop, liturgy by liturgy (the importer reports coverage).
3. Per-prayer notes.

## Risks

- The amount of text: three liturgies in two languages is large; the JSON is loaded per liturgy.
- Text accuracy and permission are the owner of each text's responsibility; the `source:` line makes
  them visible.
- The Arabic of the site's own notes and summaries needs a native review.
