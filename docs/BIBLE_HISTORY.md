# Bible history chart

`/en/bible-history/` and `/ar/bible-history/`: every man and woman the Bible names, about 3,080 people, on one
interactive wheel of time from Adam to the apostles. It is modelled on the classic printed "World History Chart in
accordance with Bible chronology", with bars on concentric rings coloured by descent, but it can be navigated and
every date says how it is known.

## The picture

- **Wheel or straight.** Time runs clockwise round the wheel from creation (at the top) to the end of the apostolic
  age. Each person is a bar in a ring. The straight view puts the same lanes in rows. On the Arabic page the straight
  view runs right to left.
- **The scale changes by period.** The millennia before Abraham hold a few dozen people. The centuries of the kings
  and the exile hold thousands. So each period has its own share of the chart (`lib/bible-history/scale.ts`), and the
  year marks show the scale.
- **Colours are lines of descent.** Gold is the line of promise (the ancestors of Christ in Matthew 1 and Luke 3, up to
  Adam). Purple is Israel, mauve the other descendants of Shem, orange Ham, blue Japheth, green Cain. Grey is for
  people whose descent the Bible does not give. All of this is worked out from the family links
  (`lineOf` in `lib/bible-history/place.ts`).
- **Inner rings hold the people whose dates are known.** Thick bars are people written by hand. The thin outer bars
  are estimates (see below), drawn as short faint marks. A darker strip inside a bar is a reign, judgeship,
  priesthood or ministry. A small diamond marks a person named outside the Bible.
- **Select a bar** (or search, or follow a link in the index) to open a panel with:
  - the dates and how they are known;
  - the summary and passages (links into the Bible reader);
  - the family, each person a link;
  - the evidence outside the Bible, with how sure scholars are of it;
  - links to Faith & Evidence.

  Lines on the chart join the person to their parents and children.
- **Three counts** (the switch above the chart; the logic is in `data/bible-history/primeval.ts`).

  1. **Documented history** (the default) dates only what can be fitted to the records of Egypt, Mesopotamia and the
     lands of the Bible.
     - **Adam to Terah are undated.** They are shown in order, with their Genesis lifespans, in a band at the start of
       the chart with no year marks. The genealogies of Genesis 5 and 11 can pass over generations: W. H. Green,
       "Primeval Chronology" (1890); B. B. Warfield; K. A. Kitchen. The Bible shows this itself: Cainan is in Luke 3:36
       and the Septuagint but not in the Hebrew, Matthew 1 omits three kings, and Ezra 7:1–5 is shorter than
       1 Chronicles 6. The Church has never defined the age of the world. Even the strongest no-gap case, the Septuagint
       chronology of H. B. Smith Jr., puts the Flood about 3300 BC, inside the continuous record of the Uruk period.
       Noah's note gives one scholarly suggestion for the Flood's setting (the river-flood layers at Shuruppak, Kish and
       Uruk, about 2900–2750 BC) as a proposal only. Peleg's note dates Babel after the first baked-brick building
       (about 3500 BC) and before Abraham.
     - **A band of the first civilisations** follows the undated band: from 3700 BC to Abraham, with no people in it,
       only the events of documented history.
     - **The patriarchs.** Abraham is placed about 1980 BC, in the Middle Bronze Age. This uses the Bible's ages as
       written, 430 years in Egypt (Jacob arrives about 1690 BC, when Asiatics were settling at Avaris) and the Exodus
       about 1260 BC.
     - **The Exodus about 1260 BC** follows Exodus 1:11 (Raamses, built under Ramesses II), the Merneptah stele (Israel
       in Canaan by about 1208 BC), the 13th-century destruction of Hazor and the Iron I highland villages. It reads the
       480 years of 1 Kings 6:1 as twelve generations, after Kitchen and Hoffmeier.
     - **The judges** are fitted between the entry into Canaan (about 1220 BC) and Saul (about 1050 BC), overlapping.
     - **How it works in code.** Every hand-written person is dated in the Hebrew count; `mapYear` moves the
       patriarchs and the Exodus generation 186 years later and squeezes the judges. Remaining problems are stated, not
       hidden: Jericho and Ai fit neither Exodus date, and critical scholars see no direct trace of the Exodus. The
       research notes behind this count are summarised in "Sources for the counts" below.
  2. **Septuagint** reads the Septuagint's numbers as a continuous chronology. Creation about 5425 BC, the Flood about
     3183 BC, Abraham 1951 BC. It takes 215 years in Egypt (Exodus 12:40 "in Egypt and in the land of Canaan", as in
     the Samaritan text, Josephus *Antiquities* 2.318 and Galatians 3:17), so Jacob arrives in 1661 BC, at the start of
     the Hyksos period. The Exodus is in 1446 BC. The 215 years fit Egyptian history only with this early Exodus.
  3. **Hebrew** reads the Hebrew (Masoretic) numbers the same way. Creation 4174 BC, the Flood 2518 BC, Abraham 2166 BC,
     430 years in Egypt, the Exodus in 1446 BC.

  All three agree from Saul on. The count note also gives the Church Fathers' world eras (creation about 5500 BC;
  Byzantine 5509, Alexandrian 5493) as calendar tradition, not dogma.
  - Cainan's note gives the manuscript evidence on both sides. He is in P75, Sinaiticus, Vaticanus and Jubilees.
  - Shem's note shows what the counts change: in the Hebrew count Shem outlives his descendants and lives into
    Abraham's life (the basis of the Jewish tradition that he was Melchizedek). In the Septuagint count each father
    dies before his son.
  - The patriarchs' notes give no absolute years, because their years differ between counts. The panel says which
    count the shown years follow.
- **Events of documented history beside the Bible.** 35 dashed lines, coloured by region, from the first writing at
  Uruk (about 3300 BC) to the destruction of the Temple in AD 70 (`data/bible-history/world.ts`). Each has its date,
  how it is dated and a source; pointing at a line shows them. Egyptian dates follow Shaw's *Oxford History of Ancient
  Egypt* and the radiocarbon model of Bronk Ramsey et al. (*Science*, 2010); Mesopotamia is on the middle chronology;
  from the 9th century BC the Assyrian eponym list, fixed by the eclipse of 763 BC. Labels are drawn only where they
  have room.
- **The address keeps the view:** `?p=<person>`, `view=line`, `count=mt`, `hide=<lines>`, `est=0`, `ev=1`.

## Where the dates come from

| Basis | Meaning |
| --- | --- |
| `text` | Counted from the Bible's own numbers (Genesis 5 and 11, the patriarchs' ages, 1 Kings 6:1, Exodus 12:40). |
| `reign` | Kings of Israel and Judah: Thiele's chronology, as revised by McFall. Co-regencies are noted. |
| `record` | Fixed by records outside the Bible (Assyrian, Babylonian, Persian, Seleucid, Roman). |
| `scholarly` | An approximate date that historians give. |
| `tradition` | From Church tradition (for example the martyrdom of St Mark in Alexandria in AD 68). |
| `estimate` | Placed by the chart. The Bible gives no date for that person. |

In the Septuagint and Hebrew counts, the dates come from the Bible's own numbers:

- Abraham born 1951 BC (Septuagint count) or 2166 BC (Hebrew count);
- the Exodus in 1446 BC;
- Saul, David and Solomon from 1050 BC;
- the divided kingdom with Thiele's dates.

Where scholars differ, the person's dating note says so, for example on the date of the Exodus or the setting of
Judith and Tobit.

**Estimates.** For someone with no hand-written dates, the chart looks for the nearest dated relative and steps one
generation at a time (`placeDates`). Failing that, it uses the narrative chapter where the person first appears
(`chapterYear`) or the middle of the period STEPBible gives. The result is kept inside that period. A small fixed
offset taken from the key spreads the long lists (Ezra 2, Nehemiah 3, 1 Chronicles 12) so they do not all sit on one
year. The panel of an estimated person says plainly that the date is an estimate.

## Where things are

| What | File |
| --- | --- |
| Everyone the Bible names (STEPBible TIPNR, CC BY 4.0) | `data/bible-people/people.json`, built by `npm run people` (`scripts/bible-people/`) |
| Arabic names of all of them, as the Van Dyck Bible spells them | `data/bible-people/names-ar.json` |
| Adam to Abraham, in both counts | `apps/web/src/data/bible-history/primeval.ts` |
| People written by hand | `core-patriarchs.ts` (Abraham to the judges), `core-kings.ts` (Saul to Malachi), `core-nt.ts` (the deuterocanon, the Maccabees and the New Testament) |
| Evidence outside the Bible (inscriptions, seals, royal records, ancient historians) | `evidence.ts` |
| Placement: dates, lines, lanes | `apps/web/src/lib/bible-history/place.ts` |
| The page's data, one file per language | `lib/bible-history/payload.ts`, served as `/<lang>/bible-history.json` |
| Drawing and interaction (canvas) | `lib/bible-history/chart.ts` |
| Page text | `lib/bible-history/ui.ts` |
| The page | `apps/web/src/pages/[lang]/bible-history.astro` |
| Tests | `apps/web/src/data/bible-history/bible-history.test.ts` |

**To add or correct a person,** edit the right `core-*.ts` file. The key must be the person's TIPNR key: search
`data/bible-people/people.json`. Use an `x:` key with a `parent` or `line` only for someone TIPNR does not list.
Give dates with their `basis`, both languages, and passages the reader can open. Then run
`npm run people:check` (a quick check while writing) and the vitest suite.

**To add evidence,** add an entry to `evidence.ts`. Every person in it must be a TIPNR or core key. Give at least one
link, a certainty (`certain`, `probable`, `debated`) and, where scholars dispute the reading or the object, a `note`
that says so.

## For reviewers

- The Arabic names of the 3,053 STEPBible people were taken from the first verse that names each person in the Van
  Dyck text. A few dozen unnamed people have short descriptions instead (for example امرأة لوط). The deuterocanonical
  names follow common Coptic usage, because Van Dyck has no deuterocanon.
- The dates written by hand, and the evidence, were researched against published chronologies, museum records and
  Lawrence Mykytiuk's lists. They have not yet had a named human review.

## Sources for the counts

- Exodus and patriarchs:
  - P. J. Ray Jr., "The Duration of the Israelite Sojourn in Egypt", *Andrews University Seminary Studies* 24 (1986).
  - Josephus, *Antiquities* 2.204 and 2.318.
  - J. K. Hoffmeier, *Israel in Egypt*.
  - J. K. Hoffmeier and G. Rendsburg, "Pithom and Rameses (Exodus 1:11)" (2022).
  - A. Laato, "The Mysterious Number 480 in 1 Kings 6:1" (2016).
  - P. Bienkowski and B. Wood on Jericho (*Biblical Archaeology Review*).
  - K. A. Kitchen, *On the Reliability of the Old Testament* (2003), consulted through secondary summaries. Check
    against the book.
- Before Abraham:
  - W. H. Green, "Primeval Chronology", *Bibliotheca Sacra* (1890).
  - B. B. Warfield, "On the Antiquity and the Unity of the Human Race" (1911).
  - H. B. Smith Jr., Associates for Biblical Research (the Septuagint as a chronology).
  - P. H. Seely and P. Penley (*JETS*, 2007) on Babel.
  - Livius.org on the Mesopotamian flood layers.
  - OrthodoxWiki on creation; the Coptic Diocese of the Southern United States, questions and answers.
- The two videos the user pointed to (NathanH83, "How Long Were The Israelites In Egypt?" and "Were the Pyramids Built
  Before the Flood?"):
  - Kept: the 215-year reading, as an option in the Septuagint count, where it fits Egyptian history with the early
    Exodus. Also the point that the Hebrew numbers make Shem outlive his descendants.
  - Not followed: the claim that the second Cainan is a late addition (he is in the earliest manuscripts of Luke).
  - Not followed: the claim that the Hebrew numbers were changed on purpose (an accusation scholarship does not support).
  - Not followed: flood-geology arguments.
