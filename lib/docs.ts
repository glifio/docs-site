import 'server-only'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'

import { locales, subdomains } from '@/lib/env'

const DOCS_DIR = path.join(process.cwd(), 'docs')

const numberPrefixRegex = /^\d+-/
const mdExtensionRegex = /\.md$/
const mdTitleRegex = /^#\s+(.+)$/m

export interface DocsTree extends DocsLeaf {
  children: Array<DocsTree | DocsLeaf>
}

export interface DocsLeaf {
  title: string
  url: string
}

export interface DocParams {
  locale: string
  subdomain: string
  slug: string[]
}

const readDocFile = async (path: string): Promise<string> =>
  fs.readFile(path, 'utf-8').then(content => content.replace(/^\uFEFF/, ''))

export const getDoc = async (
  locale: string,
  subdomain: string,
  slug?: string[],
): Promise<string | null> => {
  let match = path.join(DOCS_DIR, locale, subdomain)

  // Find the file or folder match
  for (const part of slug ?? []) {
    const entries = await fs.readdir(match)
    const entry = entries.find(entry => getDocSlug(entry) === part)
    if (!entry) return null

    match = path.join(match, entry)
  }

  // Get the file path, exact match or README.md in folder
  const file = match.endsWith('.md') ? match : path.join(match, 'README.md')

  try {
    return await readDocFile(file)
  } catch {
    return null
  }
}

export const getDocSlug = (name: string): string =>
  name.replace(mdExtensionRegex, '').replace(numberPrefixRegex, '')

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

  const title = await readDocFile(path.join(dir, 'README.md'))
    .then(getDocTitle)
    .catch(() => 'Untitled')

  const tree: DocsTree = { title, url, children: [] }

  for (const entry of sorted) {
    const entryPath = path.join(dir, entry.name)
    const entryUrl = `${url}/${getDocSlug(entry.name)}`

    if (entry.isDirectory())
      tree.children.push(await getDocsTree(entryPath, entryUrl))
    else if (entry.name.endsWith('.md'))
      tree.children.push({
        title: getDocTitle(await readDocFile(entryPath)),
        url: entryUrl,
      })
  }

  return tree
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
    const entryPath = path.join(dir, entry.name)

    // Recurse into directories
    if (entry.isDirectory())
      params.push(
        ...(await getDirDocParams(locale, subdomain, root, entryPath)),
      )
    // Handle markdown files
    else if (entry.name.endsWith('.md')) {
      const relativePath = path.relative(root, entryPath)

      // Get slug parts from path
      const slug = relativePath.split(path.sep).map(getDocSlug)

      // README.md files are served at the folder root
      if (slug[slug.length - 1] === 'README') slug.pop()

      params.push({ locale, subdomain, slug })
    }
  }

  return params
}
