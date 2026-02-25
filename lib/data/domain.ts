export const defaultSubdomain = 'www' as const

export const subdomains = ['www', 'icn'] as const

export type Subdomain = (typeof subdomains)[number]

export const isSubdomain = (subdomain: string): subdomain is Subdomain =>
  subdomains.some(s => s === subdomain)
