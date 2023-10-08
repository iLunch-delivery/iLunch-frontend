import type { DetailProps, DetailSubtitleProps } from '@/config/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Product({ imageURL, title, subtitle, description, button }: DetailProps) {
  function Subtitle({ text, iconType }: DetailSubtitleProps) {
    let Icon = <></>
    
    if (iconType === "location") {
      Icon = <FontAwesomeIcon icon={faLocationDot} style={{color: "#b9b9b9",}} />
    } 
    else if (iconType === "price") {
      Icon = <FontAwesomeIcon icon={faMoneyCheckDollar} style={{color: "#b9b9b9",}} />
    }

    return (
      <div className='flex items-center'>
        {iconType != null ? Icon : null}
        <p className='inline px-2 text-xs text-slate-500 font-semibold'>{text}</p>
      </div>
    )
  }

  return(
    <div className='py-8 max-w space-y-2 md:py-4 md:flex md:items-center md:space-y-0 md:space-x-6'>
      <img className='block h-32 rounded-md md:mx-0 md:shrink-0' src={imageURL} alt={`Restaurant Product: ${title}`}></img>
      <div className='space-y-4'>
        <div className='space-y-0.5'>
          <h3 className='text-lg text-black font-semibold'>
            {title}
          </h3>
          {subtitle != null ? <Subtitle text={subtitle.text} iconType={"price"} /> : null}
          <p className='text-xs text-slate-500 font-normal'>
            {description}
          </p>
        </div>
        {button != null ? <button className='px-4 py-1 bg-orange-600 text-xs text-white font-semibold rounded-full border border-orange-300 hover:text-black hover:bg-orange-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2'>{button.text}</button> : null }
      </div>
    </div>
  )
}

export default Product