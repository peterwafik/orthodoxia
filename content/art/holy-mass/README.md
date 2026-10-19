> **Retired.** The site no longer uses this deep-zoom picture; the Holy Mass journey now plays the film in `content/art/holy-mass-film/`. Kept for the record.

# Holy Mass artwork

`source.jpg` is the master picture of the Holy Mass journey (`/en/holy-mass/`). It is a tall picture
(2160 × 3840, 9:16): the Coptic Orthodox church at the bottom, then tier upon tier of heaven rising above
it, up to Christ enthroned at the very top.

## What it shows

- **The church (bottom quarter).** The haikal screen as a Coptic church has it: Christ at the centre of
  the top row, the apostles in a row on either side, and below them the Virgin holding Christ, St John the
  Baptist, the archangels Michael and Gabriel, St George and St Anthony. The altar stands *inside* the
  sanctuary, seen through the open red curtains, with the priest at it and the deacon beside him; the
  men (left) and the veiled women (right) are in the nave.
- **Heaven (the rest).** A golden stair and a hanging censer lead up through tiers of angels with censers,
  Coptic desert fathers, martyrs and soldier saints, bishops and patriarchs, apostles, prophets, and
  crowned elders; then the four living creatures and seraphim, and at the top Christ enthroned in a
  mandorla (halo Ω O N, IC XC) with the Virgin and St John the Baptist beside him and archangels above.
  The Father and the Holy Spirit are not depicted.

## Where it came from

- **Generated with** Higgsfield, model `gpt_image_2_5` (4K, quality "max", 9:16), from a text description
  inspired by Coptic heaven paintings, on 2026-10-14: job `784df7c4-7487-4a02-9c1a-bf5a07b34762`. It was
  one of four variants (`909a020a-…`, `941a015a-…`, `dc40523c-…`); this one was kept because its
  church screen, tiers and Christ are the cleanest. The style is the bright, luminous Coptic painting
  style of the earlier pictures.
- **Review status:** not yet approved. Every religious detail needs the review in docs/HOLY_MASS.md.
- **Rights:** AI-generated; confirm the generating service's terms for the intended use before wide
  publication.

## Enhanced detail (`detail/`)

The master is cut into ten overlapping 1280 × 960 regions (columns at x = 0, 880; rows at
y = 0, 720, 1440, 2160, 2880). Each was upscaled with Higgsfield's upscaler (`bytedance_image_upscale`,
4k, 2 credits each, 20 in all) to 4096 × 3072, which adds real detail (eyes, hair, gold texture,
lettering) and keeps alignment with the master. `detail/detail.json` lists the regions;
`scripts/holy-mass/tiles.ts` lays them over the enlarged master with soft edges. All ten regions were
accepted; none was refused.

Previous pictures are kept for comparison: `previous-source-1280.jpg` (the first),
`previous-source-3312-v2.jpg` (the second) and `previous-source-3312-v3.jpg` (the wide third version
that this one replaces).

The tiles are built by `npm run holymass:tiles`.
