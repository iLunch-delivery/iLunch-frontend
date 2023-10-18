import Carousel from '@/components/common/Carousel'
import { categoryCarouselTwo } from '@/config/data/carousel'
import { restaurantOptions } from '@/config/data/restaurants'
import RestaurantOptions from '@/components/features/restaurants/RestaurantOptions'
import React from 'react'
export default function searchingResults() {
  return (
    <>
      <main>
        <section className='grid md:grid-cols-2 gap-12'>
          <section>
            <div id='purchaseSummary'>
              <h2 className='text-2xl font-semibold'>
                Resultados de tu busqueda
              </h2>
              {restaurantOptions.map((restaurant, index) => {
                return (
                  <>
                    <RestaurantOptions
                      key={`product-${index}`}
                      imageURL={restaurant.imageURL}
                      name={restaurant.name}
                      open={restaurant.open}
                      availability={restaurant.availability}
                      distance={restaurant.distance}
                    />
                    <hr className='border-gray-400'></hr>
                  </>
                )
              })}
            </div>
          </section>
          <section>
            <div id='recommended-section' className='my-4'>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '45px'
                }}
              >
                <div
                  style={{
                    marginBottom: '35px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <h2 className='text-2xl font-semibold'>
                    El destacado de la semana
                  </h2>
                </div>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    marginBlockEnd: '20px'
                  }}
                >
                  <img src='/assets/recomended.png' alt='recommendedButton' />
                </button>
              </div>
            </div>
            <div id='category-section' className='h-80'>
              <h2
                className='text-2xl font-semibold'
                style={{
                  marginTop: '50',
                  marginBottom: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                Para tus antojos
              </h2>
              <Carousel
                items={categoryCarouselTwo}
                itemsPerSlide={2}
                imageWidth={30}
                imageHeight={60}
                height={56}
              />
            </div>
          </section>
        </section>
      </main>
    </>
  )
}
