'use client'

import Link from 'next/link'
import { useCart } from '../../context/CartContext'
import { CATALOG_PRODUCTS, getProductLabel } from '../../config/catalog'
import { buildWhatsAppMessageUrl } from '../../config/site'
import QuantitySelector from './QuantitySelector'

function buildMessage(items) {
  const lines = items.map(item => {
    const product = CATALOG_PRODUCTS.find(entry => entry.id === item.productId)
    if (!product) return null
    return `- ${item.qty}x ${getProductLabel(product, 'es')} | Ref: ${product.code} | ${product.subcategory}`
  }).filter(Boolean)

  return `Hola, quiero hacer el siguiente pedido:\n\n${lines.join('\n')}\n\n¿Tienen stock y cuál es el precio total? Mi ciudad es: `
}

export default function CartClient() {
  const { items, removeFromCart, updateQty, clearCart, totalItems } = useCart()
  const cartProducts = items.map(item => ({
    ...item,
    product: CATALOG_PRODUCTS.find(product => product.id === item.productId),
  })).filter(item => item.product)

  if (cartProducts.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-gray-100 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="font-heading text-3xl font-extrabold uppercase text-black">Tu pedido está vacío.</p>
        <p className="mt-3 text-gray-500">Agrega productos del catálogo para cotizar con un asesor.</p>
        <Link
          href="/productos"
          className="mt-6 inline-block rounded-xl bg-sahm-yellow px-7 py-3 font-heading text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
        >
          Ir al catálogo
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">Pedido</span>
          <h1 className="mt-1 font-heading text-4xl font-extrabold uppercase italic text-black">Mi selección</h1>
          <p className="mt-1 text-sm text-gray-500">{totalItems} artículo{totalItems !== 1 ? 's' : ''} listos para cotizar.</p>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="w-fit rounded-xl border-2 border-red-100 px-5 py-2 text-xs font-bold uppercase tracking-wide text-red-400 transition hover:border-red-200 hover:text-red-500"
        >
          Vaciar pedido
        </button>
      </div>

      <div className="mt-6 grid gap-3">
        {cartProducts.map(({ product, qty }) => (
          <article key={product.id} className="grid gap-4 rounded-2xl border-2 border-gray-100 bg-white p-4 shadow-sm sm:grid-cols-[80px_1fr_auto] sm:items-center">
            <img
              src={product.images[0].card}
              alt={getProductLabel(product, 'es')}
              className="h-20 w-20 rounded-xl bg-gray-50 object-contain p-2"
            />
            <div>
              <Link href={product.productUrl} className="font-heading text-base font-extrabold uppercase text-black hover:text-sahm-purple">
                {getProductLabel(product, 'es')}
              </Link>
              <p className="mt-0.5 font-mono text-xs text-gray-400">REF {product.code}</p>
              <span className="mt-1 inline-block rounded-full bg-sahm-purple px-2.5 py-0.5 text-[10px] font-heading font-bold uppercase text-white">
                {product.category}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <QuantitySelector qty={qty} onChange={newQty => updateQty(product.id, newQty)} />
              <button
                type="button"
                onClick={() => removeFromCart(product.id)}
                className="text-xs font-bold uppercase tracking-wide text-gray-400 transition hover:text-red-500"
              >
                Eliminar
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Link
          href="/productos"
          className="rounded-xl border-2 border-gray-200 px-6 py-3.5 text-center font-heading text-sm font-bold uppercase tracking-wide text-gray-700 transition hover:border-gray-400 hover:text-black"
        >
          Seguir comprando
        </Link>
        <a
          href={buildWhatsAppMessageUrl(buildMessage(items))}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-sahm-yellow px-8 py-3.5 text-center font-heading text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
        >
          Enviar pedido por WhatsApp
        </a>
      </div>
    </div>
  )
}
