import { Locale } from '@/lib/data/locale'

export interface DocTree extends DocLeaf {
  children: Array<DocTree | DocLeaf>
}

export interface DocLeaf {
  locale: Locale
  subdomain: string
  route: string
  title: string
}

export interface DocParams {
  locale: Locale
  subdomain: string
  slug: string[]
}

export interface DocMatch {
  match: string
  isDir: boolean
}
