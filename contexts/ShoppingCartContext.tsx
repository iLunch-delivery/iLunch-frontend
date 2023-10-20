'use client'

import type {
  ProductPurchaseProps,
  ShoppingCartInterface
} from '@/config/interfaces'
import { createContext, useContext, useState } from 'react'

const ShoppingCartContext = createContext<ShoppingCartInterface>({
  products: [],
  total: 0,
  setProducts: () => {},
  setTotal: () => {},
  deliveryWay: { imageURL: '', name: '' },
  setDeliveryWay: () => {},
  paymentMethod: { imageURL: '', name: '' },
  setPaymentMethod: () => {},
  restaurantId: 0,
  setRestaurantId: () => {}
})

export const ShoppingCartProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [products, setProducts] = useState<ProductPurchaseProps[]>([])
  const [total, setTotal] = useState(0)
  const [deliveryWay, setDeliveryWay] = useState({ imageURL: '', name: '' })
  const [paymentMethod, setPaymentMethod] = useState({ imageURL: '', name: '' })
  const [restaurantId, setRestaurantId] = useState(0)
  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        total,
        setTotal,
        setProducts,
        deliveryWay,
        setDeliveryWay,
        paymentMethod,
        setPaymentMethod,
        restaurantId,
        setRestaurantId
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}
