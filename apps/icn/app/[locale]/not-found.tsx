import { NotFound } from '@glif/shared/components'
import { isLocale } from '@glif/shared/types'

interface PageProps {
  params: Promise<{ locale: string }>
}

const Page = async ({ params }: PageProps) => {
  const { locale } = await params
  if (!isLocale(locale)) throw new Error(`Invalid locale: ${locale}`)
  return <NotFound locale={locale} />
}

export default Page
