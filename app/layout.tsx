import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { UserInfoProvider } from '@/contexts/UserInfoContext'
import { ShoppingCartProvider } from '@/contexts/ShoppingCartContext'
import { SearchProvider } from '@/contexts/SearchContext'
import { JobsReceivedProvider } from '@/contexts/JobsReceivedContext'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'iLunch',
  description: 'Plataforma de delivery de pedidos de comida'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head></head>
      <body className={raleway.className}>
        {/* Contextos generales de la aplicación */}
        <ShoppingCartProvider>
          <UserInfoProvider>
            <SearchProvider>
              <JobsReceivedProvider>{children}</JobsReceivedProvider>
            </SearchProvider>
          </UserInfoProvider>
        </ShoppingCartProvider>
      </body>
    </html>
  )
}
