'use client'
import SelectOption from '@/components/common/SelectOption'
import { billingOptions } from '@/config/data/restaurants'
import { useShoppingCart } from '@/contexts/ShoppingCartContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function BillingDetails({
  total,
  userInfo
}: {
  total: number
  userInfo: { name: string; email: string; phone: number; address: string }
}) {
  const router = useRouter()
  const { deliveryWay, paymentMethod, setPaymentMethod } = useShoppingCart()

  const handlePayment = () => {
    if (paymentMethod.imageURL === '' || paymentMethod.name === '') {
      alert('Debes seleccionar un método de pago')
    } else if (deliveryWay.name === '' || deliveryWay.imageURL === '') {
      alert('Debes seleccionar un método de envío')
    } else {
      router.push('/order/1')
    }
  }

  return (
    <div className='my-4 space-y-6'>
      <div id='priceSummary' className='space-y-2'>
        <h3 className='text-md font-bold'>Resumen de precios</h3>
        <hr className='border-gray-400'></hr>
        <ul className='text-sm'>
          <li className='flex justify-between'>
            <p>Costo total de platillos</p>
            <p>$ {total}</p>
          </li>
          <li className='flex justify-between'>
            <p>Costo de domicilio</p>
            <p>$ {5000}</p>
          </li>
          <li className='flex justify-between'>
            <p>Tarifa de plataforma</p>
            <p>$ {total * 0.1}</p>
          </li>
        </ul>
        <hr className='border-gray-400'></hr>
        <div className='flex justify-between text-sm font-semibold'>
          <p>Total a pagar</p>
          <p>COP $ {total * 1.1 + 5000}</p>
        </div>
      </div>
      <div id='contactInformation' className='space-y-2'>
        <h3 className='text-md font-bold'>Información de contacto</h3>
        <div className='w-full text-sm space-y-1'>
          <div className='text-left sm:flex'>
            <p className='w-1/4 font-semibold'>Nombre:</p>
            <p>{userInfo.name}</p>
          </div>
          <div className='text-left sm:flex'>
            <p className='w-1/4 font-semibold'>Correo:</p>
            <p>{userInfo.email}</p>
          </div>
          <div className='text-left sm:flex'>
            <p className='w-1/4 font-semibold'>Celular:</p>
            <p>+57 {userInfo.phone}</p>
          </div>
          <div className='text-left sm:flex'>
            <p className='w-1/4 font-semibold'>Dirección:</p>
            <div>
              <p>{userInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
      <div id='paymentMethod'>
        <h3 className='text-md font-bold'>Forma de pago</h3>
        <div className='py-4 flex justify-evenly items-center'>
          {billingOptions.map((option, index) => {
            return (
              <SelectOption
                key={`receive_option-${index}`}
                imageURL={option.imageURL}
                name={option.name}
                action={() => {
                  setPaymentMethod(option)
                }}
              />
            )
          })}
        </div>
        <p className='text-md font-bold text-center'>
          Total a pagar: COP $ {total * 1.1 + 5000}
        </p>
      </div>
      <div className='flex justify-center'>
        <button
          onClick={() => {
            handlePayment()
          }}
          className='px-4 py-1 w-1/2 bg-lime-500 text-md text-white font-semibold rounded-full hover:text-black hover:bg-lime-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2'
        >
          Comprar
        </button>
      </div>
    </div>
  )
}

export default BillingDetails
