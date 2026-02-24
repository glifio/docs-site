import { DocsBtmLink } from './DocsBtmLink'
import { DocsMarkdown } from './DocsMarkdown'
import { DocsNav } from './DocsNav'
import { DocLeaf, DocTree } from '@/lib/types/docs'

/**
 * Documentation page
 */

interface DocsPageProps {
  locale: string
  subdomain: string
  content: string
  footer: string | null
  tree: DocTree | null
  prev: DocLeaf | null
  next: DocLeaf | null
  tNav: string
  tPrev: string
  tNext: string
  publicRoot?: `/${string}`
  isSubdomainHost?: boolean
}

export const DocsPage = ({
  locale,
  subdomain,
  content,
  footer,
  tree,
  prev,
  next,
  tNav,
  tPrev,
  tNext,
  publicRoot,
  isSubdomainHost,
}: DocsPageProps) => (
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
        title={tNav}
        rootIndent
        isSubdomainHost={isSubdomainHost}
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
          <DocsBtmLink label={tPrev} doc={prev} align='left' />
          <DocsBtmLink label={tNext} doc={next} align='right' />
        </nav>
      </>
    )}
  </article>
)
