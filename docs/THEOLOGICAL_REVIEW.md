# Theological review

## Status
**No reviewers have been appointed yet (2026-10-11).** This blocks publishing any doctrinal,
apologetics, patristic or historical content (Phase 3+). It also blocks presenting a Coptic
Orthodox canon profile as authoritative (Phase 5). It does not block Phases 1–2, which ship no
theological content.

## Open items awaiting a reviewer
- The deuterocanonical book list, Arabic book names and book order (`packages/bible/src/books.ts`). See `docs/BIBLE.md`.
- Whether to keep the Vulgate-based Arabic deuterocanon until a Septuagint-based Arabic text is licensed.
- The default English edition (KJV or Septuagint).
- Arabic book and genre names in the cross-reference explorer (`apps/explorer/src/core/bible/names-ar.ts`).

## Reviewers

| Name | Role / qualification | Areas | Since |
|---|---|---|---|
| _to be appointed by the project owner_ | | | |

## Workflow (Git-based)
1. An author opens a pull request that adds or changes content with `review.status: draft` or
   `awaiting-review`.
2. A listed reviewer reviews it in the pull request: sources, citations, doctrine, tone.
3. The reviewer approves the PR, and the author sets `status: reviewed` or `published` with
   `reviewer` and `reviewedAt`. The schema rejects these statuses without both fields.
4. `CODEOWNERS` will require reviewer approval for `content/` once reviewers have GitHub accounts.
5. Git history is the version history. `updatedAt` records the last substantive change.

## Statuses

| Status | Shown to readers as |
|---|---|
| `draft` | Not published |
| `awaiting-review` | Not published |
| `reviewed` | Reviewed but not yet released. Visible in previews only |
| `published` | Reviewed, with the reviewer and date shown |
| `needs-revision` | Not published, or withdrawn with a notice |
| `archived` | Kept for history, not listed |

## Source hierarchy (draft, pending reviewer confirmation)
1. Holy Scripture as received in the Coptic Orthodox biblical tradition
2. Official teaching of the Coptic Orthodox Church and its Holy Synod
3. Councils as received by the Coptic Orthodox Church
4. The Church Fathers and the Alexandrian theological tradition
5. Qualified modern Coptic Orthodox scholarship
6. Historical and academic research
7. Other Christian traditions, identified as such
8. Unreviewed community or AI-assisted material, always labeled

This classifies kinds of sources. It does not say that every text in a category carries equal authority.
