import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
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
        <UserInfoProvider>{children}</UserInfoProvider>
      </body>
    </html>
  )
}
