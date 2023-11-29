'use client'

import type {
  ProductPurchaseProps,
  ShoppingCartInterface
} from '@/config/interfaces'
import { createContext, useContext, useEffect, useState } from 'react'

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
  const persistShoppingCart = localStorage.getItem('shoppingCart')
  const [products, setProducts] = useState<ProductPurchaseProps[]>(() => {
    if (persistShoppingCart !== null) {
      const shoppingCart = JSON.parse(persistShoppingCart)
      return shoppingCart.products
    }
    return Array<ProductPurchaseProps>()
  })
  const [total, setTotal] = useState(() => {
    if (persistShoppingCart !== null) {
      const shoppingCart = JSON.parse(persistShoppingCart)
      return shoppingCart.total
    }
    return 0
  })
  const [deliveryWay, setDeliveryWay] = useState(() => {
    if (persistShoppingCart !== null) {
      const shoppingCart = JSON.parse(persistShoppingCart)
      return shoppingCart.deliveryWay
    }
    return { imageURL: '', name: '' }
  })
  const [paymentMethod, setPaymentMethod] = useState(() => {
    if (persistShoppingCart !== null) {
      const shoppingCart = JSON.parse(persistShoppingCart)
      return shoppingCart.paymentMethod
    }
    return { imageURL: '', name: '' }
  })
  const [restaurantId, setRestaurantId] = useState(0)

  useEffect(() => {
    localStorage.setItem(
      'shoppingCart',
      JSON.stringify({
        products,
        total,
        deliveryWay,
        paymentMethod,
        restaurantId
      })
    )
  }, [products, total, deliveryWay, paymentMethod, restaurantId])

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
