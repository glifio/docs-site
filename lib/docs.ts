import 'server-only'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'

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

export const getAllDocParams = async (): Promise<DocParams[]> => {
  const params: DocParams[] = []

  for (const locale of locales) {
    for (const subdomain of subdomains) {
      const dir = path.join(DOCS_DIR, locale, subdomain)
      params.push(...(await getDirDocParams(dir)))
    }
  }

  return params
}
