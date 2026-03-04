import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@glif/shared'],
  async redirects() {
    return [
      // =====================
      // English: /v2-english → /en
      // =====================

      // Pages where sub-path also contains "+" (must come before wildcard)
      {
        source:
          '/v2-english/glif\\+-liquidity-providers-loyalty-rewards/how-to-join-the-glif\\+-lp-program',
        destination:
          '/en/glif-liquidity-providers-loyalty-rewards/how-to-join-the-glif-lp-program',
        permanent: true,
      },
      {
        source:
          '/v2-english/glif\\+-liquidity-providers-loyalty-rewards/glif\\+-lp-referral-program',
        destination:
          '/en/glif-liquidity-providers-loyalty-rewards/glif-lp-referral-program',
        permanent: true,
      },
      {
        source:
          '/v2-english/glif\\+-storage-providers-loyalty-rewards/how-to-join-glif\\+-sp-program',
        destination:
          '/en/glif-storage-providers-loyalty-rewards/how-to-join-glif-sp-program',
        permanent: true,
      },

      // "glif+" parent paths (wildcard catches remaining sub-pages without "+")
      {
        source:
          '/v2-english/glif\\+-liquidity-providers-loyalty-rewards/:path*',
        destination: '/en/glif-liquidity-providers-loyalty-rewards/:path*',
        permanent: true,
      },
      {
        source: '/v2-english/glif\\+-storage-providers-loyalty-rewards/:path*',
        destination: '/en/glif-storage-providers-loyalty-rewards/:path*',
        permanent: true,
      },

      // FAQ segment rename: "faq-for-*" → "for-*"
      {
        source:
          '/v2-english/troubleshooting/faq/faq-for-liquidity-providers/:path*',
        destination: '/en/troubleshooting/faq/for-liquidity-providers/:path*',
        permanent: true,
      },
      {
        source:
          '/v2-english/troubleshooting/faq/faq-for-storage-providers/:path*',
        destination: '/en/troubleshooting/faq/for-storage-providers/:path*',
        permanent: true,
      },

      // Removed page → homepage
      {
        source: '/v2-english/troubleshooting/contact-us',
        destination: '/en',
        permanent: true,
      },

      // Catch-all (also handles /v2-english root → /en)
      {
        source: '/v2-english/:path*',
        destination: '/en/:path*',
        permanent: true,
      },

      // =====================
      // Chinese: /v2-zhong-wen → /zh
      // =====================

      // Pages where sub-path also contains "+"
      {
        source:
          '/v2-zhong-wen/glif\\+-liu-dong-xing-ti-gong-zhe-hui-yuan-jiang-li/ru-he-jia-ru-glif\\+-lp-ji-hua',
        destination:
          '/zh/glif-liu-dong-xing-ti-gong-zhe-hui-yuan-jiang-li/ru-he-jia-ru-glif-lp-ji-hua',
        permanent: true,
      },
      {
        source:
          '/v2-zhong-wen/glif\\+-liu-dong-xing-ti-gong-zhe-hui-yuan-jiang-li/glif\\+-lp-hui-yuan-ka-tui-jian-ji-hua',
        destination:
          '/zh/glif-liu-dong-xing-ti-gong-zhe-hui-yuan-jiang-li/glif-lp-hui-yuan-ka-tui-jian-ji-hua',
        permanent: true,
      },
      {
        source:
          '/v2-zhong-wen/glif\\+-cun-chu-ti-gong-shang-hui-yuan-jiang-li/ru-he-jia-ru-glif\\+-sp-ji-hua',
        destination:
          '/zh/glif-cun-chu-ti-gong-shang-hui-yuan-jiang-li/ru-he-jia-ru-glif-sp-ji-hua',
        permanent: true,
      },

      // "glif+" parent paths
      {
        source:
          '/v2-zhong-wen/glif\\+-liu-dong-xing-ti-gong-zhe-hui-yuan-jiang-li/:path*',
        destination:
          '/zh/glif-liu-dong-xing-ti-gong-zhe-hui-yuan-jiang-li/:path*',
        permanent: true,
      },
      {
        source:
          '/v2-zhong-wen/glif\\+-cun-chu-ti-gong-shang-hui-yuan-jiang-li/:path*',
        destination: '/zh/glif-cun-chu-ti-gong-shang-hui-yuan-jiang-li/:path*',
        permanent: true,
      },

      // Removed page → homepage
      {
        source: '/v2-zhong-wen/gu-zhang-pai-cha/lian-luo-wo-men',
        destination: '/zh',
        permanent: true,
      },

      // Catch-all (also handles /v2-zhong-wen root → /zh)
      {
        source: '/v2-zhong-wen/:path*',
        destination: '/zh/:path*',
        permanent: true,
      },

      // =====================
      // ICN: /icnt-pool-v1-english → https://icn.docs.glif.io/en
      // =====================

      // Removed page → homepage
      {
        source: '/icnt-pool-v1-english/troubleshooting/contact-us',
        destination: 'https://icn.docs.glif.io',
        permanent: true,
      },

      // "tutorial" (singular) → "tutorials" (plural)
      {
        source: '/icnt-pool-v1-english/troubleshooting/tutorial/:path*',
        destination:
          'https://icn.docs.glif.io/en/troubleshooting/tutorials/:path*',
        permanent: true,
      },

      // Catch-all (also handles /icnt-pool-v1-english root → icn.docs.glif.io)
      {
        source: '/icnt-pool-v1-english/:path*',
        destination: 'https://icn.docs.glif.io/en/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
