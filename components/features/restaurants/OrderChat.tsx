import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faCamera, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function OrderChat() {
  return(
    <div id='orderChat' className='shadow-md shadow-black rounded-3xl'>
      <div id='chatHeader' className='bg-blue-600 h-16 rounded-t-3xl flex justify-between px-5 py-2 '>
        <div className='flex items-center gap-2'>
          <img className='block h-8' src='/assets/restaurant/order_status/user-avatar.png' alt={`User Avatar`} />
          <div className='flex flex-col'>
            <p className='text-sm text-slate-200 font-medium'>Restaurante 1</p>
            <p className='text-sm text-lime-500 font-medium'>Online</p>
          </div>
        </div>
        <button>
          <FontAwesomeIcon icon={faEllipsisVertical} className='text-white h-6' />
        </button>
      </div>
      <div id='chatContent' className='px-4 py-4'>
        <div className='flex flex-col gap-1 justify-between items-center py-16'>
          <img className='block h-24' src='/assets/restaurant/order_status/user-avatar.png' alt={`User Avatar`} />
          <div className='text-center'>
            <p className='text-lg text-slate-900 font-medium'>Restaurante 1</p>
            <p className='text-sm text-gray-500'>
              Aún no hay mensajes
              <br/>
              ¡Anímate a enviar el primero!
            </p>
          </div>
        </div>
        <div className='border border-gray-400 shadow-md rounded-s-full rounded-e-full flex justify-between items-end px-4 py-2 '>
          <div className='flex justify-between items-center gap-2'>
            <button className='h-8'>
              <FontAwesomeIcon icon={faCamera} className='bg-blue-600 text-white rounded-full p-2' />
            </button>
            <input placeholder='Escribe un mensaje' className='placeholder:text-gray-500 outline-0' />
          </div>
          <button className='h-8'>
            <FontAwesomeIcon icon={faPaperPlane} className='text-gray-500' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderChat