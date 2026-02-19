export const locales = ['en', 'zh'] as const
export const subdomains = ['www', 'icn'] as const

export type Locale = (typeof locales)[number]

export const isLocale = (locale: string): locale is Locale =>
  locales.some(l => l === locale)
