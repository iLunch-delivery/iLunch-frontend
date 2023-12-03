'use client'

import type { JobOfferProps, DetailSubtitleProps } from '@/config/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoneyCheckDollar,
  faLocationDot,
  faClock
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function Offer({
  imageURL,
  title,
  subtitle,
  description,
  offerTime,
  offerSalary,
  button,
  button2,
  action1,
  action2
}: JobOfferProps) {
  /* Esto es para variar el icono segun el tipo necesario */

  function Subtitle({ text, iconType }: DetailSubtitleProps) {
    let Icon = <></>

    if (iconType === 'location') {
      Icon = (
        <FontAwesomeIcon icon={faLocationDot} style={{ color: '#b9b9b9' }} />
      )
    } else if (iconType === 'price') {
      Icon = (
        <FontAwesomeIcon
          icon={faMoneyCheckDollar}
          style={{ color: '#b9b9b9' }}
        />
      )
    } else if (iconType === 'clock') {
      Icon = <FontAwesomeIcon icon={faClock} style={{ color: '#b9b9b9' }} />
    }

    return (
      <div className='flex items-center m-1'>
        {iconType != null ? Icon : null}
        <p className='text-gray-200 inline px-2 text-xs font-semibold'>
          {text}
        </p>
      </div>
    )
  }

  return (
    <div className='drop-shadow-lg py-4'>
      {/* Tarjeta de la oferta recibida */}
      <div
        className='flex flex-col rounded-lg py-4 px-5 space-y-2 sm:flex-row sm:items-center sm:space-y-0 space-x-6'
        style={{
          backgroundImage: "url('/assets/restaurant/restaurant-banner.png')"
        }}
      >
        <img
          className='block h-28 rounded-full mx-auto sm:mx-0 sm:shrink-0'
          src={imageURL}
          alt={`Offer: ${title}`}
        ></img>
        <div className='space-y-2'>
          <div className='space-y-0.5'>
            {/* Titulo de la oferta */}
            <h3 className='text-lg text-white font-semibold'>{title}</h3>
            {/* Nombre del restaurante que da la oferta */}
            {subtitle != null ? (
              <Subtitle text={subtitle.text} iconType={subtitle.iconType} />
            ) : null}
            {/* Descripcion de la oferta */}
            <p className='text-xs text-white font-normal'>{description}</p>
          </div>
          {/* Informacion de pago y tiempo de la oferta */}
          <div className='grid grid-cols-1 md:grid-cols-3 max-w-sm'>
            {offerTime != null ? (
              <Subtitle text={offerTime.text} iconType={offerTime.iconType} />
            ) : null}
            {offerSalary != null ? (
              <Subtitle
                text={offerSalary.text}
                iconType={offerSalary.iconType}
              />
            ) : null}
          </div>
          <div className='flex gap-2 w-min'>
            {/* Boton aceptar oferta */}
            {button != null ? (
              button.href != null ? (
                <Link
                  className='basis-1/2 px-4 py-1 bg-green-500 text-xs text-center text-white rounded-full border border-green-500 hover:bg-green-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2'
                  href={button.href}
                >
                  {button.text}
                </Link>
              ) : (
                <button
                  className='basis-1/2 px-4 py-1 bg-red-600 text-xs text-center text-white rounded-full border border-red-600 hover:bg-red-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2'
                  onClick={() => {
                    action1?.()
                  }}
                >
                  {button.text}
                </button>
              )
            ) : null}
            {/* Boton rechazar oferta */}
            {button2 != null ? (
              button2.href != null ? (
                <Link
                  className='basis-1/2 px-4 py-1 bg-green-500 text-xs text-center text-white rounded-full border border-green-500 hover:bg-green-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2'
                  href={button2.href}
                >
                  {button2.text}
                </Link>
              ) : (
                <button
                  className='basis-1/2 px-4 py-1 bg-red-600 text-xs text-center text-white rounded-full border border-red-600 hover:bg-red-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2'
                  onClick={() => {
                    action2?.()
                  }}
                >
                  {button2.text}
                </button>
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
