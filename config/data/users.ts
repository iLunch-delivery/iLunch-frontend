import { ID_TYPES, ROLE } from '../enums'

export const userData = [
  {
    name: 'Pepito Perez',
    email: 'pepitoP@gmail.com',
    phone: 1234567890,
    address: 'Calle 123 # 45 - 67',
    idType: ID_TYPES.Cedula,
    idNumber: 159753,
    role: ROLE.costumer,
    speciality: ''
  },
  {
    name: 'Chamito Perez',
    email: 'elchamito@gmail.com',
    phone: 1234567890,
    address: 'Calle 123 # 45 - 67',
    idType: ID_TYPES.Pasaporte,
    idNumber: 98563,
    role: ROLE.worker,
    speciality: 'Repartidor'
  },
  {
    name: 'Admin',
    email: 'admin@ilunch.com',
    phone: 1234567890,
    address: 'Calle 123 # 45 - 67',
    idType: ID_TYPES.Cedula,
    idNumber: 1,
    role: ROLE.worker,
    speciality: 'Administrador'
  }
]

export const userLogin = [
  {
    email: 'pepitoP@gmail.com',
    password: 'pepito'
  },
  {
    email: 'elchamito@gmail.com',
    password: 'chamito'
  },
  {
    email: 'admin@ilunch.com',
    password: 'admin'
  }
]
