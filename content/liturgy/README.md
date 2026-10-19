# Holy Mass texts

The prayers said at each stop of the Holy Mass journey (`/en/holy-mass/`). One plain-text file per stop.

```
content/liturgy/
  common/<slug>.txt    parts shared by all three liturgies
  basil/<slug>.txt     parts of St. Basil that differ (this file wins over common/)
  gregory/<slug>.txt
  cyril/<slug>.txt
```

`<slug>` is the slug of a stop in `apps/web/src/data/holy-mass.ts`, for example `lift-up-your-hearts`.

## A file

```
# Lines that start with # are comments.
source: Name of the translation, who made or published it, and the licence or permission it
  is used under. A link is welcome: https://example.org/where-it-comes-from

@rubric
en| The priest turns to the people.
ar| يلتفت الكاهن إلى الشعب.

@priest
en| The Lord be with you all.
ar| الرب مع جميعكم.
note| en: Optional. A short explanation of this prayer, written by us.
note| ar: اختياري. شرح قصير لهذه الصلاة.

@people
en| And with your spirit.
ar| ومع روحك أيضًا.
```

- **`source:`** is required in every file. Nothing is published without saying where it comes from.
  A line that starts with a space continues the line above. An optional **`source-ar:`** line gives the same
  credit in Arabic for the Arabic page (the page shows only the credit in its own language; if there is
  none, it points to the Sources page).
- **Speakers:** `@rubric` (a step or instruction), `@priest` (also a bishop or celebrant), `@deacon` (also a
  reader), `@people` (also the choir, and anything said by all).
- **Languages:** `en|`, `ar|`, `cop|` (Coptic), `tr|` (Coptic in Latin or Arabic letters; it needs a `cop|`
  line in the same block). A block needs at least one.
- **Blocks** are separated by a blank line. Save as UTF-8.

## Build

`node scripts/liturgy/build.ts` (it also runs in `npm run build` and `npm run dev:web`) checks every
file, names the file and line of any problem, writes `apps/web/public/liturgy/<liturgy>.json`, and prints
how many stops each liturgy has text for.
