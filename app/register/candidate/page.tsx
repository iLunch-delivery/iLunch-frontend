'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/assets/iLunchN.png'
import UserFilesTable from '@/components/features/Tables/UserFilesTable'
import MainLayout from '@/components/layout/common/MainLayout'
import type { File } from '@/config/interfaces'
import { useUserInfo } from '@/contexts/UserInfoContext'
import { useRouter } from 'next/navigation'
import apiRoutes from '@/config/apiRoutes'

export default function RegisterCandidate() {
  const [fileList, setFileList] = useState<File[]>()
  const { name, email, address, phone, setIdType, setIdNumber, setSpeciality, setRole } =
    useUserInfo()

  const router = useRouter()

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const userData = {
      name,
      email,
      address,
      phone,
      idNumber: formData.get('documento'),
      idType: formData.get('tipo-id'),
      speciality: formData.get('trabajo')
    }

    if (
      userData.name === '' ||
      userData.email === '' ||
      userData.address === '' ||
      userData.phone === null ||
      userData.idNumber === '' ||
      userData.idType === '' ||
      userData.speciality === ''
    ) {
      alert('Debes ingresar todos los datos')
      return
    }

    const response = await fetch(apiRoutes.updateProfile, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    if (response.status !== 200) {
      alert('Error al actualizar los datos')
      return
    }
    setRole('worker')
    router.push('/jobs/list')
  }
  return (
    <MainLayout>
      <main className='flex flex-col items-center bg-white'>
        <div className='flex flex-col md:flex-row align-middle font-semibold text-2xl text-center'>
          Bienvenido a la red de trabajo de
          <Image
            src={logo}
            alt='iLunch logo'
            className='h-9 w-fit ml-2 self-center'
          />
        </div>
        <div className='flex flex-col items-center mt-5 w-11/12'>
          <span className='text-center '>
            Por favor ingresa tus datos y cúentanos tu experiencia en el sector
            gastronómico.
          </span>
          <span className='mt-0 text-center'>
            También nos gustaría que anexaras tu hoja de vida y otros documentos
            que soporten tu experiencia y nos dejen saber más de ti.
          </span>
          <span className='mt-0 text-center'>
            Luego de llenar el formulario solo queda esperar a que un
            restaurante interesado en tus servicios te contacte por medio de la
            aplicación
          </span>
        </div>
        <section className='flex flex-col md:flex-row mt-7 gap-8'>
          <div className='rounded-xl basis-full md:basis-1/2'>
            <form
              className='flex-col'
              onSubmit={(e) => {
                void handleOnSubmit(e)
              }}
            >
              <p>{name}</p>
              <p>{email}</p>
              <div className='flex flex-row mt-3'>
                <select
                  className='rounded-2xl'
                  placeholder='Tipo de documentos'
                  id='tipo-id'
                  name='tipo-id'
                  onChange={(e) => {
                    setIdType(e.target.value)
                  }}
                >
                  <option value='cedula' selected>
                    Cédula
                  </option>
                  <option value='pasaporte'>Pasaporte</option>
                </select>
                <input
                  type='number'
                  id='documento'
                  placeholder='Documento'
                  name='documento'
                  className=' focus:ring-0 focus:ring-offset-0  focus:border-transparent bg-transparent border-0 border-b-2 border-black placeholder-black mt-1 outline-0 ml-7 w-full'
                  onChange={(e) => {
                    setIdNumber(e.target.valueAsNumber)
                  }}
                />
              </div>
              <select
                name='trabajo'
                id='trabajo'
                className='mt-5 rounded-xl'
                onChange={(e) => {
                  setSpeciality(e.target.value)
                }}
              >
                <option value=''>Domiciliario</option>
                <option value=''>Chef</option>
                <option value=''>Auxiliar de cocina</option>
                <option value=''>Mesero</option>
                <option value=''>Lava platos</option>
              </select>
              <textarea
                id='experiencia'
                placeholder='Cuentanos un poco de tu experiencia'
                className=' focus:ring-0 focus:ring-offset-0 bg-transparent rounded-xl h-1/3 border-neutral-900 placeholder-black mt-4 outline-0 w-full'
              ></textarea>
            </form>
          </div>
          <div className='files basis-full md:basis-1/2'>
            <div className='flex flex-col shadow-md rounded-xl p-4 h-full'>
              <h3 className='text-lg font-semibold mb-4'>Archivos adjuntos</h3>
              <UserFilesTable isEditing={true} files={fileList} />
            </div>
          </div>
        </section>
        <button
          type='submit'
          className=' mt-8 p-2 text-white rounded-full border-2 self-center bg-orange-600 border-orange-600 w-6/12 md:w-1/6 lg:w-2/12 xl:w-1/12 shadow-lg '
        >
          ¡Regístrate!
        </button>
      </main>
    </MainLayout>
  )
}
