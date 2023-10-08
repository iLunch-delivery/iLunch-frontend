import type { DetailProps, DetailSubtitleProps } from '@/config/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Offer({ imageURL, title, subtitle, description, button }: DetailProps) {
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
        <p className='text-gray-200 inline px-2 text-xs text-slate-500 font-semibold'>{text}</p>
      </div>
    )
  }

  return(
    <div className='drop-shadow-lg py-4 max-w-7xl'>
      <div className='rounded-lg py-4 px-5 max-w space-y-2 md:flex md:items-center ms:space-y-0 space-x-6' style={{backgroundImage: `url('/assets/restaurant/restaurant-banner.png')`}}>
          <img className='items-center block h-28 rounded-full ms:mx-0 ms:shrink-0' src={imageURL} alt={`Offer: ${title}`}></img>
        <div className='space-y-2'>
          <div className='space-y-0.5'>
            <h3 className='text-lg text-white font-semibold'>
              {title}
            </h3>
            {subtitle != null ? <Subtitle text={subtitle.text} iconType={subtitle.iconType} /> : null}
            <p className='text-xs text-white text-slate-500 font-normal'>
              {description}
            </p>
          </div>
          <div class="grid grid-cols-5  place-content-start">
            {subtitle != null ? <Subtitle text={subtitle.text} iconType={subtitle.iconType} /> : null}
            {subtitle != null ? <Subtitle text={subtitle.text} iconType={subtitle.iconType} /> : null}
          </div>
          
          {button != null ? <button className='me-2 px-4 py-1 bg-green-500 text-xs text-white rounded-full border border-green-500 hover:bg-green-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2'>{button.text}</button> : null }
          {button != null ? <button className='me-2 px-4 py-1 bg-red-600 text-xs text-white rounded-full border border-red-600 hover:bg-red-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2'>{button.text}</button> : null }
        </div>
      </div>
    </div>
  )
}

export default Offer