import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '74th IPC 2025 | Indian Pharmaceutical Congress',
    template: '%s | 74th IPC 2025'
  },
  description: 'Join the 74th Indian Pharmaceutical Congress 2025 - The premier pharmaceutical conference bringing together industry leaders, researchers, and innovators to shape the future of healthcare.',
  keywords: [
    '74th IPC',
    'Indian Pharmaceutical Congress',
    'pharmaceutical conference',
    'healthcare',
    'drug discovery',
    'pharmaceutical research',
    '2025',
    'India'
  ],
  authors: [{ name: '74th IPC Organizing Committee' }],
  creator: '74th Indian Pharmaceutical Congress',
  publisher: 'Indian Pharmaceutical Congress',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://74ipc2025.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://74ipc2025.org',
    title: '74th Indian Pharmaceutical Congress 2025',
    description: 'Join the premier pharmaceutical conference bringing together industry leaders, researchers, and innovators.',
    siteName: '74th IPC 2025',
  },
  twitter: {
    card: 'summary_large_image',
    title: '74th Indian Pharmaceutical Congress 2025',
    description: 'Join the premier pharmaceutical conference bringing together industry leaders, researchers, and innovators.',
    creator: '@74IPC2025',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}