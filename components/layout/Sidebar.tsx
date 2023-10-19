'use client'
import React from 'react'
import { useChangeSidebar } from '@/contexts/SidebarContext'
import {
  faCircleUser,
  faMapLocationDot,
  faCartShopping,
  faSuitcase,
  faHeadset,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useUserInfo } from '@/contexts/UserInfoContext'

function Sidebar() {
  const { isOpen } = useChangeSidebar()
  const { name } = useUserInfo()

  return (
    <>
      <div className={`fixed flex z-10 ${isOpen ? 'w-auto' : 'w-0'} `}>
        <div
          className={`top-0 left-0 z-20 w-64 h-screen transition-all duration-500 transform -translate-x-full bg-gray-50
           shadow-lg px-6 pb-4 pt-16 flex flex-col justify-between ${
             isOpen ? 'translate-x-0' : ''
           }`}
        >
          <div className='flex flex-col items-center'>
            <FontAwesomeIcon
              icon={faCircleUser}
              className='h-48 text-gray-500'
            />
            <h4 className='m-4'>{name}</h4>
            <hr className='solid w-full mb-2' />
            <ul>
              <li className='flex m-2 cursor-pointer'>
                <FontAwesomeIcon icon={faCircleUser} className='mr-4' />
                <p>Tu perfil</p>
              </li>
              <li className='flex m-2 cursor-pointer'>
                <FontAwesomeIcon icon={faMapLocationDot} className='mr-4' />
                <p>Cerda de ti</p>
              </li>
              <li className='flex m-2 cursor-pointer'>
                <FontAwesomeIcon icon={faCartShopping} className='mr-4' />
                <p>Pedidos activos</p>
              </li>
              <li className='flex m-2 cursor-pointer'>
                <FontAwesomeIcon icon={faSuitcase} className='mr-4' />
                <p>Red de trabajo</p>
              </li>
              <li className='flex m-2 cursor-pointer'>
                <FontAwesomeIcon icon={faHeadset} className='mr-4' />
                <p>Contáctanos</p>
              </li>
            </ul>
          </div>
          <div>
            <hr className='solid  mb-2' />
            <div className='flex text-red-600 justify-center items-center cursor-pointer'>
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
