import type { Metadata } from 'next'
import { Libre_Baskerville, Montserrat, Allura } from 'next/font/google'
import './globals.css'
import WhatsAppFloatingButton from './_whatsapp/components/WhatsAppFloatingButton'


const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const allura = Allura({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-allura',
})

export const metadata: Metadata = {
  title: 'Wanessa Teixeira - Corretora de Imóveis',
  description: 'Profissionalismo e confiança em negócios imobiliários',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${libreBaskerville.variable} ${montserrat.variable} ${allura.variable} font-montserrat`}>
        {children}
        
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}