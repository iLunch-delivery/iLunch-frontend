'use client'

import { useUserInfo } from '@/contexts/UserInfoContext'
import React from 'react'
import { ROLE } from '@/config/enums'

function UserInfoTable({
  isEditing,
  role,
  voucher
}: {
  isEditing: boolean
  role: string
  voucher: boolean
}) {
  // Contexto para los datos del usuario
  const {
    name,
    email,
    address,
    phone,
    idNumber,
    idType,
    speciality,
    setAddress,
    setPhone,
    setSpeciality
  } = useUserInfo()

  // Layyout cuando la tabla se debe mostrar en el resumen de la orden
  if (voucher) {
    return (
      <table className='w-full border-spacing-y-5 border-separate'>
        <tbody>
          <tr className='h-4'>
            <td className='font-semibold'>Nombre</td>
            <td>{name}</td>
          </tr>
          <tr className='h-4'>
            <td className='font-semibold'>Correo</td>
            <td>{email}</td>
          </tr>
          <tr className='h-4'>
            <td className='font-semibold'>Celular:</td>
            <td>{phone}</td>
          </tr>
          <tr className='h-4'>
            <td className='font-semibold'>Dirección:</td>
            <td>{address}</td>
          </tr>
        </tbody>
      </table>
    )
  } else {
    // Layout cuando la tabla se debe mostrar en el perfil del usuario
    // Se controla la edición de los datos
    return (
      <table className='w-full border-spacing-y-5 border-separate'>
        <tbody>
          <tr className='h-4'>
            <td className='font-semibold'>Correo</td>
            <td>{email}</td>
          </tr>
          <tr className='h-4'>
            <td className='font-semibold'>Celular:</td>
            <td>
              {isEditing ? (
                <input
                  className='w-full rounded-full border-gray-300'
                  type='number'
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.valueAsNumber)
                  }}
                />
              ) : (
                phone
              )}
            </td>
          </tr>
          <tr className='h-4'>
            <td className='font-semibold'>Dirección:</td>
            <td>
              {isEditing ? (
                <input
                  className='w-full rounded-full border-gray-300'
                  type='text'
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value)
                  }}
                />
              ) : (
                address
              )}
            </td>
          </tr>
          
          {role === ROLE.Worker && (
            <>
              <tr className='h-4'>
                <td className='font-semibold'>Tipo ID:</td>
                <td>{idType}</td>
              </tr>
              <tr className='h-4'>
                <td className='font-semibold'>ID:</td>
                <td>{idNumber}</td>
              </tr>
              <tr className='h-4'>
                <td className='font-semibold'>Especialidad</td>
                <td>
                  {isEditing ? (
                    <input
                      className='w-full rounded-full border-gray-300'
                      type='text'
                      value={speciality}
                      onChange={(e) => {
                        setSpeciality(e.target.value)
                      }}
                    />
                  ) : (
                    speciality
                  )}
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    )
  }
}

export default UserInfoTable
