import { DocBtmLink } from './DocBtmLink'
import { DocMarkdown } from './DocMarkdown'
import { DocNav } from './DocNav'
import { DocTree, DocLeaf } from '@/lib/docs'

/**
 * Documentation page
 */

interface DocPageProps {
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

export const DocPage = ({
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
}: DocPageProps) => (
  <article className='prose prose-gray max-w-none'>
    <DocMarkdown locale={locale} subdomain={subdomain} content={content} />

    {tree && <DocNav tree={tree} title={tNav} rootIndent />}

    {(prev || next) && (
      <>
        <hr />
        <nav className='not-prose flex justify-between gap-4'>
          <DocBtmLink label={tPrev} doc={prev} align='left' />
          <DocBtmLink label={tNext} doc={next} align='right' />
        </nav>
      </>
    )}

    {footer && (
      <DocMarkdown locale={locale} subdomain={subdomain} content={footer} />
    )}
  </article>
)
