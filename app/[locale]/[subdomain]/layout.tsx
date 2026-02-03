import './style.css'

import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Sidebar } from '@/components/Sidebar'
import { getDocsTree } from '@/lib/docs'

interface LayoutProps {
  children: ReactNode
  params: Promise<{ locale: string; subdomain: string }>
}

const Layout = async ({ children, params }: LayoutProps) => {
  const { locale, subdomain } = await params
  const tree = await getDocsTree(locale, subdomain)

  return (
    <html lang={locale}>
      <body className='w-full h-full antialiased bg-white text-gray-900'>
        {/* Scroll container */}
        <div className='w-full h-full relative overflow-x-hidden overflow-y-auto'>
          {/* Sidebar + Page */}
          <div className='flex'>
            {/* Sidebar */}
            <div className='flex-none sticky top-0 w-xs p-8'>
              <Sidebar locale={locale} subdomain={subdomain} tree={tree} />
            </div>
            {/* Page */}
            <div className='grow w-full max-w-6xl mx-auto p-8'>{children}</div>
          </div>
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
