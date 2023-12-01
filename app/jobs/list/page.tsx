/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'
import React, { useState, useEffect } from 'react'
import Detail from '@/components/common/Detail'
import OfferReceived from '@/components/features/jobs/OffersReceived'
import MainLayout from '@/components/layout/common/MainLayout'
import type { JobOfferInfoProps } from '@/config/interfaces'
import apiRoutes from '@/config/apiRoutes'
import { useUserInfo } from '@/contexts/UserInfoContext'
import { useJobsReceived } from '@/contexts/JobsReceivedContext'

export default function JobsList() {
  // User id
  const { idNumber } = useUserInfo()

  // Jobs received state
  const { jobsReceived, setJobsReceived } = useJobsReceived()

  // Jobs available offers state
  const [jobAvailableOffers, setJobAvailableOffers] = useState<
    JobOfferInfoProps[]
  >([])

  useEffect(() => {
    // Get list of all available jobs
    fetch(apiRoutes.listAllJobs, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (response) => {
        return await response.json()
      })
      .then((data) => {
        setJobAvailableOffers(data)
      })

    // Get list of jobs received
    fetch(`${apiRoutes.recivedOffers}${idNumber}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (response) => {
        return await response.json()
      })
      .then((data) => {
        setJobsReceived(data)
      })
  }, [])

  // Handle remove on job received dismiss
  const handleRemoveJobReceived = async (jobId: number) => {
    console.log('jobId', jobId)
    if (confirm('¿Estás seguro de rechazar esta oferta?')) {
      const response = await fetch(
        `${apiRoutes.recivedOffers}${idNumber}/job/${jobId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (response.status !== 200) {
        alert('Ha ocurrido un error al rechazar la oferta.')
        return
      }

      setJobsReceived(
        jobsReceived.filter((jobReceived) => jobReceived._id !== jobId)
      )
      alert('Se ha notificado al restaurante que has rechazado la oferta.')
    }
  }

  return (
    <MainLayout>
      <main>
        {/* Seccion de ofertas recibidas */}
        <section id='jobsOffers'>
          {jobsReceived.length > 0 ? (
            <h2 className='text-2xl font-semibold'>Ofertas recibidas</h2>
          ) : (
            <h2 className='text-2xl font-semibold text-red-700 mb-4 '>
              No tienes ofertas recibidas
            </h2>
          )}
          {/* Listan ofertas recibidas */}
          {jobsReceived.map((jobReceived, index) => {
            return (
              <OfferReceived
                key={`jobOffer-${index}`}
                imageURL={jobReceived.imageURL}
                title={jobReceived.title}
                subtitle={{
                  text: `Restaurante ${jobReceived.restaurantId}`,
                  iconType: 'location'
                }}
                description={jobReceived.description}
                offerTime={{
                  text: `${jobReceived.offerTime}`,
                  iconType: 'clock'
                }}
                offerSalary={{
                  text: `${jobReceived.offerSalary}`,
                  iconType: 'price'
                }}
                button={{
                  text: 'Aceptar',
                  href: `/jobs/details/${jobReceived._id}`
                }}
                button2={{ text: 'Rechazar' }}
                action2={() => {
                  handleRemoveJobReceived(jobReceived._id)
                }}
              />
            )
          })}
        </section>
        <section id='jobsOffers'>
          <h2 className='text-2xl font-semibold'>Ofertas disponibles</h2>
          {/* Listan ofertas disponibles */}
          {jobAvailableOffers.map((job, index) => {
            return (
              <Detail
                key={`job-${index}`}
                imageURL={job.imageURL}
                title={job.title}
                subtitle={{
                  text: `Restaurante ${job.restaurantId}`,
                  iconType: 'location'
                }}
                description={job.description}
                button={{
                  text: 'Más información',
                  href: `/jobs/details/${job._id}`
                }}
              />
            )
          })}
        </section>
      </main>
    </MainLayout>
  )
}
