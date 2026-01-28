# Contributing

Guidelines for writing and maintaining documentation in this repository.

## Markdown syntax

All files use [GitHub-flavored Markdown](https://github.github.com/gfm/).

## File structure rules

1. Every markdown file must start with an **h1 header** (`# Title`).
2. Every folder must contain a `README.md`.
3. **Numbered prefixes** are mandatory for folders and all markdown files *except* `README.md` (e.g. `1-for-liquidity-providers/`, `2-reward-mechanism-sticnt.md`).
4. Use **kebab-case** for all file and folder names.

## Images

Use standard markdown image syntax: `![alt text](url)`

| Type | Format | Example |
|------|--------|---------|
| External image | Full URL | `![diagram](https://example.com/diagram.png)` |
| Local image | Filename only (file lives in `public/`) | `![GLIF Logo](logo.png)` |

## Links

Use standard markdown link syntax: `[text](url)`

| Type | Format | Example |
|------|--------|---------|
| Asset link | Filename only (asset lives in `public/`) | `[audit](audit.pdf)` |
| External link | Full URL | `[Filecoin](https://filecoin.io)` |
| Internal doc link | Relative path from the domain folder, **no `.md` extension** | `[rewards](/1-for-liquidity-providers/2-reward-mechanism-sticnt)` |
| Anchor link | `#anchor-name` | `[see below](#example-section)` |
| Internal + anchor | Combines internal path with anchor | `[rewards example](/1-for-liquidity-providers/2-reward-mechanism-sticnt#example-anchor)` |
