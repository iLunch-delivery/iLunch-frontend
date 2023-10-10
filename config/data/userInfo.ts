import { ID_TYPES } from '../enums'

export const userInfoBase = {
  name: 'John Doe',
  email: 'fulanitodetal@gmail.com',
  phone: 1234567890,
  address: '1234 Main St',
  city: 'Anytown',
  state: 'CA',
  zip: 12345,
  country: 'United States',
  idType: ID_TYPES.Cedula,
  idNumber: 12345678,
  speciality: 'Cocina Colombiana',
  role: 'aspirante',
  isLogged: false
}

export const userFiles = [
  {
    name: 'Hoja de vida',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae aliquam',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    weight: '2 mb'
  },
  {
    name: 'Documento de identidad',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae aliquam',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    weight: '2 mb'
  }
]
