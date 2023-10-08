'use client'

import type { SidebarContextInterface } from '@/config/interfaces'
import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext<SidebarContextInterface>({
  isOpen: false,
  setIsOpen: () => {}
})

export const SidebarProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useChangeSidebar = () => {
  return useContext(SidebarContext)
}
