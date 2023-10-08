import SelectOption from '@/components/common/SelectOption'
import {
  billingOptions
} from '@/config/data/restaurants'

function BillingDetails() {
  return (
    <div className='my-4 space-y-6'>
      <div className='space-y-2'>
        <h3 className='text-md font-bold'>Resumen de precios</h3>
        <hr className='border-gray-400'></hr>
        <ul className='text-sm'>
          <li className='flex justify-between'>
            <p>Costo total de platillos</p>
            <p>$ XXX.XXX</p>
          </li>
          <li className='flex justify-between'>
            <p>Costo de domicilio</p>
            <p>$ XXX.XXX</p>
          </li>
          <li className='flex justify-between'>
            <p>Tarifa de plataforma</p>
            <p>$ XXX.XXX</p>
          </li>
        </ul>
        <hr className='border-gray-400'></hr>
        <div className='flex justify-between text-sm font-semibold'>
          <p>Total a pagar</p>
          <p>COP $ XXX.XXX</p>
        </div>
      </div>
      <div className='space-y-2'>
        <h3 className='text-md font-bold'>Información de contacto</h3>
        <table className='w-full text-sm space-y-1'>
          <tr className='flex text-left'>
            <th className='w-1/4'>Nombre:</th>
            <td>Fulanito de tal</td>
          </tr>
          <tr className='flex text-left'>
            <th className='w-1/4'>Correo:</th>
            <td>fulanitodetal@gmail.com</td>
          </tr>
          <tr className='flex text-left'>
            <th className='w-1/4'>Celular:</th>
            <td>+57 3XX-XXX-XXXX</td>
          </tr>
          <tr className='flex text-left'>
            <th className='w-1/4'>Dirección:</th>
            <td>
              <input id='address' name='address'
                placeholder='Por favor especifica tu dirección'
                size={30} 
                className='border-b'>
              </input>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <h3 className='text-md font-bold'>Forma de pago</h3>
        <div className='py-4 flex justify-evenly items-center'>
        {billingOptions.map((option, index) => {
          return (
            <SelectOption
              key={`receive_option-${index}`}
              imageURL={option.imageURL}
              name={option.name}
            />
          )
        })}
        </div>
        <p className='text-md font-bold text-center'>Total a pagar: COP $ XXX.XXX</p>
      </div>
      <div className='flex justify-center'>
        <button className='px-4 py-1 w-1/2 bg-lime-500 text-md text-white font-semibold rounded-full hover:text-black hover:bg-lime-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2'>
          Comprar
        </button>
      </div>
    </div>
  )
}

export default BillingDetails