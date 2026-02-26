export interface DocTree extends DocLeaf {
  children: Array<DocTree | DocLeaf>
}

export interface DocLeaf {
  locale: string
  subdomain: string
  route: string
  title: string
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
