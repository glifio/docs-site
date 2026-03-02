# Glif Docs

Documentation sites for [Glif](https://www.glif.io) and [ICN](https://icn.glif.io), built as a Turborepo monorepo with Next.js 16 and shared components.

## Structure

```
apps/
  www/     — Glif docs (port 3000)
  icn/     — ICN docs (port 3001)
packages/
  shared/  — Shared components, hooks, utils, and types
```

## Prerequisites

- Node.js 24.x
- pnpm 9.1.2

## Getting started

```sh
pnpm install
```

Run all dev servers:

```sh
pnpm dev
```

Or run a single app:

```sh
pnpm --filter @glif/www dev
pnpm --filter @glif/icn dev
```

## Build

```sh
pnpm build
```

## Lint

```sh
pnpm lint
pnpm fix   # auto-fix
```

## Type check

```sh
pnpm tsc
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on writing and maintaining documentation.
