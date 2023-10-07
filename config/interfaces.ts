export interface CarouselProps {
  images: Array<Array<{ url: string; title?: string }>>
  imageHeight: number
  imageWidth?: number
  height?: number
}

export interface UserInfo {
  name: string
  email: string
  phone: number
  address: string
  city: string
  state: string
  zip: number
  country: string
  idType: string
  idNumber: number
  speciality: string
  role: string
  isLogged: boolean
}

export interface SidebarContextInterface {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export interface UserInfoContextInterface {
  name: string
  email: string
  phone: number
  address: string
  city: string
  state: string
  zip: number
  country: string
  idType: string
  idNumber: number
  speciality: string
  role: string
  isLogged: boolean
  setUserInfo: (userInfo: UserInfo) => void
}
