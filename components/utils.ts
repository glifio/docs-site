export const getDocUrl = (
  locale: string,
  subdomain: string,
  route: string,
  isSubdomainHost?: boolean,
) => `/${locale}${isSubdomainHost ? '' : `/${subdomain}`}${route}`

export const getFileUrl = (path: string, publicRoot?: `/${string}`) =>
  `${publicRoot ?? ''}/${path}`

export const isExtUrl = (url: string) => /^https?:\/\//.test(url)
