'use client'

import type { UserInfoContextInterface } from '@/config/interfaces'
import { createContext, useContext, useEffect, useState } from 'react'

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
  const persistUser = localStorage.getItem('user')
  const [name, setName] = useState(() => {
    if (persistUser !== null) {
      const user = JSON.parse(persistUser)
      return user.name
    }
    return ''
  })
  const [email, setEmail] = useState(() => {
    if (persistUser !== null) {
      const user = JSON.parse(persistUser)
      return user.email
    }
    return ''
  })
  const [phone, setPhone] = useState(() => {
    if (persistUser !== null) {
      const user = JSON.parse(persistUser)
      return user.phone
    }
    return 0
  })
  const [address, setAddress] = useState(() => {
    if (persistUser !== null) {
      const user = JSON.parse(persistUser)
      return user.address
    }
    return ''
  })
  const [idType, setIdType] = useState(() => {
    if (persistUser !== null) {
      const user = JSON.parse(persistUser)
      return user.idType
    }
    return ''
  })
  const [idNumber, setIdNumber] = useState(() => {
    if (persistUser !== null) {
      const user = JSON.parse(persistUser)
      return user.idNumber
    }
    return 0
  })
  const [speciality, setSpeciality] = useState(() => {
    if (persistUser !== null) {
      const user = JSON.parse(persistUser)
      return user.speciality
    }
    return ''
  })
  const [role, setRole] = useState(() => {
    if (persistUser !== null) {
      const user = JSON.parse(persistUser)
      return user.role
    }
    return ''
  })
  const [isLogged, setIsLogged] = useState(() => {
    if (persistUser !== null) {
      const user = JSON.parse(persistUser)
      return user.isLogged
    }
    return false
  })

  useEffect(() => {
    localStorage.setItem(
      'user',
      JSON.stringify({
        name,
        email,
        phone,
        address,
        idType,
        idNumber,
        speciality,
        role,
        isLogged
      })
    )
  }, [
    name,
    email,
    phone,
    address,
    idType,
    idNumber,
    speciality,
    role,
    isLogged
  ])

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
