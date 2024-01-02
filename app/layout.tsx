import type { Metadata } from 'next'
import NavigationBar from './ui/NavigationBar'
import './globals.css'


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
      <body>
        <NavigationBar/>
        {children}
      </body>
    </html>
  )
}
