'use client';

import React from 'react'
import RestaurantOptions from '@/components/features/restaurants/RestaurantOptions'
import Link from 'next/link'
import { useSearch } from '@/contexts/SearchContext'
import { Modal } from 'flowbite-react';

function SearchModal({
  isOpen,
  handleOpen
}: {
  isOpen: boolean,
  handleOpen: () => void
}) {
  // Search state context
  const { searchResults } = useSearch()
  // Se limita la busqueda para mostrar un máximo de 2 resultados
  const shortSearch = searchResults.slice(0, 3)

  return(
    <Modal dismissible show={isOpen} onClose={handleOpen}>
      <Modal.Header className='text-2xl font-semibold'>
        Resultados de tu busqueda
      </Modal.Header>
      <Modal.Body>
        { // Se itera sobre los resultados de la busqueda para mostrar cada restaurante
          shortSearch.map((restaurant, index) => {
            return (
              <div key={`restaurant-${index}`}>
                <RestaurantOptions
                  key={`restaurant-${index}`}
                  imageURL={restaurant.logoURL}
                  id={restaurant._id}
                  name={restaurant.name}
                  open={restaurant.open}
                  availability={restaurant.availability}
                  distance={restaurant.distance}
                />
                <hr className='border-gray-400'></hr>
              </div>
            )
            })
          }
      </Modal.Body>
      <Modal.Footer>
        { /* Se da opción para redirigir a la página donde se pueden visualizar 
          todos los resultados de la búsqueda */ }
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