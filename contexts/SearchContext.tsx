'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type {
  SearchContextInterface,
  RestaurantSearchResultProps
} from '@/config/interfaces'

const SearchContext = createContext<SearchContextInterface>({
  searchResults: Array<RestaurantSearchResultProps>(),
  setSearchResults: () => {}
})

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchResults, setSearchResults] = useState(() => {
    const persistSearch = localStorage.getItem('searchResults')
    if (persistSearch !== null) {
      const searchResults = JSON.parse(persistSearch)
      return searchResults
    }
    return Array<RestaurantSearchResultProps>()
  })

  useEffect(() => {
    localStorage.setItem('searchResults', JSON.stringify(searchResults))
  }, [searchResults])

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  return useContext(SearchContext)
}
