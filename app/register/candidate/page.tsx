import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/iLunchN.png'

function Input({ texto = '', id, tipo = 'text' }) {
  return (
    <input type={tipo} id={id} placeholder={texto} className=' bg-transparent border-0 border-b-2 placeholder-black mt-1 outline-none w-full placeholder:p-0 ' />
  )
}

export default function RegisterUser() {
  return (
    <main className='flex flex-col items-center p-0'>
      <div className='inline-flex mt-10 align-middle font-semibold text-2xl'> Bienvenido a la red de trabajo de <Image src={logo} alt='iLunch logo' className='align-middle h-auto w-auto mx-auto my-auto'/></div>
      <div className='flex flex-col items-center mt-5'>
        <span>Por favor ingresa tus datos y cúentanos tu experiencia en el sector gastronómico.</span>
        <span className='mt-0'>También nos gustaría que anexaras tu hoja de vida y otros documentos que soporten tu experiencia y nos dejen saber más de ti.</span>
        <span className='mt-0'>Luego de llenar el formulario solo queda esperar a que un restaurante interesado en tus servicios te contacte por medio de la aplicación</span>
      </div>
      <section className='form-section w-3/5 flex mt-7 mb-12'>
        <div className='form w-1/2 flex flex-col rounded-xl mx-4 p-2'>
          <form >
            <Input texto='Nombre' id='nombre' />
            <Input texto='Apellido' id='apellido' />
            <Input texto='Correo electrónico' id='correo' />
          </form>
        </div>
        <div className='archivos w-1/2'>

        </div>
      </section>
    </main>
  )
}
