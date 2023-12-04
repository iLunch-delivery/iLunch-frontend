'use client'

import type { UserInfoContextInterface } from '@/config/interfaces'
import { createContext, useContext, useEffect, useState } from 'react'

// Contexto para los datos del usuario
const UserInfoContext = createContext<UserInfoContextInterface>({
  userId: '',
  name: '',
  email: '',
  phone: 0,
  address: '',
  idType: '',
  idNumber: 0,
  speciality: '',
  role: '',
  isLogged: false,
  setUserId: () => {},
  setName: () => {},
  setEmail: () => {},
  setPhone: () => {},
  setAddress: () => {},
  setIdType: () => {},
  setIdNumber: () => {},
  setSpeciality: () => {},
  setRole: () => {},
  setIsLogged: () => {},
  clearContext: () => {}
})

// Proveedor de datos del usuario
export const UserInfoProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const persistUser = localStorage.getItem('user')
  const [userId, setUserId] = useState(() => {
    if (persistUser !== null) {
      const user = JSON.parse(persistUser)
      return user.userId
    }
    return ''
  })
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

  const clearContext = () => {
    setUserId('')
    setName('')
    setEmail('')
    setPhone(0)
    setAddress('')
    setIdType('')
    setIdNumber(0)
    setSpeciality('')
    setRole('')
    setIsLogged(false)
  }

  useEffect(() => {
    localStorage.setItem(
      'user',
      JSON.stringify({
        userId,
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
    userId,
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
        userId,
        name,
        address,
        email,
        idNumber,
        idType,
        isLogged,
        phone,
        role,
        speciality,
        setUserId,
        setName,
        setAddress,
        setEmail,
        setIdNumber,
        setIdType,
        setIsLogged,
        setPhone,
        setRole,
        setSpeciality,
        clearContext
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
