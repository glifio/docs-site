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
  if (!isLocale(locale)) throw new Error('Invalid locale')

  const tree = await getDocTree(docsDir, locale)
  return (
    <DocsLayout
      locale={locale}
      locales={locales}
      tree={tree}
      icon={<IcnLink />}
    >
      {children}
    </DocsLayout>
  )
}

export default Layout

const IcnLink = () => (
  <a
    href='https://icn.glif.io'
    target='_blank'
    className='text-current hover:text-accent transition-colors'
  >
    <IcnLogo />
  </a>
)

const IcnLogo = () => (
  <svg
    width='34'
    height='34'
    viewBox='0 0 56 56'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z' />
    <rect
      x='39.2002'
      y='14.7'
      width='2.8'
      height='22.4'
      transform='rotate(90 39.2002 14.7)'
      fill='white'
    />
    <path
      d='M39.1998 21.7H20.9998C20.2266 21.7 19.5998 22.3268 19.5998 23.1C19.5998 23.8732 20.2266 24.5 20.9998 24.5H39.1998V27.3H16.7998V18.9L39.1998 18.9V21.7Z'
      fill='white'
    />
    <path
      d='M39.1998 30.1V34.3H36.3998V31.5H19.5998V34.3H16.7998V28.7H37.7998L39.1998 30.1Z'
      fill='white'
    />
    <path
      d='M29.3998 41.3H26.5998V38.5H16.7998V35.7L39.1998 35.7V38.5H29.3998V41.3Z'
      fill='white'
    />
  </svg>
)
