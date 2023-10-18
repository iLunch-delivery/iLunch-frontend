import type { DetailPropsOffer, DetailSubtitleProps } from '@/config/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function RestaurantDetails() {
  return(
    <div className="py-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Primera columna*/}
        <div className="grid grid-rows-2 gap-4">
            <div className="p-3 rounded-lg border border-gray-500">
                <h1 className='text-lg font-semibold'>XXX-Restaurante</h1>

            </div>
            
            <div className="p-3 rounded-lg border border-gray-500">
                <h1 className='text-lg font-semibold pb-2'>Horario Laboral</h1>
                <table className="text-md w-full">
                    <tbody>
                        <tr>
                            <td className="align-top w-1/2">Lunes</td>
                            <td className="text-right">08:00 - 17:00</td>
                        </tr>
                        <tr>
                            <td className="align-top ">Martes</td>
                            <td className="text-right">08:00 - 17:00</td>
                        </tr>
                        <tr>
                            <td className="align-top ">Miércoles</td>
                            <td className="text-right">08:00 - 17:00</td>
                        </tr>
                        <tr>
                            <td className="align-top ">Jueves</td>
                            <td className="text-right">08:00 - 17:00</td>
                        </tr>
                        <tr>
                            <td className="align-top ">Viernes</td>
                            <td className="text-right">08:00 - 17:00</td>
                        </tr>
                        <tr>
                            <td className="align-top ">Sábado</td>
                            <td className="text-right">09:00 - 14:00</td>
                        </tr>
                        <tr>
                            <td className="align-top">Domingo</td>
                            <td className="text-right">Cerrado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        {/* Columna 2*/}
        <div className="grid grid-rows-5 gap-4">
            {/*Infor direccion*/}
            <div className="rounded-lg border border-gray-500">
                <div className='p-3'>
                    <h1 className='text-lg font-semibold'>Encuentranos</h1>
                    <p className='text-sm '>Cra x # xxx - xxx local xx</p>
                </div>
            </div>
            {/*Soy el mapa soy el mapa*/}
            <div className="rounded-lg border border-gray-500 bg-cover bg-center row-span-4">
                <div className="h-[400px] bg-cover bg-center" style={{backgroundImage: `url('/assets/map-mockup.png')`}}>
                
                </div>
            </div>
        </div>

        {/* Columna 3*/}
        <div className="overflow-hidden rounded-lg border border-gray-500">
            <div className="p-3">
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
    </div>
  )
}

export default RestaurantDetails