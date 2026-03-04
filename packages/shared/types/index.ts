const locales = ['en', 'zh'] as const

export type Locale = (typeof locales)[number]

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale)

export type Translation = Record<'en', string> & Partial<Record<Locale, string>>

export type Translations = Record<string, Translation>

export interface DocTree extends DocLeaf {
  children: (DocTree | DocLeaf)[]
}

export interface DocLeaf {
  title: string
  href: string
}

export interface DocPrevNext {
  prev: DocLeaf | null
  next: DocLeaf | null
}

export interface DocParams {
  locale: Locale
  slug: string[]
}

export interface DocMatch {
  docPath: string
  isDir: boolean
}
