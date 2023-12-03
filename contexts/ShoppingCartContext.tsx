'use client'

import type { ShoppingCartInterface } from '@/config/interfaces'
import { createContext, useContext, useEffect, useState } from 'react'
import { PAYMENT_METHODS, DELIVERY_WAY } from '@/config/enums'

const ShoppingCartContext = createContext<ShoppingCartInterface>({
  deliveryWay: "",
  setDeliveryWay: () => {},
  paymentMethod: "",
  setPaymentMethod: () => {},
  additionalComments: "",
  setAdditionalComments: () => {},
})

export const ShoppingCartProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const persistShoppingCart = localStorage.getItem('shoppingCart')
  const [deliveryWay, setDeliveryWay] = useState(() => {
    if (persistShoppingCart !== null) {
      const shoppingCart = JSON.parse(persistShoppingCart)
      return shoppingCart.deliveryWay
    }
    return DELIVERY_WAY.Domicilio
  })
  const [paymentMethod, setPaymentMethod] = useState(() => {
    if (persistShoppingCart !== null) {
      const shoppingCart = JSON.parse(persistShoppingCart)
      return shoppingCart.paymentMethod
    }
    return PAYMENT_METHODS.Efectivo
  })
  const [additionalComments, setAdditionalComments] = useState(() => {
    if (persistShoppingCart !== null) {
      const shoppingCart = JSON.parse(persistShoppingCart)
      return shoppingCart.additionalComments
    }
    return ""
  })

  useEffect(() => {
    localStorage.setItem(
      'shoppingCart',
      JSON.stringify({
        deliveryWay,
        paymentMethod,
        additionalComments
      })
    )
  }, [deliveryWay, paymentMethod])

  return (
    <ShoppingCartContext.Provider
      value={{
        deliveryWay,
        setDeliveryWay,
        paymentMethod,
        setPaymentMethod,
        additionalComments,
        setAdditionalComments
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}
