import React from 'react'

function ProductPurchaseTable() {
  return (
    <table className='w-full'>
      <tbody>
        <tr>
          <td>Producto 1</td>
          <td className='text-center'>x2 und</td>
          <td className='text-right'>$ 20.000</td>
        </tr>
        <tr>
          <td>Producto 2</td>
          <td className='text-center'>x1 und</td>
          <td className='text-right'>$ 10.000</td>
        </tr>
      </tbody>
    </table>
  )
}

export default ProductPurchaseTable
