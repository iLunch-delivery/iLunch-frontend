'use client'
import React, { useEffect } from 'react'
import Carousel from '@/components/common/Carousel'
import {
  categoryCarousel,
  discountsCarousel,
  recommendedCarousel
} from '@/config/data/carousel'
import { useUserInfo } from '@/contexts/UserInfoContext'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import MainLayout from '@/components/layout/common/MainLayout'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Home() {
  const { isLogged } = useUserInfo()
  const router = useRouter()

  let cardsPerSlide = 3
  let categoriesPerSlide = 3

  const is2xl = useMediaQuery('2xl')
  const isLaptop = useMediaQuery('lg')
  const isTablet = useMediaQuery('md')
  const isLargeMobile = useMediaQuery('sm')

  if (is2xl) {
    cardsPerSlide = 3
    categoriesPerSlide = 8
  } else if (isLaptop) {
    cardsPerSlide = 3
    categoriesPerSlide = 4
  } else if (isTablet) {
    cardsPerSlide = 2
    categoriesPerSlide = 3
  } else if (isLargeMobile) {
    cardsPerSlide = 1
    categoriesPerSlide = 2
  } else {
    cardsPerSlide = 1
    categoriesPerSlide = 1
  }

  useEffect(() => {
    if (!isLogged) {
      router.push('/login')
    }
  }, [])

  return (
    <MainLayout>
      <main className='flex-1'>
        <section id='recommended-section'>
          <h2 className='text-xl font-semibold mb-4'>Recomendados para ti</h2>
          <Carousel
            items={recommendedCarousel}
            itemsPerSlide={cardsPerSlide}
            imageHeight={36}
            height={48}
          />
        </section>
        <section
          id='near-by-section'
          className='my-8 md:block lg:flex flex-wrap'
        >
          <h2 className='flex-shrink-0 flex-grow-0 basis-full mb-4 text-xl font-semibold'>
            Cerca de ti
          </h2>
          <div className='h-64 lg:w-3/4 lg:h-auto'>
            <div className=' shadow-md h-full flex items-center justify-center bg-gray-400 rounded-xl'>
              Mapa
            </div>
          </div>
          <div className='restaurant-info mt-4 lg:w-1/4 lg:m-0 lg:pl-4'>
            <div className=' flex flex-col rounded-xl shadow-md p-4 h-full'>
              <div className='md:flex items-center'>
                <img
                  className='rounded-xl h-12 w-12'
                  src='/assets/restaurant/logos/restaurant-logo-1.png'
                  alt='Restaurante'
                />
                <hr className='solid my-4 md:hidden' />
                <div className='md:mx-2'>
                  <h3 className='text-lg font-medium'>Restaurante 1</h3>
                  <p className='lg:my-2'>
                    <FontAwesomeIcon icon={faLocationDot} className='mr-1' />
                    Ubicación
                  </p>
                </div>
              </div>
              <hr className='solid my-4 lg:hidden' />
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                aliquid unde enim assumenda asperiores, iusto possimus
                aspernatur sint velit doloremque adipisci quibusdam eos sequi
                sed voluptates. Voluptatibus eos repellendus doloribus?
              </p>
              <Link
                className='rounded-full bg-[#FB5A3E] text-white mt-8 text-lg py-2 px-9 w-fit mx-auto'
                href={'/restaurant/1'}
              >
                Explorar menu
              </Link>
            </div>
          </div>
        </section>
        <section id='banner-section' className='my-8'>
          <div className='banner text-center bg-[url("/assets/Banner-Home.png")] bg-no-repeat bg-cover text-white rounded-xl py-8 shadow-md '>
            <h2 className='text-3xl font-semibold'>¿Estas Buscando trabajo?</h2>
            <h4 className='text-lg mt-2'>
              Unete a nuestra red de trabajo donde podras encontrar la oferta
              perfecta para ti.
            </h4>
            <div className='mt-4'>
              <Link
                className='rounded-full bg-[#FB5A3E] text-lg py-2 px-9 w-fit'
                href='/register/candidate'
              >
                Unete ya
              </Link>
            </div>
          </div>
        </section>
        <section id='discount-section' className='my-8'>
          <h2 className='text-xl font-semibold mb-4'>Descuentos imperdibles</h2>
          <Carousel
            items={discountsCarousel}
            itemsPerSlide={cardsPerSlide}
            imageHeight={36}
            height={48}
          />
        </section>
        <section id='category-section' className='my-8'>
          <h2 className='text-xl font-semibold mb-4'>Para tus antojos</h2>
          <Carousel
            items={categoryCarousel}
            itemsPerSlide={categoriesPerSlide}
            imageWidth={24}
            imageHeight={24}
            height={48}
          />
        </section>
      </main>
    </MainLayout>
  )
}
