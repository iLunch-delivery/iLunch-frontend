'use client'
import { useChangeSidebar } from '@/contexts/SidebarContext'
import React from 'react'

function Sidebar() {
  const { isOpen, setIsOpen } = useChangeSidebar()

  return (
    <>
      <div className='flex z-50'>
        <div
          className={`fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg ${
            isOpen ? 'translate-x-0' : ''
          }`}
        >
          <div className='px-6 py-4'>
            <button
              id='drawer-toggle'
              className='relative bg-orange-600 transition-all duration-500'
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Close
            </button>
            <h2 className='text-lg font-semibold'>Drawer</h2>
            <p className='text-gray-500'>This is a drawer.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
