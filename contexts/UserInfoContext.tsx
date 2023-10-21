'use client'

import type { UserInfoContextInterface } from '@/config/interfaces'
import { createContext, useContext, useState } from 'react'

// Contexto para los datos del usuario
const UserInfoContext = createContext<UserInfoContextInterface>({
  name: '',
  email: '',
  phone: 0,
  address: '',
  idType: '',
  idNumber: 0,
  speciality: '',
  role: '',
  isLogged: false,
  setName: () => {},
  setEmail: () => {},
  setPhone: () => {},
  setAddress: () => {},
  setIdType: () => {},
  setIdNumber: () => {},
  setSpeciality: () => {},
  setRole: () => {},
  setIsLogged: () => {}
})

// Proveedor de datos del usuario
export const UserInfoProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
  const [address, setAddress] = useState('')
  const [idType, setIdType] = useState('')
  const [idNumber, setIdNumber] = useState(0)
  const [speciality, setSpeciality] = useState('')
  const [role, setRole] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  return (
    <UserInfoContext.Provider
      value={{
        name,
        address,
        email,
        idNumber,
        idType,
        isLogged,
        phone,
        role,
        speciality,
        setName,
        setAddress,
        setEmail,
        setIdNumber,
        setIdType,
        setIsLogged,
        setPhone,
        setRole,
        setSpeciality
      }}
    >
      {children}
    </UserInfoContext.Provider>
  )
}

// Hook para obtener los datos del usuario
export const useUserInfo = () => {
  return useContext(UserInfoContext)
}
