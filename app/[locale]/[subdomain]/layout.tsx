import './style.css'

import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Sidebar } from '@/components/Sidebar'
import { getDocTree } from '@/lib/docs'

interface LayoutProps {
  children: ReactNode
  params: Promise<{ locale: string; subdomain: string }>
}

const Layout = async ({ children, params }: LayoutProps) => {
  const { locale, subdomain } = await params
  const tree = await getDocTree(locale, subdomain)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.style.setProperty("--dpr",devicePixelRatio)`,
          }}
        />
      </head>
      <body className='antialiased bg-white text-gray-900'>
        <div className='flex'>
          <div className='flex-none sticky top-0 self-start h-screen overflow-y-auto w-xs p-8'>
            <Sidebar locale={locale} subdomain={subdomain} tree={tree} />
          </div>
          <div className='grow w-full max-w-6xl mx-auto p-8'>{children}</div>
        </div>
      </body>
    </html>
  )
}

export default Layout

export const metadata: Metadata = {
  title: 'GLIF Docs',
  description: 'GLIF documentation',
}
