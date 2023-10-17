'use client'
import { useState, useEffect } from 'react';

import type { CarouselProps, CarouselItemProps } from '@/config/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'

interface ProductPriceProps {
  price: string
}

function Carousel({ items, itemsPerSlide, imageHeight, imageWidth, height }: CarouselProps) {
  function ProductPrice( { price }: ProductPriceProps ) {
    return (
      <div className='flex items-center'>
        <FontAwesomeIcon icon={faMoneyCheckDollar} style={{color: "#b9b9b9",}} />
        <p className='inline px-2 text-xs text-slate-500 font-semibold'>{price}</p>
      </div>
    )
  }

  let slidesItems = Array<Array<CarouselItemProps>>()

  for (let i = 0; i < items.length; i+=itemsPerSlide) {
    const slideItems = items.slice(i, i + itemsPerSlide)
    slidesItems.push(slideItems)
  }

  console.log(slidesItems)

  return (
    <div
      id='carousel'
      className={`relative z-0 w-full h-${height ?? imageHeight}`}
      data-carousel='slide'
    >
      <div className='relative h-full overflow-hidden rounded-lg mx-12'>
        {slidesItems.map((slideItems, index) => {
          return (
            <div
              key={`carousel-${index}`}
              className='hidden ease-in-out'
              data-carousel-item
            >
              <div className='flex bg-white h-full justify-around items-center'>
                {slideItems.map((item, subindex) => {
                  return (
                    <div
                      key={`carousel-item-${subindex}`}
                      className='h-full flex flex-col justify-center items-center cursor-pointer transition ease-in-out hover:scale-110'
                    >
                      <img
                        src={item.imageUrl}
                        alt='...'
                        className={`h-${imageHeight} w-${imageWidth}`}
                      />
                      {item.title != null ? <p className='text-lg font-semibold'>{item.title}</p> : null}
                      {item.subtitle != null ? <ProductPrice price={item.subtitle}/> : null }
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <button
        type='button'
        className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        data-carousel-prev
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-gray-800'
            aria-hidden='true'
            xmlns='http://www.w3.org/imageWidth0/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 1 1 5l4 4'
            />
          </svg>
          <span className='sr-only'>Previous</span>
        </span>
      </button>
      <button
        type='button'
        className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        data-carousel-next
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-gray-800'
            aria-hidden='true'
            xmlns='http://www.w3.org/imageWidth0/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
          <span className='sr-only'>Next</span>
        </span>
      </button>
    </div>
  )
}

export default Carousel
