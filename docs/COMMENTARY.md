# Bible interpretation (التفسير)

Status (2026-10-11): **implemented for Arabic** in the Bible reader. English readers are pointed to
the Arabic commentary for now; an English translation and public-domain Church Fathers are next.

## What a reader sees

The reading page shows only the chapter: title, edition switch, text, and previous/next. Notes about
the text (its source and license, psalm numbering, deuterocanon notices, automatic-extraction
notice) are folded behind an ⓘ button. The footer is a single line linking to Sources & licenses,
where the attributions the licenses require are given.

The interpretation is shown **only when the reader selects a verse** (its number or the verse
itself). A bubble opens just below the verse, with an arrow pointing at the tap. It holds the
entries that cover that verse, a link to the page of the original, and the verse's cross-references.
It closes with ✕, Escape, a tap elsewhere, or a second tap on the verse. The address becomes
, so a shared link opens the same bubble. Without JavaScript, the chapter text is shown alone.

| Situation | What the bubble shows |
|---|---|
| St. Mark text available (50 books) | The St. Mark Church commentary, entry by entry, with a link to the PDF page it came from |
| Matthew, Mark, Luke, John | The same, plus a notice that the text was extracted automatically from PDFs whose fonts scramble some letters |
| Tobit, Judith (deuterocanon) | The same, plus a notice that the commentary follows the Church edition's verse numbering, which can differ from the text shown |
| Job, Esther | A link to the St. Mark PDF, which has no extractable text, plus Fr. Tadros Malaty's chapter where available |
| Books St. Mark does not cover (Proverbs, Ecclesiastes, Song of Songs, Isaiah, Ezekiel, Daniel, the Twelve, Wisdom, Sirach…) | A link to Fr. Tadros Yacoub Malaty's commentary on that chapter on St-Takla.org |
| English editions (KJV, LXX) | A link to the same chapter in Arabic with its interpretation, plus a note that a reviewed English translation is in preparation |

## Sources and permissions

- **St. Mark Church commentary** (stmarkos.org): imported with the permission of a member of the
  St. Mark website team (2026-10-11). Written confirmation from the church is pending; see
  `content/sources/stmark-church-commentary.yaml`. The text is shown as extracted. It is never
  rewritten, summarized or translated without review.
- **Fr. Tadros Yacoub Malaty** (St-Takla.org): **linked only**. St-Takla's permission covers its own
  site. Links are in `content/commentary/malaty/links.json`.

## How it is built

```
npm run commentary:import      # needs the network; then commit content/commentary/
  scripts/commentary/stmark-fetch.ts   52 PDFs → data/commentary/stmark/pdf (git-ignored), pinned in sources.json
  scripts/commentary/stmark-build.ts   PDF text → repair → parse → validate → content/commentary/stmark/<BOOK>.json
  scripts/commentary/malaty-links.ts   chapter links → content/commentary/malaty/links.json
```

The site build reads only the committed JSON. It never downloads anything.

### Extraction
- **Engines.** PDF.js returns positioned text items; Arabic lines are rebuilt from positions, right
  to left, with brackets mirrored and digits kept left to right (`scripts/commentary/pdf-lines.ts`).
  The older Gospel PDFs (Matthew, Mark, Luke, John) map ligatures to code points PDF.js scrambles;
  they are read with Poppler's `pdftotext` instead, which keeps letters in order. Poppler writes
  runs of digits and punctuation in visual order (`)مر .(17 :3` for `(مر3: 17).`); those runs are
  put back in logical order. Re-importing therefore needs `pdftotext` on the PATH or in
  `POPPLER_PDFTOTEXT` (Poppler is free: poppler.freedesktop.org; Windows builds:
  github.com/oschwartz10612/poppler-windows).
- **Clean-up.** Presentation forms are normalized, the ﷲ ligature is expanded, digits (Arabic-Indic
  and private-use) are converted, Persian letter forms are mapped to Arabic ones, and punctuation is
  set: no space before ، : . and one after; brackets and quotation marks the extraction displaced
  are put back (`packages/commentary/src/arabic.ts`, `polishArabicText`).
- **Reversed ligatures.** Some PDFs write ligatures in reverse (أهنم for أنهم, امللك for الملك,
  حياهتم for حياتهم, إىل for إلى). The documents showing these misspellings are detected (13 of
  52), and the dictionary of evidence is built from Van Dyck and the other documents. Only real
  ligature pairs are ever swapped back, and a word changes only with strong evidence: a word the
  Bible attests needs a replacement 100× more frequent; a word attested only in the commentary, a
  Bible word or one 50× more frequent; unknown words, an attested replacement. Vowelled words
  (quotations) and pairs whose two readings are both common (المساء/السماء) are left alone.
  Reversed pronoun suffixes in the affected documents (شخصياهتم → شخصياتهم) and lost spaces after ى
  (فىنهاية → فى نهاية) are fixed too.
- **Every correction is logged** in `content/commentary/stmark/corrections.json` (original →
  corrected, with counts), for review. The rules were checked against that log; the regressions
  found (e.g. المسكين, الحاكم, يبكون, قدميك changed wrongly by an earlier version) are unit tests.

### Structure and validation
- **Entries** are found from verse markers (ع1:, ع1-3:, ع1، 2:) and sections from "(n) title (ع…)".
  Quoted Bible text is skipped. Where a book quotes the verse inside an entry ("1- طوبى للرجل …",
  from a Bible copy with its own misspellings), the quotation is replaced by the Van Dyck verse.
- **Chapters** are read from headings ("الأصحاح الحادى والعشرون", including spacing-broken and
  swapped forms) or from the verse numbering restarting. Each PDF is parsed both ways, and the build
  keeps the reading that agrees best with the Bible.
- **Validation** runs against Van Dyck's real chapter and verse counts. Chapters that don't exist,
  repeated chapters, and entries past a chapter's last verse are **dropped, never shown under the
  wrong verse**.
- **A content check** tests whether each entry's opening words appear in its verses, and flags any
  chapter whose entries match a neighboring chapter better. None are flagged.
- **Results** per book (chapters, entries, verse coverage, alignment, unattested words, anything
  dropped) are in `content/commentary/stmark/report.json`. 17,430 verse entries are imported.

## English

English readers get the same interpretation as Arabic readers: the St. Mark commentary, translated.

- `npm run translate:prepare` splits the Arabic into chunks of about 2,500–5,000 words:
  `content/translations/stmark-en/<BOOK>/<nnn>.ar.json` (git-ignored, regenerated), units with
  stable ids (`<chapter>.<entry>.<paragraph>`, `.s` for a section title) and a hash of their Arabic.
- Each chunk is translated into `<nnn>.en.json` (committed) following
  [translation/INSTRUCTIONS.md](translation/INSTRUCTIONS.md): faithful and complete, a glossary of
  Coptic and theological terms, King James wording for Bible quotations, English references.
  The translation was made by AI models (Claude), chunk by chunk.
- `npm run translate:check` verifies every chunk: all units present with the current hash, no
  Arabic left, plausible length.
- `npm run translate:merge` builds `content/commentary/stmark-en/<BOOK>.json`. An entry is included
  only when all its paragraphs are translated from the current Arabic, so a reader never sees half
  an entry or a translation of older text. `progress.json` counts translated entries per book.
- The site shows the English entries on English editions (KJV, LXX), with the note "Machine
  translation from the Arabic, not yet reviewed" and a link to the Arabic original.

### Chapters without St. Mark text: Fr. Tadros Malaty

Fr. Tadros Yacoub Malaty gave this project permission (reported by the owner on 2026-10-12;
[translation/PERMISSION-REQUEST-MALATY.md](translation/PERMISSION-REQUEST-MALATY.md)) to publish his
commentary in Arabic and in English translation. It fills the 447 chapters of the Arabic Bible that
the St. Mark commentary does not cover, from his chapter pages on St-Takla.org:

- `node scripts/commentary/malaty-fetch.ts` downloads the pages into `data/commentary/malaty/html/`
  (git-ignored) and records each URL and SHA-256 in `data/commentary/malaty/sources.json`.
- `node scripts/commentary/malaty-build.ts` writes `content/commentary/malaty/<BOOK>.json` (same
  structure as St. Mark, `source: "malaty"`, `extraction: "html"`) and `report.json`. Each
  section heading of a page carries anchors for the verses it explains, and becomes an entry for
  them; within a section, a paragraph quoting a later verse ("… [5]") starts an entry for that verse.
  Entries are extended so that every verse of the chapter has its commentary. The site's navigation,
  image captions, printed page numbers and footnote markers are left out; the closing meditation
  ("من وحي …") is kept as the chapter's last reflection; appendices after it (homilies, studies)
  stay on the original page. Exodus 35–40 is one thematic page, shown for each of those chapters.
- Coverage: 402 chapters, 7,207 entries. St-Takla.org has no Malaty commentary on Baruch,
  1–2 Maccabees, the Greek additions to Esther (11–16), Susanna, or Bel and the Dragon; those 45
  chapters have none yet. The Song of the Three comes from his commentary on Daniel 3.
- The reader shows it only where St. Mark has no text; every entry names Fr. Tadros and links to
  the same verse on his page.
- English: the same translation pipeline with `--source=malaty` (`content/translations/malaty-en`
  → `content/commentary/malaty-en`), marked as an unreviewed machine translation.

## Known limitations
- **Job and Esther**: the St. Mark PDFs have no text layer; Fr. Tadros Malaty's commentary is shown instead.
- **Low verse coverage** in some books reflects the source, not missing data. 1 Chronicles is 23%
  because its genealogies are summarized rather than commented verse by verse; 2 Chronicles is 54%;
  Ezra is 56%.
- **Automatic, not proofread.** Extraction errors are corrected by the rules above, and every
  correction is logged; the text has not been proofread by a person, and the books' own spelling and
  grammar are kept as written. A few hundred doubtful words remain (out of about 4 million).
- **Source documents would fix the rest.** The original Word files from the St. Mark team would
  remove every extraction limitation, including the two image-only PDFs.
- **The English translation is machine-made and not yet reviewed.** It is marked so on every entry,
  with a link to the Arabic original. A reviewer can correct any unit in its chunk file; the
  review workflow is in docs/THEOLOGICAL_REVIEW.md.
- **Chapters without any commentary text** (45 of 1,336): Baruch, 1–2 Maccabees, Esther 11–16,
  Susanna, and Bel and the Dragon.
