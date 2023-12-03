/* eslint-disable @typescript-eslint/no-floating-promises */
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
import type { RestaurantInfoProps, JobInfoProps } from '@/config/interfaces'
import MainLayout from '@/components/layout/common/MainLayout'
import Link from 'next/link'
import apiRoutes from '@/config/apiRoutes'

export default function JobOffer({ params }: { params: { jobId: string } }) {
  const [jobInfo, setJobInfo] = useState<JobInfoProps>()
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfoProps>()

  useEffect(() => {
    fetch(`${apiRoutes.getJob}${params.jobId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (response) => {
        return await response.json()
      })
      .then((data) => {
        setJobInfo(data)
      })
  }, [])

  useEffect(() => {
    if (jobInfo !== null) {
      fetch(`${apiRoutes.getRestaurant}${jobInfo?.restaurantId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(async (response) => {
          return await response.json()
        })
        .then((data) => {
          setRestaurantInfo(data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [jobInfo])

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
          {/* Info de la oferta */}
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
                <span className='p-1 me-4'>{jobInfo?.offerTime}</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faMoneyCheckDollar}
                  style={{ color: '#b9b9b9' }}
                />
                <span className='p-1 me-4'>{jobInfo?.offerSalary}</span>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <button
                className='px-4 py-1 bg-green-500 text-xs text-white rounded-full border border-green-500 hover:bg-green-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2'
                onClick={() => {
                  alert(
                    'Se ha notificado al restaurante que has aceptado la oferta.\nEspera a ser contactado de vuelta por el restaurante.'
                  )
                }}
              >
                Aceptar
              </button>
              <button
                className='px-4 py-1 bg-red-600 text-xs text-white rounded-full border border-red-600 hover:bg-red-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2'
                onClick={() => {
                  alert(
                    'Se ha notificado al restaurante que has rechazado la oferta.'
                  )
                }}
              >
                Rechazar
              </button>
            </div>
          </div>
        </div>
      </section>
      <main>
        {/* Recuadro de dudas */}
        <section>
          <h1 className='text-xl font-semibold p-2'>
            ¿Tienes alguna pregunta?
          </h1>
          <textarea
            className='w-full rounded-lg h-full'
            placeholder='Cuentanos tus dudas y nos pondremos en contacto contigo pronto'
          ></textarea>
          <div className='flex flex-row justify-end'>
            <button
              className='px-4 py-1 bg-orange-600 text-xs text-white rounded-full border border-orange-600 hover:bg-orange-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2'
              onClick={() => {
                alert('Tu pregunta ha sido enviada al restaurante.')
              }}
            >
              Enviar
            </button>
          </div>
        </section>
        <section>
          {/* Traemos componente de la info de los restaurantes */}
          <RestaurantDetails restaurantInfo={restaurantInfo} />
        </section>
      </main>
    </MainLayout>
  )
}
