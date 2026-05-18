import { Barlow_Condensed, Inter } from 'next/font/google'
import '../index.css'
import Providers from '../components/premium/Providers'
import Layout from '../components/premium/Layout'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://sahm.pe'),
  title: {
    default: 'SAHM | Repuestos para moto',
    template: '%s | SAHM',
  },
  description: 'Llantas, cámaras y repuestos para moto. Stock real, precios claros y despacho nacional.',
  icons: {
    icon: '/images/Logos/ISOTIPO_SAHM.svg',
  },
  openGraph: {
    title: 'SAHM | Repuestos para moto',
    description: 'Catálogo de llantas, cámaras y repuestos para motocicletas.',
    url: 'https://sahm.pe',
    siteName: 'SAHM',
    type: 'website',
    images: [
      {
        url: '/images/og-sahm.jpg',
        width: 1200,
        height: 630,
        alt: 'SAHM — Llantas, cámaras y repuestos para moto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAHM | Repuestos para moto',
    description: 'Catálogo de llantas, cámaras y repuestos para motocicletas.',
    images: ['/images/og-sahm.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
