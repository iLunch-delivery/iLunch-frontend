'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/assets/iLunchN.png'
import UserFilesTable from '@/components/features/Tables/UserFilesTable'
import MainLayout from '@/components/layout/common/layout'
import type { File } from '@/config/interfaces'

export default function RegisterCandidate() {
  const [fileList, setFileList] = useState<File[]>()
  return (
    <MainLayout>
      <main className='flex flex-col items-center p-0 bg-white'>
        <div className='flex flex-row mt-10 align-middle font-semibold text-2xl'>
          {' '}
          Bienvenido a la red de trabajo de{' '}
          <Image
            src={logo}
            alt='iLunch logo'
            className='align-middle h-9 w-auto ml-2 '
          />
        </div>
        <div className='flex flex-col items-center mt-5'>
          <span>
            Por favor ingresa tus datos y cúentanos tu experiencia en el sector
            gastronómico.
          </span>
          <span className='mt-0'>
            También nos gustaría que anexaras tu hoja de vida y otros documentos
            que soporten tu experiencia y nos dejen saber más de ti.
          </span>
          <span className='mt-0'>
            Luego de llenar el formulario solo queda esperar a que un
            restaurante interesado en tus servicios te contacte por medio de la
            aplicación
          </span>
        </div>
        <section className='form-section w-3/5 flex mt-7 mb-12'>
          <div className='form w-1/2 flex flex-col rounded-xl mx-4 p-2'>
            <form className='flex flex-col'>
              <input
                type='text'
                id='nombre'
                placeholder='Nombre'
                className=' focus:ring-0 focus:ring-offset-0 focus:border-black
            focus:border-transparent bg-transparent border-0 border-b-2 border-neutral-900 placeholder-black mt-1 outline-0 w-full'
              />
              <input
                type='text'
                id='apellido'
                placeholder='Apellido'
                className=' focus:ring-0 focus:ring-offset-0  focus:border-transparent bg-transparent border-0 border-b-2 border-black placeholder-black mt-1 outline-0 w-full'
              />
              <input
                type='email'
                id='correo'
                placeholder='Correo electrónico'
                className=' focus:ring-0 focus:ring-offset-0  focus:border-transparent bg-transparent border-0 border-b-2 border-black placeholder-black mt-1 outline-0 w-full'
              />
              <div className='flex flex-row mt-3'>
                <select
                  className='rounded-2xl'
                  placeholder='Tipo de documentos'
                  id='tipo-id'
                  name='Tipo de documento'
                >
                  <option disabled selected>
                    {' '}
                  </option>
                  <option value='cedula' selected>
                    Cédula
                  </option>
                  <option value='pasaporte'>Pasaporte</option>
                </select>
                <input
                  type='text'
                  id='documento'
                  placeholder='Documento'
                  className=' focus:ring-0 focus:ring-offset-0  focus:border-transparent bg-transparent border-0 border-b-2 border-black placeholder-black mt-1 outline-0 ml-7 w-full'
                />
              </div>
              <select name='trabajo' id='' className='mt-5 rounded-xl'>
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
          <div className='files w-1/2'>
            <div className='flex flex-col shadow-md rounded-xl p-4 h-full'>
              <h3 className='text-lg font-semibold mb-8'>Archivos adjuntos</h3>
              <UserFilesTable isEditing={true} files={fileList} />
            </div>
          </div>
        </section>
        <button className=' mt-2 mb-16 p-2 text-white rounded-full border-2 self-center bg-orange-600 border-orange-600 w-1/12 shadow-lg '>
          ¡Regístrate!
        </button>
      </main>
    </MainLayout>
  )
}
