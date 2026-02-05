'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DocTree, DocLeaf } from '@/lib/docs'

interface DocNavProps {
  tree: DocTree
  title?: string
  small?: boolean
  collapse?: boolean
}

export const DocNav = ({ tree, title, small, collapse }: DocNavProps) => {
  const pathname = usePathname()

  return (
    <nav className={`prose prose-gray ${small ? 'prose-sm' : ''}`}>
      <h2>{title ?? <Link href={tree.url}>{tree.title}</Link>}</h2>

      <ul className='pl-0 list-none'>
        {tree.children.map(child => (
          <DocNode
            key={child.url}
            node={child}
            pathname={pathname}
            collapse={collapse}
          />
        ))}
      </ul>
    </nav>
  )
}
const DocNode = ({ node }: { node: DocTree | DocLeaf }) => (
  <li>
    <Link href={node.url}>{node.title}</Link>

    {'children' in node && (
      <ul className='ml-1.5 pl-1.5 border-l border-current/25 list-none'>
        {node.children.map(child => (
          <DocNode key={child.url} node={child} />
        ))}
      </ul>
    )}
  </li>
)
