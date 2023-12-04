'use client'
import React from 'react'
import { useChangeSidebar } from '@/contexts/SidebarContext'
import {
  faCircleUser,
  faMapLocationDot,
  faCartShopping,
  faSuitcase,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useUserInfo } from '@/contexts/UserInfoContext'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ROLE } from '@/config/enums'

function Sidebar() {
  const router = useRouter()
  const { isOpen } = useChangeSidebar()
  const { name, role, clearContext } = useUserInfo()
  const pathname = usePathname()

  return (
    <>
      <div
        className={`fixed flex z-10 ${isOpen ? 'w-screen lg:w-auto' : 'w-0'} `}
      >
        <div
          className={`top-0 left-0 z-20 w-64 h-screen transition-all duration-500 transform -translate-x-full bg-gray-50
           shadow-lg px-6 pb-4 pt-48 sm:pt-24 flex flex-col justify-between flex-1 ${
             isOpen ? 'translate-x-0' : ''
           }`}
        >
          <div className='flex flex-col items-center'>
            <FontAwesomeIcon
              icon={faCircleUser}
              className='!h-16 sm:h-32 lg:h-48 text-gray-500'
            />
            <h4 className='m-4'>{name}</h4>
            <hr className='solid w-full mb-2' />
            <ul>
              <li>
                <Link
                  className={`
                    flex m-2 cursor-pointer
                    ${pathname === '/user-profile' ? 'text-blue-600' : ''}
                  `}
                  href='/user-profile'
                >
                  <FontAwesomeIcon icon={faCircleUser} className='mr-4' />
                  <p>Tu perfil</p>
                </Link>
              </li>
              <li>
                <Link
                  className={`
                    flex m-2 cursor-pointer
                    ${pathname === '/search/results' ? 'text-blue-600' : ''}
                  `}
                  href='/search/results'
                >
                  <FontAwesomeIcon icon={faMapLocationDot} className='mr-4' />
                  <p>Cerca de ti</p>
                </Link>
              </li>
              <li>
                <Link
                  className={`
                    flex m-2 cursor-pointer
                    ${pathname === `/order` ? 'text-blue-600' : ''}
                  `}
                  href={`/order`}
                >
                  <FontAwesomeIcon icon={faCartShopping} className='mr-4' />
                  <p>Pedidos activos</p>
                </Link>
              </li>
              <li>
                <Link
                  className={`
                    flex m-2 cursor-pointer
                    ${pathname === '/jobs/list' ? 'text-blue-600' : ''}
                  `}
                  href={
                    role === ROLE.Worker ? '/jobs/list' : '/register/candidate'
                  }
                >
                  <FontAwesomeIcon icon={faSuitcase} className='mr-4' />
                  <p>Red de trabajo</p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <hr className='solid  mb-2' />
            <div
              className='flex text-red-600 justify-center items-center cursor-pointer'
              onClick={() => {
                clearContext()
                router.push('/login')
              }}
            >
              <FontAwesomeIcon icon={faXmark} className='mr-4' />
              <p>Cerrar sesión</p>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className='fixed min-h-screen w-screen bg-black opacity-70 '></div>
        )}
      </div>
    </>
  )
}

export default Sidebar
