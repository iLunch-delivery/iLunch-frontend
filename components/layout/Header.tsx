'use client'
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useChangeSidebar } from '@/contexts/SidebarContext'
import React, { useRef, useState, useEffect } from 'react'
import SearchModal from './SearchModal'
import Link from 'next/link'
import { useUserInfo } from '@/contexts/UserInfoContext'
import { usePathname, useRouter } from 'next/navigation'
import { useShoppingCart } from '@/contexts/ShoppingCartContext'

function Header() {
  const { products } = useShoppingCart()
  const { idNumber } = useUserInfo()
  const { isOpen, setIsOpen } = useChangeSidebar()
  const pathname = usePathname()

  const router = useRouter()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleCartNavigation = () => {
    if (products.length > 0) {
      router.push(`/shopping_cart/${idNumber}`)
    } else {
      alert('El carrito está vacío')
    }
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
        <button
          onClick={() => {
            handleCartNavigation()
          }}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className='h-5'
            color='white'
          />
        </button>
      </section>
    </header>
  )
}

export default Header
