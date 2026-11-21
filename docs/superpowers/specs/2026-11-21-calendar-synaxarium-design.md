# Calendar & Synaxarium

Status: approved by the owner, 2026-11-21. Scope: `/en/calendar/` and `/ar/calendar/`, plus a link from the Holy Mass.

## Intent

The page shows the whole Coptic year: every day with its feasts, fasts and the saints the Synaxarium commemorates.
Each day has its own page. The Holy Mass journey's Synaxarium stop opens today's page, so a reader can follow along
without leaving the site.

## Decisions the owner made

- **Where the Synaxarium comes from.** The owner chose to ask St-Takla.org for permission and to build now.
  - Until St-Takla answers, each day shows the names of its commemorations, a short summary written for this site,
    and a link to the full story on St-Takla.
  - No story text is copied.
  - The current permission covers only Fr. Tadros Malaty's commentary, and no other St-Takla authors.
- **Collecting the names.** The owner approved a script that collects the names and addresses only, from about 730
  St-Takla pages (`scripts/synaxarium/fetch.ts`, giving `data/synaxarium/synaxarium.json`).
- **Pages.**
  - A year page: thirteen month grids with Gregorian dates, today outlined, fasts shaded, and feasts marked major or
    minor.
  - A static page per Coptic day: the date, feasts and fasts, the Synaxarium list, a line drawing, and the
    previous and next day.
- **Holy Mass.** The Synaxarium stop gets a "Read today's Synaxarium" link, worked out on the reader's device.
- **Summaries.** They are written month by month, starting with Hatour and Kiahk, and marked Draft. Days without
  one show the name and link only.

## Approaches considered

- **Copy St-Takla's texts.** Not allowed without permission.
- **The public-domain Basset edition (1904–1929).** It is the medieval Arabic recension, has no English, and would
  need its scans read into text.
- **Names, our own summaries and links, until permission comes.** Chosen.

## Data

- **The Coptic date** is worked out in code (`apps/web/src/lib/calendar/coptic.ts`).
  - 1 Tout falls on 11 September, or on 12 September in the year before a Gregorian leap year (valid for 1900–2099).
  - Months 1–12 have 30 days each. Nasie, the thirteenth, has 5 days, or 6 in a Coptic leap year.
- **Feasts and fasts** are in `apps/web/src/lib/calendar/feasts.ts`, from `wikipedia-coptic-calendar` and
  `wikipedia-coptic-fasting` (both in the source registry).
  - Fixed feasts are given by Coptic date. Moveable ones are counted from Coptic Pascha (`lib/plans/computus.ts`).
  - The tests check the fixed feast dates against St-Takla's own day headings in the collected data, for example
    that the Transfiguration falls on 13 Mesra.
  - **Fasts:**
    - the Nativity fast, 16 Hatour – 28 Kiahk;
    - Nineveh, three days, 14 days before Great Lent (see the note below);
    - Great Lent, 55 days;
    - the Apostles' fast, from the Monday after Pentecost to 4 Abib (the feast is on 5 Abib);
    - the Fast of the Virgin, 1–15 Mesra (the feast is on 16 Mesra);
    - Wednesdays and Fridays, except in the fifty days after Pascha and on major feasts.
  - **Paramoun** (the eve of the Nativity and of Theophany) is shown as a fast day.
- **Summaries** are in `content/synaxarium/<month>.yaml`, one entry per commemoration, per language. Each has
  `review: { status: draft, origin: ai-generated }`.

**Open note:** Wikipedia says the Fast of Nineveh begins "three weeks before the Monday" of Great Lent, while recent
church calendars place it 14 days before (for example 10–12 February 2025, with Lent from 24 February). The code uses
14 days. Check this against a Coptic calendar.

## Left to the builder

The layout, the drawings and the component structure, all in the site's design tokens and line-art style.

## Change, 2026-11-21: the full stories on the site

The owner asked for the St-Takla links to go and for every story to be readable on the site. Told that St-Takla shows
no terms of reuse, the owner chose to copy the texts anyway. This is recorded as `ownerDecision` in
`content/sources/st-takla-synaxarium.yaml`; the registry schema now accepts an import only with a licence or with such
a recorded decision.

- `scripts/synaxarium/fetch.ts` collects every day's stories in full: Arabic from St-Takla's Arabic Synaxarium,
  English from its English Synaxarium (`Coptic-Synaxarium-or-Synaxarion_English`; the older `books/en` story pages now
  redirect to the day pages). 366 days, 703 English and 869 Arabic stories. Navigation, captions and the site's own
  notes are left out; the text is otherwise unchanged.
- The day page lists the day's saints when there are several, then shows each saint with the summary as "In brief"
  (where written) and the full story. A story longer than four paragraphs shows three, then "Continue reading".
- No link to St-Takla and no credit on the pages (the owner's rule); the attribution is on the Sources page.
