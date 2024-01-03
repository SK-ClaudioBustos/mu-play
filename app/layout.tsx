import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from 'next';
import theme from "./theme";
import Layout from './ui/Layout';
import './globals.css';
import { Kanit } from "next/font/google";

const font = Kanit({ weight: "400", subsets: ['latin'] })

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
      <body className={font.className}>
        <ThemeProvider theme={theme}>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
