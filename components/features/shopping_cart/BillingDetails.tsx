'use client'
import SelectOption from '@/components/common/SelectOption'
import { BILLING_OPTIONS } from '@/config/data/constants'
import { useShoppingCart } from '@/contexts/ShoppingCartContext'
import { useUserInfo } from '@/contexts/UserInfoContext'
import { useRouter } from 'next/navigation'
import { DELIVERY_WAY } from '@/config/enums'
import apiRoutes from '@/config/apiRoutes'

function BillingDetails({
  totalProductsPrice,
  platformFee,
  homeDeliveryPrice,
  userInfo
}: {
  totalProductsPrice: number
  platformFee: number
  deliveryWay: DELIVERY_WAY | ""
  homeDeliveryPrice: number
  userInfo: { name: string; email: string; phone: number; address: string }
}) {
  // User id
  const { idNumber } = useUserInfo()
  const router = useRouter()
  const { deliveryWay, paymentMethod, setPaymentMethod, additionalComments } = useShoppingCart()

  const handlePayment = async () => {
    if (paymentMethod === "") {
      alert('Debes seleccionar un método de pago!')
    } else if (deliveryWay === "") {
      alert('Debes seleccionar un método de envío!')
    } else {
      try {
        const response = await fetch(`${apiRoutes.getShoppingCart}${idNumber}/${apiRoutes.updateShoppingCart}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            deliveryWay: deliveryWay,
            paymentMethod: paymentMethod,
            additionalComments: additionalComments,
            orderSent: true,
          })
        })
    
        if (response.status == 200) {
          alert('Carrito de compra validado exitosamente... Procediendo a activar la orden')
        } else {
          alert('Ha habido un error. Por favor intenta más tarde.')
          return
        }
      } catch (error) {
        alert('Ha habido un error. Por favor intenta más tarde.\n' + error)
        return
      }

      router.push(`/order/${idNumber}`)
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
            <p>$ {totalProductsPrice}</p>
          </li>
          <li className='flex justify-between'>
            <p>Costo de entrega</p>
            <p>$ {deliveryWay === 'Domicilio' ? homeDeliveryPrice : 0}</p>
          </li>
          <li className='flex justify-between'>
            <p>Tarifa de plataforma</p>
            <p>$ {platformFee}</p>
          </li>
        </ul>
        <hr className='border-gray-400'></hr>
        <div className='flex justify-between text-sm font-semibold'>
          <p>Total a pagar</p>
          <p>COP $ {totalProductsPrice + (deliveryWay === 'Domicilio' ? homeDeliveryPrice : 0) + platformFee}</p>
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
          {BILLING_OPTIONS.map((option, index) => {
            return (
              <SelectOption
                key={`receive_option-${index}`}
                imageURL={option.imageURL}
                name={option.type}
                selected={paymentMethod === option.type}
                action={() => {
                  setPaymentMethod(option.type)
                }}
              />
            )
          })}
        </div>
        <p className='text-md font-bold text-center'>
          Total a pagar: COP $ {totalProductsPrice + (deliveryWay === 'Domicilio' ? homeDeliveryPrice : 0) + platformFee}
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
