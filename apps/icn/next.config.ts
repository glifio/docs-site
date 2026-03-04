import type { NextConfig } from 'next'

import { nextConfigHeaders } from '@glif/shared/utils-server'

const nextConfig: NextConfig = {
  transpilePackages: ['@glif/shared'],
  headers: nextConfigHeaders,
}

export default nextConfig
