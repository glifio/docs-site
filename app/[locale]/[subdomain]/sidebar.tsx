'use client'

import { useRouter } from 'next/navigation'

import { DocsNav } from '@/components/DocsNav'
import { subdomains } from '@/lib/data/domain'
import { locales } from '@/lib/data/locale'
import { DocTree } from '@/lib/types/docs'

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
        <SelectEnv
          value={locale}
          values={locales}
          onSelect={l => router.push(`/${l}/${subdomain}/docs`)}
        />
        <SelectEnv
          value={subdomain}
          values={subdomains}
          onSelect={s => router.push(`/${locale}/${s}/docs`)}
        />
      </div>
      {tree && <DocsNav tree={tree} small collapse />}
    </div>
  )
}

interface SelectEnvProps<T extends string> {
  value: T
  values: readonly T[]
  onSelect: (value: T) => void
}

const SelectEnv = <T extends string>({
  value,
  values,
  onSelect,
}: SelectEnvProps<T>) => (
  <select
    value={value}
    onChange={e => onSelect(e.target.value as T)}
    className='px-2 py-1 text-sm rounded bg-current/10 text-current/75'
  >
    {values.map(v => (
      <option key={v} value={v}>
        {v.toUpperCase()}
      </option>
    ))}
  </select>
)
