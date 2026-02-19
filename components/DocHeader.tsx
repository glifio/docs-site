import { ReactNode } from 'react'

interface DocHeaderProps {
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  id?: string
  children?: ReactNode
}

export const DocHeader = ({ Tag, id, children }: DocHeaderProps) => (
  <Tag id={id}>
    {id && (
      <a href={`#${id}`} className='anchor-link'>
        <LinkIcon />
      </a>
    )}
    {children}
  </Tag>
)

const LinkIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z' />
  </svg>
)
