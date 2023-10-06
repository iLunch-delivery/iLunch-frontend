'use client'

import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useChangeSidebar } from '@/contexts/SidebarContext'

function Header() {
  const { isOpen, setIsOpen } = useChangeSidebar()
  return (
    <header className='fixed z-50 flex justify-between px-5 py-2 bg-blue-600 items-center h-12 w-full'>
      <section className='flex items-center'>
        <FontAwesomeIcon
          icon={faBars}
          color='white'
          className='cursor-pointer h-5'
          onClick={() => {
            setIsOpen(!isOpen)
          }}
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
        <FontAwesomeIcon
          icon={faCartShopping}
          className='cursor-pointer h-5'
          color='white'
        />
      </section>
    </header>
  )
}

export default Header
