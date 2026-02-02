import type { Metadata } from 'next'
import './style.css'

export const metadata: Metadata = {
  title: 'GLIF Docs',
  description: 'GLIF documentation',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className='bg-white text-gray-900 antialiased'>{children}</body>
  </html>
)

export default RootLayout
