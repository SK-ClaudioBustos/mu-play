import type { Metadata } from 'next'
import NavigationBar from './ui/NavigationBar'
import FooterCustom from './ui/FooterCustom'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
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
        <ThemeProvider theme={theme}>
          <NavigationBar />
          {children}
          <FooterCustom />
        </ThemeProvider>
      </body>
    </html>
  )
}
