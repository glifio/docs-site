const getDocUrl = (
  locale: string,
  subdomain: string,
  route: string,
  isSubdomainHost?: boolean,
) => `/${locale}${isSubdomainHost ? '' : `/${subdomain}`}${route}`

const getFileUrl = (path: string, publicRoot?: `/${string}`) =>
  `${publicRoot ?? ''}/${path}`
