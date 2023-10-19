import Image from 'next/image'
import React from 'react'
import logo from '@/assets/i-Lunch - Logo 1.png'
import mobile from '@/public/assets/Mobile.png'
import android from '@/public/assets/Android-I.png'
import apple from '@/public/assets/Apple - I.png'
import google from '@/public/assets/google-logo.svg'

export default function Login() {
  return (
    <main className='flex h-full w-full p-0'>
      <section className='form-section bg-blue-700 w-1/2 flex flex-col items-center justify-around py-2'>
        <Image src={logo} alt='iLunch Logo' />
        <form className=' flex flex-col w-1/2' >
          <input type="email" placeholder='Correo electrónico' className=' focus:ring-0 focus:ring-offset-0 border-transparent focus:border-transparent bg-transparent border-0 border-b-2 border-white placeholder-neutral-300 mt-5 outline-none  '/>
          <input type="password" placeholder='Contraseña' className=' focus:ring-0 focus:ring-offset-0 border-transparent focus:border-transparent bg-transparent border-0 border-b-2 border-white placeholder-neutral-300 mt-5 outline-none  '/>
          <button type='submit' className=' mt-10 p-2 text-white rounded-full border-2 border-white  w-1/2  self-center'>Iniciar sesión</button>
          <button className=' mt-5 p-2 text-white rounded-full border-2 bg-blue-600 border-blue-600 w-1/2 self-center shadow-lg inline-flex flex-row '>
            <Image className="w-6 flex self-center mr-6" src={google} loading="lazy" alt="google logo" />Ingresa con google
          </button>
          <div className=' text-white flex flex-col mt-24 items-center'>
            <p className='flex'>¿Aún no estás registrado?</p>
            <button className=' mt-3 p-2 text-white rounded-full border-2 self-center bg-orange-600 border-orange-600 w-1/2 shadow-lg '>¡Regístrate!</button>
          </div>
        </form>
      </section>
      <section className='banner-section w-1/2 flex flex-col items-center justify-around'>
          <Image src={mobile} alt='Mobile App'/>
          <div>
            <p className=' font-semibold text-3xl text-blue-700 '>Descarga nuestra App</p>
            <div className='flex justify-center m-5'>
              <Image className='m-5' src={apple} alt='Apple Icon'/>
              <Image className='m-5' src={android} alt='Android Icon'/>
            </div>
          </div>
      </section>
    </main>
  )
}
