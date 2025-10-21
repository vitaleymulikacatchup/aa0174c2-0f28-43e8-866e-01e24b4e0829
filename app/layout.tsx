import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sargas - AI-powered web and mobile development',
  description: 'AI-powered web and mobile development in 12 weeks. Professional development services powered by n8n.',
  keywords: 'web development, mobile development, AI-powered, n8n, sargas',
  authors: [{ name: 'Sargas' }],
  openGraph: {
    title: 'Sargas - AI-powered web and mobile development',
    description: 'AI-powered web and mobile development in 12 weeks',
    url: 'https://sargas.io',
    siteName: 'Sargas',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sargas - AI-powered web and mobile development',
    description: 'AI-powered web and mobile development in 12 weeks',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}