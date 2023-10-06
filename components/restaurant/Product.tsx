import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'

function Product() {
  return(
    <div className='py-8 max-w-md space-y-2 md:py-4 md:flex md:items-center md:space-y-0 md:space-x-6'>
      <img className='block h-32 rounded-md md:mx-0 md:shrink-0' src='/assets/restaurant/menu-product-1.png' alt="Restaurant's Product"></img>
      <div className='space-y-4'>
        <div className='space-y-0.5'>
          <h3 className='text-lg text-black font-semibold'>
            Producto X
          </h3>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faMoneyCheckDollar} style={{color: "#b9b9b9",}} />
            <p className='inline px-2 text-xs text-slate-500 font-semibold'>COP $10.000</p>
          </div>
          <p className='text-xs text-slate-500 font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Proin et sem a metus semper egestas eu et massa. 
            Proin vulputate, mauris vitae porttitor auctor.
          </p>
        </div>
        <button className='px-4 py-1 bg-orange-600 text-xs text-white font-semibold rounded-full border border-orange-300 hover:text-black hover:bg-orange-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2'>Añadir al pedido</button>
      </div>
    </div>
  )
}

export default Product