'use client'
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useChangeSidebar } from '@/contexts/SidebarContext'
import { useSearch } from '@/contexts/SearchContext'
import React, { useState, useEffect } from 'react'
import SearchModal from './SearchModal'
import Link from 'next/link'
import { useUserInfo } from '@/contexts/UserInfoContext'
import { usePathname, useRouter } from 'next/navigation'
import { useShoppingCart } from '@/contexts/ShoppingCartContext'
import { restaurants } from '@/config/data/restaurants'
import { RestaurantInfoProps } from '@/config/interfaces'

function Header() {
  // Routing states
  const router = useRouter()
  const pathname = usePathname()

  // Sidebar state
  const { isOpen, setIsOpen } = useChangeSidebar()

  // Search results states
  const { search, setSearch } = useSearch()
  const [inputSearch, setInputSearch] = useState('')

  // Search Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Shopping Cart states
  const { products } = useShoppingCart()
  const { idNumber } = useUserInfo()

  // Search Input Form handler
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchRestaurants = Array<RestaurantInfoProps>()

    // Se itera sobre cada restaurante para buscar coincidencias con la busqueda
    restaurants.map((restaurant) => {
      /* Se convierten la búsqueda y los datos del restaurante a minusculas para facilitar 
        la coincidencia. Igualmente se eliminan espacio en blanco en la búsqueda */
      const restaurantSpeciality = restaurant.speciality.toLowerCase()
      const search = inputSearch.trim().toLowerCase()

      // Primero se busca coincidencia en base a la especilidad del restaurante
      if (restaurantSpeciality.includes(search)) {
        searchRestaurants.push(restaurant)
        return
      }

      /* También para cada restaurante se itera sobre sus categorias
        de comida y platillos populares, para maximizar la búsqueda */
      restaurant.categories.map((category) => {
        if (category.toLowerCase().includes(search)) {
          searchRestaurants.push(restaurant)
          return
        }
      })

      restaurant.popularDishes.map((dish) => {
        if (dish.toLowerCase().includes(search)) {
          searchRestaurants.push(restaurant)
          return
        }
      })
    })

    /* En caso de haber resultados, se actualiza el context para la busqueda y poder 
      accederla desde el modal y la página de los resultados completos*/
    if (searchRestaurants.length > 0) {
      setSearch(searchRestaurants)
      handleModalOpen()
    } else {
      alert('No se han encontrado resultados')
    }
  }

  // Search Modal handler
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  // Shopping Cart handler
  // Para redireccionar al carrito de compras o advertir que se encuentra vacio
  const handleCartNavigation = () => {
    if (products.length > 0) {
      router.push(`/shopping_cart/${idNumber}`)
    } else {
      alert('El carrito está vacío')
    }
  }

  // Para cerrar la sidebar al cambiar de ruta
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className='fixed z-50 px-5 py-2 h-40 bg-blue-600 flex flex-col justify-between items-center w-full gap-2 sm:h-16 sm:flex-row'>
      <section className='flex items-center'>
        <FontAwesomeIcon
          icon={faBars}
          color='white'
          className='cursor-pointer h-5'
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        />
        <Link href='/'>
          <Image
            className='px-2'
            src='/assets/iLunch-logo.png'
            width={95}
            height={15}
            alt='...'
          />
        </Link>
      </section>
      <section className='w-full sm:w-1/2'>
        <div className='inline-flex items-center bg-white rounded-xl w-full font-light text-sm px-4 h-8'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <form
            className='w-full'
            onSubmit={(e) => {
              handleSearch(e)
            }}
          >
            <input
              className='w-full h-6 bg-transparent border-0 outline-0 focus:ring-0 placeholder:text-sm'
              type='text'
              placeholder='Busca un restaurante o platillo'
              value={inputSearch}
              onChange={(e) => {
                setInputSearch(e.target.value)
              }}
            />
          </form>
        </div>
        <SearchModal isOpen={isModalOpen} handleOpen={handleModalOpen} />
      </section>
      <section>
        <button
          onClick={() => {
            handleCartNavigation()
          }}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className='h-5'
            color='white'
          />
        </button>
      </section>
    </header>
  )
}

export default Header
