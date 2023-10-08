import Detail from '@/components/common/Detail'
import OfferReceived from '@/components/features/jobs/OffersReceived'

import {
  jobAvailableOffers,
  jobReceivedOffers
} from '@/config/data/jobs'

export default function JobsList() {
  return (
    <>
      <main>
      <section id='jobsOffers'>
          <h2 className='text-2xl font-semibold'>Ofertas recibidas</h2>
            {jobReceivedOffers.map((product, index) => {
              return (
                <OfferReceived
                  key={`product-${index}`}
                  imageURL={product.imageURL}
                  title={product.title}
                  subtitle={product.subtitle}
                  description={product.description}
                  offerTime={product.offerTime}
                  offerSalary={product.offerSalary}
                  button={product.button}
                  button2={product.button2}
                />
              )
            })}
        </section>
        <section id='jobsOffers'>
          <h2 className='text-2xl font-semibold'>Ofertas disponibles</h2>
            {jobAvailableOffers.map((jobs, index) => {
              return (
                <Detail
                  key={`product-${index}`}
                  imageURL={jobs.imageURL}
                  title={jobs.title}
                  subtitle={jobs.subtitle}
                  description={jobs.description}
                  button={jobs.button}
                />
              )
            })}
        </section>
      </main>
    </>
  )
}