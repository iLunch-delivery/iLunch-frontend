import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'



import Detail from '@/components/common/Detail'
import OfferReceibed from '@/components/jobs/OffersReceived'

import {
  JobOffers
} from '@/config/data/jobs'

export default function JobsList() {
  return (
    <>
      <main>
      <section id='jobsOffers'>
          <h2 className='text-2xl font-semibold'>Ofertas recibidas</h2>
            {JobOffers.map((product, index) => {
              return (
                <OfferReceibed
                  key={`product-${index}`}
                  imageURL={product.imageURL}
                  title={product.title}
                  subtitle={product.subtitle}
                  description={product.description}
                  button={product.button}
                />
              )
            })}
        </section>
        <section id='jobsOffers'>
          <h2 className='text-2xl font-semibold'>Ofertas disponibles</h2>
            {JobOffers.map((product, index) => {
              return (
                <Detail
                  key={`product-${index}`}
                  imageURL={product.imageURL}
                  title={product.title}
                  subtitle={product.subtitle}
                  description={product.description}
                  button={product.button}
                />
              )
            })}
        </section>
      </main>
    </>
  )
}