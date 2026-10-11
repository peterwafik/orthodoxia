# Licensing

| What | License | Where recorded |
|---|---|---|
| Project code | MIT | `LICENSE` |
| Explorer code (`apps/explorer`) | MIT, © 2026 Oleksii Trekhleb | `apps/explorer/LICENSE` |
| Original content | CC BY-SA 4.0 | `LICENSE-CONTENT.md` |
| Arabic deuterocanon data (derived from Arabic Wikisource) | CC BY-SA 4.0: share-alike applies to that derived data | `content/sources/wikisource-arabic-deuterocanon.yaml` |
| Third-party data and texts | Their own licenses | `content/sources/*.yaml`, `/sources/` page |
| Fonts: Inter, Source Serif 4, Noto Sans Arabic, Noto Naskh Arabic | SIL Open Font License 1.1 | Packaged by Fontsource and self-hosted. Credited in the footer |
| Icons in the explorer (Lucide ISC, Material Design Apache-2.0, via react-icons MIT) | As stated | `apps/explorer/README.md` |

## Required attributions shown on the site
- "Cross-reference data: OpenBible.info (https://www.openbible.info/labs/cross-references/),
  licensed under CC BY 4.0. Modified: re-indexed to KJV verse numbering." This appears in the site
  footer and the explorer's credits.
- Explorer: "based on Bible Cross-References by Oleksii Trekhleb (MIT License)".

## Compatibility notes
- AGPL-3.0 code (e.g. CrossRefViz) must not be copied in. It would place the whole served app under AGPL.
- CC BY-SA sources (e.g. Biblica's NAV Arabic) would impose share-alike obligations on derived
  datasets. Avoid them unless that is decided deliberately.
- CrossWire's AraSVD module forbids format conversion. Use eBible's public-domain `arb-vd` instead.

Licensing facts were verified on 2026-10-11. This is not legal advice.
