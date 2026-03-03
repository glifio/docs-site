import type { Locale, Translations } from '../types'

export const isPathnameMatch = (
  pathname: string,
  href: string,
  exact?: boolean,
) => pathname === href || (!exact && pathname.startsWith(`${href}/`))

const translations = {
  previous: {
    en: 'Previous',
    zh: '上一页',
  },
  next: {
    en: 'Next',
    zh: '下一页',
  },
  tableOfContents: {
    en: 'Table of Contents',
    zh: '目录',
  },
  notFound: {
    en: 'Sorry, the page you are looking for could not be found',
    zh: '抱歉，无法找到您访问的页面。',
  },
} satisfies Translations

export const t = (locale: Locale, key: keyof typeof translations): string => {
  const entry = translations[key]
  return entry[locale] ?? entry.en
}
