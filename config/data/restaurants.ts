import { PAYMENT_METHODS, RESTAURANT_AVAILABILITY } from '../enums'

export const restaurants = [
  {
    id: 1,
    name: 'Restaurante 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem a metus semper egestas eu et massa. Proin vulputate, mauris vitae porttitor auctor.',
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
    logoURL: '/assets/restaurant/logos/restaurant-logo-1.png',
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
    logoURL: '/assets/restaurant/logos/restaurant-logo-1.png',
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

export const orderReceiveOptions = [
  {
    imageURL: '/assets/restaurant/receive_options/receive-at-home.png',
    name: 'Recibir a Domicilio'
  },

  {
    imageURL: '/assets/restaurant/receive_options/pick-up-on-site.png',
    name: 'Recoger en local para llevar'
  },

  {
    imageURL: '/assets/restaurant/receive_options/eating-on-site.png',
    name: 'Comer en local'
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
    name: 'Restaurante 1',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Lleno,
    distance: 1.0
  },

  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-2.png',
    name: 'Restaurante 2',
    open: false,
    availability: RESTAURANT_AVAILABILITY.Pronto,
    distance: 1.1
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-3.png',
    name: 'Restaurante 3',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Disponible,
    distance: 1.2
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-1.png',
    name: 'Restaurante 4',
    open: false,
    availability: RESTAURANT_AVAILABILITY.Pronto,
    distance: 1.3
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-2.png',
    name: 'Restaurante 5',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Lleno,
    distance: 1.0
  },

  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-3.png',
    name: 'Restaurante 6',
    open: false,
    availability: RESTAURANT_AVAILABILITY.Pronto,
    distance: 1.1
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-1.png',
    name: 'Restaurante 7',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Disponible,
    distance: 1.2
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-2.png',
    name: 'Restaurante 8',
    open: false,
    availability: RESTAURANT_AVAILABILITY.Pronto,
    distance: 1.3
  }
]

export const restaurantOptionsTwo = [
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-1.png',
    name: 'Restaurante 1',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Lleno,
    distance: 1.0
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-2.png',
    name: 'Restaurante 2',
    open: false,
    availability: RESTAURANT_AVAILABILITY.Pronto,
    distance: 1.1
  },
  {
    imageURL: '/assets/restaurant/logos/restaurant-logo-3.png',
    name: 'Restaurante 3',
    open: true,
    availability: RESTAURANT_AVAILABILITY.Disponible,
    distance: 1.2
  }
]
