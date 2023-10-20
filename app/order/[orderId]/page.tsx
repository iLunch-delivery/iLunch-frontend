'use client'
import ProductPurchaseTable from '@/components/features/Tables/ProductPurchaseTable'
import UserInfoTable from '@/components/features/Tables/UserInfoTable'
import OrderChat from '@/components/features/restaurants/OrderChat'
import MainLayout from '@/components/layout/common/MainLayout'
import { restaurants } from '@/config/data/restaurants'
import { ROLE } from '@/config/enums'
import { useShoppingCart } from '@/contexts/ShoppingCartContext'
import React from 'react'

function OrderStatus() {
  const { products, total, paymentMethod, deliveryWay, restaurantId } =
    useShoppingCart()

  const restaurantInfo = restaurants.find((restaurant) => {
    if (restaurant.id === restaurantId) {
      return restaurant
    }
  })
  return (
    <MainLayout>
      <main className='flex flex-col lg:flex-row'>
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
          <div id='chat'>
            <h3 className='text-xl font-semibold mb-2'>
              ¿Tienes algun problema?
            </h3>
            <OrderChat />
          </div>
        </section>
        <section className='flex-1 lg:ml-8 '>
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
                  <p className='text-gray-500'>{restaurantInfo?.adress}</p>
                  <p className='text-gray-500'>
                    {restaurantInfo?.city}, {restaurantInfo?.state}
                  </p>
                </div>
              </div>
              <div id='products-list' className='mb-8'>
                <h3 className='text-lg font-semibold mb-2'>
                  Resumen de productos
                </h3>
                <ProductPurchaseTable products={products} total={total} />
              </div>
              <div id='order-info' className='flex mb-8'>
                <div id='delivery-info' className='flex-1'>
                  <h3 className='text-lg font-semibold mb-2'>
                    Forma de entrega
                  </h3>
                  <div className='flex items-center'>
                    <img
                      src={deliveryWay.imageURL}
                      alt='Forma de entrega'
                      className='w-auto h-12 mr-4'
                    />
                    <p>{deliveryWay.name}</p>
                  </div>
                </div>
                <div id='billing info' className='flex-1'>
                  <h3 className='text-lg font-semibold mb-2'>Forma de pago</h3>
                  <div className='flex items-center'>
                    <img
                      src={paymentMethod.imageURL}
                      alt='Forma de pago'
                      className='w-auto h-12 mr-4'
                    />
                    <p>{paymentMethod.name}</p>
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
