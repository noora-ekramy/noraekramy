import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nora Ekramy',
  description: 'AI Engineer & Co-founder at Youtive. Specializing in Machine Learning, NLP, Generative AI, and innovative AI solutions. 30+ satisfied clients with 5-star ratings.',
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
      <body>{children}</body>
    </html>
  )
}
