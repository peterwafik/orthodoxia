# Reading plans: daily cards built from blocks, chosen by a short quiz

Status: ready for approval, 2026-11-21. Scope: a new section, `/en/plans/` and `/ar/plans/`.
Proposal page shown to the owner: `docs/superpowers/brainstorm/reading-plans.html`.

## Intent

The reader is young, at home and reading alone. They don't catch everything the first time and lose interest
quickly. They need two things:

- to finish each session having understood one real thing;
- a reason to come back tomorrow.

Plans start from what the reader already cares about (stories, people, places, questions, life). They are
served in small steps, one idea per screen. The tone is a guide, not a game.

**Success:**
- A new reader answers four questions in under a minute and gets a plan that fits them.
- Each day takes the time they chose (5, 15 or 30 minutes) and ends with a clear "done".
- They can stop for a week and pick up where they left off, without feeling they failed.

## Decisions the owner made

- **Design B, daily cards.** A day is 4–6 cards, tapped or swiped through: Hook → Read → Understand → Think →
  (the style's extra card) → Done. A thin progress strip sits at the top.
- **Way of making plans 3, building blocks and a quiz.**
  - Reusable "day blocks" are written once and tagged.
  - A four-question quiz (interest, pace, style, experience) picks the plan and how each day is served.
  - The reading style changes the wrapping, never the passage.
- **Gentle progress only.**
  - Shows "Day n of N", the finished days ticked on the strip, a "continue" button and a finished-plan card.
  - No streaks, points, badges or leaderboards. Nothing marks a missed day.
- **Plans to build** (seven):
  - The Big Story
  - Meet Jesus
  - Heroes and Flawed People
  - Walk the Land
  - Big Questions
  - Wisdom for Real Life
  - With the Church Year

  "Pray with the Psalms" is not in this round.
- **The four reading styles:**
  - Explorer adds a "Go deeper" card.
  - Achiever adds a progress card and one quick question.
  - Reflector adds a private one-line journal.
  - Connector adds a "Read together" card that sends the day to a friend.

## Goals, non-goals, anti-goals

**Goals**
- Seven plans in Arabic and English, using the pages the site already has: the Bible reader and commentary, the
  Bible history chart's person panels, the Bible atlas, and Faith & Evidence.
- Plans work without an account. Everything personal stays on the reader's device.
- Every day page has its own address, so a friend opens the same day.

**Non-goals (this round)**
- Audio, push reminders, accounts, syncing between devices, group features beyond sharing a link.
- The full daily Katameros lectionary (see With the Church Year).
- Any change to the Agpeya or the Holy Mass pages, apart from a link to the plans.

**Anti-goals.** Any of these makes it a failure even if it works:
- It feels like homework or a scoreboard: missed-day gaps, red marks, "you broke your streak".
- Framing text is presented as Scripture, or as approved by the Church.
- Long commentary dumped on the reader. Every card fits one phone screen without scrolling, apart from the passage
  itself.

## Approaches considered

| | Approach | Trade-off | Outcome |
|---|---|---|---|
| Design | A · path of stops | Overview and a sense of journey; long single pages per day | Not chosen |
| | **B · daily cards** | One idea per screen, a clear "done", phone-first | **Chosen** |
| | C · library and calendar | Simplest to build; feels like homework, and gaps show | Not chosen |
| Making | 1 · hand-written fixed plans | Best single voice; slow, and doesn't adapt | Not chosen |
| | 2 · assembled from site data by rules | Fast; no hooks, and the commentary is too long | Not chosen |
| | **3 · building blocks and a quiz** | Fits each reader from one set of writing; more to build | **Chosen** |

## Content model

Content files live in `content/plans/`. They are validated by a schema in `packages/content-schema` and by
`npm run validate:content`.

```
content/plans/
  README.md            the format, with an example
  plans.yaml           the seven plans: id, names, who it's for, sections, ordered block ids
  blocks/<id>.yaml     one day block
  church-year.yaml     seasons → block ids (see below)
```

**A block** (one day's material):

```yaml
id: mark-1-fishermen            # kebab-case, stable; used in addresses and on-device progress
passages:
  short: MRK.1.14-20            # the 5-minute reading
  full: MRK.1.1-20              # 15 minutes
  deep: MRK.1.1-45              # 30 minutes (also gets the commentary link and a "go deeper" item)
title: { en: Four fishermen drop their nets, ar: … }
hook: { en: …, ar: … }          # 1–3 sentences: why this matters, a question or a surprise
explain: { en: …, ar: … }       # ≤ 60 words; background the reader needs, in plain words
explainNew: { en: …, ar: … }    # optional, extra help for first-time readers
think: { en: …, ar: … }         # one open question about their own life
check:                          # for Achievers; nothing is scored or stored
  question: { en: …, ar: … }
  options: [{ en: …, ar: … }, …]
  answer: 1
  why: { en: …, ar: … }
deeper:                         # for Explorers and the 30-minute pace; at least one item
  - { kind: verse, ref: ISA.40.3 }
  - { kind: place, id: jordan-river }        # Bible atlas place id
  - { kind: person, key: Peter@… }           # Bible history person key
  - { kind: question, slug: … }              # Faith & Evidence question
words: [gospel, baptism]        # glossary terms explained on first use
sources: [malaty-commentary]    # registry ids the framing draws on; Malaty gets an inline credit link (below)
tags: { interests: [jesus, story], difficulty: 1 }
review: { status: draft, origin: ai-assisted }
```

- **Passage references** use the OSIS-style codes the Bible package already uses. The validator checks that each
  one exists in every edition the plans show.
- **Review.** Every block carries `review` as defined in `packages/content-schema/src/review.ts`
  (CONTENT_GUIDELINES.md rule 10). Blocks are drafted with AI help from the existing commentary, people, places and
  evidence data, so they start as `draft` / `ai-assisted`. The page labels them "Draft" until a reviewer listed in
  THEOLOGICAL_REVIEW.md signs them off.
- **Fr. Tadros Malaty credit (my call).** His permission requires a credit and a link on every entry that uses his
  commentary. A block whose `sources` include `malaty-commentary` shows one inline line inside its Understand
  card: "Drawn from Fr. Tadros Malaty's commentary", linking to that chapter's commentary. This is done the way
  the verse bubble credits him today, not as a page credits block, so the no-credits-block rule and its test still
  hold.
- **No Bible text is written new.** Only the framing (hook, explanation, question, check) is new. Facts in an
  explanation must come from a source in the registry or from the commentary. Nothing is quoted from memory.
- **The glossary.** A small bilingual glossary of plan words (`content/plans/words.yaml`), so a term is explained
  once and reused.

**A plan** in `plans.yaml`:
- `id`, name, "who it's for" line and a short description, all in both languages;
- `sections`: named groups of days ("In the beginning", "The fathers"…), shown as segments on the progress strip;
- `days`: an ordered list of block ids. A block may appear in several plans.

**The seven plans.** Target lengths and what each is built from:

| Plan | Days | Built from |
|---|---|---|
| The Big Story | 40 | Key passages from Genesis to Acts. Each day links to the Bible history chart (`?p=` person or period). |
| Meet Jesus | 16 | Mark, one chapter a day. The pilot plan. |
| Heroes and Flawed People | 30 | One person a day, linked to that person's panel on the Bible history chart. |
| Walk the Land | 21 | Places in the order of the story, linked to the atlas. Ends in Alexandria. |
| Big Questions | 21 | A passage plus the matching Faith & Evidence question. |
| Wisdom for Real Life | 31 | Topics: anxiety, friendship, anger, identity, purity, time, phones. |
| With the Church Year | per season | See below. |

Some blocks are shared between plans (Joseph is in The Big Story and in Heroes), so the total is about 150 blocks
before the Church Year.

## With the Church Year

There is no Katameros data in the project, and no licensed source has been found. So this round does not follow
the daily lectionary. Instead:

- `church-year.yaml` maps seasons to hand-chosen blocks.
- Season dates are computed on the device:
  - Coptic Pascha by the Alexandrian computus (Julian date + 13 days for 1900–2099).
  - The moveable seasons from Pascha.
  - The fixed feasts by the Coptic calendar.
- **Seasons in this round:**
  - The Nativity fast (25 Nov – 6 Jan, 43 days).
  - The Fast of Nineveh (3 days, two weeks before Great Lent).
  - Great Lent with Holy Week (55 days). Each week is organised round that Sunday's Gospel, as the Coptic Church
    reads it (the temptation, the prodigal son, the Samaritan woman, the paralytic, the man born blind, Palm
    Sunday).
- **Outside these seasons**, the plan shows when the next season starts and suggests another plan meanwhile.
- **Sources (my call).** The Lent Sunday Gospels and the fixed-feast dates come from a named, published Coptic source.
  That source is added to the registry before this step starts; nothing is written from memory. If no source can be
  registered, the season is left out.
- **Later:** the Apostles' fast, the fifty days after Pascha, and the full daily readings, once a licensed
  Katameros source exists.

## The screens

**`/[lang]/plans/`: start here**
- The four-question quiz: interest, time, style, experience.
- The result: the plan and how each day will be served, with "Start" and "Choose another plan".
- Below it, the shelf of the seven plans.
- Once a plan is under way, this page leads with "Continue: Meet Jesus · Day 4".
- The quiz answers can be changed at any time from a "Your reading style" control.

**Interest → plan:**

| Interest | Plan |
|---|---|
| Stories | The Big Story (Meet Jesus first if the reader has never read the Bible) |
| People | Heroes and Flawed People |
| Places and maps | Walk the Land |
| Big questions | Big Questions |
| Advice for life | Wisdom for Real Life |
| Keeping step with church | With the Church Year |
| I just want to start | Meet Jesus |

**`/[lang]/plans/<plan>/`: a plan's overview**
- Its description, the sections, and every day with its title.
- Finished days are ticked; the next day is highlighted.

**`/[lang]/plans/<plan>/<day>/`: one day as cards** (static page, one per day)

1. **Hook.** Dark card, large type.
2. **Read.** The passage text itself, shown on the card in the reader's language. The length comes from their pace;
   the 30-minute pace adds the commentary link. Links: "Open in the Bible reader" and "Read with commentary".
3. **Understand.** `explain`, plus `explainNew` for first-time readers. Glossary words are tappable.
4. **Think.** The open question.
5. **The style's extra card:**
   - Explorer: the `deeper` links.
   - Achiever: "Day n of N" and the quick check. The reader picks an answer, then sees the right one and `why`.
     Nothing is kept.
   - Reflector: a one-line journal, saved on the device only.
   - Connector: "Send to a friend", using the device's share sheet, or copying the day's link where there is none.
6. **Done.** "Day n of N done". The reader can mark it done or go back; it offers tomorrow's title as a teaser.

**Card behaviour**
- Moving between cards: swipe on touch; arrows, keyboard and Next/Back buttons everywhere.
- Arabic pages run right to left, so swipe and arrows are mirrored.
- Respect `prefers-reduced-motion`.
- Without JavaScript the cards show as one readable column, with all extras visible.

**Text size.** The same three-step A−/A+ control as the Holy Mass.

## Data on the device

| Key | Holds |
|---|---|
| `orthodoxia:plans` | Quiz answers (`interest`, `pace`, `style`, `experience`), the active plan, and per plan the finished day indexes and the last day opened |
| `orthodoxia:plans:journal` | The Reflector's lines, by block id |

- Both keys are wrapped in try/catch; the pages work without storage.
- Nothing is sent anywhere.
- A "Clear my plan data" button sits on the start page.

## Links into the rest of the site

- **The site header.** Add "Reading plans" to the Readings drop-down, and to the footer's Readings group.
- **The Bible reader.** A chapter that is a day in some plan shows a small "Part of: Meet Jesus · Day 4" link.
- **The command palette.** Search reaches the plans.

## Rollout

The owner chose to rush the Church Year for this year's Nativity fast (25 Nov – 6 Jan), so the work runs as follows.

1. **The engine**, built once for all plans:
   - the content schema and validator;
   - the three page types, the quiz, the cards and on-device storage;
   - the header and footer links.
2. **Two plans, written in parallel:**
   - **Meet Jesus** (16 blocks), the pilot.
   - **With the Church Year, Nativity fast only.** This means the computus, `church-year.yaml` with its registered
     source, and about 43 blocks. It goes live during the fast, though probably not on the first day. Days are
     released as they are written and approved, and the plan says how far it reaches.
3. **The other plans, one at a time:**
   1. Heroes and Flawed People
   2. Walk the Land
   3. The Big Story
   4. Big Questions
   5. Wisdom for Real Life
4. **The rest of the Church Year:** the Fast of Nineveh and Great Lent with Holy Week, before Lent 2027.

## Decided after the builder check

- **The English text is the KJV for now.** The owner chose this so work can start at once. The Read card takes its
  text from whichever edition is the plans' English edition, in one setting, so the World English Bible (or another
  modern text) can be swapped in later without touching the blocks. Passage references are checked against the KJV
  and the Van Dyck.
  - Because the KJV is hard going, the Understand card may gloss archaic words that matter to the passage
    ("thee", "straightway").
- **Arabic is the Van Dyck**, the only Arabic text the site has.
- **Going live.**
  - Each plan has `live: false` in `plans.yaml` until the owner has read it through and said OK. Only live
    plans get pages, appear on the shelf and can be chosen by the quiz.
  - Live plans show each unreviewed block as "Draft" (CONTENT_GUIDELINES.md rule 10), as Faith & Evidence does.
  - A block moves to `reviewed` when a listed reviewer signs it off.
  - In the Church Year plan, the owner's OK can be given a few days at a time, so the fast is not held up.

## Left to the builder

- The component structure, the swipe implementation and the exact card styling, within the site's design tokens.
- How quiz answers map to card variants in code.
- Which deep-link format each site section takes. Use the existing ones: `?p=` for the chart, atlas place ids,
  question slugs.
- The tests: schema validation, plan integrity (every block id exists, every reference resolves), the computus
  against known Coptic Pascha dates, and storage that fails safely.
