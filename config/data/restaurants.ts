import { PAYMENT_METHODS, RESTAURANT_AVAILABILITY } from '../enums'

export const restaurants = [
  {
    id: 1,
    name: 'Restaurante 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem a metus semper egestas eu et massa. Proin vulputate, mauris vitae porttitor auctor.',
    adress: 'Calle 1 # 1 - 1',
    city: 'Medellín',
    state: 'Antioquia',
    country: 'Colombia',
    categories: ['Pollo', 'Comida rápida'],
    speciality: 'Pollo',
    rating: 4.5,
    popularDishes: ['Pollo apanado', 'Pollo asado', 'Pollo frito'],
    deliveryTime: 45,
    promotions: ['Envío gratis'],
    logoURL: '/assets/restaurant/logos/restaurant-logo-1.png',
    bannerURL: '/assets/restaurant/banners/restaurant-banner.png',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Lleno,
    distance: 1.0
  },
  {
    id: 2,
    name: 'Restaurante 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem a metus semper egestas eu et massa. Proin vulputate, mauris vitae porttitor auctor.',
    adress: 'Calle 2 # 2 - 2',
    city: 'Medellín',
    state: 'Antioquia',
    country: 'Colombia',
    categories: ['Hamburguesas', 'Comida rápida'],
    speciality: 'Hamburguesas',
    rating: 4.8,
    popularDishes: [
      'Hamburguesa sencilla',
      'Hamburguesa doble',
      'Hamburguesa especial'
    ],
    deliveryTime: 35,
    promotions: [
      '2X1 en hamburguesas especiales',
      'Envío gratis por pedidos mayores a $50.000'
    ],
    logoURL: '/assets/restaurant/logos/restaurant-logo-2.png',
    bannerURL: '/assets/restaurant/banners/restaurant-banner.png',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Disponible,
    distance: 1.0
  },
  {
    id: 3,
    name: 'Restaurante 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem a metus semper egestas eu et massa. Proin vulputate, mauris vitae porttitor auctor.',
    adress: 'Carrera 3 # 3 - 3',
    city: 'Medellín',
    state: 'Antioquia',
    country: 'Colombia',
    categories: ['Pizza', 'Comida rápida'],
    speciality: 'Pizza',
    rating: 4.2,
    popularDishes: ['Pizza hawaiana', 'Pizza vegetariana', 'Pizza de pollo'],
    deliveryTime: 50,
    promotions: ['Bebida gratis con tu pizza favorita tamaño familiar'],
    logoURL: '/assets/restaurant/logos/restaurant-logo-3.png',
    bannerURL: '/assets/restaurant/banners/restaurant-banner.png',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Pronto,
    distance: 1.0
  }
]

export const shoppingCart = [
  {
    imageURL: '/assets/restaurant/menu-product-1.png',
    name: 'Producto 1',
    price: 10000,
    amount: 2
  },

  {
    imageURL: '/assets/restaurant/menu-product-3.png',
    name: 'Producto 3',
    price: 7000,
    amount: 2
  }
]

export const billingOptions = [
  {
    imageURL: '/assets/restaurant/billing_options/cash.png',
    name: PAYMENT_METHODS.Efectivo
  },

  {
    imageURL: '/assets/restaurant/billing_options/card.png',
    name: PAYMENT_METHODS.Tarjeta
  }
]

export const restaurantOptions = [
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-1.png',
    id: 1,
    name: 'Restaurante 1',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Lleno,
    distance: 1.0
  },

  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-2.png',
    id: 2,
    name: 'Restaurante 2',
    open: false,
    availability: RESTAURANT_AVAILABILITY.Pronto,
    distance: 1.1
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-3.png',
    id: 3,
    name: 'Restaurante 3',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Disponible,
    distance: 1.2
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-1.png',
    id: 1,
    name: 'Restaurante 1',
    open: false,
    availability: RESTAURANT_AVAILABILITY.Pronto,
    distance: 1.3
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-2.png',
    id: 2,
    name: 'Restaurante 2',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Lleno,
    distance: 1.0
  },

  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-3.png',
    id: 3,
    name: 'Restaurante 3',
    open: false,
    availability: RESTAURANT_AVAILABILITY.Pronto,
    distance: 1.1
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-1.png',
    id: 1,
    name: 'Restaurante 1',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Disponible,
    distance: 1.2
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-2.png',
    id: 2,
    name: 'Restaurante 2',
    open: false,
    availability: RESTAURANT_AVAILABILITY.Pronto,
    distance: 1.3
  }
]

export const restaurantOptionsTwo = [
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-1.png',
    id: 1,
    name: 'Restaurante 1',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Lleno,
    distance: 1.0
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-2.png',
    id: 2,
    name: 'Restaurante 2',
    open: false,
    availability: RESTAURANT_AVAILABILITY.Pronto,
    distance: 1.1
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-3.png',
    id: 3,
    name: 'Restaurante 3',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Disponible,
    distance: 1.2
  }
]
