'use client'
import React from 'react'
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

export default function Home() {
  const { isLogged } = useUserInfo()

  // !isLogged && useRouter().push('/login')

  return (
    <>
      <main className='flex-1'>
        <section id='recommended-section'>
          <h2 className='text-xl font-semibold mb-4'>Recomendados para ti</h2>
          <Carousel
            items={recommendedCarousel}
            itemsPerSlide={3}
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
                  <h3 className='text-lg font-medium'>Restaurante</h3>
                  <p className='lg:my-2'>
                    <FontAwesomeIcon icon={faLocationDot} />
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
              <button className='rounded-full bg-[#FB5A3E] text-white mt-8 text-lg py-2 px-9 w-fit mx-auto'>
                Explorar menu
              </button>
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
            <button className='rounded-full bg-[#FB5A3E] mt-4 text-lg py-2 px-9 w-fit'>
              Unete ya
            </button>
          </div>
        </section>
        <section id='discount-section' className='my-8'>
          <h2 className='text-xl font-semibold mb-4'>Descuentos imperdibles</h2>
          <Carousel
            items={discountsCarousel}
            itemsPerSlide={3}
            imageHeight={36}
            height={48}
          />
        </section>
        <section id='category-section' className='my-8'>
          <h2 className='text-xl font-semibold mb-4'>Para tus antojos</h2>
          <Carousel
            items={categoryCarousel}
            itemsPerSlide={4}
            imageWidth={25}
            imageHeight={24}
            height={48}
          />
        </section>
      </main>
    </>
  )
}
