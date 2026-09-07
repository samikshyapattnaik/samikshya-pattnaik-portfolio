import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const siteUrl = 'https://samikshya.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Samikshya Pattnaik | Full Stack Developer | React & Next.js Developer',
  description:
    'Samikshya Pattnaik is a Full Stack Developer specializing in React, Next.js, Node.js and MERN stack development. Available for freelance web development projects.',
  keywords: [
    'Samikshya Pattnaik',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'MERN Stack',
    'Freelance Web Developer',
    'Node.js',
    'MongoDB',
  ],
  authors: [{ name: 'Samikshya Pattnaik' }],
  creator: 'Samikshya Pattnaik',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Samikshya Pattnaik | Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js and MERN stack. Available for freelance projects.',
    siteName: 'Samikshya Pattnaik',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samikshya Pattnaik | Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js and the MERN stack. Available for freelance projects.',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
