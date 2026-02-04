import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DocsPage } from '@/components/DocsPage'
import {
  getAllDocParams,
  getDocContent,
  getDocTitle,
  getDocTree,
} from '@/lib/docs'

interface PageProps {
  params: Promise<{ locale: string; subdomain: string; slug?: string[] }>
}

const Page = async ({ params }: PageProps) => {
  const { locale, subdomain, slug } = await params
  const doc = await getDocContent(locale, subdomain, slug)
  const tree = await getDocTree(locale, subdomain, slug)
  return doc ? <DocsPage tree={tree}>{doc}</DocsPage> : notFound()
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
