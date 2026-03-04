import { getDocsSitemap } from '@glif/shared/utils-server'
import { docsDir, locales, siteUrl } from '@/config'

const sitemap = () => getDocsSitemap(siteUrl, docsDir, locales)

export default sitemap
