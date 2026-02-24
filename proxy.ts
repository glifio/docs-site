import { NextRequest, NextResponse } from 'next/server'

import { defaultSubdomain, isSubdomain } from './lib/data/domain'
import { defaultLocale, isLocale } from './lib/data/locale'

const proxy = async (request: NextRequest) => {
  // Get request data
  const { pathname } = request.nextUrl
  const pathParts = pathname.split('/')

  // Redirect if locale is missing
  const locale = pathParts.at(1)
  if (!locale || !isLocale(locale)) {
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
  }

  // Redirect if subdomain is missing
  const subdomain = pathParts.at(2)
  if (!subdomain || !isSubdomain(subdomain)) {
    request.nextUrl.pathname = pathParts
      .toSpliced(2, 0, defaultSubdomain)
      .join('/')
    return NextResponse.redirect(request.nextUrl)
  }

  // Redirect if page is missing
  const page = pathParts.at(3)
  if (!page) {
    request.nextUrl.pathname = `${pathname}/docs`
    return NextResponse.redirect(request.nextUrl)
  }
}

export const config = {
  matcher: [
    // Skip files and the _next folder
    '/((?!.*\\..*|_next).*)',
  ],
}

export default proxy
