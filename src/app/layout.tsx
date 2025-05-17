import { Inter } from 'next/font/google'
import './globals.css'
import { metadata, viewport } from './config/metadata'

const inter = Inter({ subsets: ['latin'] })

export { metadata, viewport }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
} 