import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'
import { SidebarProvider } from '@/contexts/SidebarContext'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  // Layout principal de la aplicación con header, sidebar y footer
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
