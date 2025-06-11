import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nora Ekramy - AI Engineer & Researcher',
  description: 'AI Engineer & Co-founder at Youtive. Specializing in Machine Learning, NLP, Generative AI, and innovative AI solutions. 30+ satisfied clients with 5-star ratings.',
  keywords: 'AI Engineer, Machine Learning, NLP, Generative AI, Brain-Computer Interface, Data Science, Nora Ekramy',
  authors: [{ name: 'Nora Ekramy' }],
  creator: 'Nora Ekramy',
  publisher: 'Nora Ekramy',
  robots: 'index, follow',
  openGraph: {
    title: 'Nora Ekramy - AI Engineer & Researcher',
    description: 'AI Engineer & Co-founder at Youtive. Specializing in Machine Learning, NLP, Generative AI, and innovative AI solutions.',
    url: 'https://noraekramy.com',
    siteName: 'Nora Ekramy Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nora Ekramy - AI Engineer & Researcher',
    description: 'AI Engineer & Co-founder at Youtive. Specializing in Machine Learning, NLP, Generative AI, and innovative AI solutions.',
  },
  alternates: {
    canonical: 'https://noraekramy.com',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body>{children}</body>
    </html>
  )
}
