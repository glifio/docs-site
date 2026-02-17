import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ locale: string; subdomain: string; slug?: string[] }>
}

const getTitle = (slug?: string[]) =>
  `GLIF${slug ? ` \u2013 ${slug.map(getSlugPart).join(' \u2013 ')}` : ''}`

const getSlugPart = (slug: string): string =>
  slug ? `${slug[0].toUpperCase()}${slug.slice(1)}` : 'Empty'

const Page = async ({ params }: PageProps) => (
  <div className='prose'>
    <h1>{getTitle((await params).slug)}</h1>
  </div>
)

export default Page

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => ({ title: getTitle((await params).slug) })
