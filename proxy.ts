import { NextRequest, NextResponse } from 'next/server'

import { locales, subdomains } from '@/lib/env'

const proxy = async (request: NextRequest) => {
  // Get request data
  const { pathname } = request.nextUrl
  const pathParts = pathname.split('/')

  // Redirect if locale is missing
  const locale = pathParts.at(1)
  if (!locales.some(l => l === locale)) {
    request.nextUrl.pathname = `/en${pathname}`
    return NextResponse.redirect(request.nextUrl)
  }

  // Redirect if subdomain is missing
  const subdomain = pathParts.at(2)
  if (!subdomains.some(s => s === subdomain)) {
    request.nextUrl.pathname = pathParts.toSpliced(2, 0, 'www').join('/')
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
