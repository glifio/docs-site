import path from 'node:path'
import type { Locale } from '@glif/shared/types'

export const siteUrl = 'https://icn.docs.glif.io'
export const docsDir = path.join(process.cwd(), 'docs')
export const locales: Locale[] = ['en']
export const defaultLocale: Locale = 'en'
