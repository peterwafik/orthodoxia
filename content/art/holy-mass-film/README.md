# Holy Mass film

The five scenes and the clips behind the Holy Mass journey (`/en/holy-mass/`). Scrolling the prayer
panel plays this film: one **dive** clip per chapter, joined by **link** clips that fly from one scene
to the next. The encoded clips the site serves are in `apps/web/public/holy-mass-film/`; this folder
keeps the source stills and the prompts.

All five scenes are soft clay dioramas in the site's colours (navy, gold, ivory), generated with
Higgsfield. They are an AI-generated symbolic meditation inspired by Coptic churches, **not yet
reviewed by clergy**, and not official icons.

## The scenes (`stills/`, 2048 × 1360)

| Chapter | Scene | What the prompt asks for | Job (`gpt_image_2`) |
|---|---|---|---|
| I. Preparation | `scene-1` | The solid wooden iconostasis with three curtained doors: the Last Supper with the apostles across the top, the Crucifixion with the Virgin and St John above it. A barefoot priest enters the central door; his sandals are at the step. | `892f688b-776c-4189-96c0-1248f9411595` |
| II. The Liturgy of the Word | `scene-2` | The khorus raised on three steps with its lattice fence, two lecterns, candelabra, deacons with cymbals and a triangle, men left and veiled women right, a blue star dome. | `edfba7d7-2c23-4e95-99d9-7604d2b7ffe4` |
| III. Reconciliation and Peace | `scene-3` | The nave from the pointed-arch door: a colonnade with hanging lamps, men and women clasping hands in peace, deacons with censers, the priest with a cross at the open door. | `2d2b4a51-6a09-436e-ad9e-6a3d89e04de1` |
| IV. The Liturgy of the Faithful | `scene-4` | The haikal: the free-standing altar under a ciborium (painted dome on four pillars), a barefoot priest and deacon, the apse with Christ enthroned among the four living creatures. | `78dfa790-6b53-4208-b9ef-0a150ee3b626` |
| V. Communion and Thanksgiving | `scene-5` | Communion at the central door, and above the church a cloud staircase with the four living creatures, seraphim, angels, the twenty-four elders and Christ enthroned with the Virgin and St John the Baptist. | `8df6aef5-9953-4d61-87f5-7c07fba577c5` |

The first set of stills was replaced because it was not faithful to a Coptic church (a blue-domed
Byzantine look, a stone iconostasis, an altar in front of the curtains). The prompts were rewritten from
the features listed by copticheritage.org (Architecture of the Coptic Church) and ukmidcopts.org (What
you will find in a Coptic Orthodox Church): the solid iconostasis with three doors, the ciborium, the raised
khorus, the apse Pantocrator with the four creatures, barefoot clergy, cymbals and a triangle.

## The clips

| Clip | Model | Job |
|---|---|---|
| `dive-1` | Kling 3.0 (the Seedance filter flagged it "ip_detected"; one approved retry) | `dfbaee63-3633-45e1-8c72-822e6a56c7d4` |
| `dive-2` | Seedance 2.0, 720p, 5 s | `c37455ae-1b21-47ef-b6b1-fac59f7d5bf0` |
| `dive-3` | Seedance 2.0 | `d28f9899-20f2-4479-9fd0-63c5a3455341` |
| `dive-4` | Seedance 2.0 | `e9439810-6b1d-4f10-b8b4-f9cf559f2ee0` |
| `dive-5` | **Made locally, not generated**: a slow zoom with ffmpeg from the whole of `scene-5` up to Christ enthroned | none |
| `link-1` | Seedance 2.0, from the last frame of `dive-1` to the first frame of `dive-2` | `3710726b-275b-4b20-9ec0-32fb9cf31387` |
| `link-2` | Seedance 2.0 | `02670730-7bf1-4821-b3d2-b5d8ff85cf5a` |
| `link-3` | Seedance 2.0 | `0d47333f-967d-4a03-b5d3-8b3c14e16b27` |
| `link-4` | none: not made, see below | none |

**Refused clips.** The video services' content filters flagged the scene 5 dive as NSFW on three models
(Seedance 2.0, Kling 3.0 and Seedance 2.0 mini), and the link from scene 4 to scene 5, a false positive
each time. We did not work around the filters: scene 5 uses a local zoom of its still, and scenes 4 and 5
dissolve into each other without a link clip.

**Seams.** Each link starts on the real last frame of the dive before it and ends on the real first
frame of the dive after it, so the seams are continuous.

**Cost.** About 33 credits for the five new stills, about 135 for the clips that were used. About
70 more were spent on a first set of clips made from the first (rejected) stills, and on
the refused attempts.

The clips are encoded by ffmpeg to 1280 × 720 (crf 21, GOP 8) for desktop and 854 × 480 (crf 24, GOP 4)
for phones.
