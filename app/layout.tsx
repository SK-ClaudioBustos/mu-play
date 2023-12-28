import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavigationBar from './ui/NavigationBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MuPlay',
  description: 'tercer proyecto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavigationBar/>
        {children}
      </body>
    </html>
  )
}
