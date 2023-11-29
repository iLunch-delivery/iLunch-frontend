'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type {
  SearchContextInterface,
  RestaurantInfoProps
} from '@/config/interfaces'

const SearchContext = createContext<SearchContextInterface>({
  search: Array<RestaurantInfoProps>(),
  setSearch: () => {}
})

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState(() => {
    const persistSearch = localStorage.getItem('search')
    if (persistSearch !== null) {
      const search = JSON.parse(persistSearch)
      return search
    }
    return Array<RestaurantInfoProps>()
  })

  useEffect(() => {
    localStorage.setItem('search', JSON.stringify(search))
  }, [search])

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  return useContext(SearchContext)
}
