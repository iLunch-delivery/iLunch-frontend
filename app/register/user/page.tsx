'use client'

import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/iLunch-logo.png'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useUserInfo } from '@/contexts/UserInfoContext'
import { ROLE } from '@/config/enums'

export default function RegisterUser() {
  const router = useRouter()
  const { setName, setEmail, setIsLogged, setRole, setPhone } = useUserInfo()

  const setUserInfo = (userData: {
    name: FormDataEntryValue | null
    lastname: FormDataEntryValue | null
    email: FormDataEntryValue | null
    password: FormDataEntryValue | null
    phone: FormDataEntryValue | null
  }) => {
    setEmail(userData.email as string)
    setName(userData.name as string)
    setPhone(userData.phone as unknown as number)
    setIsLogged(true)
    setRole(ROLE.costumer)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const userData = {
      name: formData.get('nombre'),
      lastname: formData.get('apellido'),
      email: formData.get('correo'),
      password: formData.get('contraseña'),
      phone: formData.get('telefono')
    }

    if (formData.get('terminos') == null) {
      alert('Debes aceptar los terminos y condiciones')
      return
    } else if (
      userData.name === '' ||
      userData.lastname === '' ||
      userData.email === '' ||
      userData.password === '' ||
      userData.phone === ''
    ) {
      alert('Debes ingresar todos los datos')
      return
    }
    setUserInfo(userData)
    alert('Registro exitoso')
    router.push('/login')
  }

  return (
    <main className='flex h-auto w-full p-0'>
      <section className='form-section bg-blue-700 w-1/2 flex flex-col flex-1 items-center justify-around  py-2'>
        <Image src={logo} alt='iLunch Logo' className='h-24 w-auto' />
        <div className='flex flex-col text-white items-center whitespace-pre-wrap w-4/5'>
          <span className=' self-center text-2xl font-semibold'>
            ¡Bienvenido!
          </span>
          <span className='mt-2 text-center'>
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
          {' '}
          {/* Se indica el onSubmit para indicar que esos datos se tomarán en el registro */}
          <input
            type='text'
            id='nombre'
            name='nombre'
            placeholder='Nombre'
            className=' focus:ring-0 focus:ring-offset-0 border-transparent focus:border-transparent bg-transparent border-0 border-b-2 border-white placeholder-neutral-300 mt-1 outline-0 w-full'
          />
          <input
            type='text'
            id='apellido'
            name='apellido'
            placeholder='Apellido'
            className=' focus:ring-0 focus:ring-offset-0 border-transparent focus:border-transparent bg-transparent border-0 border-b-2 border-white placeholder-neutral-300 mt-1 outline-0 w-full'
          />
          <input
            type='email'
            id='correo'
            name='correo'
            placeholder='Correo electrónico'
            className=' focus:ring-0 focus:ring-offset-0 border-transparent focus:border-transparent bg-transparent border-0 border-b-2 border-white placeholder-neutral-300 mt-1 outline-0 w-full'
          />
          <input
            type='password'
            id='contraseña'
            name='contraseña'
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
              name='telefono'
              placeholder='Número de teléfono'
              className=' focus:ring-0 focus:ring-offset-0 border-transparent focus:border-transparent bg-transparent border-0 border-b-2 border-white placeholder-neutral-300 mt-1 outline-0 w-full'
            />
          </div>
          <div className='w-full mt-5'>
            <input
              type='checkbox'
              id='terminos'
              name='terminos'
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
            className=' mt-8 p-2 text-white rounded-full border-2 self-center bg-orange-600 border-orange-600 w-fit shadow-lg '
            type='submit'
          >
            ¡Regístrate!
          </button>
        </form>
      </section>
      <section className='banner-section w-1/2 flex-col items-center justify-center flex-1 hidden lg:flex'>
        <div className=' bg-slate-400 w-2/3 h-2/5 rounded-lg '></div>
        <div className=' flex items-center flex-col mt-20'>
          <span>¿Ya estás registrado?</span>
          <Link
            className=' mt-3 p-2 text-white text-center rounded-full border-2 self-center bg-orange-600 border-orange-600 w-full shadow-lg'
            href='/login'
          >
            Iniciar sesión
          </Link>
        </div>
      </section>
    </main>
  )
}
