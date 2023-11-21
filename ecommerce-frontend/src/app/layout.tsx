import { Navbar } from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
  Poppins,
} from 'next/font/google'
import { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { ReduxProvider } from '../redux/Provider'
import { ShoppingCartProvider } from '@/context/ShoppingCartContext'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-bai-jamjuree',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bai-jamjuree',
})

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} ${poppins.variable} bg-background font-sans`}
      >
       <ShoppingCartProvider>
       <ReduxProvider>
        <Navbar />
        {children}
        <Footer />
       </ReduxProvider>
       </ShoppingCartProvider>
      </body>
    </html>
  )
}
