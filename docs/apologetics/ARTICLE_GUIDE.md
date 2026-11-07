# Writing a Faith & Evidence article

Each article is one TypeScript file, `apps/web/src/data/apologetics/articles/<question-id>.ts`, exporting `article: Article`
(types in `../types.ts`). The page shows one path through it, in this order: **The answer** (`shortAnswer`, `quickPoints`),
**Why this question matters** (`whyExamine`, `background`, glossary terms), **The evidence** (each claim's `proposition` and
`rationale` with its sources, then `christianResponse.historical`, then the Scripture passages), **What the Church teaches**
(`christianResponse.theological`, `coptic`), **Objections answered** (`statement`, `response`), **Conclusion**, then the numbered
**Sources** and **Related questions**. `scope`, `assessment`, `limits` and `disputed` are kept in the record but not shown. `npx vitest run src/data/apologetics` (from `apps/web`) must pass.

## Voice, faith position and honesty rules

- File fields: `state: 'draft'`, `reviewers: []`, `author: 'Orthodoxia editorial team'`. (The site shows no draft or review notices; do not
  add any. Never invent a reviewer or a review date.)
- **Faith position.** Every answer is written from within the Coptic Orthodox faith and must be compatible with it: the Nicene Creed,
  the Church Fathers (above all St Athanasius, St Cyril of Alexandria, St Dioscorus, St Severus), the Scriptures including the
  deuterocanonical books the Coptic Church receives, and the Church's liturgical life. State the Coptic Orthodox teaching accurately
  and in its own terms (the one incarnate nature of God the Word, *miaphysis*, not "monophysitism"; the Virgin Mary as Theotokos and
  ever-virgin; the seven sacraments; Scripture within Holy Tradition). Present other Christian traditions, other religions and
  non-believing positions fairly, as their holders would recognise them, and answer them; never caricature them or insult anyone.
- **A guiding voice.** The page leads the reader to the truth the Church holds. The answer and the conclusion state it plainly with
  its strongest reasons; the evidence is set out as reasons for it; each objection is stated fairly and then answered firmly. No
  survey framing in the shown fields ("historians divide", "some think… others think…", "a critic can fairly answer", "one proposal
  among others", "would not by itself prove"), and no closing paragraph on what remains uncertain.
- **No notices, no hedge-flags.** Do not write that anything is a draft, AI-written, "proposed", "to be confirmed", "awaiting
  review" or "needs verification". Say only what you are certain of; leave out any detail you cannot stand behind (a date, a
  locator, a name, a number) rather than flagging it.
- **Confidence never becomes invention.** Never invent a fact, source, quotation or scholar's position to sound surer, and never
  claim consensus (see below): the confidence comes from the evidence and from the Church's teaching.
- Assessment labels: use the seven labels in `types.ts` and write a real rationale.
  `philosophical_argument` and `theological_interpretation` are categories of reasoning, not weak confidence. Never write a
  percentage, "all scholars agree" or "no serious scholar denies".
- Distinguish: a source reports an event / the event probably happened / early Christians believed it / a philosophical argument
  supports a conclusion / the Church affirms a doctrine. Keep `christianResponse.historical` apart from `.theological`.
- Historical arguments must not require the reader to accept biblical inspiration. When Scripture is used, say it is being read as an
  ancient document; the theological section may then speak from faith.
- State objections as their proponents would recognise them, then answer them. Name a scholar or position (Ehrman, Allison, Finkelstein…) only where
  you are certain of the position; otherwise describe "some historians argue".

## Evidence and sources

- Cite only source ids in `sources.ts` (S01–S62; S62 is the site Bible reader, to be used for every Scripture passage). Do not invent URLs, titles, page numbers, chapter titles or quotations.
- **No verbatim quotation of any translation or book.** Paraphrase in your own words (`states` = what the passage says; `inference` =
  what we infer, kept separate). Short Bible references are fine as locators.
- Ancient texts hosted in full (access `full_text`: S01–S06, S50–S52, S54) may be cited with an exact locator that you are certain of
  (Annals 15.44; Antiquities 20.200; Letters 10.96). Do not cite a locator you are unsure of.
- Books and pages known only by metadata (`metadata_only`, `abstract_only`, `awaiting_copy`) may be cited only as a *whole work*:
  `locator: 'whole work (thesis as the author states it; chapter not cited)'`, i.e. the locator must start with `whole work`. Say only
  what the author's overall thesis is, which you know with certainty. The tests enforce this.
- Never use S59, S60 or S61 as evidence (Fr Luka Maher: book not accessed; episodes not reviewed). In the existence-of-God article put
  S59 in `furtherReading` only, and say the book is awaiting an authorised copy.
- S01 and S02 are the same testimony; S03/S04 are different passages of one work. Give `dependence` on duplicates.
- For a Bible passage add `bible: { book: '<reader slug>', chapter: n, verse: 'a-b' }` (slugs: matthew, mark, luke, john, acts, romans,
  1-corinthians, galatians, 1-john, genesis, isaiah, psalms, daniel, …) so the reader links to the site's own Bible text.
- Dates: ranges and "c." with the basis; never an exact year the evidence does not give.

## Languages

- English: plain, calm, precise. Arabic: clear contemporary Modern Standard Arabic, warm and respectful, short sentences, correct
  theological terms as used in the Coptic Orthodox Church (السيد المسيح، والدة الإله، الطبيعة الواحدة المتجسدة). Do not translate
  mechanically word for word; both languages carry the same content and the same number of paragraphs (the test enforces it).
- Latin-script names inside Arabic text are fine; Arabic names of scholars follow common Arabic usage.

## Sections (all required, none padded)

`scope`, `shortAnswer`, `quickPoints` (3–6 bullets), `argumentTypes`, `assessment` (label + explanation), `whyExamine`, `background`,
`glossary` (ids from `glossary.ts`), `claims` (precise propositions, each with evidence ids), `evidence`, `objections` (each with a
firm response; `limits` is kept but not shown), `christianResponse` (historical / theological), `coptic` (null when the question does not need
it), `disputed` (kept, not shown), `conclusion` (states the answer the page leads to), `furtherReading`, `related` (question ids from `questions.ts`).

Length: as long as the question needs. No word target; no filler.

## Relevance and reverence of cited sources (binding)

- The "Sources" list of an answer shows only links: each entry's source (or, for Scripture, the Bible reader passage) and its locator. No commentary is shown there, so **every entry must by itself be a source a reader would expect to find under that exact question**.
- Cite a source or passage only if it is directly about the subject of this question. A passage that merely mentions a related idea, a general illustration, or something "in the same book" does not belong. If you would have to explain why it is there, remove it. Fewer, directly relevant entries are better than many loosely related ones.
- Never make a Scripture passage or an apostle serve a point it does not make, and never describe St Paul or any apostle or Gospel writer in a belittling, merely sceptical or "mere evidence" tone. Name them with the Church's customary reverence (St Paul the Apostle, St Luke the Evangelist). A historical argument may still treat the New Testament as an ancient document, but must do so respectfully and only with passages that actually bear on the question.
