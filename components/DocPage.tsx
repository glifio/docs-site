import type { Element, Nodes, Root } from 'hast'
import { remarkAlert } from 'remark-github-blockquote-alert'
import { pinyin } from 'pinyin-pro'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import GithubSlugger from 'github-slugger'
import Link from 'next/link'

import { DocBtmLink } from './DocBtmLink'
import { DocHeader } from './DocHeader'
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

    {tree && <DocNav tree={tree} title={tNav} />}

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

/**
 * Markdown rendering
 */

interface DocMarkdownProps {
  locale: string
  subdomain: string
  content: string
}

const DocMarkdown = ({ locale, subdomain, content }: DocMarkdownProps) => (
  <ReactMarkdown
    remarkPlugins={[
      remarkGfm,
      remarkAlert,
      [remarkMath, { singleDollarTextMath: false }],
    ]}
    rehypePlugins={[rehypeSlugCustom, rehypeKatex]}
    components={{
      h1: props => <DocHeader Tag='h1' {...props} />,
      h2: props => <DocHeader Tag='h2' {...props} />,
      h3: props => <DocHeader Tag='h3' {...props} />,
      h4: props => <DocHeader Tag='h4' {...props} />,
      h5: props => <DocHeader Tag='h5' {...props} />,
      h6: props => <DocHeader Tag='h6' {...props} />,
      a: ({ href, children }) => {
        if (!href) return <a>{children}</a>

        // Internal links
        if (href.startsWith('/'))
          return <Link href={`/${locale}/${subdomain}${href}`}>{children}</Link>

        // Anchor links
        if (href.startsWith('#')) return <a href={href}>{children}</a>

        // External links
        if (/^https?:\/\//.test(href))
          return (
            <a href={href} target='_blank' rel='noopener noreferrer'>
              {children}
            </a>
          )

        // Asset links
        return (
          <a href={`/${href}`} download>
            {children}
          </a>
        )
      },
      img: ({ src, alt }) => {
        if (!src || typeof src !== 'string') return null
        const imgSrc = /^(https?:\/\/|\/)/.test(src) ? src : `/${src}`
        return <img src={imgSrc} alt={alt} /> // eslint-disable-line @next/next/no-img-element
      },
    }}
  >
    {content}
  </ReactMarkdown>
)

/**
 * Generate anchor link slugs
 * If support for other non-Latin scripts (e.g. Korean),
 * is needed, replace `pinyin-pro` with `transliteration`
 */
const rehypeSlugCustom = () => {
  const slugs = new GithubSlugger()
  return (tree: Root) => {
    slugs.reset()
    slugifyHeadings(tree, slugs)
  }
}

const slugifyHeadings = (node: Nodes, slugs: GithubSlugger) => {
  if (isHeading(node))
    node.properties.id = slugs.slug(transliterate(extractText(node)))
  if ('children' in node)
    node.children.forEach(child => slugifyHeadings(child, slugs))
}

const isHeading = (node: Nodes): node is Element =>
  node.type === 'element' && /^h[1-6]$/.test(node.tagName)

const extractText = (node: Nodes): string => {
  if (node.type === 'text') return node.value
  if ('children' in node) return node.children.map(extractText).join('')
  return ''
}

// Convert Chinese characters to pinyin, leaving non-Chinese text untouched.
// Pads pinyin with spaces to prevent merging with adjacent characters,
// and replaces fullwidth punctuation (：, （, ）, etc.) with spaces.
const transliterate = (text: string) =>
  text
    .replace(/[\u4e00-\u9fff]+/g, m => ` ${pinyin(m, { toneType: 'none' })} `)
    .replace(/[\uff00-\uffef\u3000-\u303f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
