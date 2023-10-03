'use client'

import { createContext, useContext, useState } from 'react'

export interface SidebarContextInterface {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

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
