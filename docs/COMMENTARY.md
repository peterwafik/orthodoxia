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
- **Reading order.** PDF.js returns positioned text items. Arabic lines are rebuilt from positions:
  right to left, with brackets mirrored and digits kept left to right
  (`scripts/commentary/pdf-lines.ts`).
- **Clean-up.** Presentation forms are normalized, the ﷲ ligature is expanded, and Arabic-Indic
  digits are converted (`packages/commentary/src/arabic.ts`).
- **Scrambled ligatures** (Matthew, Mark, Luke, John). Their fonts emit some letter pairs in
  reverse (احلسن for الحسن). The build learns which pairs are affected from the text itself, then
  swaps them only with strong dictionary evidence, from Van Dyck plus the clean books, counting
  attested stems such as والموصوفة → موصوفة. Genuine words like عمل are left alone. About 5% of
  words in these books remain unattested; that count includes names and rare words.

### Structure and validation
- **Entries** are found from verse markers (ع1:, ع1-3:, ع1، 2:) and sections from "(n) title (ع…)".
  Quoted Bible text is skipped.
- **Chapters** are read from headings ("الأصحاح الحادى والعشرون", including spacing-broken and
  swapped forms) or from the verse numbering restarting. Each PDF is parsed both ways, and the build
  keeps the reading that agrees best with the Bible.
- **Validation** runs against Van Dyck's real chapter and verse counts. Chapters that don't exist,
  repeated chapters, and entries past a chapter's last verse are **dropped, never shown under the
  wrong verse**.
- **A content check** tests whether each entry's opening words appear in its verses, and flags any
  chapter whose entries match a neighboring chapter better. None are flagged.
- **Results** per book (chapters, entries, verse coverage, alignment, unattested words, anything
  dropped) are in `content/commentary/stmark/report.json`. 16,967 verse entries are imported.

## Known limitations
- **Job and Esther** need OCR or the source documents; they are linked as PDFs for now.
- **Low verse coverage** in some books reflects the source, not missing data. 1 Chronicles is 23%
  because its genealogies are summarized rather than commented verse by verse; 2 Chronicles is 54%;
  Ezra is 56%.
- **Source documents would fix the rest.** The original Word files from the St. Mark team would
  remove every extraction limitation, including the scrambled Gospels and the two image-only PDFs.
- **English is not done yet.** English readers have no interpretation in their language yet: a
  reviewed translation and public-domain Church Fathers (St. Cyril of Alexandria, St. John
  Chrysostom) are the next step.
