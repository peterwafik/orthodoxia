# Contributing

Thank you for helping. Before you start:

1. Read [`docs/CONTENT_GUIDELINES.md`](docs/CONTENT_GUIDELINES.md). There are no fabricated
   citations, and every claim needs a traceable source.
2. Only add material you have the right to contribute. Third-party texts and data need a registry
   entry in `content/sources/` with a verified license (see [`docs/DATA_SOURCES.md`](docs/DATA_SOURCES.md)).
3. Code is MIT and original content is CC BY-SA 4.0. By contributing, you agree to license your
   contribution under them.

## Workflow
- Branch from `main` and open a pull request.
- `npm run check` must pass. CI runs the same checks plus `npm run build`.
- Theological content follows [`docs/THEOLOGICAL_REVIEW.md`](docs/THEOLOGICAL_REVIEW.md) and is
  never merged as `published` without a listed reviewer.
- Changes to `apps/explorer/` must be added to `apps/explorer/PATCHES.md`. Keep them small.

## AI assistance
AI-assisted contributions are welcome. Disclose them through `review.origin`, verify every reference
yourself, and never let a model's output stand in for a source.
