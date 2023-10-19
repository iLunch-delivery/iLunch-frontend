import type { ProductProps } from '@/config/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoneyCheckDollar,
  faHashtag,
  faPencil,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

function ProductPurchase({ imageURL, name, price, amount }: ProductProps) {
  return (
    <div className='flex justify-between'>
      <div className='py-4 max-w space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        <img
          className='block h-16 rounded-md sm:mx-0 sm:shrink-0'
          src={imageURL}
          alt={`Restaurant Product: ${name}`}
        ></img>
        <div className='space-y-4'>
          <div className='space-y-0.5'>
            <p className='text-lg font-semibold'>{name}</p>
            <div className='flex items-center'>
              <FontAwesomeIcon
                icon={faMoneyCheckDollar}
                style={{ color: '#808080' }}
              />
              <p className='inline px-2 text-xs text-slate-500 font-semibold'>
                COP ${price.toLocaleString('es')}
              </p>
            </div>
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faHashtag} style={{ color: '#808080' }} />
              <p className='inline px-2 text-xs text-slate-500 font-semibold'>
                x{amount} unidades
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex basis-16 items-center justify-around'>
        <button className='hover:scale-125'>
          <FontAwesomeIcon
            icon={faPencil}
            size='lg'
            style={{ color: '#808080' }}
          />
        </button>
        <button className='hover:scale-125'>
          <FontAwesomeIcon
            icon={faXmark}
            size='lg'
            style={{ color: '#808080' }}
          />
        </button>
      </div>
    </div>
  )
}

export default ProductPurchase
