# CLAUDE.md

Project context for AI agents working in this repository.

## What this repo is

Documentation site for [GLIF](https://www.glif.io), a DeFi protocol on Filecoin. The site renders markdown docs into a Next.js web app.

## Tech stack

- **Monorepo**: pnpm workspaces + Turborepo
- **Framework**: Next.js
- **Apps**: each subdirectory under `apps/` is a separate Next.js site (check `apps/*/package.json` for ports and details)
- **Shared package**: `packages/shared` — common components/utilities used by all apps
- Node and pnpm versions are specified in the root `package.json`

## Repository layout

```
apps/
  {app}/                  # Each app is a Next.js docs site
    docs/{locale}/        # Markdown docs per locale (e.g. en/, zh/)
    public/docs/img/      # Doc images
    public/docs/file/     # Doc assets (PDFs, etc.)
packages/
  shared/                 # Shared components/utilities
scripts/                  # Repo-wide scripts (e.g. check-images.sh)
```

## Writing docs

See `CONTRIBUTING.md` for markdown syntax rules, image/link conventions, and supported features (math, blockquote alerts, etc.). Read it before editing any markdown files.

## Images and assets

- Image files live in `apps/{app}/public/docs/img/`
- Asset files (PDFs) live in `apps/{app}/public/docs/file/`
- Markdown references images by **bare filename** — the repo layout above shows where the actual files go

## Commands

| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start all apps in dev mode (Turbo) |
| `pnpm build` | Build all apps (Turbo) |
| `pnpm tsc` | Type-check all apps |
| `pnpm lint` | Lint with ESLint |
| `pnpm fix` | Auto-fix lint issues |
| `pnpm check:images` | Check for orphaned/missing images across all apps |

## CI checks

- **check-images** (`.github/workflows/check-images.yml`): Runs on PRs to `main`. Fails if any app has orphaned images (file exists but no markdown references it) or missing images (markdown references a file that doesn't exist). Run locally with `pnpm check:images`.
