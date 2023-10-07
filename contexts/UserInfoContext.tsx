'use client'

import type { UserInfoContextInterface } from '@/config/interfaces'
import { createContext, useContext, useState } from 'react'

const UserInfoContext = createContext<UserInfoContextInterface>({
  name: '',
  email: '',
  phone: 0,
  address: '',
  city: '',
  state: '',
  zip: 0,
  country: '',
  idType: '',
  idNumber: 0,
  speciality: '',
  role: '',
  isLogged: false,
  setUserInfo: () => {}
})

export const UserInfoProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: 0,
    address: '',
    city: '',
    state: '',
    zip: 0,
    country: '',
    idType: '',
    idNumber: 0,
    speciality: '',
    role: '',
    isLogged: false
  })

  return (
    <UserInfoContext.Provider value={{ ...userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  )
}

export const useChangeUserInfo = () => {
  return useContext(UserInfoContext)
}
