import 'server-only'

interface Doc {
  title: string
  content: string
  params: DocParams
}

interface DocParams {
  locale: string
  domain: string
  slug: string[]
}
