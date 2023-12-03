import type { ProductPurchaseInfoProps } from '@/config/interfaces'
import React from 'react'

function ProductPurchaseTable({
  products,
  total
}: {
  products: ProductPurchaseInfoProps[]
  total: number
}) {
  // Retornar tabla con productos seleccionados y total a pagar
  return (
    <table className='w-full'>
      <tbody>
        {products.map((product, index) => (
          <tr key={`product-purchase-${index}`}>
            <td>{product.title}</td>
            <td className='text-center'>x{product.units} und</td>
            <td className='text-right'>$ {product.price}</td>
          </tr>
        ))}

        <tr className='font-bold'>
          <td>Total</td>
          <td className='text-center'></td>
          <td className='text-right'>$ {total * 1.1 + 5000}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default ProductPurchaseTable
