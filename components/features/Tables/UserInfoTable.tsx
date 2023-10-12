'use client'
import { userInfoBase } from '@/config/data/userInfo'
import { useChangeUserInfo } from '@/contexts/UserInfoContext'
import React, { useEffect } from 'react'
import Dropdown from '../../common/Dropdown'
import { ID_TYPES, USER_ROLES } from '@/config/enums'

function UserInfoTable({
  isEditing,
  role,
  voucher
}: {
  isEditing: boolean
  role: string
  voucher: boolean
}) {
  const {
    name,
    email,
    address,
    phone,
    idNumber,
    idType,
    speciality,
    setName,
    setAddress,
    setEmail,
    setIdNumber,
    setPhone,
    setSpeciality,
    setIdType
  } = useChangeUserInfo()

  useEffect(() => {
    setName(userInfoBase.name)
    setEmail(userInfoBase.email)
    setPhone(userInfoBase.phone)
    setAddress(userInfoBase.address)
    setIdType(userInfoBase.idType)
    setIdNumber(userInfoBase.idNumber)
    setSpeciality(userInfoBase.speciality)
  }, [])

  const handleSelectIdType = (idType: string) => {
    setIdType(idType)
  }

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
    return (
      <table className='w-full border-spacing-y-5 border-separate'>
        <tbody>
          <tr className='h-4'>
            <td className='font-semibold'>Correo</td>
            <td>
              {isEditing ? (
                <input
                  className='w-full rounded-full border-gray-300'
                  type='email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              ) : (
                email
              )}
            </td>
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
          <tr className='h-4'>
            <td className='font-semibold'>Tipo ID:</td>
            <td>
              {isEditing ? (
                <Dropdown
                  options={[ID_TYPES.Cedula, ID_TYPES.Pasaporte]}
                  defaultValue={idType}
                  handleSelectOption={handleSelectIdType}
                />
              ) : (
                idType
              )}
            </td>
          </tr>
          <tr className='h-4'>
            <td className='font-semibold'>ID:</td>
            <td>
              {isEditing ? (
                <input
                  className='w-full rounded-full border-gray-300'
                  type='number'
                  value={idNumber}
                  onChange={(e) => {
                    setIdNumber(e.target.valueAsNumber)
                  }}
                />
              ) : (
                idNumber
              )}
            </td>
          </tr>
          {role === USER_ROLES.aspirant && (
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
          )}
        </tbody>
      </table>
    )
  }
}

export default UserInfoTable
