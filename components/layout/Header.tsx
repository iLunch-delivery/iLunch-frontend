'use client'

import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useChangeSidebar } from '@/contexts/SidebarContext'
import React, { useRef, useState } from 'react'
import FloatingBox from './FloatingBox'

function Header() {
  const { isOpen, setIsOpen } = useChangeSidebar()
  const [isBoxVisible, setIsBoxVisible] = useState(false)
  const boxRef = useRef(null)
  const handleClickOutside = (event: { target: any }) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setIsBoxVisible(false)
    }
  }
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
        <section className='w-1/2'>
            <input
                type='text'
                className='rounded-full w-full font-thin px-4'
                placeholder='Busca un restaurante o platillo'
                onClick={() => { setIsBoxVisible(true) }}
            />
            {isBoxVisible && (
                <div
                    style={{
                      position: 'fixed',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                    onClick={handleClickOutside}
                >
                    <div ref={boxRef}>
                        <FloatingBox />
                    </div>
                </div>
            )}
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