'use client'

import Detail from '@/components/common/Detail'
import OfferReceived from '@/components/features/jobs/OffersReceived'
import MainLayout from '@/components/layout/common/MainLayout'
import { useJobsReceived } from '@/contexts/JobsReceivedContext'
import { jobAvailableOffers } from '@/config/data/jobs'
import { JobReceivedInfoProps } from '@/config/interfaces'

export default function JobsList() {
  // Jobs received state
  const { jobsReceived, setJobsReceived } = useJobsReceived()

  // Handle remove on job received dismiss
  const handleRemoveJobReceived = (jobId: number) => {
    if(confirm('¿Estás seguro de rechazar esta oferta?')) {
      setJobsReceived(jobsReceived.filter((jobReceived) => jobReceived.id !== jobId))
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
            <h2 className='text-2xl font-semibold text-red-700 mb-4 '>No tienes ofertas recibidas</h2>
          )}
          {/* Listan ofertas recibidas */}
          {jobsReceived.map((jobReceived, index) => {
            return (
              <OfferReceived
                key={`jobOffer-${index}`}
                imageURL={jobReceived.imageURL}
                title={jobReceived.title}
                subtitle={jobReceived.subtitle}
                description={jobReceived.description}
                offerTime={jobReceived.offerTime}
                offerSalary={jobReceived.offerSalary}
                button={jobReceived.button}
                button2={jobReceived.button2}
                action2={() => {
                  handleRemoveJobReceived(jobReceived.id)
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
                subtitle={job.subtitle}
                description={job.description}
                button={job.button}
              />
            )
          })}
        </section>
      </main>
    </MainLayout>
  )
}
