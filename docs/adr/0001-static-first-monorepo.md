# ADR 0001 — Static-first monorepo

**Status:** Accepted, 2026-10-11

## Context
The platform must deploy at $0, be maintained by one developer with AI help, and grow toward a
backend, search and AI later (master prompt §6, §10).

## Decision
- One Git repository using npm workspaces: `apps/web`, `apps/explorer`, `packages/content-schema`.
  Other packages are created only when code exists to put in them.
- All pages are pre-built static files. Content lives in Git as YAML, Markdown and JSON, and is
  validated by Zod schemas at build time.
- No server, database, authentication or paid API until a measured need appears.

## Consequences
- Hosting is free and simple, and any static host will do.
- Dynamic features (accounts, synced bookmarks, AI) need a later ADR and a cost forecast.
- Static JSON contracts are written so they can become API responses unchanged.
