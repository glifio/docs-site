'use client'

interface SidebarProps {
  locale: string
  domain: string
}

export const Sidebar = ({ locale, domain }: SidebarProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <h2>Docs</h2>
    </div>
  )
}
