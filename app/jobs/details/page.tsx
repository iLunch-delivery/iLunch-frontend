import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckDollar, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'

export default function JobOffer({ params }: { params: { restaurantId: string } }) {
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
            <div className='p-1'>
              <FontAwesomeIcon icon={faClock} style={{color: "#b9b9b9",}} /><span className='p-1 me-4'>Tiempo completo</span>
              <FontAwesomeIcon icon={faMoneyCheckDollar} style={{color: "#b9b9b9",}} /><span className='p-1 me-4'>1.500.000</span>
            </div>
            <div className='p-5'>
              <button className='me-2 px-4 py-1 bg-green-500 text-xs text-white rounded-full border border-green-500 hover:bg-green-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2'>Aceptar</button>
              <button className='me-2 px-4 py-1 bg-red-600 text-xs text-white rounded-full border border-red-600 hover:bg-red-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2'>Rechazar</button>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section>
          <h1 className='text-xl font-semibold p-2'>¿Tienes alguna pregunta?</h1>
            <textarea className='w-full rounded-lg h-full resize-none' placeholder="Cuentanos tus dudas y nos pondremos en contacto contigo pronto"></textarea>
        </section>
        <section className="p-5 grid grid-cols-1 sm:grid-cols-3">
        <div className="h-full pr-2">
          
          <div className="h-1/2 pl-3 pt-2 pb-2 rounded-lg border border-gray-500">
            <h1 className='text-lg font-semibold pb-2'>Horario Laboral</h1>
            <table className="text-md p-2  w-full">
              <tbody>
                <tr>
                  <td className="align-top w-1/2">Lunes</td>
                  <td>08:00 - 17:00</td>
                </tr>
                <tr>
                  <td className="align-top ">Martes</td>
                  <td>08:00 - 17:00</td>
                </tr>
                <tr>
                  <td className="align-top ">Miércoles</td>
                  <td>08:00 - 17:00</td>
                </tr>
                <tr>
                  <td className="align-top ">Jueves</td>
                  <td>08:00 - 17:00</td>
                </tr>
                <tr>
                  <td className="align-top ">Viernes</td>
                  <td>08:00 - 17:00</td>
                </tr>
                <tr>
                  <td className="align-top ">Sábado</td>
                  <td>09:00 - 14:00</td>
                </tr>
                <tr>
                  <td className="align-top ">Domingo</td>
                  <td>Cerrado</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="h-1/2 p-2 pt-2 rounded-lg border border-gray-500">
            <h1 className='text-lg font-semibold pb-2'>Horario Laboral</h1>
            <table className="text-md p-2  w-full">
              <tbody>
                <tr>
                  <td className="align-top w-1/2">Lunes</td>
                  <td>08:00 - 17:00</td>
                </tr>
                <tr>
                  <td className="align-top ">Martes</td>
                  <td>08:00 - 17:00</td>
                </tr>
                <tr>
                  <td className="align-top ">Miércoles</td>
                  <td>08:00 - 17:00</td>
                </tr>
                <tr>
                  <td className="align-top ">Jueves</td>
                  <td>08:00 - 17:00</td>
                </tr>
                <tr>
                  <td className="align-top ">Viernes</td>
                  <td>08:00 - 17:00</td>
                </tr>
                <tr>
                  <td className="align-top ">Sábado</td>
                  <td>09:00 - 14:00</td>
                </tr>
                <tr>
                  <td className="align-top ">Domingo</td>
                  <td>Cerrado</td>
                </tr>
              </tbody>
            </table>
          </div>


        </div>



          <div>
            <div className="rounded-lg border border-gray-500">
              <div className='p-2'>
                <h1 className='text-lg font-semibold'>Encuentranos</h1>
                <p className='text-sm '>Cra x # xxx - xxx local xx</p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-500 bg-cover bg-center mt-2">
              <div className="h-[400px] bg-cover bg-center mt-2" style={{backgroundImage: `url('/assets/map-mockup.png')`}}>
              
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-500 ml-2 h-full w-full">
            <div className="p-4">
              <h1 className='text-lg font-semibold pb-2'>Sobre XXX-Restaurante</h1>
              <table className="text-md w-full"> 
                <tbody>
                  <tr>
                    <td className="align-top w-1/3">Info 1</td>
                    <td>xxxxx xxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxx xx</td>
                  </tr>
                  <tr>
                    <td className="align-top">Info 1</td>
                    <td>xxxxxxxxx xxxxxxx xxxxxx xxxxxx xxxxx</td>
                  </tr>
                  <tr>
                    <td className="align-top">Info 1</td>
                    <td>xxxxxxxxxxxx xxxx xxxxxxxx xxxxxxxx xxxxxxxxxx xxxxxxxxxxxxxx</td>
                  </tr>
                  <tr>
                    <td className="align-top">Info 1</td>
                    <td>xxxxxxxxxxxx xxxx xxxxxxxx xxxxxxxx xxxxxxxxxx xxxxxxxxxxxxxx</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}