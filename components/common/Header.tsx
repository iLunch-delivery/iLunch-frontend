'use client'
import React, { createContext } from 'react'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useChangeSidebar } from '@/contexts/SidebarContext'

const DrawerContext = createContext(false)

function Header() {
  const { isOpen, setIsOpen } = useChangeSidebar()
  return (
    <DrawerContext.Provider value={isOpen}>
      <header className='flex justify-between px-5 py-2 bg-blue-600 items-center'>
        <section className='flex items-center'>
          <FontAwesomeIcon
            icon={faBars}
            height={25}
            color='white'
            onClick={() => setIsOpen(!isOpen)}
          />
          <Image
            className='px-2'
            src='/assets/iLunch-logo.png'
            width={95}
            height={15}
            alt='...'
          />
        </section>
        <section className='w-1/3'>
          <input
            type='text'
            className='rounded-full w-full font-thin'
            placeholder='Busca un restaurante o platillo'
          />
        </section>
        <section>
          <FontAwesomeIcon icon={faCartShopping} height={25} color='white' />
        </section>
      </header>
    </DrawerContext.Provider>
  )
}

export default Header
