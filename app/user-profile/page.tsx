/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'
import UserFilesTable from '@/components/features/Tables/UserFilesTable'
import UserInfoTable from '@/components/features/Tables/UserInfoTable'
import MainLayout from '@/components/layout/common/MainLayout'
import apiRoutes from '@/config/apiRoutes'
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
  // Estado para la edición del perfil
  const [isEditing, setIsEditing] = useState(false)

  // Estado para los archivos del usuario
  const [files, setUserFiles] = useState<File[] | undefined>()

  // Obtener datos del usuario del contexto
  const {
    name,
    role,
    email,
    address,
    phone,
    idNumber,
    idType,
    speciality,
    setName,
    setAddress,
    setPhone,
    setSpeciality
  } = useUserInfo()

  // Guardar los archivos del usuario en el estado
  useEffect(() => {
    fetch(`${apiRoutes.getUserFiles}${idType}/${idNumber}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (response) => {
        return await response.json()
      })
      .then((data) => {
        setUserFiles(data)
      })
  }, [])

  // Función para editar el perfil
  const handleEdit = async () => {
    if (isEditing) {
      // Safe Data
      const response = await fetch(apiRoutes.updateProfile, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          address,
          phone,
          idNumber,
          idType,
          speciality
        })
      })
      const responseJson = await response.json()
      if (response.status !== 200) {
        alert(responseJson.message)
        return
      }
      setName(responseJson.name)
      setAddress(responseJson.address)
      setPhone(responseJson.phone)
      setSpeciality(responseJson.speciality)
      alert('Datos actualizados con éxito')
    }
    setIsEditing(!isEditing)
  }

  return (
    <MainLayout>
      <main className='p-0'>
        <button
          className='absolute top-16 right-8 rounded-full bg-[#FB5A3E] text-lg py-2 px-9 w-fit text-white'
          onClick={() => {
            void handleEdit()
          }}
        >
          {isEditing ? 'Guardar cambios' : 'Editar perfil'}
        </button>
        {/* Banner principal */}
        <section
          id='banner-section'
          className='w-full bg-gray-300 pb-8 pt-16 px-8 flex flex-col justify-center items-center md:pt-0'
        >
          <div className='flex'>
            <FontAwesomeIcon
              icon={faCircleUser}
              className='!h-48 text-gray-500 bg-slate-50 rounded-full my-4'
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
          {isEditing ? (
            <input
              className='w-fit rounded-full bg-transparent border-none text-center text-4xl font-semibold'
              type='text'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          ) : (
            <h1 className='text-4xl font-semibold my-2'>{name}</h1>
          )}
        </section>

        {/* Información del usuario */}
        <section
          id='info-section'
          className='flex flex-col mx-2 my-16 md:mx-8 gap-8 lg:flex-row'
        >
          <div className='flex flex-col basis-1/2'>
            <h2 className='text-2xl font-semibold mb-4'>Tus datos</h2>
            {/* Datos del usuario */}
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
            {/* Archivos del usuario */}
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
