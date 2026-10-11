# Local changes to the vendored explorer

`apps/explorer/` is a `git subtree` of
[trekhleb/bible-cross-references](https://github.com/trekhleb/bible-cross-references) (MIT),
imported at upstream commit `23e7f90` (2026-09-28). Keep this list current: every change here is
a merge conflict waiting to happen when upstream is pulled, so keep patches small.

| #   | Change                                    | Files                                           | Reason                                                                   |
| --- | ----------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------ |
| 1   | Removed the Google Analytics build plugin | `vite/analytics.ts` (deleted), `vite.config.ts` | No third-party tracking (privacy-by-default, master prompt §13)          |
| 2   | Removed `package-lock.json`               | `package-lock.json` (deleted)                   | The monorepo's root lockfile manages dependencies through npm workspaces |

Not patched, configured instead: the deploy path and origin come from the existing `BASE_PATH` and
`SITE_ORIGIN` environment variables (set by `scripts/build-site.ts`).

## Updating from upstream

```sh
git subtree pull --prefix=apps/explorer https://github.com/trekhleb/bible-cross-references.git main --squash
npm install
npm run check -w apps/explorer
```

Then re-apply or verify each patch above, re-run the parity checklist
(`docs/phase-0/04-feature-parity-checklist.md`), and record the new upstream commit here.
