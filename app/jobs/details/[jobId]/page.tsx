'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoneyCheckDollar,
  faClock,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'
import RestaurantDetails from '@/components/features/restaurants/RestaurantDetails'
import { restaurants } from '@/config/data/restaurants'
import { jobReceivedOffers } from '@/config/data/jobs'
import type { RestaurantInfoProps, jobInfoProps } from '@/config/interfaces'
import MainLayout from '@/components/layout/common/MainLayout'
import Link from 'next/link'

export default function JobOffer({ params }: { params: { jobId: string } }) {
  const [jobInfo, setJobInfo] = useState<jobInfoProps>()
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfoProps>()

  useEffect(() => {
    const jobInfo = jobReceivedOffers.find((job) => {
      if (job.id === Number(params.jobId)) {
        return job
      }
    })
    setJobInfo(jobInfo)
    const restaurantInfo = restaurants.find((restaurant) => {
      if (restaurant.id === Number(jobInfo?.restaurantId)) {
        return restaurant
      }
    })
    setRestaurantInfo(restaurantInfo)
  }, [])

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
          <Link href='/jobs/list'>
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
            <h1 className='text-3xl font-semibold'>{jobInfo?.title ?? ''}</h1>
            <p className='text-sm sm:w-1/2'>{jobInfo?.description ?? ''}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              <div>
                <FontAwesomeIcon icon={faClock} style={{ color: '#b9b9b9' }} />
                <span className='p-1 me-4'>{jobInfo?.offerTime.text}</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faMoneyCheckDollar}
                  style={{ color: '#b9b9b9' }}
                />
                <span className='p-1 me-4'>{jobInfo?.offerSalary.text}</span>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <button className='px-4 py-1 bg-green-500 text-xs text-white rounded-full border border-green-500 hover:bg-green-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2'>
                Aceptar
              </button>
              <button className='px-4 py-1 bg-red-600 text-xs text-white rounded-full border border-red-600 hover:bg-red-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2'>
                Rechazar
              </button>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section>
          <h1 className='text-xl font-semibold p-2'>
            ¿Tienes alguna pregunta?
          </h1>
          <textarea
            className='w-full rounded-lg h-full'
            placeholder='Cuentanos tus dudas y nos pondremos en contacto contigo pronto'
          ></textarea>
          <div className='flex flex-row justify-end'>
            <button className='px-4 py-1 bg-orange-600 text-xs text-white rounded-full border border-orange-600 hover:bg-orange-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2'>
              Enviar
            </button>
          </div>
        </section>
        <section>
          <RestaurantDetails restaurantInfo={restaurantInfo} />
        </section>
      </main>
    </MainLayout>
  )
}
