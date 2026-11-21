# Reading Plans Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or
> superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `/en/plans/` and `/ar/plans/`: a quiz picks a plan, and each day is served as 4–6 cards drawn from
reusable content blocks. This round ships the engine, Meet Jesus, and the Nativity-fast part of With the Church Year.

**Architecture:**
- **Content.** Blocks and plans are YAML in `content/plans/`, validated by zod schemas in `packages/content-schema`.
- **Build.** At build time `apps/web/src/lib/plans/` loads them (`import.meta.glob`, as `lib/sources.ts` does) and
  checks they all fit together. Astro pre-renders one static page per plan day.
- **The reader's device.** A small client module keeps the quiz answers and progress in `localStorage` and turns
  the right extra card on.
- **Church Year.** Season dates are computed on the device from a pure computus module.

**Tech stack:** Astro 7, TypeScript run directly by node 24, zod 4, `yaml`, vitest.

**Spec:** `docs/superpowers/specs/2026-11-21-reading-plans-design.md`

## Global Constraints

- **Languages.** Bilingual en/ar everywhere. Arabic pages are RTL, and swipe and arrows are mirrored.
- **Bible text.** English plan text comes from `kjv`, Arabic from `svd`. Both are named in one constant,
  `PLAN_EDITION`.
- **Personal data.** It stays on the device: `orthodoxia:plans` and `orthodoxia:plans:journal`. All storage access
  is wrapped in try/catch, and pages work without storage.
- **Progress.** No streaks, points, badges or missed-day marks anywhere. The Achiever's check is never stored.
- **Review status.** Every block has `review: { status, origin }`. Blocks written for this round are
  `status: draft, origin: ai-generated`, and the page labels them "Draft".
- **Going live.** A plan with `live: false` gets no pages, isn't on the shelf and isn't chosen by the quiz. The
  owner flips it after reading it.
- **No credits block** on any page (the `no-credits-block.test.ts` rule). Malaty's credit is one inline line in the
  Understand card, shown only when a block's `sources` include `malaty-commentary`.
- **No Bible text is written new.** Only the framing around it.
- **Church Year dates** need a registered source before that season's content ships.

## Review Focus

1. **A passage reference that doesn't exist in one edition** (e.g. a verse range past a chapter's end in Van Dyck).
   The build must fail with the block id. Test this in Task 2.
2. **A damaged or old `localStorage` value**, or none at all. Profile and progress fall back to defaults. Test this
   in Task 3.
3. **A Church Year page opened outside a season.** The overview shows the next season's start date and suggests
   another plan. Test `seasonOn` returning `null` with `nextSeason` in Task 4.
4. **Nativity fast dates across the new year** (25 Nov – 6 Jan). `seasonOn(new Date(2027, 0, 3))` is in the 2026
   fast, day 40. Test this in Task 4.
5. **A day page opened directly from a shared link with no saved profile.** Show the Explorer card (the default
   style) and the 15-minute passage. Test `defaultProfile` in Task 3.

---

### Task 1: Content schema for plans and blocks

**Files:**
- Create: `packages/content-schema/src/plans.ts`
- Modify: `packages/content-schema/src/index.ts` (add `export * from './plans.ts'`)
- Test: `packages/content-schema/src/plans.test.ts`

**Interfaces:**
- **Produces** these zod schemas, with inferred types of the same names:
  - `PassageRef`: a string matching `^[1-4A-Z]{3}\.\d+(\.\d+(-\d+)?)?$`. That is `MRK.1`, `MRK.1.14` or
    `MRK.1.14-20`, within one chapter.
  - `Bilingual`: `{ en: string.min(1), ar: string.min(1) }`.
  - `DeeperLink`, a union discriminated on `kind`:
    - `verse {ref: PassageRef}`
    - `place {id: Slug}`
    - `person {key: string}`
    - `question {slug: Slug}`
    - `chart {period: string}`
  - `PlanBlock`, with these fields:
    - `id: Slug`
    - `passages: {short, full, deep}` (each a `PassageRef`)
    - `title`, `hook`, `explain`, `think`: `Bilingual`
    - `explainNew?`: `Bilingual`
    - `check?: {question, options (2–4), answer (an index), why}`
    - `deeper`: an array of `DeeperLink`, at least one
    - `words`: an array of `Slug`, default `[]`
    - `sources`: an array of `Slug`, default `[]`
    - `review`: `Review`
  - `Plan`:
    - `id: Slug`
    - `live: boolean`
    - `kind: 'sequence' | 'church-year'`
    - `name`, `who`, `description`: `Bilingual`
    - `interests`: an array of `'story' | 'people' | 'places' | 'questions' | 'life' | 'church' | 'start'`
    - `sections`: `{title: Bilingual, from: int ≥ 0}[]`
    - `days`: `Slug[]`, empty for `church-year`
  - `PlansFile`: `{ plans: Plan[] }`.
  - `ChurchYearFile`: `{ source: Slug, seasons: {id: 'nativity-fast' | 'nineveh' | 'great-lent', name: Bilingual, days: Slug[]}[] }`.
  - `PlanWord`: `{ id: Slug, term: Bilingual, definition: Bilingual }`, and `WordsFile`: `{ words: PlanWord[] }`.

- [ ] **Step 1: Write the failing tests**
  - `PassageRef accepts MRK.1, MRK.1.14, MRK.1.14-20 and rejects mrk.1, MRK, MRK.1.20-14x`
  - `PlanBlock rejects a check whose answer index is out of range`, using `superRefine`
  - `PlanBlock requires at least one deeper link`
  - `Plan of kind sequence must have days; church-year must have none`
- [ ] **Step 2: Run** `npm run test -w packages/content-schema`. Expected: FAIL (module missing).
- [ ] **Step 3: Implement `plans.ts`.**
- [ ] **Step 4: Run** `npm run check -w packages/content-schema`. Expected: PASS.

### Task 2: Load and check plan content at build time

**Files:**
- Create: `content/plans/README.md`, `content/plans/plans.yaml`, `content/plans/words.yaml`,
  `content/plans/church-year.yaml`, `content/plans/blocks/*.yaml`
- Create: `apps/web/src/lib/plans/load.ts`, `apps/web/src/lib/plans/passage.ts`
- Modify: `scripts/validate-content.ts`, to also validate `content/plans` with the same schemas
- Test: `apps/web/src/lib/plans/plans.test.ts`

**Interfaces:**
- **Consumes:** Task 1's schemas. From `lib/bible.ts`: `loadBook(edition, code)`, `bookByCode`, `biblePath`.
- **Produces, in `load.ts`:**
  - `PLANS: readonly Plan[]`, all plans; `LIVE_PLANS`, those with `live: true`.
  - `BLOCKS: ReadonlyMap<string, PlanBlock>`, `WORDS: ReadonlyMap<string, PlanWord>`, `CHURCH_YEAR: ChurchYearFile`.
  - `planDays(plan: Plan): PlanBlock[]`. For `church-year` plans, the blocks of every season in order.
  - `checkPlans(): string[]`, the integrity problems:
    - an unknown block id, word id or source id;
    - a section `from` beyond the number of days;
    - a passage that doesn't resolve in both editions;
    - a `place` id missing from the Bible atlas, a `person` key missing from the Bible history people, or a
      `question` slug missing from Faith & Evidence.
- **Produces, in `passage.ts`:**
  - `PLAN_EDITION = { en: 'kjv', ar: 'svd' } as const`.
  - `parseRef(ref: string): { code: string; chapter: number; from: number | null; to: number | null }`.
  - `passageVerses(ref: string, locale: Locale): { n: string; text: string }[]`. Throws if empty.
  - `refLabel(ref: string, locale: Locale): string`: "Mark 1:14–20" in English, "مرقس ١: ١٤–٢٠" in Arabic.
  - `refHref(ref: string, locale: Locale): string`: `biblePath(...)` plus `#v<from>`. The verse anchor opens the
    commentary bubble.

- [ ] **Step 1: Write the failing tests**
  - `checkPlans() returns []`, run on the real content.
  - `parseRef('MRK.1.14-20')` gives `{code:'MRK', chapter:1, from:14, to:20}`.
  - `passageVerses('MRK.1.14-20','en')` has 7 verses, and the first starts with "Now after that John was put in
    prison".
  - `passageVerses('MRK.1.99','en')` throws.
  - `refLabel('MRK.1.14-20','ar')` gives `'مرقس ١: ١٤–٢٠'`. Use the book's `ar` name from `@orthodoxia/bible`.
  - Every live plan has at least one day, and every block id in `plans.yaml` exists.
- [ ] **Step 2: Run** `npx vitest run src/lib/plans` in `apps/web`. Expected: FAIL.
- [ ] **Step 3: Implement `load.ts` and `passage.ts`.** Write `plans.yaml`:
  - all seven plans, with only `meet-jesus` and `church-year` given any days or seasons;
  - `live: false` for all seven;
  - the first block of Meet Jesus, so the tests have content.
- [ ] **Step 4: Extend `scripts/validate-content.ts`** with the schema checks for `content/plans`. Cross-file checks
  stay in `checkPlans`, which needs the Bible data.
- [ ] **Step 5: Run** the tests and `npm run validate:content`. Expected: PASS.

### Task 3: Reader profile, quiz mapping and progress (pure, on-device)

**Files:**
- Create: `apps/web/src/lib/plans/profile.ts`
- Test: `apps/web/src/lib/plans/profile.test.ts`

**Interfaces:**
- **Types:**
  - `Interest = Plan['interests'][number]`
  - `Pace = 5 | 15 | 30`
  - `Style = 'explorer' | 'achiever' | 'reflector' | 'connector'`
  - `Experience = 'new' | 'some' | 'lots'`
  - `Profile = { interest, pace, style, experience }`
  - `Progress = { active: string | null; plans: Record<string, { done: number[]; last: number }> }`
- **Storage keys:** `PLANS_KEY = 'orthodoxia:plans'` and `JOURNAL_KEY = 'orthodoxia:plans:journal'`.
- **Defaults:** `defaultProfile(): Profile` returns `{ interest: 'start', pace: 15, style: 'explorer', experience: 'some' }`.
- **Saved state:**
  - `parseState(raw: string | null): { profile: Profile | null; progress: Progress }`.
  - `serializeState(state): string`.
- **Quiz:** `planFor(profile, livePlanIds: readonly string[]): string`. The rules, in order:
  1. If interest is `story` and experience is `new`, choose `meet-jesus`.
  2. Otherwise choose the first live plan whose `interests` include the interest.
  3. Fall back to `meet-jesus` if live, or else the first live plan.
  `planFor` takes `plans: readonly {id, interests}[]` as its second argument rather than bare ids.
- **Passage length:** `passageFor(block, pace): PassageRef`. 5 → `short`, 15 → `full`, 30 → `deep`.
- **Progress:**
  - `markDone(progress, planId, dayIndex): Progress`.
  - `nextDay(progress, planId, total): number`, the first day not done; it stays on the last day if all are done.

- [ ] **Step 1: Write the failing tests**
  - `parseState(null)`, `parseState('{bad')` and `parseState('{"profile":{"pace":7}}')` all give `profile: null`
    with empty progress.
  - `planFor` covers each rule above.
  - `markDone` is idempotent and keeps the list sorted.
  - `nextDay` skips finished days and handles all days done.
- [ ] **Step 2: Run** the tests. Expected: FAIL.
- [ ] **Step 3: Implement.**
- [ ] **Step 4: Run** the tests. Expected: PASS.

### Task 4: Coptic computus and seasons

**Files:**
- Create: `apps/web/src/lib/plans/computus.ts`
- Create: `content/sources/<coptic-calendar-source>.yaml`, the published source for the season dates
- Test: `apps/web/src/lib/plans/computus.test.ts`

**Interfaces:**
- `copticPascha(year: number): Date`. The Julian computus plus 13 days; valid for 1900–2099.
- `seasonsOf(year: number)`, giving `{ id, start: Date, days: number }[]`:
  - the Nativity fast starting 25 Nov of `year`, 43 days;
  - Nineveh: Monday, 69 days before Pascha, 3 days;
  - Great Lent: Monday, 55 days before Pascha, 55 days including Holy Week.
- `seasonOn(date: Date, ids: readonly string[]): { id: string; day: number } | null`. The day is 0-based, and only
  the given season ids count.
- `nextSeason(date: Date, ids: readonly string[]): { id: string; start: Date }`.
- All dates are local calendar dates (y, m, d), with no time-zone maths.

- [ ] **Step 1: Write the failing tests**
  - `copticPascha` gives 2024-05-05, 2025-04-20, 2026-04-12 and 2027-05-02.
  - `seasonOn(2026-11-25)` gives `{id:'nativity-fast', day:0}`.
  - `seasonOn(2027-01-03)` gives day 39.
  - `seasonOn(2027-01-07)` gives `null`.
  - `nextSeason(2026-08-01, ['nativity-fast'])` gives 2026-11-25.
  - Great Lent 2027 starts 2027-03-08 (2027-05-02 minus 55 days).
- [ ] **Step 2: Run** the tests. Expected: FAIL.
- [ ] **Step 3: Implement** the computus. Use Meeus's Julian algorithm:
  ```
  a = y % 4
  b = y % 7
  c = y % 19
  d = (19c + 15) % 30
  e = (2a + 4b − d + 34) % 7
  month = floor((d + e + 114) / 31)
  day = (d + e + 114) % 31 + 1
  ```
  Then add 13 days.
- [ ] **Step 4: Check the source.** Find a published Coptic source for the dates of the Nativity fast and Great Lent,
  register it, and put its id in `church-year.yaml` `source`.
- [ ] **Step 5: Run** the tests. Expected: PASS.

### Task 5: Pages: start, plan overview, day cards

**Files:**
- Create: `apps/web/src/pages/[lang]/plans/index.astro`, `[plan]/index.astro`, `[plan]/[day].astro`
- Create: `apps/web/src/lib/plans/ui.ts` (the bilingual page text) and `apps/web/src/lib/plans/client.ts` (the
  browser behaviour)
- Test: `apps/web/src/lib/plans/pages.test.ts`

**Interfaces:**
- **Consumes:** Tasks 2–4.
- **`getStaticPaths`:**
  - day pages: `LIVE_PLANS × planDays`, with day slugs `day-1` … `day-N`;
  - overview pages: `LIVE_PLANS`;
  - the start page: always.
- **The day page renders every card as an `<section class="card" data-card="hook|read|understand|think|extra-*|done">`:**
  - **Read.** Three passage variants: `data-pace="5|15|30"`.
  - **Understand.**
    - `explain`, with `explainNew` marked `data-exp="new"`.
    - Glossary words as `<button data-word>` with the definition in a popover.
    - The Malaty line, when the block's sources include `malaty-commentary`. It reads "Drawn from Fr. Tadros
      Malaty's commentary" in English and "مأخوذ من تفسير القمص تادرس يعقوب ملطي" in Arabic, and links to
      `refHref`.
    - The "Draft" label, when `review.status` isn't `published` or `reviewed`.
  - **Extras.** All four are rendered, as `data-style="…"`.
  - **Done.** Carries tomorrow's title.
- **`client.ts`:**
  - Reads the saved state and sets `data-pace`, `data-style` and `data-exp` on the cards' container. CSS shows the
    matching variants. Without JavaScript, the 15-minute passage and all extras are visible.
  - **Card navigation:**
    - Next and Back buttons, plus ←/→ keys, mirrored for RTL.
    - Touch swipe over 50 px.
    - `aria-live` "Card n of N".
    - `scrollIntoView` respecting reduced motion.
  - **Achiever check.** Reveals the answer and `why` on choice; nothing is stored.
  - **Reflector journal.** Saves to `JOURNAL_KEY` by block id.
  - **Connector.** Uses `navigator.share` with a copy-link fallback.
  - **"Mark day done".** Calls `markDone` and sets `active`.
  - **Start page.**
    - The quiz is a form of four radio groups. Its result uses `planFor` and shows "Start".
    - "Continue: <plan> · Day n" appears when `active` is set.
    - "Clear my plan data" removes both keys.
  - **Church Year overview.** Uses `seasonOn` and `nextSeason` to link today's day, or to show the next start date.
  - **Text size.** Reuses `lib/holy-mass/reading.ts` with its own key, `orthodoxia:plans:reading`.

- [ ] **Step 1: Write the failing tests** (pure helpers in `ui.ts`)
  - `dayPaths()` has one path per live-plan day per locale. With no live plans it is `[]`.
  - `cardOrder(block)` gives `['hook','read','understand','think','extra','done']`.
- [ ] **Step 2: Implement** the pages and the client, in the site's design tokens. Follow the card look in the
  proposal page.
- [ ] **Step 3: Run** `npm run check`. Expected: 0 errors, all tests pass.
- [ ] **Step 4: Check it on a phone.** Temporarily set `live: true` on meet-jesus, build, and open
  `/en/plans/meet-jesus/day-1/` at 390 px and 1400 px, in English and Arabic.

### Task 6: Links into the site

**Files:**
- Modify: `apps/web/src/components/SiteHeader.astro` (`readings` gains "Reading plans" with the `compass` icon)
- Modify: `SiteFooter.astro` (Readings group), `CommandPalette.astro`, `i18n/en.ts` and `ar.ts` (`nav.plans`)
- Modify: the Bible chapter page `pages/[lang]/bible/[edition]/[book]/[chapter]/index.astro`. Add a small "Part of:
  <plan> · Day n" link from `planDaysForChapter(code, chapter)`, a new function in `load.ts` covering live plans
  only.

- [ ] **Step 1:** Test that `planDaysForChapter('MRK', 1)` includes Meet Jesus day 1 when the plan is live, and gives
  `[]` when it isn't.
- [ ] **Step 2:** Implement the links. Hide the header and footer links while no plan is live, so no link leads to an
  empty page.
- [ ] **Step 3: Run** `npm run check` and `npm run build`. Expected: link check passes.

### Task 7: Content: Meet Jesus (16 blocks) and Nativity fast (43 blocks)

**Files:** `content/plans/blocks/*.yaml`, `content/plans/plans.yaml`, `content/plans/church-year.yaml`,
`content/plans/words.yaml`

- [ ] **Step 1: Write the Meet Jesus blocks**, `mark-01` … `mark-16`, one per chapter of Mark.
  - Each has a short, a full and a deep passage. Full is a meaningful section; deep is the whole chapter.
  - Hook, explain, explainNew, think, a check and at least one deeper link, in English and Arabic.
  - `sources: [malaty-commentary]` only where the explanation draws on it.
- [ ] **Step 2: Write the Nativity-fast blocks**, in order:
  1. the promises (Genesis 3:15, Isaiah 7, 9, 11, Micah 5);
  2. Luke 1–2;
  3. Matthew 1–2;
  4. John 1:1–18.

  Release them in batches. Days not yet written are left out of `church-year.yaml`, and the overview says how far
  the plan reaches.
- [ ] **Step 3: Run** `npm run check`. Expected: `checkPlans()` gives `[]`.
- [ ] **Step 4: Hand over to the owner** to read. Plans stay `live: false` until the owner says OK.
