import Carousel from '@/components/common/Carousel'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <>
      <main className='flex-1'>
        <section id='recommended-section'>
          <h2>Recomendados para ti</h2>
          <Carousel imageWidth={52} imageHeight={48} />
        </section>
        <section id='near-by-section' className='flex flex-wrap my-8'>
          <h2 className='flex-shrink-0 flex-grow-0 basis-full mb-4'>
            Cerca de ti
          </h2>
          <div className='map w-3/4 '>
            <div className='h-full flex items-center justify-center bg-gray-400 rounded-xl'>
              Mapa
            </div>
          </div>
          <div className='restaurant-info w-1/4 pl-4'>
            <div className=' flex flex-col rounded-xl shadow-lg p-4'>
              <img src='/assets/Restaurant-1.png' alt='Restaurante' />
              <hr className='solid my-4' />
              <h3>Restaurante</h3>
              <p className='my-2'>
                <FontAwesomeIcon icon={faLocationDot} />
                Ubicación
              </p>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                aliquid unde enim assumenda asperiores, iusto possimus
                aspernatur sint velit doloremque adipisci quibusdam eos sequi
                sed voluptates. Voluptatibus eos repellendus doloribus?
              </p>
              <button className='rounded-full bg-orange-600 text-white mt-8'>
                Ver menu
              </button>
            </div>
          </div>
        </section>
        <section id='banner-section'>
          <div className='banner text-center bg-[url("/assets/Banner-Home.png")] bg-no-repeat bg-cover text-white rounded-xl py-8'>
            <h2>Estas Buscando trabajo</h2>
            <h4>
              Unete a nuestra red de trabajo donde podras encontrar la oferta
              perfecta para ti.
            </h4>
            <button className='rounded-full bg-orange-600'>Unete ya</button>
          </div>
        </section>
        <section>
          <h2>Descuentos imperdibles</h2>
          <Carousel imageWidth={52} imageHeight={48} />
        </section>
        <section>
          <h2>Para tus antojos</h2>
          <Carousel imageWidth={52} imageHeight={48} />
        </section>
      </main>
    </>
  )
}
