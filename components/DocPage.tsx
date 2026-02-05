import { remarkAlert } from 'remark-github-blockquote-alert'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import { DocNav } from '@/components/DocNav'
import { DocTree } from '@/lib/docs'

interface DocPageProps {
  children: string
  tree: DocTree | null
}

export const DocPage = ({ children, tree }: DocPageProps) => (
  <article className='prose prose-gray max-w-none'>
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath, remarkAlert]}
      rehypePlugins={[rehypeKatex]}
      components={{
        img: ({ src, alt }) => {
          if (!src || typeof src !== 'string') return null
          const imgSrc = /^(https?:\/\/|\/)/.test(src) ? src : `/${src}`
          return <img src={imgSrc} alt={alt} /> // eslint-disable-line @next/next/no-img-element
        },
      }}
    >
      {children}
    </ReactMarkdown>

    {tree && <DocNav tree={tree} title='Table of Contents' />}
  </article>
)
