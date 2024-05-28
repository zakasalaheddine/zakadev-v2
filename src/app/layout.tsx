import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/libs/utils'
import Navbar from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: {
    default: 'ZAKADEV',
    template: '%s | ZAKADEV'
  },
  description:
    'Discover the innovative work of a skilled full-stack developer specializing in building modern web applications using cutting-edge technologies.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
