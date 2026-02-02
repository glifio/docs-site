# Technical Documentation

This document describes the architecture and implementation of the GLIF documentation site.

## Stack & Dependencies

### Core

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** + **@tailwindcss/typography** (prose styling)

### Markdown rendering

- **react-markdown** + **remark-gfm** (tables, strikethrough, autolinks)
- **remark-math** + **rehype-katex** (LaTeX math expressions)
- **remark-github-blockquote-alert** (`> [!NOTE]` / `> [!WARNING]` / etc.)
