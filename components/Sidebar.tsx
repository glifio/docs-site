'use client'

import { DocNav } from '@/components/DocNav'
import { DocTree } from '@/lib/docs'

interface SidebarProps {
  locale: string
  subdomain: string
  tree: DocTree | null
}

export const Sidebar = ({ tree }: SidebarProps) => {
  return (
    <nav className='prose prose-gray prose-sm'>
      {tree && <DocNav tree={tree} title />}
    </nav>
  )
}
