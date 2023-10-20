'use client'

import UserFilesTable from '@/components/features/Tables/UserFilesTable'
import UserInfoTable from '@/components/features/Tables/UserInfoTable'
import MainLayout from '@/components/layout/common/layout'
import { userFiles } from '@/config/data/userInfo'
import type { File } from '@/config/interfaces'
import { useUserInfo } from '@/contexts/UserInfoContext'
import {
  faCircleUser,
  faPencil,
  faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [files, setUserFiles] = useState<File[] | undefined>()
  const { name, role, email, address, phone, idNumber, idType, speciality } =
    useUserInfo()

  useEffect(() => {
    setUserFiles(userFiles)
  }, [])

  const handleEdit = () => {
    if (isEditing) {
      // Safe Data
      console.log(name, email, address, phone, idNumber, idType, speciality)
    }
    setIsEditing(!isEditing)
  }

  return (
    <MainLayout>
      <main className='p-0'>
        <button
          className='absolute top-16 right-8 rounded-full bg-[#FB5A3E] text-lg py-2 px-9 w-fit text-white'
          onClick={() => {
            handleEdit()
          }}
        >
          {isEditing ? 'Guardar cambios' : 'Editar perfil'}
        </button>
        <section
          id='banner-section'
          className='w-full bg-gray-300 pb-8 pt-16 px-8 flex flex-col justify-center items-center md:pt-0'
        >
          <div className='flex'>
            <FontAwesomeIcon
              icon={faCircleUser}
              className='h-48 text-gray-500 bg-slate-50 rounded-full my-4'
            />
            {isEditing && (
              <div className='flex flex-col justify-center ml-4'>
                <FontAwesomeIcon
                  icon={faPencil}
                  className='h-6 text-gray-800 mb-4 cursor-pointer'
                />
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className='h-6 text-gray-800 cursor-pointer'
                />
              </div>
            )}
          </div>
          <h1 className='text-4xl font-semibold my-2'>{name}</h1>
        </section>
        <section
          id='info-section'
          className='flex flex-col mx-2 my-16 md:mx-8 gap-8 lg:flex-row'
        >
          <div className='flex flex-col basis-1/2'>
            <h2 className='text-2xl font-semibold mb-4'>Tus datos</h2>
            <div className='flex items-start shadow-md rounded-xl p-4 h-full'>
              <UserInfoTable
                isEditing={isEditing}
                role={role}
                voucher={false}
              />
            </div>
          </div>
          <div className='flex flex-col basis-1/2'>
            <h2 className='text-2xl font-semibold mb-4'>Tus archivos</h2>
            <div className='flex flex-col shadow-md rounded-xl p-4 h-full'>
              <h3 className='text-lg font-semibold mb-8'>Archivos adjuntos</h3>
              <UserFilesTable files={files} isEditing={isEditing} />
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}

export default UserProfile
