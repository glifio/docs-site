import { ReactNode } from 'react'

import { DocsLayout } from '@glif/shared/components'
import { isLocale } from '@glif/shared/types'
import { getDocTree } from '@glif/shared/utils-server'

import { docsDir, locales } from '@/config'

import './style.css'

interface LayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

const Layout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params
  if (!isLocale(locale)) throw new Error(`Invalid locale: ${locale}`)

  const tree = await getDocTree(docsDir, locale)
  return (
    <DocsLayout locale={locale} locales={locales} tree={tree}>
      {children}
    </DocsLayout>
  )
}

export default Layout
