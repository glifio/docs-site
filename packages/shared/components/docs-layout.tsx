import { ReactNode } from 'react'
import classNames from 'classnames'

import { DocsHeader } from './docs-header'
import { DocsNav } from './docs-nav'
import { DocTree, Locale } from '../types'

interface DocsLayoutProps {
  locale: Locale
  locales: Locale[]
  tree: DocTree | null
  icon?: ReactNode
  children: ReactNode
}

export const DocsLayout = async ({
  locale,
  locales,
  tree,
  icon,
  children,
}: DocsLayoutProps) => (
  <html lang={locale}>
    <body className='antialiased bg-white text-black'>
      <DocsHeader locale={locale} locales={locales} icon={icon} />
      <div className='flex'>
        <div
          className={classNames(
            'flex-none sticky w-xs p-6 overflow-y-auto',
            'top-14.25 h-[calc(100vh-3.5rem-1px)]', // header height + border
          )}
        >
          {tree && <DocsNav tree={tree} small collapse />}
        </div>
        <main className='grow w-full max-w-6xl mx-auto p-6'>{children}</main>
      </div>
    </body>
  </html>
)
