import { Subdomain } from '@/lib/data/domain'
import { Locale } from '@/lib/data/locale'

export interface DocTree extends DocLeaf {
  children: Array<DocTree | DocLeaf>
}

export interface DocLeaf {
  locale: Locale
  subdomain: Subdomain
  route: string
  title: string
}

export interface DocParams {
  locale: Locale
  subdomain: Subdomain
  slug: string[]
}

export interface DocMatch {
  match: string
  isDir: boolean
}
