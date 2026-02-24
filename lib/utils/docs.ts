import 'server-only'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'

import { subdomains } from '@/lib/data/domain'
import { locales } from '@/lib/data/locale'
import { DocLeaf, DocMatch, DocParams, DocTree } from '@/lib/types/docs'

const DOCS_DIR = path.join(process.cwd(), 'docs')

const flattenDocTree = (tree: DocTree): DocLeaf[] => {
  const leaves: DocLeaf[] = [{ title: tree.title, url: tree.url }]
  for (const child of tree.children) {
    if ('children' in child) leaves.push(...flattenDocTree(child))
    else leaves.push(child)
  }
  return leaves
}

const readDocFile = async (docPath: string): Promise<string> =>
  fs.readFile(docPath, 'utf-8').then(content => content.replace(/^\uFEFF/, ''))

const readDocTitle = async (docFile: string): Promise<string> =>
  readDocFile(docFile).then(getDocTitle)

const getDocSlug = (docName: string): string =>
  docName
    .toLowerCase()
    .replace(/\.md$/, '') // Remove .md extension
    .replace(/^\d+-/, '') // Remove number prefix
    .replace(/[^a-z0-9-]/g, '') // Remove illegal characters
    .replace(/-+/g, '-') // Collapse dashes

const getDocUrl = (
  locale: string,
  subdomain: string,
  slug?: string[],
): string => `/${locale}/${subdomain}/docs${slug ? `/${slug.join('/')}` : ''}`

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

const getDocFile = async (docMatch: DocMatch): Promise<string | null> => {
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
  const docMatch = await getDocMatch(locale, subdomain, slug)
  const docFile = docMatch ? await getDocFile(docMatch) : null
  return docFile ? readDocFile(docFile) : null
}

export const getDocFooter = async (
  locale: string,
  subdomain: string,
): Promise<string | null> => {
  const footer = path.join(DOCS_DIR, locale, subdomain, 'FOOTER.md')
  return fs
    .access(footer, fs.constants.R_OK)
    .then(() => readDocFile(footer))
    .catch(() => null)
}

export const getDocTitle = (docContent: string): string => {
  const match = docContent.match(/^#\s+(.+)$/m)
  return match ? match[1] : 'Untitled'
}

export interface DocPrevNext {
  prev: DocLeaf | null
  next: DocLeaf | null
}

export const getDocPrevNext = async (
  locale: string,
  subdomain: string,
  slug?: string[],
): Promise<DocPrevNext> => {
  const tree = await getDocTree(locale, subdomain)
  if (!tree) return { prev: null, next: null }

  const leaves = flattenDocTree(tree)
  const currentUrl = getDocUrl(locale, subdomain, slug)
  const index = leaves.findIndex(leaf => leaf.url === currentUrl)

  return {
    prev: index > 0 ? leaves[index - 1] : null,
    next: index < leaves.length - 1 ? leaves[index + 1] : null,
  }
}

export const getDocTree = async (
  locale: string,
  subdomain: string,
  slug?: string[],
): Promise<DocTree | null> => {
  const docMatch = await getDocMatch(locale, subdomain, slug)
  if (!docMatch?.isDir) return null

  const entries = await fs.readdir(docMatch.match, { withFileTypes: true })
  const sorted = entries
    .filter(e => e.name !== 'README.md' && e.name !== 'FOOTER.md')
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))

  const docFile = await getDocFile(docMatch)
  const title = docFile ? await readDocTitle(docFile) : 'Untitled'
  const url = getDocUrl(locale, subdomain, slug)
  const tree: DocTree = { title, url, children: [] }

  for (const entry of sorted) {
    const entrySlug = slug
      ? [...slug, getDocSlug(entry.name)]
      : [getDocSlug(entry.name)]

    // Push subtree for directory
    if (entry.isDirectory()) {
      const entryTree = await getDocTree(locale, subdomain, entrySlug)
      if (entryTree) tree.children.push(entryTree)
    }
    // Push leaf for markdown file
    else if (entry.name.endsWith('.md'))
      tree.children.push({
        title: await readDocTitle(path.join(docMatch.match, entry.name)),
        url: getDocUrl(locale, subdomain, entrySlug),
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
    // Exclude footers for static site generation
    if (entry.name === 'FOOTER.md') continue

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
      if (slug[slug.length - 1] === 'readme') slug.pop()

      params.push({ locale, subdomain, slug })
    }
  }

  return params
}
