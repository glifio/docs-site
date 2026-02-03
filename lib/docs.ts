import 'server-only'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'

import { locales, subdomains } from '@/lib/env'

const DOCS_DIR = path.join(process.cwd(), 'docs')

interface Doc {
  title: string
  content: string
  params: DocParams
}

interface DocParams {
  locale: string
  subdomain: string
  slug: string[]
  url: string
}

export const getDoc = async (
  locale: string,
  subdomain: string,
  slug: string[],
): Promise<Doc | null> => {
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
  base: string,
  dir: string,
): Promise<DocParams[]> => {
  const params: DocParams[] = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    // Recurse into directories
    if (entry.isDirectory())
      params.push(...(await getDirDocParams(locale, subdomain, base, fullPath)))
    // Handle markdown files
    else if (entry.name.endsWith('.md')) {
      const relativePath = path.relative(base, fullPath)

      // Get slug parts and remove number prefixes
      const slug = relativePath
        .replace(/\.md$/, '')
        .split(path.sep)
        .map(part => part.replace(/^\d+-/, ''))

      // README.md files are served at the folder root
      if (slug[slug.length - 1] === 'README') slug.pop()

      const url = `/${locale}/${subdomain}/docs/${slug.join('/')}`
      params.push({ locale, subdomain, slug, url })
    }
  }

  return params
}
