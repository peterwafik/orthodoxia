# Holy Mass artwork

`source.jpg` is the master picture of the Holy Mass journey (`/en/holy-mass/`): the Coptic Orthodox
sanctuary below, the threshold of incense and clouds in the middle, and the heavenly worship above.

- **Made with:** Higgsfield, model `gpt_image_2_5` (4K, high quality), from a text description only,
  on 2026-10-14 (job `ef127274-c1f2-4659-979f-12bf6920f89a`, 3312 × 2480 px, 4.25 credits). One of two
  variants; the other (`761684df-…`) was not used.
- **Why a text description:** the earlier picture was uploaded as a reference and was refused by the
  service's moderation (a false positive), so the new picture was described in words instead of edited.
- **Intent:** the prompt asks for authentic Coptic detail: a single altar under a canopy with hanging
  lamps and ostrich eggs, white vestments with gold Coptic crosses, an iconostasis with ivory-inlaid
  crosses and burgundy curtains, the congregation (men left, women right, veiled), Christ enthroned with
  the four living creatures, the twenty-four elders with censers, the Virgin Mary, St. John the Baptist,
  Coptic desert fathers and martyrs. The Father and the Holy Spirit are not depicted.
- **Review status:** not yet approved. Every religious detail needs the review in docs/HOLY_MASS.md.
  Known flaw: a faint ghost-like figure in the incense smoke to the left of the altar.
- **Rights:** AI-generated; confirm the generating service's terms for the intended use before wide
  publication.
- `previous-source-1280.jpg` is the first picture used (1280 × 960), kept for comparison.

The tiles are built from `source.jpg` by `npm run holymass:tiles`.
