'use client'

import { useParams } from 'next/navigation'

import { isLocale } from '../types'
import { t } from '../utils'

export const NotFound = () => {
  const { locale } = useParams<{ locale: string }>()
  const validLocale = isLocale(locale) ? locale : 'en'

  return (
    <article className='prose prose-gray max-w-none'>
      <h1>404</h1>
      <p>{t(validLocale, 'notFound')}</p>
    </article>
  )
}
