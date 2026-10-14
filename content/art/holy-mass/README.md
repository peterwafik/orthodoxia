# Holy Mass artwork

`source.jpg` is the master picture of the Holy Mass journey (`/en/holy-mass/`): the Coptic Orthodox
sanctuary below, the threshold of incense and clouds in the middle, and the heavenly worship above,
pulled back so the scene is about three times as wide as the first version, with the sides filled in.

## Where it came from

- **Generated with** Higgsfield, model `gpt_image_2_5` (4K, quality "max", 15 credits), from a text
  description, on 2026-10-14: job `60990fd1-0932-45b4-9593-c2b642eba838`, 3312 × 2480 px. It was one of
  three variants; the others (`ecabee47-…`, `2b5e3fcd-…`) were not used. A was chosen because its
  Christ is the largest and cleanest and his halo letters (Ω, O, N, IC XC) are correct.
- **Style:** the prompt asks for the bright, luminous, high-key painting style of the first picture
  (pearly white and golden clouds, jewel colours, serene faces), not the darker fresco look of the
  second one. The first picture was refused as a reference by the service's moderation (a false
  positive), so the style was described in words.
- **Content asked for:** a priest and deacon at the single altar before an iconostasis, the faithful
  (men left, veiled women right) in the nave; incense rising up a golden stair; tiers of saints, Coptic
  desert fathers and angels curving outward to the sides; Christ enthroned in a mandorla flanked by
  archangels with censers; the Father and the Holy Spirit are not depicted.
- **Review status:** not yet approved. Every religious detail needs the review in docs/HOLY_MASS.md.
- **Rights:** AI-generated; confirm the generating service's terms for the intended use before wide
  publication.

## Enhanced detail (`detail/`)

The master is cut into nine overlapping 1280 × 960 regions (columns at x = 0, 1016, 2032; rows at
y = 0, 760, 1520). Each was upscaled with Higgsfield's upscaler (`bytedance_image_upscale`, 4k, 2
credits each) to 4096 × 3072, which gives real extra detail (eyes, hair strands, gold texture, lettering)
and keeps alignment with the master. `detail/detail.json` lists the regions; `scripts/holy-mass/tiles.ts`
lays them over the enlarged master with soft edges.

- Eight of the nine regions are enhanced. The top-left region (`r0c0`, the saints at the upper left)
  was refused by the service's moderation (a false positive) and was not worked around, so that corner
  shows the plain enlargement.
- Two regions failed on the first attempt (a transient error) and succeeded on one retry.

Previous pictures are kept for comparison: `previous-source-1280.jpg` (the first, 1280 × 960) and
`previous-source-3312-v2.jpg` (the second, with more Coptic detail but a different style).

The tiles are built by `npm run holymass:tiles`.
