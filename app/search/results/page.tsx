'use client'

import Carousel from '@/components/common/Carousel'
import { categoryCarouselTwo } from '@/config/data/carousel'
import RestaurantOptions from '@/components/features/restaurants/RestaurantOptions'
import React from 'react'
import MainLayout from '@/components/layout/common/MainLayout'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useSearch } from '@/contexts/SearchContext'

{/* Más resultados de la busqueda. Además muestra un recomendado de la semana y un carrusel de antojos */}
export default function searchingResults() {
  // Search state context
  const { search } = useSearch()

  let itemsPerSlide = 2

  const is2xl = useMediaQuery('2xl')
  const isLaptop = useMediaQuery('lg')
  const isTablet = useMediaQuery('md')
  const isLargeMobile = useMediaQuery('sm')

  if (is2xl) {
    itemsPerSlide = 3
  } else if (isLaptop) {
    itemsPerSlide = 2
  } else if (isTablet) {
    itemsPerSlide = 1
  } else if (isLargeMobile) {
    itemsPerSlide = 2
  } else {
    itemsPerSlide = 1
  }

  return (
    <MainLayout>
      <main>
        <section className='grid md:grid-cols-2 gap-12'>
          <section>
              {/* Información de los resultados de busqueda */}
              {/* Se itera sobre los resultados de la busqueda para mostrar cada restaurante */}
            <div id='purchaseSummary'>
              <h2 className='text-2xl font-semibold'>
                Resultados de tu busqueda
              </h2>
              {search.map((restaurant, index) => {
                return (
                  <div key={`restaurant-${index}`}>
                    <RestaurantOptions
                      key={`product-${index}`}
                      imageURL={restaurant.logoURL}
                      id={restaurant.id}
                      name={restaurant.name}
                      open={restaurant.open}
                      availability={restaurant.availability}
                      distance={restaurant.distance}
                    />
                    <hr className='border-gray-400'></hr>
                  </div>
                )
              })}
            </div>
          </section>
          {/* Recomendado del día */}
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
                <Link
                  style={{
                    background: 'none',
                    border: 'none',
                    marginBlockEnd: '20px'
                  }}
                  href={'/restaurant/2'}
                >
                  <img src='/assets/recomended.png' alt='recommendedButton' />
                </Link>
              </div>
            </div>
            {/* Carrusel de antojos pequeño */}
            <div id='category-section' className='h-80'>
              <h2
                className='text-2xl font-semibold h-'
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
                itemsPerSlide={itemsPerSlide}
                imageWidth={36}
                imageHeight={36}
                height={48}
              />
            </div>
          </section>
        </section>
      </main>
    </MainLayout>
  )
}
