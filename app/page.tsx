import Login from '@/app/login/page'
export default function Home() {
  return (
    <>
      <main className='flex-1'>
        <section id='recommended-section'>
          <h2 className='text-xl font-semibold mb-4'>Recomendados para ti</h2>
          <Carousel items={recommendedCarousel} itemsPerSlide={3} imageHeight={36} height={48} />
        </section>
        <section id='near-by-section' className='flex flex-wrap my-8'>
          <h2 className='flex-shrink-0 flex-grow-0 basis-full mb-4 text-xl font-semibold'>
            Cerca de ti
          </h2>
          <div className='map w-3/4'>
            <div className=' shadow-md h-full flex items-center justify-center bg-gray-400 rounded-xl'>
              Mapa
            </div>
          </div>
          <div className='restaurant-info w-1/4 pl-4'>
            <div className=' flex flex-col rounded-xl shadow-md p-4'>
              <img
                className='rounded-xl'
                src='/assets/Restaurant-1.png'
                alt='Restaurante'
              />
              <hr className='solid my-4' />
              <h3 className='text-lg font-medium'>Restaurante</h3>
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
          <Carousel items={discountsCarousel} itemsPerSlide={3} imageHeight={36} height={48} />
        </section>
        <section id='category-section' className='my-8'>
          <h2 className='text-xl font-semibold mb-4'>Para tus antojos</h2>
          <Carousel
            items={categoryCarousel}
            itemsPerSlide={5}
            imageWidth={25}
            imageHeight={24}
            height={48}
          />
        </section>
      </main>
    </>
  )
}
