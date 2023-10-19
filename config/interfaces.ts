import type { RESTAURANT_AVAILABILITY } from './enums'

export interface CarouselItemProps {
  imageUrl: string
  title?: string
  subtitle?: string
}

export interface CarouselProps {
  items: CarouselItemProps[]
  itemsPerSlide: number
  imageHeight: number
  imageWidth?: number
  height?: number
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

export interface ProductProps {
  imageURL: string
  name: string
  price: number
  amount: number
}

export interface SelectOptionProps {
  imageURL: string
  name: string
}

export interface UserInfo {
  name: string
  email: string
  phone: number
  address: string
  city: string
  state: string
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

export interface SearchBarContextInterface {
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

export interface RestaurantCardProps {
  imageURL: string
  id: number
  name: string
  open: boolean
  availability: string
  distance: number
}

export interface RestaurantInfoProps {
  id: number
  name: string
  description: string
  adress: string
  city: string
  state: string
  categories: string[]
  country: string
  speciality: string
  rating: number
  popularDishes: string[]
  deliveryTime: number
  promotions: string[]
  logoURL: string
  bannerURL: string
  open: boolean
  availability: RESTAURANT_AVAILABILITY
  distance: number
}

export interface DishProps {
  imageURL: string
  title: string
  subtitle: {
    text: string
    iconType: string
  }
  description: string
  button: {
    text: string
    link: string
  }
}

export interface jobInfoProps {
  id: number
  restaurantId: number
  imageURL: string
  title: string
  subtitle: {
    text: string
    iconType: string
  }
  offerTime: {
    text: string
    iconType: string
  }
  offerSalary: {
    text: string
    iconType: string
  }
  description: string
  button: {
    text: string
    link: string
  }
}
