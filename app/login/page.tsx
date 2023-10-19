'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/i-Lunch - Logo 1.png'
import mobile from '@/public/assets/Mobile.png'
import android from '@/public/assets/Android-I.png'
import apple from '@/public/assets/Apple - I.png'
import google from '@/public/assets/google-logo.svg'
import { userData } from '@/config/data/users'
import { useUserInfo } from '@/contexts/UserInfoContext'
import { useRouter } from 'next/navigation'
import { ROLE } from '@/config/enums'

export default function Login() {
  const router = useRouter()
  const [inputEmail, setInputEmail] = useState('')
  const [password, setPassword] = useState('')
  const {
    setIsLogged,
    setAddress,
    setEmail,
    setIdNumber,
    setIdType,
    setName,
    setPhone,
    setRole,
    setSpeciality
  } = useUserInfo()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userInfo = userData.find((user) => {
      if (user.email === inputEmail && user.password === password) {
        return user
      }
    })
    if (userInfo != null) {
      setIsLogged(true)
      setAddress(userInfo.address)
      setEmail(userInfo.email)
      setIdNumber(userInfo.idNumber)
      setIdType(userInfo.idType)
      setName(userInfo.name)
      setPhone(userInfo.phone)
      setRole(userInfo.role)
      if (userInfo.role === ROLE.worker) {
        setSpeciality(userInfo.speciality)
      }
      router.push('/')
    } else {
      alert('Login Failed')
    }
  }
  return (
    <main className='flex h-full w-full p-0'>
      <section className='form-section bg-blue-700 w-1/2 flex flex-col flex-1 items-center justify-around py-2'>
        <Image src={logo} alt='iLunch Logo' className='h-24 w-auto' />
        <form
          className=' flex flex-col w-1/2'
          onSubmit={(e) => {
            handleLogin(e)
          }}
        >
          <input
            type='email'
            placeholder='Correo electrónico'
            className='w-full !border-b !border-x-0 !border-t-0 !border-white !bg-transparent text-white outline-none placeholder:text-white placeholder:text-opacity-70 focus:!ring-0'
            value={inputEmail}
            onChange={(e) => {
              setInputEmail(e.target.value)
            }}
          />
          <input
            type='password'
            placeholder='Contraseña'
            className='w-full !border-b !border-x-0 !border-t-0 !border-white !bg-transparent text-white outline-none placeholder:text-white placeholder:text-opacity-70 focus:!ring-0 mt-5'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button
            type='submit'
            className=' mt-10 p-2 text-white rounded-full border-2 border-white  w-1/2  self-center'
          >
            Iniciar sesión
          </button>
          <button className=' mt-5 p-2 text-white rounded-full border-2 bg-blue-600 border-blue-600 w-1/2 self-center shadow-lg inline-flex flex-row '>
            <Image
              className='w-6 flex self-center mr-6'
              src={google}
              loading='lazy'
              alt='google logo'
            />
            Ingresa con google
          </button>
          <div className=' text-white flex flex-col mt-24 items-center'>
            <p className='flex'>¿Aún no estás registrado?</p>
            <button className=' mt-3 p-2 text-white rounded-full border-2 self-center bg-orange-600 border-orange-600 w-1/2 shadow-lg '>
              ¡Regístrate!
            </button>
          </div>
        </form>
      </section>
      <section className='banner-section w-1/2 flex-col items-center justify-end flex-1 hidden md:flex'>
        <Image className='h-2/3 w-auto' src={mobile} alt='Mobile App' />
        <div className='mt-8'>
          <h2 className=' font-semibold text-xl text-blue-700 '>
            Descarga nuestra App
          </h2>
          <div className='flex justify-center m-2'>
            <Image className='m-4 h-8 w-auto' src={apple} alt='Apple Icon' />
            <Image
              className='m-4 h-8 w-auto'
              src={android}
              alt='Android Icon'
            />
          </div>
        </div>
      </section>
    </main>
  )
}
