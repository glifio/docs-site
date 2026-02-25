'use client'

import { MouseEventHandler, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import Link from 'next/link'

import { DocLeaf, DocTree } from '@/lib/types/docs'

/**
 * Navigation tree
 */

interface DocsNavProps {
  tree: DocTree
  title?: string
  small?: boolean
  collapse?: boolean
  rootIndent?: boolean
  isSubdomainHost?: boolean
}

export const DocsNav = ({
  tree,
  title,
  small,
  collapse,
  rootIndent,
  isSubdomainHost,
}: DocsNavProps) => {
  const pathname = usePathname()

  return (
    <nav className={classNames('prose prose-gray', small && 'prose-sm')}>
      <h2>
        {title ?? (
          <DocLink
            node={tree}
            pathname={pathname}
            className='block'
            isSubdomainHost={isSubdomainHost}
          />
        )}
      </h2>

      <ul
        className={classNames(
          'list-none',
          rootIndent ? 'ml-1.5 pl-1.5 border-l border-current/25' : 'pl-0',
        )}
      >
        {tree.children.map(child => (
          <DocNode
            key={child.route}
            node={child}
            pathname={pathname}
            collapse={collapse}
            isSubdomainHost={isSubdomainHost}
          />
        ))}
      </ul>
    </nav>
  )
}

/**
 * Navigation node
 */

interface DocNodeProps {
  node: DocTree | DocLeaf
  pathname: string
  collapse?: boolean
  isSubdomainHost?: boolean
}

const DocNode = ({
  node,
  collapse,
  pathname,
  isSubdomainHost,
}: DocNodeProps) => {
  const [isOpen, setIsOpen] = useState(false)

  // Folder properties
  const isFolder = 'children' in node
  const canCollapse = isFolder && collapse

  // Open folder on routing
  useEffect(() => {
    if (canCollapse && pathname.startsWith(node.url)) setIsOpen(true)
  }, [canCollapse, pathname, node])

  return (
    <li>
      <span
        className='flex justify-between items-center'
        onClick={() => canCollapse && setIsOpen(prev => !prev)}
      >
        <DocLink
          node={node}
          pathname={pathname}
          className='grow'
          onClick={e => {
            e.stopPropagation()
            if (canCollapse) setIsOpen(true)
          }}
        />

        {canCollapse && (
          <span className='p-1.5 pl-3 cursor-pointer'>
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
          style={{ gridTemplateRows: !canCollapse || isOpen ? '1fr' : '0fr' }}
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

/**
 * Navigation link
 */

interface DocLinkProps {
  node: DocLeaf
  pathname: string
  className?: classNames.Argument
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

const DocLink = ({ node, pathname, className, onClick }: DocLinkProps) => (
  <Link
    href={node.url}
    onClick={onClick}
    className={classNames(
      'no-underline transition-colors hover:text-accent',
      pathname === node.url
        ? 'text-accent'
        : pathname.startsWith(node.url)
          ? 'text-current'
          : 'text-current/50',
      className,
    )}
  >
    {node.title}
  </Link>
)
