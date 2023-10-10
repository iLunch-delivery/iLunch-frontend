import ProductPurchase from '@/components/features/restaurants/ProductPurchase'
import BillingDetails from '@/components/features/restaurants/BillingDetails'
import SelectOption from '@/components/common/SelectOption'
import {
  shoppingCart,
  orderReceiveOptions
} from '@/config/data/restaurants'

export default function ShoppingCart() {
  return (
    <main>
      <div className='grid md:grid-cols-2 gap-12'>
        <div>
          <section id='purchaseSummary'>
            <h2 className='text-2xl font-semibold'>Resumen de compra</h2>
            {shoppingCart.map((product, index) => {
              return (
                <>
                  <ProductPurchase
                    key={`product-${index}`}
                    imageURL={product.imageURL}
                    name={product.name}
                    price={product.price}
                    amount={product.amount}
                  />
                  <hr className='border-gray-400'></hr>
                </>
              )
            })}
          </section>
          <section id='receiveOptions' className='mt-8'>
            <h3 className='text-xl font-semibold'>¿Cómo quieres recibir el pedido?</h3>
            <div className='py-4 flex flex-col justify-between items-start space-y-4 sm:flex-row sm:space-y-0'>
              {orderReceiveOptions.map((option, index) => {
                return (
                  <SelectOption
                    key={`receive_option-${index}`}
                    imageURL={option.imageURL}
                    name={option.name}
                  />
                )
              })}
            </div>
          </section> 
          <section id='additionalComments' className='mt-8'>
            <h3 className='text-xl font-semibold'>Comentarios adicionales</h3>
            <div className="mt-2">
              <textarea id="comments" 
                name="comments"
                rows={5} 
                placeholder='Aquí puedes escribir comentarios adicionales sobre tu pedido, puedes especificar acerca de cada uno de los platillos' 
                className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
              </textarea>
            </div>
          </section>
        </div>
        <div>
          <section id='billingDetails' className='border-2 border-slate-300 rounded-xl px-6 py-3'>
            <h2 className='text-2xl font-semibold'>Detalles de facturación</h2>
            <BillingDetails />
          </section>
        </div>
      </div>
    </main>
  )
}