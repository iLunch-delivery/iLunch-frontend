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
  clearContext: () => {}
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

  const clearContext = () => {
    setDeliveryWay(DELIVERY_WAY.Domicilio)
    setPaymentMethod(PAYMENT_METHODS.Efectivo)
    setAdditionalComments('')
  }

  useEffect(() => {
    localStorage.setItem(
      'shoppingCart',
      JSON.stringify({
        deliveryWay,
        paymentMethod,
        additionalComments
      })
    )
  }, [deliveryWay, paymentMethod, additionalComments])

  return (
    <ShoppingCartContext.Provider
      value={{
        deliveryWay,
        setDeliveryWay,
        paymentMethod,
        setPaymentMethod,
        additionalComments,
        setAdditionalComments,
        clearContext
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}
