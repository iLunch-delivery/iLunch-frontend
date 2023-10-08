'use client'

import UserFilesTable from '@/components/features/UserFilesTable'
import UserInfoTable from '@/components/features/UserInfoTable'
import { userFiles } from '@/config/data/userInfo'
import type { File } from '@/config/interfaces'
import { useChangeUserInfo } from '@/contexts/UserInfoContext'
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
  const { email, address, phone, idNumber, idType, speciality } =
    useChangeUserInfo()

  useEffect(() => {
    setUserFiles(userFiles)
  }, [])

  const handleEdit = () => {
    if (isEditing) {
      // Safe Data
      console.log(email, address, phone, idNumber, idType, speciality)
    }
    setIsEditing(!isEditing)
  }

  return (
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
        className='w-full bg-gray-300 pt-16 pb-8 px-8 flex flex-col justify-center items-center'
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
        <h1 className='text-4xl font-semibold my-2'>User name</h1>
        <p className='my-2 w-1/2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, in!
          Perspiciatis expedita animi, facere ipsum natus quasi quo asperiores
          veritatis officiis debitis sunt libero iste aliquam molestiae sint
          veniam eum.
        </p>
      </section>
      <section id='info-section' className='flex mx-8 my-16'>
        <div className='flex-1 mx-4 flex flex-col'>
          <h2 className='text-2xl font-semibold mb-4'>Tus datos</h2>
          <div className='flex items-start shadow-md rounded-xl p-4 h-full'>
            <UserInfoTable isEditing={isEditing} />
          </div>
        </div>
        <div className='flex-1 mx-4 flex flex-col'>
          <h2 className='text-2xl font-semibold mb-4'>Tus archivos</h2>
          <div className='flex flex-col shadow-md rounded-xl p-4 h-full'>
            <h3 className='text-lg font-semibold mb-8'>Archivos adjuntos</h3>
            <UserFilesTable files={files} isEditing={isEditing} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default UserProfile