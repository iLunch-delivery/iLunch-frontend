'use client'
import { userInfo } from '@/config/data/userInfo'
import { useChangeUserInfo } from '@/contexts/UserInfoContext'
import React, { useEffect } from 'react'

function UserInfoTable() {
  const { address, email, idNumber, idType, phone, setUserInfo, speciality } =
    useChangeUserInfo()

  useEffect(() => {
    setUserInfo(userInfo)
  }, [])

  return (
    <table className='w-full '>
      <tbody>
        <tr className='h-8'>
          <td className='font-semibold'>Correo</td>
          <td>{email}</td>
        </tr>
        <tr className='h-8'>
          <td className='font-semibold'>Celular:</td>
          <td>{phone}</td>
        </tr>
        <tr className='h-8'>
          <td className='font-semibold'>Dirección:</td>
          <td>{address}</td>
        </tr>
        <tr className='h-8'>
          <td className='font-semibold'>Tipo ID:</td>
          <td>{idType}</td>
        </tr>
        <tr className='h-8'>
          <td className='font-semibold'>ID:</td>
          <td>{idNumber}</td>
        </tr>
        <tr className='h-8'>
          <td className='font-semibold'>Especialidad</td>
          <td>{speciality}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default UserInfoTable
