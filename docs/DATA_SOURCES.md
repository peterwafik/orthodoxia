# Data sources

The machine-readable registry is `content/sources/*.yaml`, validated in CI and rendered at
`/{lang}/sources/`. The full audit with evidence is in
[`phase-0/02-data-source-audit.md`](phase-0/02-data-source-audit.md).

## In use (2026-10-11)

| Source | Used for | License |
|---|---|---|
| OpenBible.info cross-references | Explorer links, homepage arcs | CC BY 4.0 (attribution + note on re-indexing) |
| Berean Standard Bible | English verse text in the explorer | Public domain |
| trekhleb/bible-cross-references | Explorer code | MIT |

Raw upstream files are pinned by SHA-256 in `apps/explorer/data/sources.json`.

## Rules
1. Nothing is imported without a registry entry whose `usage` is `import`.
2. "Readable online" does not mean "reusable". Link-only sources get citations and links, not copies.
3. Never scrape sites whose terms forbid it (Blue Letter Bible, BibleGateway,
   thetreasuryofscriptureknowledge.com, all recorded as `do-not-use`).
4. Re-verify a license before each new import and update `lastVerifiedAt`.

## Known gaps
- No openly licensed **Arabic** text of the deuterocanonical books.
- No verified open **cross-reference dataset** for the deuterocanonical books.
- No openly licensed Coptic catechism, Agpeya translation or Katameros. Permission requests are planned for Phase 3.
