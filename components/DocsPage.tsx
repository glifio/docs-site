import { remarkAlert } from 'remark-github-blockquote-alert'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

interface DocsPageProps {
  children: string
}

export const DocsPage = ({ children }: DocsPageProps) => (
  <article className='prose prose-gray'>
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath, remarkAlert]}
      rehypePlugins={[rehypeKatex]}
    >
      {children}
    </ReactMarkdown>
  </article>
)
