import { remarkAlert } from 'remark-github-blockquote-alert'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { DocsTree } from '@/lib/docs'

interface DocPageProps {
  children: string
  tree: DocsTree | null
}

export const DocPage = ({ children }: DocPageProps) => (
  <article className='prose prose-gray'>
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath, remarkAlert]}
      rehypePlugins={[rehypeKatex]}
    >
      {children}
    </ReactMarkdown>
  </article>
)
