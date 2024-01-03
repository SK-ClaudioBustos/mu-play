import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from 'next';
import theme from "./theme";
import Layout from './ui/Layout';
import './globals.css';

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
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
