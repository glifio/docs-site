'use client'

import { MouseEventHandler, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import Link from 'next/link'

import { DocLeaf, DocTree } from '../types'
import { isPathnameMatch } from '../utils'

/**
 * Navigation tree
 */

interface DocsNavProps {
  tree: DocTree
  title?: string
  small?: boolean
  collapse?: boolean
  rootIndent?: boolean
}

export const DocsNav = ({
  tree,
  title,
  small,
  collapse,
  rootIndent,
}: DocsNavProps) => {
  const pathname = usePathname()

  return (
    <nav className={classNames('prose prose-gray', small && 'prose-sm')}>
      <h2>
        {title ?? <DocLink leaf={tree} pathname={pathname} className='block' />}
      </h2>

      <ul
        className={classNames(
          'list-none',
          rootIndent ? 'ml-1.5 pl-2.5 border-l border-current/25' : 'pl-0',
        )}
      >
        {tree.children.map(child => (
          <DocNode
            key={child.href}
            node={child}
            pathname={pathname}
            collapse={collapse}
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
}

const DocNode = ({ node, pathname, collapse }: DocNodeProps) => {
  const isFolder = 'children' in node
  const canCollapse = isFolder && !!collapse

  // Folder open state
  const [isOpen, setIsOpen] = useState(
    !canCollapse || isPathnameMatch(pathname, node.href),
  )

  // Open folder on routing
  useEffect(() => {
    if (isPathnameMatch(pathname, node.href)) setIsOpen(true)
  }, [pathname, node])

  return (
    <li className='p-0'>
      <span className='flex items-center'>
        <DocLink
          leaf={node}
          pathname={pathname}
          className='grow'
          onClick={() => setIsOpen(true)}
        />

        {canCollapse && (
          <span
            className='p-1.5 pl-3 cursor-pointer'
            onClick={() => setIsOpen(prev => !prev)}
          >
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              aria-hidden='true'
              className={classNames(
                'block transition-transform',
                isOpen && 'rotate-90',
              )}
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
            <ul className='ml-1.5 pl-2.5 border-l border-current/25 list-none'>
              {node.children.map(child => (
                <DocNode
                  key={child.href}
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
  leaf: DocLeaf
  pathname: string
  className?: classNames.Argument
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

const DocLink = ({
  leaf: { title, href },
  pathname,
  className,
  onClick,
}: DocLinkProps) => {
  const isPage = isPathnameMatch(pathname, href, true)
  const isParent = isPathnameMatch(pathname, href)
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isPage ? 'page' : undefined}
      className={classNames(
        'no-underline transition-colors hover:text-accent',
        isPage ? 'text-accent' : isParent ? 'text-current' : 'text-current/50',
        className,
      )}
    >
      {title}
    </Link>
  )
}
