export const getDocHref = (
  locale: string,
  subdomain: string,
  route: string,
  isSubdomainHost: boolean,
) => `/${locale}${isSubdomainHost ? '' : `/${subdomain}`}${route}`

export const getFileUrl = (path: string, publicRoot: `/${string}`) =>
  `${publicRoot}${publicRoot.endsWith('/') ? '' : '/'}${path}`

export const isExtUrl = (url: string) => /^https?:\/\//.test(url)
