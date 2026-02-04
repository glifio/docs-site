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
| Internal doc link | `/docs/` + path from subdomain folder, **no `.md` extension** | `[rewards](/docs/1-tokens/2-rewards)` |
| Internal folder link | `/docs/` + path to folder (addresses its `README.md`) | `[tutorials](/docs/1-tokens)` |
| Internal site link | Path to a non-documentation page on the GLIF website, **no locale or subdomain** | `[wallet](/wallet)` |
| Anchor link | `#anchor-name` | `[see below](#example-section)` |
| Internal + anchor | Combines internal path with anchor | `[staking](/docs/tokens/rewards#staking)` |

### Anchor names

Anchors link to any header in a document. To derive the anchor name from a header:

1. Lowercase the text
2. Replace spaces with dashes
3. Remove all non-alphanumeric characters (except dashes)
4. Collapse consecutive dashes into a single dash

For example:
- `## Reward Mechanism (stICNT)` becomes `#reward-mechanism-sticnt`
- `## Step 1 - Connect wallet` becomes `#step-1-connect-wallet`

## Math expressions

LaTeX math expressions are supported via [KaTeX](https://katex.org/). Use `$` for inline math and `$$` for display (block) math:

```md
The formula $E = mc^2$ is inline.

$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$
```

See the [KaTeX supported functions](https://katex.org/docs/supported) for a full reference.

## Blockquote alerts

GitHub-style blockquote alerts are supported. Start a blockquote with `[!TYPE]` on the first line:

```md
> [!NOTE]
> Useful background information.

> [!TIP]
> Helpful advice for best results.

> [!IMPORTANT]
> Key information the reader should know.

> [!WARNING]
> Something that could cause problems.

> [!CAUTION]
> Risk of data loss or other serious consequences.
```
