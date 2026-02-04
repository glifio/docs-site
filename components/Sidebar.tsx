'use client'

import { useRouter } from 'next/navigation'
import { DocNav } from '@/components/DocNav'
import { DocTree } from '@/lib/docs'
import { locales, subdomains } from '@/lib/env'

interface SidebarProps {
  locale: string
  subdomain: string
  tree: DocTree | null
}

export const Sidebar = ({ locale, subdomain, tree }: SidebarProps) => {
  const router = useRouter()
  return (
    <nav className='prose prose-gray prose-sm'>
      {tree && <DocNav tree={tree} title />}
    </nav>
  )
}
