import Image from 'next/image'
import React from 'react'
import logo from '@/assets/i-Lunch - Logo 1.png'
import LoginForm from '@/components/features/LoginForm'
import mobile from '@/public/assets/Mobile.png'
import android from '@/public/assets/Android-I.png'
import apple from '@/public/assets/Apple - I.png'

export default function Login() {
  return (
    <main className='flex h-full w-full p-0'>
      <section className='form-section bg-blue-700 w-1/2 flex flex-col items-center justify-around py-2'>
        <Image src={logo} alt='iLunch Logo' />
        <LoginForm />
        <div className=' text-white flex flex-col'>
          <p>¿Aún no estás registrado?</p>
          <button className=' mt-2 p-2 text-white rounded-full border-2 self-center bg-orange-600 border-orange-600 w-1/2 shadow-md '>¡Regístrate!</button>
        </div>
      </section>
      <section className='banner-section w-1/2 flex flex-col items-center justify-around'>
          <Image src={mobile} alt='Mobie App'/>
          <div>
            <h1>Descarga nuestra App</h1>
            <div className='flex justify-center m-5'>
              <Image className='m-5' src={apple} alt='Apple Icon'/>
              <Image className='m-5' src={android} alt='Android Icon'/>
            </div>
          </div>
      </section>
    </main>
  )
}
