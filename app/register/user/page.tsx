import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/iLunch-logo.png'
import { useRouter } from 'next/navigation'

export default function RegisterUser() {
  const router = useRouter()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Registro exitoso')
  }
  return (
    <main className='flex h-full w-full p-0'>
      <section className='form-section bg-blue-700 w-1/2 flex flex-col items-center justify-around  py-2'>
        <Image src={logo} alt='iLunch Logo' />
        <div className='flex flex-col text-white items-center whitespace-pre-wrap w-4/5'>
          <span className=' self-center text-2xl font-semibold'>
            ¡Bienvenido!
          </span>
          <span className='mt-2'>
            Estamos emocinados de tenerte a bordo de iLunch.
          </span>
          <span className='mt-1 text-center'>
            Para comenzar a disfrutar de todas las deliciosas opciones que
            ofrecemos, necesitamos que completes el formulario de registro a
            continuación y sigas unos sencillos pasos
          </span>
        </div>
        <form
          className='flex flex-col w-4/5 mb-20 text-white'
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <input
            type='text'
            id='nombre'
            placeholder='Nombre'
            className=' focus:ring-0 focus:ring-offset-0 border-transparent focus:border-transparent bg-transparent border-0 border-b-2 border-white placeholder-neutral-300 mt-1 outline-0 w-full'
          />
          <input
            type='text'
            id='apellido'
            placeholder='Apellido'
            className=' focus:ring-0 focus:ring-offset-0 border-transparent focus:border-transparent bg-transparent border-0 border-b-2 border-white placeholder-neutral-300 mt-1 outline-0 w-full'
          />
          <input
            type='email'
            id='correo'
            placeholder='Correo electrónico'
            className=' focus:ring-0 focus:ring-offset-0 border-transparent focus:border-transparent bg-transparent border-0 border-b-2 border-white placeholder-neutral-300 mt-1 outline-0 w-full'
          />
          <input
            type='password'
            id='contraseña'
            placeholder='Contraseña'
            className=' focus:ring-0 focus:ring-offset-0 border-transparent focus:border-transparent bg-transparent border-0 border-b-2 border-white placeholder-neutral-300 mt-1 outline-0 w-full'
          />
          <span className='mt-6 text-center'>
            Debes ingresar tu número de teléfono
          </span>
          <div className='w-full inline-flex'>
            <label
              htmlFor='telefono'
              className=' inline-block mt-3 border-b-2 mr-6'
            >
              +57
            </label>
            <input
              type='tel'
              id='telefono'
              placeholder='Número de teléfono'
              className=' focus:ring-0 focus:ring-offset-0 border-transparent focus:border-transparent bg-transparent border-0 border-b-2 border-white placeholder-neutral-300 mt-1 outline-0 w-full'
            />
          </div>
          <div className='w-full mt-5'>
            <input
              type='checkbox'
              id='terminos'
              className='bg-transparent border-white'
            />
            <label
              htmlFor='terminos'
              className=' inline-block mt-3 ml-1 text-sm'
            >
              Al registrate aceptas nuestros{' '}
              <span className='underline'>terminos y condiciones</span>{' '}
            </label>
          </div>
          <button
            className=' mt-8 p-2 text-white rounded-full border-2 self-center bg-orange-600 border-orange-600 w-2/6 shadow-lg '
            type='submit'
          >
            ¡Regístrate!
          </button>
        </form>
      </section>
      <section className='banner-section w-1/2 flex flex-col items-center justify-center'>
        <div className=' bg-slate-400 w-2/3 h-2/5 rounded-lg '></div>
        <div className=' flex items-center flex-col mt-20'>
          <span>¿Ya estás registrado?</span>
          <button className=' mt-3 p-2 text-white rounded-full border-2 self-center bg-orange-600 border-orange-600 w-full shadow-lg'>
            Iniciar sesión
          </button>
        </div>
      </section>
    </main>
  )
}
