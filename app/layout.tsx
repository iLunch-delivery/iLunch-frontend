import Footer from '@/components/layout/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { SidebarProvider } from '@/contexts/SidebarContext'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import { UserInfoProvider } from '@/contexts/UserInfoContext'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css'
          rel='stylesheet'
        />
      </head>
      <body className={raleway.className}>
        <UserInfoProvider>
          <SidebarProvider>
            <Header />
            <Sidebar />
            <div id="spacer" className='px-5 py-2 h-12 w-full'>&nbsp;</div>
          </SidebarProvider>
          {children}
          <Footer />
        </UserInfoProvider>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js'></script>
      </body>
    </html>
  )
}
