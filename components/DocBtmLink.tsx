import Link from 'next/link'
import classNames from 'classnames'

import { DocLeaf } from '@/lib/docs'

interface DocBtmLinkProps {
  label: string
  doc: DocLeaf | null
  align: 'left' | 'right'
}

export const DocBtmLink = ({ label, doc, align }: DocBtmLinkProps) =>
  doc ? (
    <Link href={doc.url} className='group'>
      <button
        className={classNames(
          `px-4 py-3 rounded-lg cursor-pointer transition-colors`,
          'border border-current/25 group-hover:border-accent',
          align === 'right' && 'text-right',
        )}
      >
        <div
          className={classNames(
            'flex items-center gap-3 font-semibold transition-colors',
            'text-sm text-current/50 group-hover:text-accent',
            align === 'right' && 'flex-row-reverse',
          )}
        >
          <ArrowIcon
            className={classNames(
              'flex-none h-4 mt-0.75',
              align === 'right' && 'rotate-180',
            )}
          />
          <span>{label}</span>
        </div>
        <div className='transition-colors text-current/75 group-hover:text-current'>
          {doc.title}
        </div>
      </button>
    </Link>
  ) : (
    <div />
  )

interface ArrowIconProps {
  className: string
}

const ArrowIcon = ({ className }: ArrowIconProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8'
      fill-rule='evenodd'
    />
  </svg>
)
