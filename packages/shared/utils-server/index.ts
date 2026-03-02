import * as fs from 'node:fs/promises'
import * as path from 'node:path'

import {
  DocLeaf,
  DocMatch,
  DocParams,
  DocPrevNext,
  DocTree,
  Locale,
} from '../types'

const flattenDocTree = (tree: DocTree): DocLeaf[] => {
  const leaves: DocLeaf[] = [tree]
  for (const child of tree.children) {
    if ('children' in child) leaves.push(...flattenDocTree(child))
    else leaves.push(child)
  }
  return leaves
}

const readDocFile = async (path: string): Promise<string> =>
  fs.readFile(path, 'utf-8').then(content => content.replace(/^\uFEFF/, ''))

const readDocTitle = async (path: string): Promise<string> =>
  readDocFile(path).then(getDocTitle)

const getDocSlug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/\.md$/, '') // Remove .md extension
    .replace(/^\d+-/, '') // Remove number prefix
    .replace(/[^a-z0-9-]/g, '') // Remove illegal characters
    .replace(/-+/g, '-') // Collapse dashes

const getDocHref = (locale: Locale, slug?: string[]): string =>
  `/${locale}${slug ? `/${slug.join('/')}` : ''}`

const getDocMatch = async (
  docsDir: string,
  locale: Locale,
  slug?: string[],
): Promise<DocMatch | null> => {
  let docPath = path.join(docsDir, locale)
  let isDir = true

  // Find the file or folder match
  for (const part of slug ?? []) {
    const entries = await fs.readdir(docPath, { withFileTypes: true })
    const entry = entries.find(entry => getDocSlug(entry.name) === part)
    if (!entry) return null
    docPath = path.join(docPath, entry.name)
    isDir = entry.isDirectory()
  }

  return { docPath, isDir }
}

const getDocFilePath = async (match: DocMatch): Promise<string | null> => {
  // Get README.md for folder match
  if (match?.isDir) {
    const readme = path.join(match.docPath, 'README.md')
    return fs
      .access(readme, fs.constants.R_OK)
      .then(() => readme)
      .catch(() => null)
  }

  // Get markdown file match
  return match?.docPath.endsWith('.md') ? match.docPath : null
}

export const getDocContent = async (
  docsDir: string,
  locale: Locale,
  slug?: string[],
): Promise<string | null> => {
  const match = await getDocMatch(docsDir, locale, slug)
  const filePath = match ? await getDocFilePath(match) : null
  return filePath ? readDocFile(filePath) : null
}

export const getDocFooter = async (
  docsDir: string,
  locale: Locale,
): Promise<string | null> => {
  const footer = path.join(docsDir, locale, 'FOOTER.md')
  return fs
    .access(footer, fs.constants.R_OK)
    .then(() => readDocFile(footer))
    .catch(() => null)
}

export const getDocTitle = (docContent: string): string =>
  docContent.match(/^#\s+(.+)$/m)?.at(1) ?? 'Untitled'

export const getDocPrevNext = async (
  docsDir: string,
  locale: Locale,
  slug?: string[],
): Promise<DocPrevNext> => {
  const tree = await getDocTree(docsDir, locale)
  if (!tree) return { prev: null, next: null }

  const leaves = flattenDocTree(tree)
  const href = getDocHref(locale, slug)
  const index = leaves.findIndex(leaf => leaf.href === href)

  return {
    prev: (index > 0 && leaves.at(index - 1)) || null,
    next: (index < leaves.length - 1 && leaves.at(index + 1)) || null,
  }
}

export const getDocTree = async (
  docsDir: string,
  locale: Locale,
  slug?: string[],
): Promise<DocTree | null> => {
  const match = await getDocMatch(docsDir, locale, slug)
  if (!match?.isDir) return null

  const entries = await fs.readdir(match.docPath, { withFileTypes: true })
  const sorted = entries
    .filter(e => e.name !== 'README.md' && e.name !== 'FOOTER.md')
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))

  const href = getDocHref(locale, slug)
  const filePath = await getDocFilePath(match)
  const title = filePath ? await readDocTitle(filePath) : 'Untitled'
  const tree: DocTree = { title, href, children: [] }

  for (const entry of sorted) {
    const entrySlug = slug
      ? [...slug, getDocSlug(entry.name)]
      : [getDocSlug(entry.name)]

    // Push subtree for directory
    if (entry.isDirectory()) {
      const entryTree = await getDocTree(docsDir, locale, entrySlug)
      if (entryTree) tree.children.push(entryTree)
    }
    // Push leaf for markdown file
    else if (entry.name.endsWith('.md'))
      tree.children.push({
        title: await readDocTitle(path.join(match.docPath, entry.name)),
        href: getDocHref(locale, entrySlug),
      })
  }

  return tree
}

export const getDocParams = async (
  docsDir: string,
  locales: Locale[],
): Promise<DocParams[]> => {
  const params: DocParams[] = []

  for (const locale of locales) {
    const dir = path.join(docsDir, locale)
    params.push(...(await getDirDocParams(locale, dir, dir)))
  }

  return params
}

const getDirDocParams = async (
  locale: Locale,
  root: string,
  dir: string,
): Promise<DocParams[]> => {
  const params: DocParams[] = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name)

    // Exclude footers for static site generation
    if (entry.name === 'FOOTER.md') continue

    // Recurse into directories
    if (entry.isDirectory())
      params.push(...(await getDirDocParams(locale, root, entryPath)))
    // Handle markdown files
    else if (entry.name.endsWith('.md')) {
      const relativePath = path.relative(root, entryPath)

      // Get slug parts from path
      const slug = relativePath.split(path.sep).map(getDocSlug)

      // README.md files are served at the folder root
      if (slug[slug.length - 1] === 'readme') slug.pop()

      params.push({ locale, slug })
    }
  }

  return params
}
