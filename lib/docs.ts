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
