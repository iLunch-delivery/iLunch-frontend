export default function ShoppingCart() {
  return (
    <main>
      <div className='grid grid-cols-2 gap-x-12'>
        <div>
          <section id='purchaseSummary' className="px-6 py-3">
            <h2 className='text-2xl font-semibold'>Resumen de compra</h2>
          </section>
          <section id='receiveOptions' className="px-6 py-3">
            <h3 className='text-xl font-semibold'>¿Cómo quieres recibir el pedido?</h3>
          </section> 
          <section id='additionalComments' className="px-6 py-3">
            <h3 className='text-xl font-semibold'>Comentarios adicionales</h3>
          </section>
        </div>
        <div>
          <section id='billingDetails' className='border-2 border-slate-300 rounded-xl px-6 py-3'>
            <h2 className='text-2xl font-semibold'>Detalles de facturación</h2>
          </section>
        </div>
      </div>
    </main>
  )
}