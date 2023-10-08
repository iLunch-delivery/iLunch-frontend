import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Carousel from '@/components/common/Carousel'
import {
  popularProductsCarousel
} from '@/config/data/carousel'

import Detail from '@/components/common/Detail'
import {
  menu
} from '@/config/data/restaurants'

export default function Restaurant({ params }: { params: { restaurantId: string } }) {
  return (
    <>
      <section id='restaurant-banner' className='w-full h-max background-cover' style={{backgroundImage: `url('/assets/restaurant/restaurant-banner.png')`}}>
        <div className='px-8 py-4'>
          <FontAwesomeIcon icon={faChevronLeft} size='2xl' style={{color: '#b9b9b9',}} />
          <div className='flex flex-col items-center space-y-2 text-center text-white mb-12'>
            <img className='block h-32 rounded-full mx-0 shrink-0' src='/assets/restaurant/restaurant-logo.png' alt="Restaurant's Logo" />
            <h1 className='text-3xl font-semibold'>Restaurante {params.restaurantId}</h1>
            <p className='text-sm sm:w-1/2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Proin et sem a metus semper egestas eu et massa. 
              Proin vulputate, mauris vitae porttitor auctor.
            </p>
          </div>
        </div>
      </section>
      <main>
        <section id='popular-dishes'>
          <h2 className='text-2xl font-semibold'>Los más populares</h2>
          <Carousel
            images={popularProductsCarousel}
            imageWidth={24}
            imageHeight={24}
            height={48}
          />
        </section>
        <section id='menu'>
          <h2 className='text-2xl font-semibold'>Menú</h2>
          <div className='grid grid-cols-2 gap-x-12 justify-items-start'>
            {menu.map((product, index) => {
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
          </div>
        </section>
      </main>
    </>
  )
}