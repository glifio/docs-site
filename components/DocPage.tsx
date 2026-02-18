import type { Element, Nodes, Root } from 'hast'
import type { ReactNode } from 'react'
import { remarkAlert } from 'remark-github-blockquote-alert'
import { pinyin } from 'pinyin-pro'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import GithubSlugger from 'github-slugger'
import classNames from 'classnames'
import Link from 'next/link'

import { DocNav } from '@/components/DocNav'
import { DocTree, DocLeaf } from '@/lib/docs'

/**
 * Documentation page
 */

interface DocPageProps {
  content: string
  footer: string | null
  tree: DocTree | null
  prev: DocLeaf | null
  next: DocLeaf | null
}

export const DocPage = ({
  content,
  footer,
  tree,
  prev,
  next,
}: DocPageProps) => (
  <article className='prose prose-gray max-w-none'>
    <DocMarkdown content={content} />

    {tree && <DocNav tree={tree} title='Table of Contents' />}

    {(prev || next) && (
      <>
        <hr />
        <nav className='not-prose flex justify-between gap-4'>
          <DocLink label='Previous' doc={prev} align='left' />
          <DocLink label='Next' doc={next} align='right' />
        </nav>
      </>
    )}

    {footer && <DocMarkdown content={footer} />}
  </article>
)

/**
 * Link to prev / next page
 */

interface DocLinkProps {
  label: string
  doc: DocLeaf | null
  align: 'left' | 'right'
}

const DocLink = ({ label, doc, align }: DocLinkProps) =>
  doc ? (
    <Link href={doc.url} className='group'>
      <button
        className={classNames(
          `px-4 py-3 rounded-lg cursor-pointer transition-colors`,
          'border border-current/25 group-hover:border-accent',
          align === 'left' ? 'text-left' : 'text-right',
        )}
      >
        <div className='font-semibold text-sm text-current/50'>{label}</div>
        <div className='transition-colors text-current/75 group-hover:text-current'>
          {doc.title}
        </div>
      </button>
    </Link>
  ) : (
    <div />
  )

/**
 * Markdown rendering
 */

interface DocMarkdownProps {
  content: string
}

const DocMarkdown = ({ content }: DocMarkdownProps) => (
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
        if (href.startsWith('/')) return <Link href={href}>{children}</Link>

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
 * Header with anchor link
 */

type DocHeaderProps = {
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  id?: string
  children?: ReactNode
}

const DocHeader = ({ Tag, id, children }: DocHeaderProps) => (
  <Tag id={id}>
    {id && (
      <a href={`#${id}`} className='anchor-link'>
        <LinkIcon />
      </a>
    )}
    {children}
  </Tag>
)

const LinkIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
  >
    <path d='m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z' />
  </svg>
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
