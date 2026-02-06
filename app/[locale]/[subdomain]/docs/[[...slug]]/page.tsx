import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DocPage } from '@/components/DocPage'
import {
  getAllDocParams,
  getDocContent,
  getDocFooter,
  getDocPrevNext,
  getDocTitle,
  getDocTree,
} from '@/lib/docs'

interface PageProps {
  params: Promise<{ locale: string; subdomain: string; slug?: string[] }>
}

const Page = async ({ params }: PageProps) => {
  const { locale, subdomain, slug } = await params

  const content = await getDocContent(locale, subdomain, slug)
  if (!content) notFound()

  const footer = await getDocFooter(locale, subdomain)
  const tree = await getDocTree(locale, subdomain, slug)
  const { prev, next } = await getDocPrevNext(locale, subdomain, slug)

  return (
    <DocPage
      content={content}
      footer={footer}
      tree={tree}
      prev={prev}
      next={next}
    />
  )
}

export default Page

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale, subdomain, slug } = await params
  const doc = await getDocContent(locale, subdomain, slug)
  const title = doc ? getDocTitle(doc) : 'Not Found'
  return { title: `GLIF Docs \u2013 ${title}` }
}

export const generateStaticParams = getAllDocParams
