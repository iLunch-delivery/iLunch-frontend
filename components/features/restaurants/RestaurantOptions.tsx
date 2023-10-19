import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faHourglassHalf, faStore } from '@fortawesome/free-solid-svg-icons'
import { type RestaurantCardProps } from '@/config/interfaces'

function RestaurantOptions({ imageURL, name, open, availability, distance }: RestaurantCardProps) {
  let icon, color, status
  switch (availability) {
    case 'disponible':
      icon = faStore
      color = '#7fd912'
      status = 'Local disponible'
      break
    case 'lleno':
      icon = faStore
      color = '#cf071b'
      status = 'Local lleno'
      break
    case 'pronto':
      icon = faHourglassHalf
      color = 'grey'
      status = 'Abre pronto'
      break
    default:
      break
  }

  return (
      <button className='flex justify-between w-full items-center'> {/* Aquí he añadido la clase 'items-center' */}
        <div className='py-4 max-w space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
          <img className='block h-16 rounded-md sm:mx-0 sm:shrink-0' src={imageURL} alt={`Restaurant Product: ${name}`}></img>
          <div className='space-y-5'>
            <div className='space-y-1'>
              <p className='text-lg font'>
                {name}
              </p>
              <div className='flex items-center'>
                <FontAwesomeIcon icon={open ? faCircleCheck : faCircleXmark} style={{ color: open ? '#7fd912' : '#cf071b' }} />
                <p className='inline px-2 text-xs font' style={{ color: open ? '#7fd912' : '#cf071b' }}>{open ? 'Abierto' : 'Cerrado'}</p>
              </div>
              <div className='flex items-center'>
                <FontAwesomeIcon icon={icon} style={{ color }} />
                <p className='inline px-2 text-xs font' style={{ color }}>{status}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex basis-16 items-center justify-end ml-auto'>
          <p className='text-lg font'>
            {distance} km
          </p>
        </div>
      </button>
  )
}

export default RestaurantOptions