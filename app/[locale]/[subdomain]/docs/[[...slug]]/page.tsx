import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DocsPage } from '@/components/DocsPage'
import { subdomains } from '@/lib/data/domain'
import { isLocale } from '@/lib/data/locale'
import {
  getDocContent,
  getDocFooter,
  getDocParams,
  getDocPrevNext,
  getDocTitle,
  getDocTree,
} from '@/lib/utils/docs'
import { DocParams } from '@/lib/types/docs'

interface PageProps {
  params: Promise<{ locale: string; subdomain: string; slug?: string[] }>
}

const Page = async ({ params }: PageProps) => {
  const { locale, subdomain, slug } = await params
  if (!isLocale(locale)) throw new Error('Invalid locale')

  const content = await getDocContent(locale, subdomain, slug)
  if (!content) notFound()

  const footer = await getDocFooter(locale, subdomain)
  const tree = await getDocTree(locale, subdomain, slug)
  const { prev, next } = await getDocPrevNext(locale, subdomain, slug)

  return (
    <DocsPage
      locale={locale}
      subdomain={subdomain}
      content={content}
      footer={footer}
      tree={tree}
      prev={prev}
      next={next}
      publicRoot='/'
      isSubdomainHost={false}
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
  return { title: `GLIF \u2013 Docs \u2013 ${title}` }
}

export const generateStaticParams = async (): Promise<DocParams[]> =>
  (await Promise.all(subdomains.map(s => getDocParams(s)))).flat()
