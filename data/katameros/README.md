# Katameros (the Coptic lectionary)

The readings of the Coptic Orthodox Church for every day, as references: the yearly readings by Coptic date
(`dayReadings.json` points each day to an entry of `uniqueReadings.json`), the Sundays of each month
(`sundayReadings.json`), and the seasons counted from Pascha: the Fast of Nineveh (`jonahReadings.json`), Great Lent
(`lentReadings.json`) and the Holy Fifty Days (`holyFiftyReadings.json`). Holy Week (the Pascha book) is not included.

- **Source.** coptic.io by Abanob Mikaeel, https://github.com/abanobmikaeel/coptic.io, `apps/api/src/resources/`, at
  commit `1a2f16a7e05f2e29d18a994ce65da4fb52cd11be` (2026-11-22). MIT licence (`content/sources/coptic-io-katameros.yaml`).
- **Rules.** Which entry a day reads follows coptic.io's `packages/core/src/liturgy/readingCycle.ts`, ported to
  `apps/web/src/lib/katameros/cycle.ts`.
- **Changes from the source.** `lentReadings.json` `-53` (Wednesday of the first week of Lent), `LPsalm`: "Psalms
  24:20,16" was in the Greek numbering of the Psalms; it is Psalm 25 in the KJV and Van Dyck, so it reads
  "Psalms 25:20,16".
- **Texts.** The site shows the readings in full from its own Bible editions (KJV, Van Dyck); see
  `apps/web/src/lib/katameros/texts.ts`.
