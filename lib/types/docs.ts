export interface DocTree extends DocLeaf {
  children: Array<DocTree | DocLeaf>
}

export interface DocLeaf {
  title: string
  url: string
}
