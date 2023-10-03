import Carousel from '@/components/common/Carousel'

export default function Home() {
  return (
    <>
      <main className='flex-1'>
        <section id='recommended-section'>
          <h2>Recomendados para ti</h2>
          <Carousel imageWidth={52} imageHeight={48} />
        </section>
        <section id='near-by-section' className='flex'>
          <h2>Cerca de ti</h2>
          <div className='map w-2/3'>Mapa</div>
          <div className='restaurant-info h-1/3'>Info restaurante</div>
        </section>
        <section id='banner-section'>
          <div className='banner text-center bg-slate-700'>
            <h2>Estas Buscando trabajo</h2>
            <h4>
              Unete a nuestra red de trabajo donde podras encontrar la oferta
              perfecta para ti.
            </h4>
            <button type='button'>Unete ya</button>
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
