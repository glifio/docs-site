export interface DocTree extends DocLeaf {
  children: Array<DocTree | DocLeaf>
}

export interface DocLeaf {
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
