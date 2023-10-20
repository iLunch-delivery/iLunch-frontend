"use client"
import React from 'react'
import type { DetailProps, DetailSubtitleProps } from '@/config/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoneyCheckDollar,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function Subtitle({ text, iconType }: DetailSubtitleProps) {
  let Icon = <></>

  if (iconType === 'location') {
    Icon = <FontAwesomeIcon icon={faLocationDot} style={{ color: '#808080' }} />
  } else if (iconType === 'price') {
    Icon = (
      <FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: '#808080' }} />
    )
  }

  return (
    <div className='flex items-center'>
      {iconType != null ? Icon : null}
      <p className='inline px-2 text-xs text-slate-500 font-semibold'>{text}</p>
    </div>
  )
}

function Detail({
  id,
  restaurantId,
  imageURL,
  title,
  subtitle,
  description,
  price,
  button,
  action
}: DetailProps) {
  return (
    <div className='py-4 max-w flex items-center space-y-0 space-x-6'>
      <img
        className='block h-32 rounded-md md:mx-0 md:shrink-0'
        src={imageURL}
        alt={`Restaurant Product: ${title}`}
      ></img>
      <div className='space-y-4'>
        <div className='space-y-0.5'>
          <p className='text-lg font-semibold'>{title}</p>
          {subtitle != null ? (
            <Subtitle text={subtitle.text} iconType={subtitle.iconType} />
          ) : null}
          <p className='text-xs text-slate-500 font-normal'>{description}</p>
        </div>
        {button != null ? 
          button.href != null ? (
            <div>
              <Link
                className='px-4 py-1 bg-orange-600 text-xs text-white font-semibold rounded-full border border-orange-300 hover:text-black hover:bg-orange-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2'
                href={button.href}
              >
                {button.text}
              </Link>
            </div>
          ) : (
            <div>
              <button
                className='px-4 py-1 bg-orange-600 text-xs text-white font-semibold rounded-full border border-orange-300 hover:text-black hover:bg-orange-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2'
                onClick={() => {
                  action?.()
                }}
              >
                {button.text}
              </button>
            </div>
          )
        : null}
      </div>
    </div>
  )
}

export default Detail
