import { DELIVERY_WAY } from '../enums'

export const DELIVERY_OPTIONS = [
  {
    imageURL: '/assets/restaurant/receive_options/receive-at-home.png',
    name: 'Recibir a Domicilio',
    type: DELIVERY_WAY.Domicilio
  },

  {
    imageURL: '/assets/restaurant/receive_options/pick-up-on-site.png',
    name: 'Recoger en local para llevar',
    type: DELIVERY_WAY.Recoger
  },

  {
    imageURL: '/assets/restaurant/receive_options/eating-on-site.png',
    name: 'Comer en local',
    type: DELIVERY_WAY.ParaLlevar
  }
]