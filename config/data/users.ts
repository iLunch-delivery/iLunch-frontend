import { ID_TYPES, ROLE } from '../enums'

export const userData = [
  {
    name: 'Pepito Perez',
    email: 'pepitoP@gmail.com',
    password: 'pepito',
    phone: 1234567890,
    address: 'Calle 123 # 45 - 67',
    idType: ID_TYPES.Cedula,
    idNumber: 159753,
    role: ROLE.Costumer,
    speciality: ''
  },
  {
    name: 'Chamito Perez',
    email: 'elchamito@gmail.com',
    password: 'chamito',
    phone: 1234567890,
    address: 'Calle 123 # 45 - 67',
    idType: ID_TYPES.Pasaporte,
    idNumber: 98563,
    role: ROLE.Worker,
    speciality: 'Repartidor'
  },
  {
    name: 'Admin',
    email: 'admin@ilunch.com',
    password: 'admin',
    phone: 1234567890,
    address: 'Calle 123 # 45 - 67',
    idType: ID_TYPES.Cedula,
    idNumber: 1,
    role: ROLE.Worker,
    speciality: 'Administrador'
  }
]
