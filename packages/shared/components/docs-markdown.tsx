import type { Element, Nodes, Root } from 'hast'
import { remarkAlert } from 'remark-github-blockquote-alert'
import { pinyin } from 'pinyin-pro'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import GithubSlugger from 'github-slugger'
import Link from 'next/link'

import { DocsHeading } from './docs-heading'
import { Locale } from '../types'
import { isPathnameMatch } from '../utils'

const isExtUrl = (url: string) => /^https?:\/\//.test(url)

interface DocsMarkdownProps {
  locale: Locale
  content: string
  anchorLinks?: boolean
}

export const DocsMarkdown = ({
  locale,
  content,
  anchorLinks,
}: DocsMarkdownProps) => (
  <ReactMarkdown
    remarkPlugins={[
      remarkGfm,
      remarkAlert,
      [remarkMath, { singleDollarTextMath: false }],
    ]}
    rehypePlugins={[
      ...(anchorLinks ? [rehypeSlugCustom] : []),
      [rehypeKatex, { strict: katexStrictMode }],
    ]}
    components={{
      ...(anchorLinks && {
        h2: props => <DocsHeading Tag='h2' {...props} />,
        h3: props => <DocsHeading Tag='h3' {...props} />,
        h4: props => <DocsHeading Tag='h4' {...props} />,
        h5: props => <DocsHeading Tag='h5' {...props} />,
        h6: props => <DocsHeading Tag='h6' {...props} />,
      }),
      a: ({ href, children }) => {
        if (!href) return <a>{children}</a>

        // Internal links
        if (href.startsWith('/')) {
          const hasLocale = isPathnameMatch(href, `/${locale}`)
          const finalHref = hasLocale ? href : `/${locale}${href}`
          return <Link href={finalHref}>{children}</Link>
        }

        // Anchor links
        if (href.startsWith('#')) return <a href={href}>{children}</a>

        // External links
        if (isExtUrl(href))
          return (
            <a href={href} target='_blank' rel='noopener noreferrer'>
              {children}
            </a>
          )

        // Asset links
        return (
          <a href={`/docs/file/${href}`} download>
            {children}
          </a>
        )
      },
      img: ({ src, alt }) =>
        typeof src === 'string' ? (
          <img
            src={isExtUrl(src) ? src : `/docs/img/${src}`}
            alt={alt}
            loading='lazy'
          />
        ) : null,
    }}
  >
    {content}
  </ReactMarkdown>
)

// Ignore warnings about Chinese in math blocks
const katexStrictMode = (errorCode: string) =>
  errorCode === 'unicodeTextInMathMode' ? 'ignore' : 'warn'

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
