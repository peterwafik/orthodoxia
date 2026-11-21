# Reading plans

The content behind `/en/plans/` and `/ar/plans/`. The design is in
`docs/superpowers/specs/2026-11-21-reading-plans-design.md`. The schemas are in
`packages/content-schema/src/plans.ts`.

| File | What it holds |
| --- | --- |
| `plans.yaml` | The seven plans, in order. Each has its names, who it is for, its sections and its days (block ids). |
| `blocks/<id>.yaml` | One day's material. The file name must be the block's `id`. |
| `church-year.yaml` | The Church Year seasons and the blocks read on each day of them, with the registered source for the dates. |
| `words.yaml` | Words a day explains the first time a reader meets them. |

## A block

```yaml
id: mark-01
passages:                 # one chapter each; USFM book codes
  short: MRK.1.14-20      # the 5-minute reading
  full: MRK.1.1-20        # 15 minutes
  deep: MRK.1             # 30 minutes
title: { en: …, ar: … }
hook: { en: …, ar: … }    # 1–3 sentences: why this matters
explain: { en: …, ar: … } # at most about 60 words, plain words
explainNew: { en: …, ar: … }   # optional: extra help for first-time readers
think: { en: …, ar: … }   # one open question about the reader's own life
check:                    # optional: the Achiever's quick question; nothing is scored or kept
  question: { en: …, ar: … }
  options: [{ en: …, ar: … }, …]   # 2–4
  answer: 1               # index of the right option
  why: { en: …, ar: … }
deeper:                   # at least one
  - { kind: verse, ref: ISA.40.3 }
  - { kind: place, id: jordan }                  # a Bible atlas place id
  - { kind: person, key: Peter@Mat.4.18-2Pe }    # a Bible history person key
  - { kind: question, slug: did-jesus-claim-divine-authority }   # a Faith & Evidence question
words: [gospel]           # ids from words.yaml
sources: []               # registry ids the notes draw on; malaty-commentary shows his credit line
review: { status: draft, origin: ai-generated }
```

## Rules

- **Never write Bible text new.** The passage is shown from the plan editions: the KJV in English and the Van Dyck in
  Arabic (`PLAN_EDITION` in `apps/web/src/lib/plans/passage.ts`). Only the notes around the passage are written new.
- **Facts in the notes must come from a registered source or the commentary.** Nothing is quoted from memory.
- **Review status.** AI-drafted blocks are `draft` with `origin: ai-generated` or `ai-assisted`, and the page labels
  them "Draft". A block becomes `reviewed` only with a listed reviewer and date (THEOLOGICAL_REVIEW.md).
- **Going live.** A plan stays `live: false` until the owner has read it through.
  - Plans that aren't live get no pages.
  - To read plans before they are live, build with `PLANS_PREVIEW=1`.
- **Checks.**
  - `npm run validate:content` checks every file against its schema.
  - The apps/web tests (`checkPlans`) check that:
    - every block, word and source exists;
    - every passage is in both editions;
    - every place, person and question link is real.
