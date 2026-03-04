import { NotFound } from '@glif/shared/components'
import { get404Metadata } from '@glif/shared/utils-server'
import { siteName } from '@/config'

const NotFoundPage = () => <NotFound />

export default NotFoundPage

export const metadata = get404Metadata(siteName)
