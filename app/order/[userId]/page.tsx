'use client'
import { useEffect, useState } from 'react'
import ProductPurchaseTable from '@/components/features/Tables/ProductPurchaseTable'
import UserInfoTable from '@/components/features/Tables/UserInfoTable'
import OrderChat from '@/components/features/shopping_cart/OrderChat'
import MainLayout from '@/components/layout/common/MainLayout'
import { ROLE } from '@/config/enums'
import { DELIVERY_OPTIONS, BILLING_OPTIONS } from '@/config/data/constants'
import apiRoutes from '@/config/apiRoutes'
import type { ShoppingCartInfoProps, RestaurantInfoProps } from '@/config/interfaces'
import Link from 'next/link'

function OrderStatus({
  params
}: {
  params: { userId: Number }
}) {
  const [errorMessage, setErrorMessage] = useState("")
  const [shoppingCartInfo, setShoppingCartInfo] = useState<ShoppingCartInfoProps>()
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfoProps>()

  useEffect(() => {
    fetch(`${apiRoutes.getShoppingCart}${params.userId}/${apiRoutes.order}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(async (response) => {
      const responseJSON = await response.json()
      if (response.status != 200) {
        setErrorMessage(responseJSON.message)
      } else {
        return responseJSON
      }
    })
    .then((data) => {
      if (data == null) return
      if (!data.deliveryDetails.orderSent) {
        setErrorMessage('No cuentas con un pedidio activo: Usa el carrito de compra para realizar tu pedido.')
        return
      }
      setShoppingCartInfo({
        ...data.deliveryDetails,
        products: data.products,
        homeDeliveryPrice: data.homeDeliveryPrice,
        totalProductsPrice: data.totalProductsPrice,
        platformFee: data.platformFee
      })
      setRestaurantInfo({
        ...data.restaurantDetails
      })
    })
    .catch((error) => {
      alert('Ha habido un error. Por favor intenta más tarde.\n' + error)
    })
  }, [])

  if (errorMessage !== "") {
    return(
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-3xl font-semibold text-center'>{errorMessage}</h1>
        <Link href='/'>
          <button className='px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
            Volver al inicio
          </button>
        </Link>
      </div>
    )
  }
  
  return (
    <MainLayout>
      <main className='flex flex-col lg:flex-row'>
        {/* Estado del pedido */}
        <section className='flex-1 flex flex-col mb-8 lg:mr-8 lg:mb-0'>
          <div id='order-status' className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              Siguele la pista a tu pedido
            </h2>
            <h3 className='text-xl font-semibold mb-2'>Estado del pedido</h3>
            <div
              id='status-card'
              className='shadow-md rounded-xl px-6 py-4 flex'
            >
              <img
                src='/assets/order-states-icons/cooking.png'
                alt='en preparación'
                className='w-auto h-24 mr-4'
              />
              <div>
                <p className='mb-2'>
                  El restaurante a confirmado tu pedido y se encuentra en
                  preparación
                </p>
                <p className='font-semibold'>Tiempo de entrega estimado</p>
                <p>
                  {restaurantInfo?.deliveryTime} min -{' '}
                  {restaurantInfo !== undefined
                    ? restaurantInfo.deliveryTime + 15
                    : ''}{' '}
                  min
                </p>
              </div>
            </div>
          </div>
          {/* Chat con el restaurante */}
          <div id='chat'>
            <h3 className='text-xl font-semibold mb-2'>
              ¿Tienes algun problema?
            </h3>
            <OrderChat />
          </div>
        </section>
        <section className='flex-1 lg:ml-8 '>
          {/* Resumen de datos relacionados con el pedido */}
          <div className='shadow-md rounded-xl px-6 py-3'>
            <h2 className='text-2xl font-semibold mb-4'>Detalles del pedido</h2>
            <div id='order-details'>
              <h3 className='text-lg font-semibold mb-2'>
                Información del restaurante
              </h3>

              <div id='restaurant-info' className='flex items-center mb-8'>
                <img
                  src={restaurantInfo?.logoURL}
                  alt='restaurante-1'
                  className='w-auto h-24 mr-4'
                />
                <div id='restaurant-details'>
                  <p className='font-medium '>{restaurantInfo?.name}</p>
                  <p className='text-gray-500'>{restaurantInfo?.address}</p>
                  <p className='text-gray-500'>
                    {restaurantInfo?.city}, {restaurantInfo?.state}
                  </p>
                </div>
              </div>
              <div id='products-list' className='mb-8'>
                <h3 className='text-lg font-semibold mb-2'>
                  Resumen de productos
                </h3>
                <table className='w-full'>
                  <tbody>
                    {shoppingCartInfo?.products.map((product, index) => (
                      <tr key={`product-${product._id}`}>
                        <td>{product.title}</td>
                        <td className='text-center'>x{product.units} und</td>
                        <td className='text-right'>COP $ {product.price}</td>
                      </tr>
                    ))}
                    <tr className='font-bold'>
                      <td>Suma costo de platillos</td>
                      <td className='text-center'></td>
                      <td className='text-right'>COP $ {shoppingCartInfo?.totalProductsPrice}</td>
                    </tr>
                    <tr className='font-bold'>
                      <td>Costo de entrega</td>
                      <td className='text-center'></td>
                      <td className='text-right'>COP $ {
                        shoppingCartInfo?.deliveryWay === 'Domicilio' 
                        ? shoppingCartInfo?.homeDeliveryPrice 
                        : 0 
                      }
                      </td>
                    </tr>
                    <tr className='font-bold'>
                      <td>Tarifa de la plataforma</td>
                      <td className='text-center'></td>
                      <td className='text-right'>COP $ {shoppingCartInfo?.platformFee}
                      </td>
                    </tr>
                    <tr className='font-bold'>
                      <td>Total</td>
                      <td className='text-center'></td>
                      <td className='text-right'>COP $ {shoppingCartInfo?.totalProductsPrice + (shoppingCartInfo?.deliveryWay === 'Domicilio' ? shoppingCartInfo?.homeDeliveryPrice : 0) + shoppingCartInfo?.platformFee}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id='order-info' className='flex mb-8'>
                <div id='delivery-info' className='flex-1'>
                  <h3 className='text-lg font-semibold mb-2'>
                    Forma de entrega
                  </h3>
                  <div className='flex items-center'>
                    <img
                      src={
                        DELIVERY_OPTIONS.find((deliveryOption) => deliveryOption.type === shoppingCartInfo?.deliveryWay)?.imageURL
                      }
                      alt='Forma de entrega'
                      className='w-auto h-12 mr-4'
                    />
                    <p>{shoppingCartInfo?.deliveryWay}</p>
                  </div>
                </div>
                <div id='billing info' className='flex-1'>
                  <h3 className='text-lg font-semibold mb-2'>Forma de pago</h3>
                  <div className='flex items-center'>
                    <img
                      src={
                        BILLING_OPTIONS.find((paymentOption) => paymentOption.type === shoppingCartInfo?.paymentMethod)?.imageURL
                      }
                      alt='Forma de pago'
                      className='w-auto h-12 mr-4'
                    />
                    <p>{shoppingCartInfo?.paymentMethod}</p>
                  </div>
                </div>
              </div>
              <div id='user-info'>
                <h3 className='text-lg font-semibold'>¿Quién ordena?</h3>
                <UserInfoTable
                  isEditing={false}
                  role={ROLE.worker}
                  voucher={true}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}

export default OrderStatus
