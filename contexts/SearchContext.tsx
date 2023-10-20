'use client'

import type { SearchContextInterface } from '@/config/interfaces'
import { createContext, useContext, useState } from 'react'
import { RestaurantInfoProps } from '@/config/interfaces'

const SearchContext = createContext<SearchContextInterface>({
  search: Array<RestaurantInfoProps>(),
  setSearch: () => {}
})

export const SearchProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [search, setSearch] = useState(Array<RestaurantInfoProps>())

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  return useContext(SearchContext)
}
