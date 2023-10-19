import type { RestaurantInfoProps } from '@/config/interfaces'
import React from 'react'

function RestaurantDetails({
  restaurantInfo
}: {
  restaurantInfo: RestaurantInfoProps | undefined
}) {
  return (
    <div className='py-5 grid grid-cols-1 gap-4 md:grid-cols-3'>
      {/* Primera columna */}
      <div className='grid grid-rows-2 gap-4'>
        <div className='p-6 rounded-lg border shadow-md'>
          <div className='flex'>
            <img
              className='block h-24 rounded-full mx-0 shrink-0'
              src={restaurantInfo?.logoURL ?? ''}
              alt="Restaurant's Logo"
            />
            <div>
              <h1 className='text-lg font-semibold'>{restaurantInfo?.name}</h1>
              <p>{restaurantInfo?.rating}</p>
            </div>
          </div>
          <p>Restaurante de:</p>
          <ul>
            {restaurantInfo?.categories.map((category, index) => (
              <li key={`category-${index}`}>{category}</li>
            ))}
          </ul>
        </div>

        <div className='p-6 rounded-lg border shadow-md'>
          <h1 className='text-lg font-semibold pb-2'>Horario de atención</h1>
          <table className='text-md w-full'>
            <tbody>
              <tr>
                <td className='align-top w-1/2'>Lunes</td>
                <td className='text-right'>08:00 - 17:00</td>
              </tr>
              <tr>
                <td className='align-top '>Martes</td>
                <td className='text-right'>08:00 - 17:00</td>
              </tr>
              <tr>
                <td className='align-top '>Miércoles</td>
                <td className='text-right'>08:00 - 17:00</td>
              </tr>
              <tr>
                <td className='align-top '>Jueves</td>
                <td className='text-right'>08:00 - 17:00</td>
              </tr>
              <tr>
                <td className='align-top '>Viernes</td>
                <td className='text-right'>08:00 - 17:00</td>
              </tr>
              <tr>
                <td className='align-top '>Sábado</td>
                <td className='text-right'>09:00 - 14:00</td>
              </tr>
              <tr>
                <td className='align-top'>Domingo</td>
                <td className='text-right'>Cerrado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Columna 2 */}
      <div className='grid grid-rows-5 gap-4'>
        {/* Infor direccion */}
        <div className='rounded-lg border shadow-md'>
          <div className='p-6'>
            <h1 className='text-lg font-semibold'>Encuentranos</h1>
            <p className='text-sm '>{restaurantInfo?.adress}</p>
            <p className='text-sm '>
              {restaurantInfo?.city}, {restaurantInfo?.state},{' '}
              {restaurantInfo?.country}
            </p>
          </div>
        </div>
        {/* Soy el mapa soy el mapa */}
        <div className='rounded-lg border shadow-md bg-cover bg-center row-span-4'>
          <div
            className='h-[400px] bg-cover bg-center'
            style={{ backgroundImage: "url('/assets/map-mockup.png')" }}
          ></div>
        </div>
      </div>

      {/* Columna 3 */}
      <div className='overflow-hidden rounded-lg border shadow-md'>
        <div className='p-6'>
          <h1 className='text-lg font-semibold pb-2'>Sobre Nostros</h1>
          <table className='text-md w-full'>
            <tbody>
              <tr>
                <td className='align-top w-1/3'>Especialidad</td>
                <td>{restaurantInfo?.speciality}</td>
              </tr>
              <tr>
                <td className='align-top'>Rating</td>
                <td>{restaurantInfo?.rating}</td>
              </tr>
              <tr>
                <td className='align-top'>Platos populares</td>
                <td>
                  <ul>
                    {restaurantInfo?.popularDishes.map((dish, index) => (
                      <li key={`popular-dish-${index}`}>{dish}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td className='align-top'>Tiempo de entrega aproximado</td>
                <td>{restaurantInfo?.deliveryTime} min</td>
              </tr>
              <tr>
                <td className='align-top'>Promociones vigentes</td>
                <td>
                  <ul>
                    {restaurantInfo?.promotions.map((promotion, index) => (
                      <li key={`promotion-${index}`}>{promotion}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default RestaurantDetails
