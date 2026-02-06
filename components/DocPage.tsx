import { remarkAlert } from 'remark-github-blockquote-alert'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

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
