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
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        <select
          value={locale}
          onChange={e => router.push(`/${e.target.value}/${subdomain}/docs`)}
          className='px-2 py-1 text-sm rounded bg-gray-100 text-gray-700'
        >
          {locales.map(l => (
            <option key={l} value={l}>
              {l.toUpperCase()}
            </option>
          ))}
        </select>
        <select
          value={subdomain}
          onChange={e => router.push(`/${locale}/${e.target.value}/docs`)}
          className='px-2 py-1 text-sm rounded bg-gray-100 text-gray-700'
        >
          {subdomains.map(s => (
            <option key={s} value={s}>
              {s.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {tree && <DocNav tree={tree} />}
    </div>
  )
}
