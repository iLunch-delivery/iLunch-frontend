import type { RESTAURANT_AVAILABILITY, PAYMENT_METHODS, DELIVERY_WAY } from './enums'

// Interfaz de propiedades para los items del carrusel
export interface CarouselItemProps {
  imageUrl: string
  title?: string
  subtitle?: string
}

// Interfaz de propiedades para el componente de carrusel
export interface CarouselProps {
  items: CarouselItemProps[]
  itemsPerSlide: number
  imageHeight: number
  imageWidth?: number
  height?: number
  itemSearch?: (categorySearch: string) => void
}

// Interfaz de propiedades del componente de tarjetas
export interface DetailProps {
  id?: number
  restaurantId?: number
  imageURL: string
  title: string
  subtitle?: DetailSubtitleProps
  description: string
  price?: number
  button?: DetailButtonProps
  action?: () => void
}

// Interfaz de propiedades para el componente de oferta laboral
export interface JobOfferProps {
  id?: number
  restaurantId?: number
  imageURL: string
  title: string
  subtitle?: DetailSubtitleProps
  description: string
  offerTime?: DetailSubtitleProps
  offerSalary?: DetailSubtitleProps
  button?: DetailButtonProps
  button2?: DetailButtonProps
  action1?: () => void
  action2?: () => void
}

// Interfaz de propiedades para el componente de tarjetas de producto
export interface DetailSubtitleProps {
  text: string
  iconType?: string
}

// Interfaz de propiedades para el componente de botón de tarjeta
export interface DetailButtonProps {
  text: string
  href?: string
}

// Interfaz de propiedades para el id de un producto del carrito de compra
export interface ProductPurchaseIdProps {
  productId: string
  userId: number
}

// Interfaz de propiedades para el componente de producto agregado al carrito
export interface ProductPurchaseProps {
  _id: ProductPurchaseIdProps
  imageURL: string
  title: string
  price: number
  units: number
  editAction: (_id: ProductPurchaseIdProps, units: number) => void
  deleteAction: () => void
}

// Interfaz de propiedades el producto agregado al carrito
export interface ProductPurchaseInfoProps {
  _id: ProductPurchaseIdProps
  imageURL: string
  title: string
  price: number
  units: number
}

// Interfaz de propiedades para el componente de platillo expuesto en el menú de un restaurante
export interface ProductDetailsProps {
  imageURL: string
  title: string
  price: number
  subtitle: {
    text: string
    iconType: string
  }
  description: string
  button: {
    text: string
  }
}

// Interfaz de propiedades para el componente de platillo expuesto en el menú de un restaurante
export interface ProductInfoProps {
  _id: string
  imageURL: string
  title: string
  price: number
  description: string
}

// Interfaz de propiedades para el select de opciones
export interface SelectOptionProps {
  imageURL: string
  name: string
  selected: boolean
  action: () => void
}

// Interfaz de propiedades para un usuario
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

// Interfaz de propiedades para un archivo
export interface File {
  name: string
  description: string
  url: string
  weight: string
}

// Interfaz de propiedades para el componente despelgable
export interface DropdownProps {
  options: string[]
  handleSelectOption: (selection: string) => void
  defaultValue: string
}

// Interfaz de propiedades para la barra lateral de navegación
export interface SidebarContextInterface {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

// Interfaz de propiedades para el contexto de la busqueda
export interface SearchContextInterface {
  searchResults: RestaurantSearchResultProps[]
  setSearchResults: (search: RestaurantSearchResultProps[]) => void
}

// Interfaz de propiedades para las ofertas laborales recibidas
export interface JobsReceivedContextInterface {
  jobsReceived: JobOfferInfoProps[]
  setJobsReceived: (jobsReceived: JobOfferInfoProps[]) => void
}

// Interfaz de propiedades para el contexto de la información del usuario
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
  clearContext: () => void
}

// Interfaz de propiedades para el contexto del carrito de compras
export interface ShoppingCartInterface {
  deliveryWay: DELIVERY_WAY | ""
  setDeliveryWay: (deliveryWay: DELIVERY_WAY | "") => void
  paymentMethod: PAYMENT_METHODS | ""
  setPaymentMethod: (paymentMethod: PAYMENT_METHODS | "") => void
  additionalComments: string
  setAdditionalComments: (additionalComments: string) => void
}

// Interfaz de propiedades del carrito de compra
export interface ShoppingCartInfoProps {
  _id: string
  userId: number
  restaurantId: number
  deliveryWay: string
  paymentMethod: string
  additionalComments: string
  products: ProductPurchaseInfoProps[]
  homeDeliveryPrice: number
  totalProductsPrice: number
  platformFee: number
  orderSent: boolean
}

// Interfaz de propiedades para la tarjeta de platillo de un restaurante
export interface RestaurantCardProps {
  imageURL: string
  id: number
  name: string
  open: boolean
  availability: string
  distance: number
}

// Interfaz de propiedades para un restaurante
export interface RestaurantInfoProps {
  _id: number
  name: string
  description: string
  address: string
  city: string
  state: string
  categories: string[]
  country: string
  speciality: string
  rating: number
  popularDishes: string[]
  deliveryTime: number
  homeDeliveryPrice: number
  promotions: string[]
  logoURL: string
  bannerURL: string
  open: boolean
  availability: RESTAURANT_AVAILABILITY
  distance: number
  menu: ProductInfoProps[]
}

// Interfaz de propiedades para la búsqueda de restaurantes por medio de la barra de búsqueda
export interface RestaurantSearchResultProps {
  _id: number
  name: string
  logoURL: string
  open: boolean
  availability: RESTAURANT_AVAILABILITY
  distance: number
  score: number
}

// Interfaz de propiedades para una oferta laboral
export interface JobInfoProps {
  id: number
  restaurantId: number
  imageURL: string
  title: string
  subtitle: {
    text: string
    iconType: string
  }
  offerTime: string
  offerSalary: string
  description: string
  button: {
    text: string
    href: string
  }
}

// Interfaz de propiedades para una oferta laboral recibida
export interface JobReceivedInfoProps {
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
    href: string
  }
  button2: {
    text: string
  }
}

export interface JobOfferInfoProps {
  _id: number
  restaurantId: number
  imageURL: string
  title: string
  description: string
  offerTime: string
  offerSalary: string
}