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
| Internal doc link | `/docs/` + URL slug path to file | `[rewards](/docs/tokens/rewards)` |
| Internal folder link | `/docs/` + URL slug path to folder (addresses its `README.md`) | `[tokens](/docs/tokens)` |
| Internal site link | Path to a non-docs page on the site | `[wallet](/wallet)` |
| Anchor link | `#` + anchor name (same page only) | `[see below](#example-section)` |
| Internal + anchor | Internal path + `#` + anchor name (other page) | `[staking](/docs/tokens/rewards#staking)` |

> [!IMPORTANT]
> Internal links (doc, folder, and site) must never include the locale or subdomain segments (e.g. `/en/www/`). The site handles these automatically.
>
> To link to a heading on the **same page**, use a plain anchor link (`#anchor-name`). To link to a heading on a **different page**, use the internal + anchor format (`/docs/path#anchor-name`).

> [!TIP]
> To find the correct slug or anchor name, create the file/folder or heading first, then check the generated URL or anchor in the browser.

## Math expressions

LaTeX math expressions are supported via [KaTeX](https://katex.org/). Only display (block) math using `$$` is enabled. Inline math (`$...$`) is disabled to prevent conflicts with dollar sign currency notation (e.g. $GLF).

```md
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
