import { Locale } from '@/lib/data/locale'

export const getDocHref = (
  locale: Locale,
  subdomain: string,
  route: string,
  isSubdomainHost: boolean,
) => `/${locale}${isSubdomainHost ? '' : `/${subdomain}`}${route}`

export const getFileUrl = (path: string, publicRoot: `/${string}`) =>
  `${publicRoot}${publicRoot.endsWith('/') ? '' : '/'}${path}`

export const isExtUrl = (url: string) => /^https?:\/\//.test(url)
