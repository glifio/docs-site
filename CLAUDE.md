# CLAUDE.md

Project context for AI agents working in this repository.

## What this repo is

Documentation site for [GLIF](https://www.glif.io), a DeFi protocol on Filecoin. The site renders markdown docs into a Next.js web app.

## Tech stack

- **Monorepo**: pnpm workspaces + Turborepo
- **Framework**: Next.js (React 19)
- **Apps**: `apps/www` (main site, port 3000), `apps/icn` (ICN site, port 3001)
- **Shared package**: `packages/shared` — common components/utilities used by both apps
- **Node**: 24.x, **pnpm**: 9.1.2

## Repository layout

```
apps/
  www/                    # Main docs site
    docs/en/              # English markdown docs
    docs/zh/              # Chinese markdown docs
    public/docs/img/      # Doc images (local, .webp)
    public/docs/file/     # Doc assets (PDFs, etc.)
  icn/                    # ICN docs site
    docs/en/              # English markdown docs
    public/docs/img/      # Doc images
    public/docs/file/     # Doc assets
packages/
  shared/                 # Shared components/utilities
scripts/
  check-images.sh         # Image integrity checker (see below)
```

## Docs structure

- Every folder has a `README.md`
- Folders and files (except README.md) use **numbered prefixes** (`1-introduction/`, `2-reward-mechanism.md`)
- **Kebab-case** for all file/folder names
- Content is GitHub-flavored Markdown with KaTeX math support

## Images and assets

- Local images use **bare filenames** in markdown: `![alt](image.webp)` — no path prefix
- Image files live in `apps/{app}/public/docs/img/` (flat, no subdirectories currently)
- Asset files (PDFs) live in `apps/{app}/public/docs/file/`
- External images use full URLs: `![alt](https://...)`
- No `<img>` HTML tags — markdown syntax only

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

## Key conventions

- All doc images should be `.webp` format
- When adding images: place the file in the correct app's `public/docs/img/` and reference it by bare filename in markdown
- When removing images: remove both the file and all markdown references
- When renaming images: update all markdown references across all locale folders (`en/`, `zh/`)
- The `check:images` script will catch any mismatches between referenced and actual images
