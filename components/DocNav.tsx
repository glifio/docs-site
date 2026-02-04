'use client'

import Link from 'next/link'
import { DocTree, DocLeaf } from '@/lib/docs'

interface DocNavProps {
  tree: DocTree
  showTitle?: boolean
}

export const DocNav = ({ tree, showTitle }: DocNavProps) => (
  <nav className='prose prose-gray prose-sm'>
    {showTitle && (
      <h2>
        <Link href={tree.url}>{tree.title}</Link>
      </h2>
    )}
    <ul className='pl-0 list-none'>
      {tree.children.map(child => (
        <DocTreeNode key={child.url} node={child} />
      ))}
    </ul>
  </nav>
)
