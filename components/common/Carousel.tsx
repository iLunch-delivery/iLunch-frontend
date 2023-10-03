import Image from 'next/image'
import React from 'react'

interface CarouselProps {
  imageHeight: number
  imageWidth: number
}

function Carousel({ imageHeight, imageWidth }: CarouselProps) {
  return (
    <div
      id='carousel'
      className={`relative z-0 w-full h-${imageHeight}`}
      data-carousel='slide'
    >
      <div className='relative h-full overflow-hidden rounded-lg'>
        <div className='hidden ease-in-out' data-carousel-item>
          <div className='flex bg-white'>
            <Image
              src='/assets/recomended.png'
              width={imageWidth * 8}
              height={imageHeight * 8}
              alt='...'
            />
            <Image
              src='/assets/recomended.png'
              width={imageWidth * 8}
              height={imageHeight * 8}
              alt='...'
            />
          </div>
        </div>

        <div className='hidden duration-700 ease-in-out' data-carousel-item>
          <div className='flex  bg-white'>
            <Image
              src='/assets/recomended.png'
              width={imageWidth * 8}
              height={imageHeight * 8}
              alt='...'
            />
            <Image
              src='/assets/recomended.png'
              width={imageWidth * 8}
              height={imageHeight * 8}
              alt='...'
            />
          </div>
        </div>

        <div className='hidden duration-700 ease-in-out' data-carousel-item>
          <div className='flex  bg-white'>
            <Image
              src='/assets/recomended.png'
              width={imageWidth * 8}
              height={imageHeight * 8}
              alt='...'
            />
            <Image
              src='/assets/recomended.png'
              width={imageWidth * 8}
              height={imageHeight * 8}
              alt='...'
            />
          </div>
        </div>
      </div>

      <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
        <button
          type='button'
          className='w-3 h-3 rounded-full'
          aria-current='true'
          aria-label='Slide 1'
          data-carousel-slide-to='0'
        ></button>
        <button
          type='button'
          className='w-3 h-3 rounded-full'
          aria-current='false'
          aria-label='Slide 2'
          data-carousel-slide-to='1'
        ></button>
        <button
          type='button'
          className='w-3 h-3 rounded-full'
          aria-current='false'
          aria-label='Slide 3'
          data-carousel-slide-to='2'
        ></button>
      </div>

      <button
        type='button'
        className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        data-carousel-prev
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800'
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
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800'
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
