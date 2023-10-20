'use client';

import { Modal } from 'flowbite-react';
import React from 'react'
import { restaurantOptionsTwo } from '@/config/data/restaurants'
import RestaurantOptions from '@/components/features/restaurants/RestaurantOptions'
import Link from 'next/link'

function SearchModal({
  isOpen,
  handleOpen
}: {
  isOpen: boolean,
  handleOpen: () => void
}) {
  return(
    <Modal dismissible show={isOpen} onClose={handleOpen}>
      <Modal.Header className='text-2xl font-semibold'>
        Resultados de tu busqueda
      </Modal.Header>
      <Modal.Body>
        {restaurantOptionsTwo.map((restaurant, index) => {
          return (
            <div key={`restaurant-${index}`}>
              <RestaurantOptions
                key={`restaurant-${index}`}
                imageURL={restaurant.imageURL}
                id={restaurant.id}
                name={restaurant.name}
                open={restaurant.open}
                availability={restaurant.availability}
                distance={restaurant.distance}
              />
              <hr className='border-gray-400'></hr>
            </div>
          )
          })}
      </Modal.Body>
      <Modal.Footer>
        <Link 
          className='w-full text-center text-gray-500 rounded'
          href='/search/results'
        >
          Ver más opciones
        </Link>
      </Modal.Footer>
    </Modal>
  )
}

export default SearchModal