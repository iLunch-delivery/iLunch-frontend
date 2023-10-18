import Image from 'next/image'
import React from 'react'
import logo from '@/assets/i-Lunch - Logo 1.png'
import google from '@/public/assets/google-logo.svg'

function Input({ texto = '', id, tipo = 'text' }) {
  return (
    <input type={tipo} id={id} placeholder={texto} className=' bg-transparent border-0 border-b-2 border-white placeholder-neutral-300 mt-3 outline-none w-full ' />
  )
}

export default function RegisterUser() {
  return (
    <main className='flex h-full w-full p-0'>
      <section className='form-section bg-blue-700 w-1/2 flex flex-col items-center justify-around py-2'>
        <Image src={logo} alt='iLunch Logo' />
        <div className='flex flex-col text-white items-center whitespace-pre-wrap w-4/5'>
          <span className=' self-center text-2xl font-semibold'>¡Bienvenido!</span>
          <span className='mt-2'>Estamos emocinados de tenerte a bordo de iLunch.</span>
          <span className='mt-1 text-center'>Para comenzar a disfrutar de todas las deliciosas opciones que ofrecemos, necesitamos que completes el formulario de registro a continuación y sigas unos sencillos pasos</span>
          <form className='flex flex-col w-full mt-5' >
            <Input texto="Nombre" id='nombre' tipo="text" />
            <Input texto="Apellido" id='apellido' tipo="text" />
            <Input texto="Correo electrónico" id='correo' tipo="email" />
            <Input texto="Contraseña" id='contraseña' tipo="password" />
            <span className='mt-7 text-center'>Debes ingresar tu número de teléfono</span>
            <div className='w-full inline-flex '>
              <label htmlFor="telefono" className=' inline-block mt-3 border-b-2 mr-6'>+57</label>
              <Input texto='Número de teléfono ' id='telefono' tipo='' />
            </div>
            <span className='mt-7 text-center'>Recibirás un mensaje SMS para verificar tu cuenta, verifica que el teléfono ingresado sea correcto</span>
          </form>
        </div>
        <div>
        <button type='submit' className=' mt-10 p-2 text-white rounded-full border-2 border-white  w-1/2  self-center'>Iniciar sesión</button>
          <button className=' mt-5 p-2 text-white rounded-full border-2 bg-blue-600 border-blue-600 w-1/2 self-center shadow-lg inline-flex flex-row '>
            <Image className="w-6 flex self-center mr-6" src={google} loading="lazy" alt="google logo" />Ingresa con google
          </button>
          <div className=' text-white flex flex-col mt-24 items-center'>
            <p className='flex'>¿Aún no estás registrado?</p>
            <button className=' mt-3 p-2 text-white rounded-full border-2 self-center bg-orange-600 border-orange-600 w-1/2 shadow-lg '>¡Regístrate!</button>
          </div>
        </div>
      </section>
      <section className='banner-section w-1/2 flex flex-col items-center justify-center'>
          <div className=' bg-slate-400 w-2/3 h-2/5 rounded-lg '>
          </div>
          <div className=' flex items-center flex-col mt-20'>
            <span>¿Ya estás registrado?</span>
            <button className=' mt-3 p-2 text-white rounded-full border-2 self-center bg-orange-600 border-orange-600 w-full shadow-lg'>Iniciar sesión</button>
          </div>
          
      </section>
    </main>
  )
}
