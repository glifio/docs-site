import { DocsBtmLink } from './DocsBtmLink'
import { DocsMarkdown } from './DocsMarkdown'
import { DocsNav } from './DocsNav'
import { DocTree, DocLeaf } from '@/lib/docs'

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
}: DocsPageProps) => (
  <article className='prose prose-gray max-w-none'>
    <DocsMarkdown
      locale={locale}
      subdomain={subdomain}
      content={content}
      anchorLinks
    />

    {tree && <DocsNav tree={tree} title={tNav} rootIndent />}

    {(prev || next) && (
      <>
        <hr />
        <nav className='not-prose flex justify-between gap-4'>
          <DocsBtmLink label={tPrev} doc={prev} align='left' />
          <DocsBtmLink label={tNext} doc={next} align='right' />
        </nav>
      </>
    )}

    {footer && (
      <DocsMarkdown locale={locale} subdomain={subdomain} content={footer} />
    )}
  </article>
)
