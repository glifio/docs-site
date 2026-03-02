import { DocsBtmLink } from './docs-btm-link'
import { DocsMarkdown } from './docs-markdown'
import { DocsNav } from './docs-nav'
import { DocLeaf, DocTree, Locale } from '../types'
import { t } from '../utils'

interface DocsPageProps {
  locale: Locale
  content: string
  footer: string | null
  tree: DocTree | null
  prev: DocLeaf | null
  next: DocLeaf | null
}

export const DocsPage = ({
  locale,
  content,
  footer,
  tree,
  prev,
  next,
}: DocsPageProps) => {
  return (
    <article className='prose prose-gray max-w-none'>
      <DocsMarkdown locale={locale} content={content} anchorLinks />

      {tree && (
        <DocsNav tree={tree} title={t(locale, 'tableOfContents')} rootIndent />
      )}

      {footer && <DocsMarkdown locale={locale} content={footer} />}

      {(prev || next) && (
        <>
          <hr />
          <nav className='not-prose flex justify-between gap-4'>
            <DocsBtmLink
              label={t(locale, 'previous')}
              doc={prev}
              align='left'
            />
            <DocsBtmLink label={t(locale, 'next')} doc={next} align='right' />
          </nav>
        </>
      )}
    </article>
  )
}
