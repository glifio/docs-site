import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { remarkAlert } from 'remark-github-blockquote-alert'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import { getAllDocParams, getDoc } from '@/lib/docs'

interface PageProps {
  params: Promise<{ locale: string; domain: string; slug: string[] }>
}

const Page = async ({ params }: PageProps) => {
  const { locale, domain, slug } = await params
  const doc = await getDoc(locale, domain, slug)
  if (!doc) notFound()

  return (
    <article className='prose prose-gray'>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath, remarkAlert]}
        rehypePlugins={[rehypeKatex]}
      >
        {doc.content}
      </ReactMarkdown>
    </article>
  )
}

export default Page

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale, domain, slug } = await params
  const doc = await getDoc(locale, domain, slug)
  return { title: `GLIF Docs \u2013 ${doc ? doc.title : 'Not Found'}` }
}

export const generateStaticParams = getAllDocParams
