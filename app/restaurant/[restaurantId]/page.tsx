'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Carousel from '@/components/common/Carousel'
import { popularProductsCarousel } from '@/config/data/carousel'

import Detail from '@/components/common/Detail'
import { useEffect, useState } from 'react'
import type { RestaurantInfoProps, ProductInfoProps } from '@/config/interfaces'
import RestaurantDetails from '@/components/features/restaurants/RestaurantDetails'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import MainLayout from '@/components/layout/common/MainLayout'
import Link from 'next/link'
import apiRoutes from '@/config/apiRoutes'
import { useUserInfo } from '@/contexts/UserInfoContext'

export default function Restaurant({
  params
}: {
  params: { restaurantId: Number }
}) {
  // User id
  const { idNumber } = useUserInfo()
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfoProps>()
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    fetch(`${apiRoutes.getRestaurant}${params.restaurantId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(async (response) => {
      const responseJSON = await response.json()
      if (response.status != 200) {
        setErrorMessage(responseJSON.message)
      }
      return responseJSON
    })
    .then((data) => {
      setRestaurantInfo(data)
    })
    .catch((error) => {
      alert('Ha habido un error. Por favor intenta más tarde.\n' + error)
    })
  }, [])

  const handleAddProduct = async (product: ProductInfoProps) => {
    const response = await fetch(`${apiRoutes.getShoppingCart}${idNumber}/${apiRoutes.addShoppingCartProduct}/${product._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        restaurantId: Number(params.restaurantId), 
        ...product
      })
    })

    if (response.status == 200) {
      alert('Producto agregado al carrito')
    } else {
      alert('Ha habido un error. Por favor intenta más tarde.')
    }
  }

  let itemsPerSlide = 5

  const is2xl = useMediaQuery('2xl')
  const isLaptop = useMediaQuery('lg')
  const isTablet = useMediaQuery('md')
  const isLargeMobile = useMediaQuery('sm')

  if (is2xl) {
    itemsPerSlide = 5
  } else if (isLaptop) {
    itemsPerSlide = 4
  } else if (isTablet) {
    itemsPerSlide = 3
  } else if (isLargeMobile) {
    itemsPerSlide = 2
  } else {
    itemsPerSlide = 1
  }

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
      <section
        id='restaurant-banner'
        className='w-full h-max bg-no-repeat bg-fixed bg-cover'
        style={{
          backgroundImage: "url('/assets/restaurant/restaurant-banner.png')"
        }}
      >
        <div className='px-8 py-4'>
          <Link href='/'>
            <FontAwesomeIcon
              icon={faChevronLeft}
              size='2xl'
              style={{ color: '#b9b9b9' }}
            />
          </Link>
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
            itemsPerSlide={itemsPerSlide}
            imageWidth={24}
            imageHeight={24}
            height={48}
          />
        </section>
        <section id='menu'>
          <h2 className='text-2xl font-semibold'>Menú</h2>
          <div className='grid grid-cols-1 gap-x-12 justify-items-start sm:grid-cols-2'>
            {restaurantInfo?.menu?.map((product, index) => {
              return (
                <Detail
                  key={`dish-${product._id}`}
                  imageURL={product?.imageURL ?? ''}
                  title={product?.title ?? ''}
                  subtitle={{
                    text: `COP $${product?.price}` ?? '',
                    iconType: 'price'
                  }}
                  description={product?.description ?? ''}
                  button={{
                    text: 'Añadir al pedido',
                  }}
                  price={product?.price ?? 0}
                  action={() => {
                    handleAddProduct(product)
                  }}
                />
              )
            })}
          </div>
        </section>
        <section>
          <RestaurantDetails restaurantInfo={restaurantInfo} />
        </section>
      </main>
    </MainLayout>
  )
}
