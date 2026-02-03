import 'server-only'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'

import { locales, subdomains } from '@/lib/env'

const DOCS_DIR = path.join(process.cwd(), 'docs')

const numberPrefixRegex = /^\d+-/
const mdExtensionRegex = /\.md$/
const mdTitleRegex = /^#\s+(.+)$/m

export interface DocsTree {
  title: string
  url: string
  children?: Array<DocsTree>
}

export interface DocParams {
  locale: string
  subdomain: string
  slug: string[]
  url: string
}

export const getDoc = async (
  locale: string,
  subdomain: string,
  slug?: string[],
): Promise<string | null> => {
  let match = path.join(DOCS_DIR, locale, subdomain)

  // Find the file or folder match
  for (const part of slug ?? []) {
    const entries = await fs.readdir(match)
    const entry = entries.find(entry => {
      const withoutExt = entry.replace(mdExtensionRegex, '')
      const withoutPrefix = withoutExt.replace(numberPrefixRegex, '')
      return withoutPrefix === part
    })

    if (!entry) return null
    match = path.join(match, entry)
  }

  // Get the file path, exact match or README.md in folder
  const file = match.endsWith('.md') ? match : path.join(match, 'README.md')

  try {
    return await fs.readFile(file, 'utf-8')
  } catch {
    return null
  }
}

export const getDocTitle = (content: string): string => {
  const match = content.match(mdTitleRegex)
  return match ? match[1] : 'Untitled'
}

export const getDocsTree = async (
  dir: string,
  url: string,
): Promise<DocsTree> => {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const sorted = entries
    .filter(e => e.name !== 'README.md')
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))

  const title = await fs
    .readFile(path.join(dir, 'README.md'), 'utf-8')
    .then(getDocTitle)
    .catch(() => 'Untitled')

  for (const entry of sorted) {
  }
}

export const getAllDocParams = async (): Promise<DocParams[]> => {
  const params: DocParams[] = []

  for (const locale of locales) {
    for (const subdomain of subdomains) {
      const dir = path.join(DOCS_DIR, locale, subdomain)
      params.push(...(await getDirDocParams(locale, subdomain, dir, dir)))
    }
  }

  return params
}

const getDirDocParams = async (
  locale: string,
  subdomain: string,
  root: string,
  dir: string,
): Promise<DocParams[]> => {
  const params: DocParams[] = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    // Recurse into directories
    if (entry.isDirectory())
      params.push(...(await getDirDocParams(locale, subdomain, root, fullPath)))
    // Handle markdown files
    else if (entry.name.endsWith('.md')) {
      const relativePath = path.relative(root, fullPath)

      // Get slug parts and remove number prefixes
      const slug = relativePath
        .replace(mdExtensionRegex, '')
        .split(path.sep)
        .map(part => part.replace(numberPrefixRegex, ''))

      // README.md files are served at the folder root
      if (slug[slug.length - 1] === 'README') slug.pop()

      const url = `/${locale}/${subdomain}/docs/${slug.join('/')}`
      params.push({ locale, subdomain, slug, url })
    }
  }

  return params
}
