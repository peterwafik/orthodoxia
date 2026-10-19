# Topic markers on the Bible reader

Every chapter page has an optional floating button (bottom corner, mirrored in Arabic). It opens a panel of
43 topic families and 1,207 subtopics; ticking one colours the verses of the chapter that belong to it. The
choice is remembered in the browser.

**Main topics.** Ticking a family selects all of its subtopics. Unticking it removes them and puts back only
the subtopics that were ticked before the family was ticked. Ticking the last subtopic by hand completes the
family; removing one drops the family tick. A family with some subtopics ticked shows the half-ticked state.
The logic is `selection.ts` (unit-tested).

## Where the data is

| What | File |
| --- | --- |
| The taxonomy (families 1 to 43, English and Arabic) | `apps/web/src/lib/topics/taxonomy-source-*.ts` |
| Subtopic to verses map, one file per family | `apps/web/src/lib/topics/family-maps/f01.ts` to `f43.ts` |
| Older hand-listed passages (still merged) | `apps/web/src/lib/topics/topic-passages.ts` |
| Nave's Topical Bible, reduced to verse ranges | `data/topics/verses.json` (committed, built) |
| Per-book marks loaded by the reader | `/topics/marks/<BOOK>.json` |
| Topic names per language (loaded on first open) | `/en/topics.json`, `/ar/topics.json` |
| The popup | `apps/web/src/components/bible/TopicMarkers.astro` |

## How verses get a topic

Nothing is guessed. A verse is marked from one of three real sources:

1. **Nave's Topical Bible** (Orville Nave, 1903, public domain). A family file names the Nave topic or heading
   that means the same thing (`GOD>LOVE OF`, `JESUS, THE CHRIST>Walks on the lake`, `ABRAHAM`, ...). A heading
   is used only when it is equivalent to the subtopic; where unsure the entry is left out.
2. **Hand-listed passages** (`passages` in the family file) for subtopics Nave does not cover, such as the
   apologetics questions or the parables. These are short selections of the key passages, not full indexes; the
   panel underlines such topics with a dotted line.
3. The family's **starting passages** from the taxonomy.

A family marks every verse of all its subtopics. The build is `npm run topics` (reads `data/topics/raw/nave.xml`,
which is git-ignored; `scripts/topics/fetch.ts` downloads it). It fails on an unknown Nave topic or heading or on
an empty result, so a wrong key cannot pass silently. `scripts/topics/coverage.ts` reports how many subtopics
have verses. Other maintainer tools in `scripts/topics/`: `find`, `outline`, `skeleton`, `suggest`.

Current coverage: all 1,207 subtopics have verses (Nave only 276, hand-listed only 753, both 178). References use
Hebrew/KJV numbering; Septuagint psalm numbers are converted.

## Family 44: the Coptic faith in Scripture and the early witnesses

The last family is not from the original list. For each point of faith of the church-history comparison (29 of them)
it gives the Bible verses the Coptic Orthodox Church cites, with a one-sentence claim, and the early witnesses it points
to: writings, councils and manuscripts, named by title, author and approximate date (for example the Didache, Ignatius of
Antioch, Justin Martyr, Irenaeus, Origen, Cyprian, Athanasius, Cyril of Alexandria, Codex Vaticanus and Codex Sinaiticus,
Rylands Papyrus 470, the Euchologion of Serapion, the Bawit icon of Christ and Abbot Mena). In the topic panel each of its
subtopics has a "Verses and early witnesses" section with links to the chapters; following a link ticks the topic, so
its verses are marked where it leads. A link such as `?topic=44.19` ticks a topic and opens the panel on its evidence;
the church-history page uses it.

The data is in `apps/web/src/data/coptic-evidence.ts`; the family and its verses are built from it
(`taxonomy-source-5.ts`, `family-maps/f44.ts`) and the links by `lib/topics/evidence.ts`. Only works that exist are
named, no chapter numbers are given unless well known, and everything is a draft for review by clergy.

## Limits

- Nave is a 1903 index of the KJV, so it can miss verses that other translations or the Septuagint phrase
  differently, and the hand-listed topics are selections, not exhaustive.
- Nothing has been reviewed by clergy; the panel says so.
- Nave is not yet listed in `content/sources/*.yaml`; adding it, with attribution, is a decision for the owner.

## Not included yet

Families 44 to 47 of the list (personal situations, real-life decisions, growth goals, research goals) are
search intentions rather than groups of verses; they are meant to map onto the families above and are not in
the data yet.
