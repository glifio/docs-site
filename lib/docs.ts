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

export interface DocMatch {
  match: string
  isDir: boolean
}

const readDocFile = async (docPath: string): Promise<string> =>
  fs.readFile(docPath, 'utf-8').then(content => content.replace(/^\uFEFF/, ''))

const readDocTitle = async (docPath: string): Promise<string> =>
  readDocFile(docPath).then(getDocTitle)

const getDocSlug = (docName: string): string =>
  docName.replace(mdExtensionRegex, '').replace(numberPrefixRegex, '')

const getDocMatch = async (
  locale: string,
  subdomain: string,
  slug?: string[],
): Promise<DocMatch | null> => {
  let match = path.join(DOCS_DIR, locale, subdomain)
  let isDir = true

  // Find the file or folder match
  for (const part of slug ?? []) {
    const entries = await fs.readdir(match, { withFileTypes: true })
    const entry = entries.find(entry => getDocSlug(entry.name) === part)
    if (!entry) return null
    match = path.join(match, entry.name)
    isDir = entry.isDirectory()
  }

  return { match, isDir }
}

const getDocFile = async (
  locale: string,
  subdomain: string,
  slug?: string[],
): Promise<string | null> => {
  const docMatch = await getDocMatch(locale, subdomain, slug)

  // Get README.md for folder match
  if (docMatch?.isDir) {
    const readme = path.join(docMatch.match, 'README.md')
    return fs
      .access(readme, fs.constants.R_OK)
      .then(() => readme)
      .catch(() => null)
  }

  // Get markdown file match
  return docMatch?.match.endsWith('.md') ? docMatch.match : null
}

export const getDocContent = async (
  locale: string,
  subdomain: string,
  slug?: string[],
): Promise<string | null> => {
  const docFile = await getDocFile(locale, subdomain, slug)
  return docFile ? readDocFile(docFile) : null
}

export const getDocTitle = (docContent: string): string => {
  const match = docContent.match(mdTitleRegex)
  return match ? match[1] : 'Untitled'
}

export const getDocTree = async (
  locale: string,
  subdomain: string,
  slug?: string[],
): Promise<DocsTree | null> => {
  const docMatch = await getDocMatch(locale, subdomain, slug)
  if (!docMatch?.isDir) return null

  const entries = await fs.readdir(docMatch.match, { withFileTypes: true })
  const sorted = entries
    .filter(e => e.name !== 'README.md')
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))

  const title = await readDocTitle(path.join(dir, 'README.md'))
  const tree: DocsTree = { title, url, children: [] }

  for (const entry of sorted) {
    const entryPath = path.join(dir, entry.name)
    const entryUrl = `${url}/${getDocSlug(entry.name)}`

    if (entry.isDirectory())
      tree.children.push(await getDocsTree(entryPath, entryUrl))
    else if (entry.name.endsWith('.md'))
      tree.children.push({
        title: await readDocTitle(entryPath),
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
