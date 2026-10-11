# Phase 0 · Step 2 — Data Source & Licensing Audit

Verified 2026-10-11 by fetching each source's own license/terms page (and, for bulk datasets,
downloading and inspecting the files). "Link only" means: store bibliographic metadata + URL, quote
briefly with citation, do not import. Nothing here is legal advice; re-verify before each import.

## A. Bible texts

| Source | Content | Format / access | Lang | License (verified) | Attribution | Use in project | Deuterocanon | Phase |
|---|---|---|---|---|---|---|---|---|
| Berean Standard Bible | Bible (66) | `bereanbible.com/bsb.txt` (already pinned upstream) | EN | Public domain since 2023-04-30 ("All uses are freely permitted"; don't use the Berean name on modified text) | not required | **Use** (explorer text) | No | 1 |
| eBible `eng-web` (World English Bible) | Bible + deuterocanon | USFM/VPL zip from ebible.org | EN | Public domain; "World English Bible" is a trademark | not required | **Use** for deuterocanonical English text candidate | **Yes** (TOB, JDT, ESG, WIS, SIR, BAR, 1–4MA, …) | 2/5 |
| eBible `eng-Brenton` | Septuagint OT (1851) | USFM/VPL | EN | Public domain | not required | **Use** — LXX-based English, closest to Coptic OT tradition | **Yes** (incl. LJE, SUS, BEL) | 2/5 |
| eBible `arb-vd` (Smith–Van Dyck) | Bible (66) | USFM/VPL | AR | Public domain | not required | **Use** — the Arabic text Copts commonly read | **No** (`DCbooks=0`) | 2 |
| CrossWire `AraSVD` | Van Dyck | SWORD | AR | "re-distributed in Sword format only. Conversion … not permitted" | — | **Do not use** (use `arb-vd` instead) | No | — |
| CrossWire `KJVA` | KJV 1769 + Apocrypha | SWORD | EN | GPL | GPL terms | Optional | Yes | later |
| eBible `arbnav` (Biblica NAV) | Bible | USFM | AR | CC BY-SA 4.0 (share-alike) | required | Avoid for now (SA obligations; not the liturgical text) | No | — |
| CrossWire `alzat` (Pope Shenouda III, St Mary Church) | — | SWORD | AR | "Copyrighted; Free non-commercial distribution" | — | Do not import; ask permission if wanted | — | — |
| Coptic (Sahidic) modules `CopSahHorner` (PD), `CopSahBible2` (CC BY-SA), `CopSahidica` (NC) | Coptic text | SWORD | cop | as listed | — | Candidate for future Coptic-language study (Horner PD) | — | 6+ |

**Gap:** no openly licensed **Arabic** text of the deuterocanonical books was found. The editions
Copts use (Bible Society of Egypt) are presumed copyrighted (unverified). Options: show English
(Brenton/WEB) for those books with a clear notice, or seek written permission.

## B. Cross-references & lexical data

| Source | Content | License | Attribution | Use | Deuterocanon |
|---|---|---|---|---|---|
| OpenBible.info | ~344,800 vote-weighted refs (TSV zip) | CC BY 4.0 | required (+ note modifications) | **Use** (already in upstream) | **No** — 66 book codes only (verified in file) |
| TSK via CrossWire `TSK` | ~500k refs | Public domain | none | Possible supplement (phase 5) | No |
| STEPBible-Data (TAHOT, TAGNT, TBESH/TBESG, TVTMS…) | Tagged Hebrew/Greek, lexicons, **versification mapping** | CC BY 4.0 (README); changes should be recorded | "STEP Bible" linked to stepbible.org | **Use** — TVTMS for KJV↔LXX↔Arabic versification; lexicons in later phase | partial |
| NuBerea "intertextuality" (Hugging Face) | Second Temple intertexts | reported CC BY 4.0 — **UNVERIFIED** (gated) | — | Investigate in Phase 5 | possibly |

**Gap:** no verified open cross-reference dataset covering the deuterocanon. Plan: editorial
relationships authored and reviewed by us (CC BY), each with provenance.

## C. Patristic & Coptic sources

| Source | License (verified) | Use |
|---|---|---|
| ANF (1885–96), NPNF (1886–1900) | Public domain (pre-1931) | **Use**, taken from Wikisource or archive.org scans |
| Wikisource EN (ANF I–IX, NPNF I & II) | PD texts; Wikisource additions CC BY-SA | **Use** (credit Wikisource for formatting if retained) |
| Robertson, Athanasius *On the Incarnation* (NPNF² 4, 1892) | Public domain | **Use** |
| P. E. Pusey tr., Cyril *Commentary on John* (LFC 43/48, 1874/1885) | Public domain (tertullian.org: "copy freely") | **Use** |
| C.S.M.V. (Sister Penelope Lawson) *On the Incarnation* (1944) | Not PD in life+70 jurisdictions (~2047); US status unverified | **Do not use** |
| CCEL | Underlying texts PD; asks permission to "republish CCEL works" | Link; take texts from Wikisource instead |
| New Advent Fathers | "Copyright © 2026 by New Advent LLC" (Knight's edits) | **Link only** |
| earlychristianwritings.com | © Peter Kirby; "Permission is given to link" | **Link only** |
| st-takla.org (Malaty commentaries, Shenouda books, articles) | No open license; permission granted to st-takla only | **Link only** / brief quotation; seek permission for more |
| copticchurch.net, copticorthodox.church, Tasbeha, agpeya.org, Coptic Reader | No license found (all rights reserved by default) | **Link only** |

**Gap:** no openly licensed Coptic catechism, Agpeya translation, or Katameros was found. Modern
Arabic/English translations of ancient liturgical texts are copyrighted unless stated otherwise.
Reaching out for written permission (St. Shenouda Press, dioceses, st-takla) is a Phase 3 task.

## D. Do-not-scrape list (terms verified)
- Blue Letter Bible — "does not give permission to scrape any content".
- BibleGateway — "may not copy, download, … reproduce, … modify, translate".
- thetreasuryofscriptureknowledge.com — "no part of this Website may be reproduced or stored in any other website".

## E. Reference projects
- trekhleb/bible-cross-references — MIT ✔ (see `01-upstream-audit.md`).
- lggcs/crossrefviz — AGPL-3.0; AI-generated themes; not adopted.
