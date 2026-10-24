import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Prasanna S. Disanayake | Gemology · Entrepreneurship · Cybersecurity & AI',
  description: 'Professional portfolio showcasing expertise in gemology, entrepreneurship, and technology innovation.',
  keywords: 'gemology, Ceylon gems, entrepreneurship, cybersecurity, AI, technology',
  openGraph: {
    title: 'Prasanna S. Disanayake - Professional Portfolio',
    description: 'Gemology · Entrepreneurship · Cybersecurity & AI',
    type: 'website',
    url: 'https://prasannasd.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-neutral-light">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
