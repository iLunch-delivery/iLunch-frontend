import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'



import Detail from '@/components/common/Detail'
import OfferReceibed from '@/components/jobs/OffersReceived'

import {
  JobOffers
} from '@/config/data/jobs'

import {
  Offers
} from '@/config/data/offers'

export default function JobsList() {
  return (
    <>
      <main>
      <section id='jobsOffers'>
          <h2 className='text-2xl font-semibold'>Ofertas recibidas</h2>
            {Offers.map((product, index) => {
              return (
                <OfferReceibed
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