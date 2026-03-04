import path from 'node:path'
import type { Locale } from '@glif/shared/types'

export const siteName = 'GLIF Docs'
export const siteUrl = 'https://docs.glif.io'
export const docsDir = path.join(process.cwd(), 'docs')
export const locales: Locale[] = ['en', 'zh']
export const defaultLocale: Locale = 'en'
