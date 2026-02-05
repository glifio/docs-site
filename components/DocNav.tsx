'use client'

import Link from 'next/link'
import classnames from 'classnames'
import { useState } from 'react'
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
    <nav className={classnames('prose prose-gray', small && 'prose-sm')}>
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

interface DocNodeProps {
  node: DocTree | DocLeaf
  pathname: string
  collapse?: boolean
}

const DocNode = ({ node, collapse, pathname }: DocNodeProps) => {
  const isFolder = 'children' in node
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li>
      <span
        className='flex justify-between items-center'
        onClick={isFolder ? () => setIsOpen(prev => !prev) : undefined}
      >
        <Link href={node.url}>{node.title}</Link>

        {isFolder && (
          <span className='p-1.5 cursor-pointer'>
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              className='block transition-transform duration-200'
              style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              <path
                d='M4 2 L8 6 L4 10'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
              />
            </svg>
          </span>
        )}
      </span>

      {isFolder && (
        <div
          className='grid transition-[grid-template-rows]'
          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
          <div className='overflow-hidden'>
            <ul className='ml-1.5 pl-1.5 border-l border-current/25 list-none'>
              {node.children.map(child => (
                <DocNode
                  key={child.url}
                  node={child}
                  pathname={pathname}
                  collapse={collapse}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  )
}
