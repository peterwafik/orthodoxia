# Synaxarium summaries

These are the short summaries shown on the Calendar & Synaxarium day pages (`/en/calendar/<month>/<day>/`). The
design is in `docs/superpowers/specs/2026-11-21-calendar-synaxarium-design.md`. The schema is `SynaxariumSummaries`
in `packages/content-schema/src/synaxarium.ts`.

- **Stories.** The full text of each day's commemorations, in English and Arabic, is collected by
  `node scripts/synaxarium/fetch.ts` from St-Takla.org's Synaxarium into `data/synaxarium/synaxarium.json`. The day
  pages show it in full. The owner decided to publish it while St-Takla's permission is asked for
  (`content/sources/st-takla-synaxarium.yaml`).
- **Files.** There is one file per month: `03-hatour.yaml` holds month 3.
  - Under `days`, each day has an `en` list and an `ar` list.
  - Each list has one summary per commemoration, in the order that language's list has in `synaxarium.json`. Use
    `null` to skip one.
  - The tests check that every list lines up.
- **Summaries** are shown as "In brief" above each story. They are written in our own words: one to three short sentences. Every fact must come from that day's
  story. Never copy St-Takla's sentences, and never add dates, places or miracles the story doesn't give.
- **Review.** The summaries are AI-written, so `review` is `{ status: draft, origin: ai-generated }`, and the page
  shows "Draft" until a listed reviewer signs the month off.
