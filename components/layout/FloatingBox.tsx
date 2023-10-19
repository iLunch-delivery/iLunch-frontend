import React from 'react'
import { restaurantOptionsTwo } from '@/config/data/restaurants'
import RestaurantOptions from '@/components/features/restaurants/RestaurantOptions'
import Link from 'next/link'

function FloatingBox() {
  return (
        <div style={{
          position: 'absolute',
          top: '33%',
          left: '52.5%',
          transform: 'translate(-50%, -50%)',
          width: '880px',
          height: '425px',
          backgroundColor: 'white',
          borderRadius: '20px'
        }}>
            <section id='purchaseSummary' className='m-4'>
                <h2 className='text-2xl font-semibold mt-3'>Resultados de tu busqueda</h2>
                {restaurantOptionsTwo.map((restaurant, index) => {
                  return (
                        <>
                            <RestaurantOptions
                                key={`product-${index}`}
                                imageURL={restaurant.imageURL}
                                id={restaurant.id}
                                name={restaurant.name}
                                open={restaurant.open}
                                availability={restaurant.availability}
                                distance={restaurant.distance}
                            />
                            <hr className='border-gray-400'></hr>
                        </>
                  )
                })}
                <Link href='/search/results'>
                  <button className='w-full py-2 mt-4 text-center text-gray-500 rounded'>
                    Ver más opciones
                  </button>
                </Link>
            </section>
        </div>
  )
}

export default FloatingBox