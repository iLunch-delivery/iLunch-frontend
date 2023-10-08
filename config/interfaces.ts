import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface CarouselProps {
  images: Array<Array<{ url: string; title?: string; productPrice?: string }>>
  imageHeight: number
  imageWidth?: number
  height?: number
}

export interface ProductProps {
  price: string
}

export interface DetailProps {
  imageURL: string
  title: string
  subtitle?: DetailSubtitleProps
  description: string
  button?: DetailButtonProps
}

export interface DetailPropsOffer {
  imageURL: string
  title: string
  subtitle?: DetailSubtitleProps
  description: string
  offerTime?: DetailSubtitleProps
  offerSalary?: DetailSubtitleProps
  button?: DetailButtonProps
  button2?: DetailButtonProps
}

export interface DetailSubtitleProps {
  text: string
  iconType?: string
}

export interface DetailButtonProps {
  text: string
  link: string
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

export interface File {
  name: string
  description: string
  url: string
  weight: string
}

export interface DropdownProps {
  options: string[]
  handleSelectOption: (selection: string) => void
  defaultValue: string
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
  idType: string
  idNumber: number
  speciality: string
  role: string
  isLogged: boolean
  setName: (name: string) => void
  setEmail: (email: string) => void
  setPhone: (phone: number) => void
  setAddress: (address: string) => void
  setIdType: (idType: string) => void
  setIdNumber: (idNumbre: number) => void
  setSpeciality: (speciality: string) => void
  setRole: (role: string) => void
  setIsLogged: (isLogged: boolean) => void
}
