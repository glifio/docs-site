'use client'

import { useParams } from 'next/navigation'

import { Locale, isLocale } from '../types'
import { t } from '../utils'

interface NotFoundProps {
  defaultLocale: Locale
}

export const NotFound = ({ defaultLocale }: NotFoundProps) => {
  const { locale } = useParams<{ locale: string }>()
  const validLocale = isLocale(locale) ? locale : defaultLocale

  return (
    <article className='prose prose-gray max-w-none'>
      <h1>404</h1>
      <p>{t(validLocale, 'notFound')}</p>
    </article>
  )
}
