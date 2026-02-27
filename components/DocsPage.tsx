'use client'

import { DocsBtmLink } from './DocsBtmLink'
import { DocsMarkdown } from './DocsMarkdown'
import { DocsNav } from './DocsNav'
import { useIsSubdomainHost } from './hooks'

import { Subdomain } from '@/lib/data/domain'
import { Locale } from '@/lib/data/locale'
import { DocLeaf, DocTree } from '@/lib/types/docs'

const translations = {
  next: {
    en: 'Next',
    zh: '下一页',
  },
  previous: {
    en: 'Previous',
    zh: '上一页',
  },
  'table-of-contents': {
    en: 'Table of Contents',
    zh: '目录',
  },
}

interface DocsPageProps {
  locale: Locale
  subdomain: Subdomain
  content: string
  footer: string | null
  tree: DocTree | null
  prev: DocLeaf | null
  next: DocLeaf | null
  publicRoot: `/${string}`
}

export const DocsPage = ({
  locale,
  subdomain,
  content,
  footer,
  tree,
  prev,
  next,
  publicRoot,
}: DocsPageProps) => {
  const isSubdomainHost = useIsSubdomainHost(subdomain)

  return (
    <article className='prose prose-gray max-w-none'>
      <DocsMarkdown
        locale={locale}
        subdomain={subdomain}
        content={content}
        anchorLinks
        publicRoot={publicRoot}
        isSubdomainHost={isSubdomainHost}
      />

      {tree && (
        <DocsNav
          tree={tree}
          title={translations['table-of-contents'][locale]}
          rootIndent
        />
      )}

      {footer && (
        <DocsMarkdown
          locale={locale}
          subdomain={subdomain}
          content={footer}
          publicRoot={publicRoot}
          isSubdomainHost={isSubdomainHost}
        />
      )}

      {(prev || next) && (
        <>
          <hr />
          <nav className='not-prose flex justify-between gap-4'>
            <DocsBtmLink
              label={translations.previous[locale]}
              doc={prev}
              align='left'
              isSubdomainHost={isSubdomainHost}
            />
            <DocsBtmLink
              label={translations.next[locale]}
              doc={next}
              align='right'
              isSubdomainHost={isSubdomainHost}
            />
          </nav>
        </>
      )}
    </article>
  )
}
