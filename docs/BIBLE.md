# The Bible reader

Status (2026-10-11): **implemented**. There are three editions, about 4,000 static chapter pages,
and no JavaScript is required to read.

## Editions

| Edition | URL | Old Testament | Deuterocanon | New Testament | Psalms |
|---|---|---|---|---|---|
| **KJV** (English default) | `/en/bible/kjv/…` | KJV 1769 | KJV Apocrypha, plus Psalm 151 from Brenton | KJV | Hebrew numbering |
| **LXX** (English) | `/en/bible/lxx/…` | Brenton's Septuagint (1851), with the Greek Esther and Daniel | Brenton | KJV (Brenton has no NT) | **Septuagint numbering**, as in the Agpeya, with Psalm 151 |
| **فاندايك / Van Dyck** (Arabic default) | `/ar/bible/svd/…` | Smith–Van Dyck (1865) | Arabic Wikisource text (see below) | Smith–Van Dyck | Hebrew numbering |

### Why these texts
- **Arabic:** the Coptic Orthodox Church reads Smith–Van Dyck, which is public domain (eBible
  `arb-vd`). Sources: an ETSC journal article on the Van Dyck Bible, and copticchurch.net's
  "SVD" text. Details are in `phase-0/02-data-source-audit.md` and this feature's research notes.
- **English:** Coptic dioceses recommend the NKJV, and the Orthodox Study Bible for the
  deuterocanon (suscopts.org Q&A). Both are copyrighted. The KJV is the public-domain ancestor of
  the NKJV. Brenton's Septuagint represents the Old Testament tradition the Church follows. The
  owner chose to offer both (2026-10-11).

### The Arabic deuterocanon: read this before relying on it
No public-domain digital Arabic text of these books was found. The Bible Society of Egypt edition
Copts use is copyrighted. The reader therefore uses Arabic Wikisource (CC BY-SA 4.0), pinned to
specific page revisions:

- The pages were added anonymously in 2011, **without naming a source**.
- The text follows the **Latin Vulgate** tradition, probably the 1876–1880 Jesuit translation.
  Evidence: Tobit 1:1 mentions صفت (Sephet), as the Vulgate does, and Sirach has about 1,590
  verses against about 1,370 in the Septuagint. It **differs in places from the Septuagint text the
  Coptic Orthodox Church follows**. Every page that uses it says so.
- Sirach 29:16–17 are missing from the source. There is no Arabic Psalm 151. The Letter of
  Jeremiah is Baruch 6.
- Derived data stays CC BY-SA 4.0 and is credited in the footer and on `/sources/`.

Replacing it is a priority. The plan is to ask the Bible Society of Egypt for permission, or to
find a verified public-domain Jesuit text.

## Requires theological review
- The deuterocanonical book list. It is drafted from the LA diocese list (Tobit, Judith, the
  additions to Esther and Daniel, Wisdom, Sirach, Baruch, 1–2 Maccabees, Psalm 151). Sources
  disagree about Psalm 151 and the Prayer of Manasseh.
- Arabic book names and the book order (`packages/bible/src/books.ts`).
- Whether the Septuagint edition should become the default in English.

## How it is built

```
data/bible/raw/            pinned raw files: 3 eBible USFM zips + 9 Wikisource page revisions (committed)
data/bible/sources.json    SHA-256 pins, URLs, Wikisource revision IDs
scripts/bible/fetch.ts     verify pins / --update to re-download and re-pin
scripts/bible/build.ts     parse → data/bible/build/<edition>/<BOOK>.json + manifest.json (git-ignored)
packages/bible/            USFM + Wikisource parsers, canon & editions, psalm numbering, cross-edition mapping
apps/web/src/pages/[lang]/bible/   index → edition → book → chapter pages
```

`npm run bible` verifies the pins and rebuilds the data, and `npm run build` runs it. The build
fails on a missing book or an empty chapter. It records every verse number a source skips in
`manifest.json` (136 notices, mostly genuine Septuagint differences). `scripts/check-links.ts`
verifies every internal link after the build.

### Switching edition or language keeps your place
`equivalentLocation()` (`packages/bible/src/locate.ts`, with tests) maps:
- Septuagint ↔ Hebrew psalm numbers, e.g. LXX Psalm 50 ↔ Hebrew Psalm 51;
- Psalm 151 between its own book and the Septuagint psalter;
- the Letter of Jeremiah ↔ Baruch 6;
- the Song of the Three ↔ Septuagint Daniel 3.

When there is no exact counterpart, the link goes to the book's page.

### Cross-references
KJV and Van Dyck chapters in the 66 books link to the explorer
(`/en/explore/threads/?ref=Book.Chapter`). Septuagint Old Testament chapters don't, because their
verse numbers differ from the KJV numbering the explorer uses.

## Updating a text
```sh
npm run bible:update     # re-downloads everything and re-pins; review the diff in data/bible/
```
For Wikisource, review the new revisions before committing.

## Not implemented yet
Search, a side-by-side Arabic/English view, bookmarks, verse-level sharing UI beyond `#v16`
anchors, and verse-level versification mapping between editions.
