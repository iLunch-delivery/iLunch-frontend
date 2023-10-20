'use client'

import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useChangeSidebar } from '@/contexts/SidebarContext'
import React, { useRef, useState, useEffect } from 'react'
import SearchModal from './SearchModal'
import Link from 'next/link'
import { useUserInfo } from '@/contexts/UserInfoContext'
import { usePathname } from "next/navigation";

function Header() {
  const { idNumber } = useUserInfo()
  const { isOpen, setIsOpen } = useChangeSidebar()
  const [ isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])
  

  return (
    <header className='fixed z-50 px-5 py-2 h-40 bg-blue-600 flex flex-col justify-between items-center w-full gap-2 sm:h-16 sm:flex-row'>
      <section className='flex items-center'>
        <FontAwesomeIcon
          icon={faBars}
          color='white'
          className='cursor-pointer h-5'
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        />
        <Link href='/'>
          <Image
            className='px-2'
            src='/assets/iLunch-logo.png'
            width={95}
            height={15}
            alt='...'
          />
        </Link>
      </section>
      <section className='w-full sm:w-1/2'>
        <div className='inline-flex items-center bg-white rounded-xl w-full font-light text-sm px-4 h-8'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            className='w-full h-6 bg-transparent border-0 outline-0 focus:ring-0 placeholder:text-sm'
            type='text'
            placeholder='Busca un restaurante o platillo'
            onClick={handleModalOpen}
          />
        </div>
        <SearchModal isOpen={isModalOpen} handleOpen={handleModalOpen} />
      </section>
      <section>
        <Link href={`/shopping_cart/${idNumber}`}>
          <FontAwesomeIcon
            icon={faCartShopping}
            className='h-5'
            color='white'
          />
        </Link>
      </section>
    </header>
  )
}

export default Header