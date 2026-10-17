# Holy Mass: the Liturgy journey

`/en/holy-mass/` and `/ar/holy-mass/`. The Divine Liturgy as one continuous picture: scrolling the
prayer panel moves a camera over a single enlarged artwork, from the earthly church toward the
heavenly assembly, until only heaven fills the picture.

The page follows the approved design (`docs/design/holy-mass-mockup.jpg`): a navy journey rail, the
artwork in the centre and a parchment prayer panel, with 52 stops in five chapters.

## How it works

| Part | Where | What it does |
| --- | --- | --- |
| Artwork | `content/art/holy-mass/source.jpg` + `detail/` | The tall master picture (2160 × 3840, generated with Higgsfield, see `content/art/holy-mass/README.md`) and ten regions of it enhanced to 3.2× by an upscaler. |
| Tiles | `scripts/holy-mass/tiles.ts` → `apps/web/public/holy-mass/` | Enlarges the master to 6,912 × 12,288 px with Lanczos resampling and a light sharpen, lays the enhanced regions over it with soft edges, and cuts a Deep Zoom pyramid of 512 px tiles (about 460 files, 18 MB). Generated, git-ignored; `npm run holymass:tiles`; runs in `npm run build` and `dev:web`. |
| Camera | `apps/web/src/lib/holy-mass/camera.ts` | A stop names a *focus box*; the camera frames that box for any window shape (wide desktop, tall phone), interpolates between stops (centre linearly, zoom in log space, eased), and picks the tiles to draw. Pure arithmetic, tested. |
| Stops | `apps/web/src/data/holy-mass.ts` | The 52 stops: titles, what happens, what it means, scripture, camera region. |
| Page | `apps/web/src/pages/[lang]/holy-mass.astro` | Layout, canvas renderer, scroll → camera, deep links, options. |

- **Scroll drives the camera.** A stop is "settled" when its section is at the top of the panel; in
  between, the camera is part-way to the next stop. Rail clicks and Next/Previous scroll smoothly, so a
  long jump is a flight through the artwork.
- **Opening and ending.** Stop 1 is the whole picture (zoomed out, with the title over it). The last
  stop is framed so the visible area never goes below the middle of the picture: only heaven shows, on
  every window shape (tested). The text of the last stops keeps the Liturgy's dismissal and says the
  worshipper returns to the world.
- **Deep links.** `#29-lift-up-your-hearts` opens that stop; the address and the place are kept as the
  reader moves, and a "resume" link is offered on the next visit.
- **Reduced motion.** With `prefers-reduced-motion` the camera snaps to each stop instead of gliding.
- **No script.** The picture is the stage's background and the whole text is in the page.
- **Languages.** Arabic and English pages; the other language can be shown beside it ("Both
  languages"). The artwork has no text in it.

## The artwork and its resolution

The picture is the fourth version and is tall (9:16): the church is the bottom quarter and heaven fills the
rest, so the journey is a long climb. The haikal screen follows Coptic practice (Christ and the apostles
above, saints below) and the altar is inside the sanctuary, behind the curtains as the people see it.
Heaven is built as tiers of saints and angels rising to Christ enthroned at the top. Details and the
generation record: `content/art/holy-mass/README.md`.

**Zoom range.** Stop 1 shows the whole picture; the last stop (52) shows only Christ on his throne with
the Gospel book, about a fifth of the picture's width. Each stop's region is in
`apps/web/src/data/holy-mass.ts`, tuned as fractions of the tall picture.

**Resolution.** The master is 2160 × 3840. It was cut into ten overlapping regions and each upscaled to
4096 × 3072 (3.2×) by Higgsfield's upscaler, which adds real detail while keeping alignment. The tile
pyramid is built at 6,912 × 12,288 px so those regions are used at close to their full resolution.
In the browser the final stop (Christ's face, hair, halo letters, the Gospel book) and the altar stop
are crisp.

For more, replace `source.jpg` (or set `HOLY_MASS_MASTER`; `HOLY_MASS_WIDTH` sets the pyramid's
width), regenerate or add regions in `detail/`, and run `npm run holymass:tiles -- --force`. Camera
regions are fractions of the picture, so a different composition needs them re-checked (the tests check
that they stay inside the picture and that the last stop shows only the top of heaven).

The artwork is **not yet approved**: every religious detail needs the review below.

## Content status

Every stop is a **draft**, marked as such on the page.

- **Order and titles** follow the outline of <https://www.copticorthodoxliturgy.com/> (headings only,
  read on 2026-10-14). Four connecting stops are marked "general" (7, 13, 18, 20). The mock-up's list
  of stops 27–34 was not in liturgical order (it put the Institution Narrative after the Memorial),
  so the sequence follows the reference outline and the Liturgy instead.
- **Explanations** (what happens, what it means, the silent meditation, the notes on the artwork) are
  original short texts written for this site, with scripture references. None has been reviewed by
  clergy. The "Pray silently" lines are labelled as personal meditations, not liturgical texts.
- **Prayer texts are not included.** Only the short standard dialogue of stops 29 and 30 ("The Lord be
  with you all… Lift up your hearts… Let us give thanks… It is meet and right") is shown, in English
  and Arabic. Every other prayer shows "The text of this prayer will be added from an authorized
  translation". No prayer is invented (master prompt §7.4).
- **The three liturgies.** The selector (St. Basil, St. Gregory, St. Cyril) is in place and its choice
  is remembered. Stops in the anaphora whose text differs among the three (31–39) say so. Separate
  texts per liturgy are not yet included, because they need an authorized source.
- **Scripture links** open the chapter in the site's reader (KJV in English, Van Dyck in Arabic).

### Sources

- Outline of the order: copticorthodoxliturgy.com (Vespers, Matins, The Offertory, The Liturgy of the
  Word, The Liturgy of the Faithful, The Distribution). Its prayer texts were not copied.
- **Not yet used:** the illustrated flipbook *رحلة في السماء* (fliphtml5.com/qhddq/vdey). It could not
  be read programmatically. To use it as a source for the ritual actions, the owner should provide the
  PDF or screenshots. Nothing in the page claims to be taken from it.
- Fathers' commentary is not yet included (nothing was invented); the panel has no such section.

## Review checklist (before presenting this as authoritative)

For each stop: sequence; priest, deacon and people roles; translation and terminology; symbolic
interpretation and scripture references; applicability to Basil, Gregory and Cyril; sources and
licensing. Record the result in `reviewStatus` (not yet in the data model; the draft notice is shown
on every stop until it is).

## Not built yet

These are in the master prompt and are the natural next steps:

- Hotspots on the artwork (censer, altar, Gospel book, …), with a "show all" toggle.
- "Follow the Mass" mode (large text, no animation) and a fuller "Study" mode.
- Prayer texts, transliteration and Coptic, from an authorized translation, per liturgy.
- Fathers' commentary and per-stop sources.
- Separate URLs per liturgy and stop (`/liturgy/basil/29-…`); today the stop is in the address fragment.
- A full-screen artwork mode.
- Bookmarks of a prayer beyond the remembered place.
- New artwork regions drawn with real detail (the master-artwork pipeline of the prompt, stages 2–5).
