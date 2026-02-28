export const rootDomain = 'glif.io'

export const defaultSubdomain = 'www' as const

export const subdomains = ['www', 'icn'] as const

export const subdomainRegex = RegExp(
  `^(${subdomains.join('|')})\.${rootDomain}$`,
)

export type Subdomain = (typeof subdomains)[number]

export const getSubdomain = (host: string): Subdomain | null => {
  const match = subdomainRegex.exec(host)
  return match ? (match[1] as Subdomain) : null
}

export const isSubdomain = (subdomain: string): subdomain is Subdomain =>
  subdomains.some(s => s === subdomain)
