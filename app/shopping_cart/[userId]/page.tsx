'use client'
import { useEffect, useState } from 'react'
import ProductPurchase from '@/components/features/shopping_cart/ProductPurchase'
import BillingDetails from '@/components/features/shopping_cart/BillingDetails'
import SelectOption from '@/components/common/SelectOption'
import { DELIVERY_OPTIONS } from '@/config/data/constants'
import MainLayout from '@/components/layout/common/MainLayout'
import { useShoppingCart } from '@/contexts/ShoppingCartContext'
import { useUserInfo } from '@/contexts/UserInfoContext'
import apiRoutes from '@/config/apiRoutes'
import type { ShoppingCartInfoProps, ProductPurchaseInfoProps, ProductPurchaseIdProps } from '@/config/interfaces'
import Link from 'next/link'

export default function ShoppingCart({
  params
}: {
  params: { userId: Number }
}) {
  const [shoppingCartInfo, setShoppingCartInfo] = useState<ShoppingCartInfoProps>()
  const [errorMessage, setErrorMessage] = useState("")
  const { deliveryWay, additionalComments, setDeliveryWay, setPaymentMethod, setAdditionalComments } = useShoppingCart()
  const { name, email, phone, address } = useUserInfo()

  useEffect(() => {
    fetch(`${apiRoutes.getShoppingCart}${params.userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(async (response) => {
      const responseJSON = await response.json()
      if (response.status != 200) {
        setErrorMessage(responseJSON.message)
        return
      }
      return responseJSON
    })
    .then((data) => {
      setShoppingCartInfo(data)
      setDeliveryWay(data.deliveryWay)
      setPaymentMethod(data.paymentMethod)
    })
    .catch((error) => {
      alert('Ha habido un error. Por favor intenta más tarde.\n' + error)
    })
  }, [])

  const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Access textarea value
    setAdditionalComments(event.target.value);
    console.log(event.target.value);
  };

  const handleEditProductUnits = (_id: ProductPurchaseIdProps, units: number) => {

  }

  const handleDeleteProduct = async (_id: ProductPurchaseIdProps) => {
    if (confirm('¿Estás seguro de que quieres eliminar este producto del carrito?')) {
      const response = await fetch(`${apiRoutes.getShoppingCart}${_id.userId}/${apiRoutes.deleteProduct}/${_id.productId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })

      if (response.status == 200) {
        alert('Producto eliminado del carrito')
      } else {
        alert('Ha habido un error. Por favor intenta más tarde.')
      }
    }
  }

  if (errorMessage !== "") {
    return(
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-3xl font-semibold text-center'>{errorMessage}</h1>
        <Link href='/'>
          <button className='px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
            Volver al inicio
          </button>
        </Link>
      </div>
    )
  }

  return (
    <MainLayout>
      <main className='grid md:grid-cols-2 gap-12'>
        <section id='purchaseSummary'>
          <div id='productSummary'>
            <h2 className='text-2xl font-semibold'>Resumen de compra</h2>
            {shoppingCartInfo?.products?.map((product, index) => {
              return (
                <>
                  <ProductPurchase
                    key={`product-${product._id}`}
                    _id={product._id}
                    imageURL={product.imageURL}
                    title={product.title}
                    price={product.price}
                    units={product.units}
                    editAction={handleEditProductUnits}
                    deleteAction={() => {
                      handleDeleteProduct(product._id)
                    }}
                  />
                  <hr className='border-gray-400'></hr>
                </>
              )
            })}
          </div>
          <div id='receiveOptions' className='mt-8'>
            <h3 className='text-xl font-semibold'>
              ¿Cómo quieres recibir el pedido?
            </h3>
            <div className='py-4 flex flex-col justify-between items-start space-y-4 sm:flex-row sm:space-y-0'>
              {DELIVERY_OPTIONS.map((option, index) => {
                return (
                  <SelectOption
                    key={`receive_option-${index}`}
                    imageURL={option.imageURL}
                    name={option.name}
                    selected={shoppingCartInfo?.deliveryWay === option.type}
                    action={() => {
                      setDeliveryWay(option.type)
                    }}
                  />
                )
              })}
            </div>
          </div>
          <div id='additionalComments' className='mt-8'>
            <h3 className='text-xl font-semibold'>Comentarios adicionales</h3>
            <div className='mt-2'>
              <textarea
                id='comments'
                name='comments'
                value={additionalComments}
                onChange={handleCommentsChange}
                rows={5}
                placeholder='Aquí puedes escribir comentarios adicionales sobre tu pedido, puedes especificar acerca de cada uno de los platillos'
                className='block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              ></textarea>
            </div>
          </div>
        </section>
        <section
          id='billingDetails'
          className='shadow-md shadow-slate-500 rounded-xl px-6 py-3'
        >
          <h2 className='text-2xl font-semibold'>Detalles de facturación</h2>
          <BillingDetails
            totalProductsPrice={shoppingCartInfo?.totalProductsPrice ?? 0}
            platformFee={shoppingCartInfo?.platformFee ?? 0}
            deliveryWay={deliveryWay}
            homeDeliveryPrice={shoppingCartInfo?.homeDeliveryPrice ?? 0}
            userInfo={{ name, email, phone, address }}
          />
        </section>
      </main>
    </MainLayout>
  )
}