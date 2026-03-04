import { notFound } from 'next/navigation'

import { DocsPage } from '@glif/shared/components'
import { isLocale } from '@glif/shared/types'
import {
  getDocContent,
  getDocFooter,
  getDocMetadata,
  getDocParams,
  getDocPrevNext,
  getDocTree,
} from '@glif/shared/utils-server'

import { docsDir, locales, siteName, siteUrl } from '@/config'

interface PageProps {
  params: Promise<{ locale: string; slug?: string[] }>
}

const Page = async ({ params }: PageProps) => {
  const { locale, slug } = await params
  if (!isLocale(locale)) throw new Error(`Invalid locale: ${locale}`)

  const content = await getDocContent(docsDir, locale, slug)
  if (!content) notFound()

  const footer = await getDocFooter(docsDir, locale)
  const tree = await getDocTree(docsDir, locale, slug)
  const { prev, next } = await getDocPrevNext(docsDir, locale, slug)

  return (
    <DocsPage
      locale={locale}
      content={content}
      footer={footer}
      tree={tree}
      prev={prev}
      next={next}
    />
  )
}

export default Page

export const generateMetadata = async ({ params }: PageProps) => {
  const { locale, slug } = await params
  if (!isLocale(locale)) throw new Error(`Invalid locale: ${locale}`)
  return getDocMetadata(siteName, siteUrl, docsDir, locale, slug)
}

export const generateStaticParams = () => getDocParams(docsDir, locales)
