'use client'

import { DocsTree } from '@/lib/docs'

interface SidebarProps {
  locale: string
  subdomain: string
  tree: DocsTree
}

export const Sidebar = ({ locale, subdomain }: SidebarProps) => {
  return (
    <div className='flex flex-col gap-6 prose prose-gray'>
      <h2>Docs</h2>
    </div>
  )
}
