import { type NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import { locales, defaultLocale } from './config'

function getPreferredLocale(request: NextRequest): string {
  const headers = Object.fromEntries(request.headers)
  const languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}

const proxy = async (request: NextRequest) => {
  const { pathname } = request.nextUrl

  // Redirect if locale is missing
  const locale = pathname.split('/').at(1)
  if (!locales.some(l => l === locale)) {
    request.nextUrl.pathname =
      pathname === '/'
        ? `/${getPreferredLocale(request)}`
        : `/${getPreferredLocale(request)}${pathname}`
    return NextResponse.redirect(request.nextUrl)
  }
}

export default proxy

export const config = {
  // Skip files and the _next folder
  matcher: ['/((?!.*\\..*|_next).*)'],
}
