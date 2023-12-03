'use client'

import Carousel from '@/components/common/Carousel'
import { categoryCarousel } from '@/config/data/carousel'
import RestaurantOptions from '@/components/features/restaurants/RestaurantOptions'
import React from 'react'
import MainLayout from '@/components/layout/common/MainLayout'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useSearch } from '@/contexts/SearchContext'
import apiRoutes from '@/config/apiRoutes'

export default function searchingResults() {
  // Hook para actualizar el contexto de la busqueda y obtenerla
  const { searchResults, setSearchResults } = useSearch()

  // Variables y lógica para el responsive de los carouseles
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

  // Search handler
  const handleSearch = (categorySearch: string) => {
    fetch(`${apiRoutes.getRestaurant}${apiRoutes.search}${categorySearch}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(async (response) => {
      const responseJSON = await response.json()
      if (response.status != 200) {
        alert(responseJSON.message)
      }
      return responseJSON
    })
    .then((data) => {
      if (data.length > 0) {
        /* En caso de haber resultados, se actualiza el context para la busqueda y poder
           accederla desde la página de los resultados completos */
        setSearchResults(data)
      } else {
        alert('No se han encontrado resultados')
      }
    })
    .catch((error) => {
      alert('Ha habido un error. Por favor intenta más tarde.\n' + error)
    })
  }

  return (
    <MainLayout>
      <main>
        <section className='grid md:grid-cols-2 gap-12'>
          <section>
            {/* Información de los resultados de busqueda */}
            {/* Se itera sobre los resultados de la busqueda para mostrar cada restaurante */}
            <div id='purchaseSummary'>
              {searchResults.length > 0 ? (
                <h2 className='text-2xl font-semibold'>
                  Resultados de tu busqueda
                </h2>
              ) : (
                <h2 className='text-2xl font-semibold text-red-700 mb-4'>
                  No se han encontrado resultados
                </h2>
              )}
              {searchResults.map((restaurant, index) => {
                return (
                  <div key={`restaurant-${index}`}>
                    <RestaurantOptions
                      key={`product-${index}`}
                      imageURL={restaurant.logoURL}
                      id={restaurant._id}
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
                items={categoryCarousel}
                itemsPerSlide={itemsPerSlide}
                imageHeight={9} // Units: rem
                itemSearch={handleSearch}
              />
            </div>
          </section>
        </section>
      </main>
    </MainLayout>
  )
}
