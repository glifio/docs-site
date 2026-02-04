import { remarkAlert } from 'remark-github-blockquote-alert'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { DocTree } from '@/lib/docs'

interface DocPageProps {
  children: string
  tree: DocTree | null
}

export const DocPage = ({ children }: DocPageProps) => (
  <article className='prose prose-gray max-w-none'>
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath, remarkAlert]}
      rehypePlugins={[rehypeKatex]}
    >
      {children}
    </ReactMarkdown>
  </article>
)
