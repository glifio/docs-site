import { remarkAlert } from 'remark-github-blockquote-alert'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import Link from 'next/link'

import { DocNav } from '@/components/DocNav'
import { DocTree } from '@/lib/docs'

interface DocPageProps {
  content: string
  footer: string | null
  tree: DocTree | null
}

export const DocPage = ({ content, footer, tree }: DocPageProps) => (
  <article className='prose prose-gray max-w-none'>
    <DocMarkdown content={content} />
    {tree && <DocNav tree={tree} title='Table of Contents' />}
    {footer && <DocMarkdown content={footer} />}
  </article>
)

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
    rehypePlugins={[rehypeKatex]}
    components={{
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
