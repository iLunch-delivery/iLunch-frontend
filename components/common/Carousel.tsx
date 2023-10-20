'use client'

import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Carousel } from 'flowbite-react';
import type { CarouselProps, CarouselItemProps } from '@/config/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'

const customTheme: CustomFlowbiteTheme['carousel'] = {
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-hidden scroll-smooth rounded-lg",
    snap: "snap-x"
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:outline-none group-focus:ring-4 group-focus:ring-gray-800/70 dark:bg-white/30 dark:group-hover:bg-white/60 dark:group-focus:ringwhite/70 sm:h-10 sm:w-10",
    icon: "h-4 w-4 text-gray-800 dark:text-white sm:h-6 sm:w-6"
  }
}

interface ProductPriceProps {
  price: string
}

function ProductPrice({ price }: ProductPriceProps) {
  return (
    <div className='flex items-center'>
      <FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: '#b9b9b9' }} />
      <p className='inline px-2 text-xs text-slate-500 font-semibold'>
        {price}
      </p>
    </div>
  )
}

function ItemsCarousel({
  items,
  itemsPerSlide,
  imageHeight,
  imageWidth,
  height
}: CarouselProps) {
  let slides = Array<CarouselItemProps[]>()

  for (let i = 0; i < items.length; i += itemsPerSlide) {
    const slide = items.slice(i, i + itemsPerSlide)
    slides.push(slide)
  }

  console.log(slides)

  return (
    <Carousel  
      className={`z-0 h-${height ?? imageHeight}`}
      theme={customTheme}
      indicators={false}
      pauseOnHover
    >
      {slides.map((slide, index) => {
        return (
          <div
            key={`slide-${index}`}
          >
            <div className='flex bg-white h-full justify-around items-center overflow-hidden rounded-lg mx-12 overscroll-none'>
              {slide.map((item, subindex) => {
                return (
                  <div
                    key={`item-${subindex}`}
                    className='h-full my-4 flex flex-col justify-center items-center cursor-pointer hover:scale-110'
                  >
                    <img
                      src={item.imageUrl}
                      alt='...'
                      className={`h-${imageHeight} w-${imageWidth}`}
                    />
                    {item.title != null ? (
                      <p className='text-lg font-semibold'>{item.title}</p>
                    ) : null}
                    {item.subtitle != null ? (
                      <ProductPrice price={item.subtitle} />
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default ItemsCarousel
