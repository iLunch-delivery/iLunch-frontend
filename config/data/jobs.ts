export const jobAvailableOffers = [
  {
    id: 1,
    restaurantId: 1,
    imageURL: '/assets/jobs/job-offer-1.png',
    title: 'Se solicita cocinero',
    subtitle: { text: 'Restaurante 1', iconType: 'location' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem a metus semper egestas eu et massa. Proin vulputate, mauris vitae porttitor auctor, sapien.',
    button: { text: 'Más información', href: '/jobs/details/1' }
  },

  {
    id: 2,
    restaurantId: 1,
    imageURL: '/assets/jobs/job-offer-2.png',
    title: 'Se solicita repartidor',
    subtitle: { text: 'Restaurante 1', iconType: 'location' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem a metus semper egestas eu et massa. Proin vulputate, mauris vitae porttitor auctor, sapien.',
    button: { text: 'Más información', href: '/jobs/details/2' }
  },

  {
    id: 3,
    restaurantId: 2,
    imageURL: '/assets/jobs/job-offer-3.png',
    title: 'Se solicita mesero',
    subtitle: { text: 'Restaurante 1', iconType: 'location' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem a metus semper egestas eu et massa. Proin vulputate, mauris vitae porttitor auctor, sapien.',
    button: { text: 'Más información', href: '/jobs/details/3' }
  },

  {
    id: 4,
    restaurantId: 3,
    imageURL: '/assets/jobs/job-offer-4.png',
    title: 'Se solicita repartidor',
    subtitle: { text: 'Restaurante 2', iconType: 'location' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem a metus semper egestas eu et massa. Proin vulputate, mauris vitae porttitor auctor, sapien.',
    button: { text: 'Más información', href: '/jobs/details/4' }
  },

  {
    id: 5,
    restaurantId: 3,
    imageURL: '/assets/jobs/job-offer-5.png',
    title: 'Se solicita cocinero',
    subtitle: { text: 'Restaurante 3', iconType: 'location' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem a metus semper egestas eu et massa. Proin vulputate, mauris vitae porttitor auctor, sapien.',
    button: { text: 'Más información', href: '/jobs/details/5' }
  }
]

export const jobReceivedOffers = [
  {
    id: 1,
    restaurantId: 1,
    imageURL: '/assets/jobs/job-offer-1.png',
    title: 'Oferta de empleo - Cocinero',
    subtitle: { text: 'Restaurante 1', iconType: 'location' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem a metus semper egestas eu et massa. Proin vulputate, mauris vitae porttitor auctor, sapien.',
    offerTime: { text: 'Tiempo completo', iconType: 'clock' },
    offerSalary: { text: '$1.500.000', iconType: 'price' },
    button: { text: 'Aceptar', href: '/jobs/details/1' },
    button2: { text: 'Rechazar', href: '#' }
  },

  {
    id: 2,
    restaurantId: 1,
    imageURL: '/assets/jobs/job-offer-2.png',
    title: 'Oferta de empleo - Repartidor',
    subtitle: { text: 'Restaurante 2', iconType: 'location' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem a metus semper egestas eu et massa. Proin vulputate, mauris vitae porttitor auctor, sapien.',
    offerTime: { text: 'Tiempo completo', iconType: 'clock' },
    offerSalary: { text: '$1.500.000', iconType: 'price' },
    button: { text: 'Aceptar', href: '/jobs/details/2' },
    button2: { text: 'Rechazar', href: '#' }
  },

  {
    id: 3,
    restaurantId: 2,
    imageURL: '/assets/jobs/job-offer-3.png',
    title: 'Oferta de empleo - Mesero',
    subtitle: { text: 'Restaurante 3', iconType: 'location' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem a metus semper egestas eu et massa. Proin vulputate, mauris vitae porttitor auctor, sapien.',
    offerTime: { text: 'Tiempo completo', iconType: 'clock' },
    offerSalary: { text: '$1.500.000', iconType: 'price' },
    button: { text: 'Aceptar', href: '/jobs/details/3' },
    button2: { text: 'Rechazar', href: '#' }
  }
]
