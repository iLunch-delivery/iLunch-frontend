import ProductPurchaseTable from '@/components/features/Tables/ProductPurchaseTable'
import UserInfoTable from '@/components/features/Tables/UserInfoTable'
import OrderChat from '@/components/features/restaurants/OrderChat'
import MainLayout from '@/components/layout/common/layout'
import { ROLE } from '@/config/enums'
import React from 'react'

function OrderStatus() {
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
                <p>XX min - XX min</p>
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
                  src='/assets/restaurant/logos/restaurant-logo-1.png'
                  alt='restaurante-1'
                  className='w-auto h-24 mr-4'
                />
                <div id='restaurant-details'>
                  <p className='font-medium '>Restaurante 1</p>
                  <p className='text-gray-500'>Cra. x # xxx - xxx local xx</p>
                  <p className='text-gray-500'>+57 3XX-XXX-XXXX</p>
                </div>
              </div>
              <div id='products-list' className='mb-8'>
                <h3 className='text-lg font-semibold mb-2'>
                  Resumen de productos
                </h3>
                <ProductPurchaseTable />
              </div>
              <div id='order-info' className='flex mb-8'>
                <div id='delivery-info' className='flex-1'>
                  <h3 className='text-lg font-semibold mb-2'>
                    Forma de entrega
                  </h3>
                  <div className='flex items-center'>
                    <img
                      src='/assets/restaurant/receive_options/receive-at-home.png'
                      alt='Forma de entrega'
                      className='w-auto h-12 mr-4'
                    />
                    <p>Recibir a domicilio</p>
                  </div>
                </div>
                <div id='billing info' className='flex-1'>
                  <h3 className='text-lg font-semibold mb-2'>Forma de pago</h3>
                  <div className='flex items-center'>
                    <img
                      src='/assets/restaurant/billing_options/card.png'
                      alt='Forma de pago'
                      className='w-auto h-12 mr-4'
                    />
                    <p>Tarjeta</p>
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
