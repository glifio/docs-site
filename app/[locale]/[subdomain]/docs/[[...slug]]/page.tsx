import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DocsPage } from '@/components/DocsPage'
import { getAllDocParams, getDoc } from '@/lib/docs'

interface PageProps {
  params: Promise<{ locale: string; subdomain: string; slug: string[] }>
}

const Page = async ({ params }: PageProps) => {
  const { locale, subdomain, slug } = await params
  const doc = await getDoc(locale, subdomain, slug)
  return doc ? <DocsPage>{doc.content}</DocsPage> : notFound()
}

export default Page

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale, subdomain, slug } = await params
  const doc = await getDoc(locale, subdomain, slug)
  return { title: `GLIF Docs \u2013 ${doc ? doc.title : 'Not Found'}` }
}

export const generateStaticParams = getAllDocParams
