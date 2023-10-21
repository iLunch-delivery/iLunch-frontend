import type { ProductPurchaseProps } from '@/config/interfaces'
import React from 'react'

function ProductPurchaseTable({
  products,
  total
}: {
  products: ProductPurchaseProps[]
  total: number
}) {
  // Retornar tabla con productos seleccionados y total a pagar
  return (
    <table className='w-full'>
      <tbody>
        {products.map((product, index) => (
          <tr key={`product-purchase-${index}`}>
            <td>{product.name}</td>
            <td className='text-center'>x{product.amount} und</td>
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
