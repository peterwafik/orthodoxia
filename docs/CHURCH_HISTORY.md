# Church history timeline

`/en/church-history/` and `/ar/church-history/`: an interactive timeline of the early church and the divisions that
formed today's churches, with a panel for each church and a table to compare churches.

## The picture

- The centre line is the early church, continued as the Coptic Orthodox Church. It is drawn that way as the Coptic
  Orthodox Church's own account of its continuity, and the page says so. The Eastern Orthodox and Catholic
  churches make similar claims for themselves.
- Every other church is a thread of its own colour that leaves its parent's line at its year. Threads above the
  centre are the Oriental Orthodox and Eastern churches. Threads below are the Chalcedonian line, Rome and the
  churches of the Reformation. A dashed thread is a church in communion with its parent, not a division.
- The timeline sits directly on the page, with no boxes. The only decoration is a grapevine in hairlines climbing the
  margin at the start of the page (left in English, right in Arabic), shown only on screens wide enough to leave
  room for it (`components/church-history/ChurchHistoryArt.astro`). The home page has its own, different drawing.
- The timeline fills the page width and scales with the window, so it grows when the browser is zoomed out.
- Churches that are close in faith are grouped: a tinted band with a coloured edge and a title (always in the top-left corner of the band) sits behind each
  group's threads, and the same grouping is used for the comparison chips and the table headers. The groups are the
  East Syriac tradition (Church of the East), the Oriental Orthodox family (Coptic, Ethiopian, Armenian, Syriac,
  Malankara), the Chalcedonian churches East and West (Eastern Orthodox, Eastern Catholic, Roman Catholic) and the
  churches of the Reformation. Groups are in `GROUPS` in `data/church-history/index.ts`; each church names its
  group, and a group's lanes must be next to each other (a test checks this).
- Threads rest at medium brightness and light up with a glow when hovered (or focused with the keyboard). Nothing
  opens on hover. Clicking a thread (or pressing Enter) opens a popup beside the click with the date, why it
  divided, what changed in belief and practice, and the Coptic Orthodox view; the thread's ancestors and offshoots
  stay bright and the rest fade. Close it with the round ✕ button or Escape. On a phone it is a sheet at the
  bottom. Arrow keys move between threads. The address records the open church and the comparison
  (`?church=` and `?compare=`) so it can be shared.
- Under the timeline, choose two or more churches (or use "Add to comparison" in the popup) for a table of 29 points of
  faith in seven groups: the faith held in common (the Trinity, the divinity of Christ, his birth, death and
  resurrection, his return, the inspiration of Scripture), Christ and the Holy Spirit, Scripture, Tradition and
  councils, the Church and its ministry, the sacraments, Mary, the saints and icons, salvation and the life to come,
  and worship and Christian life.
- Every point is written in one frame in every church, so churches that agree show exactly the same words and the
  same tint, and churches that differ change only the **bold** words. Each row says "In common" or "Differs" for the
  churches shown, a summary counts them, and "Show only the differences" hides the rows that agree. The popup of a
  church also lists, point by point, where it agrees with the Coptic Orthodox Church and where it differs.
- Each row has a link, "Verses and early witnesses the Coptic Church cites", that opens a window on the same page with
  the Coptic claim for that point, the text of every verse it cites (each reference and verse number is a link to
  that verse in the Bible reader), and the early witnesses (writings, councils and manuscripts). The reader need not
  leave the page; Escape, the X or a click outside closes the window, and a link at the bottom opens the point in the
  Bible reader (family 44 of the topics, see docs/TOPICS.md). The texts come from `/<lang>/coptic-evidence.json`,
  built from `data/coptic-evidence.ts` and the Bible text, and loaded the first time a window is opened.

## Where things are

| What | File |
| --- | --- |
| The points of faith and the words of each position | `apps/web/src/data/church-history/compare.ts` (points, groups, positions) and `positions.ts` (the position each church takes) |
| The churches, in English and Arabic | `apps/web/src/data/church-history/` (`orient.ts`, `chalcedon.ts`, `reformation.ts`; types and the list in `index.ts`) |
| Layout of the timeline (time scale, lanes, curves) | `apps/web/src/lib/church-history/layout.ts` |
| The page and its script | `apps/web/src/pages/[lang]/church-history.astro` |
| Page text | `churchHistory` in `apps/web/src/i18n/en.ts` and `ar.ts` |

To add a church: add an entry to one of the data files (a free lane number, a hue not already used, a parent that
exists, a year not earlier than its parent's, and every text in both languages), and a short name in `SHORT_NAMES`
in `index.ts`. Tests check all of this, and that the English text has no Arabic letters and the Arabic text no Latin
letters.

## Content status

The texts are drafts written without per-entry citations (the owner's decision), in a neutral voice with the
Coptic Orthodox view marked. They are not reviewed by clergy or checked against sources, and the page says so.
Please have them checked before relying on them, in particular the Arabic, the statements on Christology after
Chalcedon, and the 1054 and Reformation entries.

## Adding or changing a point of faith

A point is a few positions, each one sentence in the same frame, with the words that differ between ** and ** (in
both languages). Add the point to `compare.ts`, then say in `positions.ts` which position each church takes. The tests
check that every church has a position on every point, that every position is used, that the bold marks pair up in
both languages, and that the English has no Arabic letters and the Arabic no Latin letters.
