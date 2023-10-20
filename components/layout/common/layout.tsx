import { SidebarProvider } from '@/contexts/SidebarContext'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SidebarProvider>
        <Header />
        <Sidebar />
        <div id='spacer' className='px-5 py-2 h-40 w-full sm:h-16'>
          &nbsp;
        </div>
      </SidebarProvider>
      {children}
      <Footer />
    </>
  )
}
