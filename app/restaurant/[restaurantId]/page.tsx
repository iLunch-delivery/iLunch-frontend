'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Carousel from '@/components/common/Carousel'
import { popularProductsCarousel } from '@/config/data/carousel'

import Detail from '@/components/common/Detail'
import { menus } from '@/config/data/menus'

import { useEffect, useState } from 'react'
import type { DishProps, RestaurantInfoProps } from '@/config/interfaces'
import { restaurants } from '@/config/data/restaurants'

export default function Restaurant({
  params
}: {
  params: { restaurantId: string }
}) {
  const [menu, setMenu] = useState<DishProps[]>()
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfoProps>()

  useEffect(() => {
    const menu =
      menus.filter(
        (menu) => menu.restaurantId === Number(params.restaurantId)
      )[0].menu ?? []
    setMenu(menu)

    const restaurantInfo = restaurants.filter(
      (restaurant) => restaurant.id === Number(params.restaurantId)
    )[0]
    setRestaurantInfo(restaurantInfo)
  }, [])

  /*
  const isTablet = useMediaQuery('md')
  const isLargeMobile = useMediaQuery('sm')

  if (isTablet) {
    itemsPerSlide = 3
  } else if (isLargeMobile) {
    itemsPerSlide = 2
  } else {
    itemsPerSlide = 1
  }
  */

  return (
    <>
      <section
        id='restaurant-banner'
        className='w-full h-max background-cover'
        style={{
          backgroundImage: "url('/assets/restaurant/restaurant-banner.png')"
        }}
      >
        <div className='px-8 py-4'>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size='2xl'
            style={{ color: '#b9b9b9' }}
          />
          <div className='flex flex-col items-center space-y-2 text-center text-white mb-12'>
            <img
              className='block h-32 rounded-full mx-0 shrink-0'
              src={restaurantInfo?.logoURL ?? ''}
              alt="Restaurant's Logo"
            />
            <h1 className='text-3xl font-semibold'>
              {restaurantInfo?.name ?? ''}
            </h1>
            <p className='text-sm sm:w-1/2'>
              {restaurantInfo?.description ?? ''}
            </p>
          </div>
        </div>
      </section>
      <main>
        <section id='popular-dishes'>
          <h2 className='text-2xl font-semibold'>Los más populares</h2>
          <Carousel
            items={popularProductsCarousel}
            itemsPerSlide={6}
            imageWidth={24}
            imageHeight={24}
            height={48}
          />
        </section>
        <section id='menu'>
          <h2 className='text-2xl font-semibold'>Menú</h2>
          <div className='grid grid-cols-1 gap-x-12 justify-items-start sm:grid-cols-2'>
            {menu?.map((product, index) => {
              return (
                <Detail
                  key={`product-${index}`}
                  imageURL={product?.imageURL ?? ''}
                  title={product?.title ?? ''}
                  subtitle={product?.subtitle ?? ''}
                  description={product?.description ?? ''}
                  button={product?.button ?? ''}
                />
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}
