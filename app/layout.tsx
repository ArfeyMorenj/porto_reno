import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arfey Moreno Jazzua - Full Stack Developer',
  description: 'Full Stack Developer yang membangun web app, dashboard bisnis, dan ERP internal seperti JPAS / FitnessPlus System dengan React, Next.js, TypeScript, dan Tailwind CSS.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Arfey Moreno Jazzua - Full Stack Developer',
    description: 'Building digital products at the intersection of design, engineering, and business operations.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
