import Image from 'next/image'
import React from 'react'
import logo from '@/assets/i-Lunch - Logo 1.png'
import LoginForm from '@/components/features/LoginForm'

function page() {
  return (
    <main className='flex h-full w-full'>
      <section className='form-section bg-blue-700 w-1/2 flex flex-col items-center justify-around py-2'>
        <Image src={logo} alt='iLunch Logo' />
        <LoginForm />
        <div>Registrate</div>
        <div className='disclaimer'>Terminos y condiciones</div>
      </section>
      <section className='banner-section w-1/2 flex flex-col items-center justify-center'>
        <div>banner</div>
      </section>
    </main>
  )
}

export default page
