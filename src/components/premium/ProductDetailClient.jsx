'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'
import { buildWhatsAppMessageUrl } from '../../config/site'
import { getProductLabel, getProductWhatsAppMessage } from '../../config/catalog'
import QuantitySelector from './QuantitySelector'
import CartConfirmation from './CartConfirmation'

export default function ProductDetailClient({ product, related }) {
  const [activeImage, setActiveImage] = useState(0)
  const [qty, setQty] = useState(1)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const { addToCart, items } = useCart()
  const label = getProductLabel(product, 'es')
  const inCart = items.find(item => item.productId === product.id)
  const hasMultipleImages = product.images.length > 1

  const showPreviousImage = () => {
    setActiveImage(current => (current === 0 ? product.images.length - 1 : current - 1))
  }

  const showNextImage = () => {
    setActiveImage(current => (current === product.images.length - 1 ? 0 : current + 1))
  }

  const handleGalleryKeyDown = event => {
    if (!hasMultipleImages) return
    if (event.key === 'ArrowLeft') showPreviousImage()
    if (event.key === 'ArrowRight') showNextImage()
  }

  const handleAdd = () => {
    addToCart(product.id, qty)
    setShowConfirmation(true)
  }

  return (
    <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">

      {/* Image gallery */}
      <div className="rounded-2xl border-2 border-gray-100 bg-white p-4 shadow-sm">
        <div
          className="relative grid min-h-[360px] place-items-center overflow-hidden rounded-xl bg-gray-50 sm:min-h-[480px]"
          tabIndex={0}
          role="region"
          aria-label={`Galería de imágenes de ${label}`}
          onKeyDown={handleGalleryKeyDown}
        >
          <motion.img
            key={product.images[activeImage].detail}
            src={product.images[activeImage].detail}
            alt={label}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-h-[60vh] w-full object-contain p-8"
          />
          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="Ver imagen anterior"
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white/90 text-sahm-purple shadow-lg transition hover:bg-sahm-yellow hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-yellow sm:left-4"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Ver imagen siguiente"
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white/90 text-sahm-purple shadow-lg transition hover:bg-sahm-yellow hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-yellow sm:right-4"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/65 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                <span>{activeImage + 1}</span>
                <span className="text-white/45">/</span>
                <span>{product.images.length}</span>
              </div>
            </>
          )}
        </div>
        {hasMultipleImages && (
          <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
            {product.images.map((image, index) => (
              <button
                key={image.detail}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Ver imagen ${index + 1}: ${image.label}`}
                className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-gray-50 transition sm:h-24 sm:w-24 ${
                  activeImage === index
                    ? 'border-sahm-yellow shadow-md shadow-sahm-yellow/20'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <img src={image.detail} alt="" className="h-full w-full object-contain p-2" />
                {activeImage === index && (
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-sahm-yellow" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Purchase area */}
      <aside className="flex flex-col justify-start pt-2">
        <Link
          href="/productos"
          className="w-fit text-sm font-bold text-gray-400 transition hover:text-black"
        >
          ← Volver al catálogo
        </Link>

        <span className="mt-6 text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">
          {product.subcategory}
        </span>
        <h1 className="mt-2 font-heading text-4xl font-extrabold uppercase leading-tight text-black sm:text-5xl">
          {label}
        </h1>
        <p className="mt-1 font-mono text-sm text-gray-400">REF {product.code}</p>

        {/* Price + availability */}
        <div className="mt-5 flex items-center gap-4">
          <span className="text-lg font-bold italic text-gray-400">Consultar precio</span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-700">
            En stock
          </span>
        </div>

        {/* Features */}
        <div className="mt-5 rounded-xl border-2 border-gray-100 bg-gray-50 p-4">
          {['Stock sujeto a confirmación', 'Asesoría por referencia', 'Despacho nacional'].map(item => (
            <p key={item} className="flex items-center gap-2 py-1 text-sm text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-sahm-yellow" />
              {item}
            </p>
          ))}
        </div>

        {/* Cart in status */}
        {inCart && !showConfirmation && (
          <p className="mt-4 text-sm font-bold text-sahm-purple">
            Ya tienes {inCart.qty} en tu pedido.
          </p>
        )}

        {/* Quantity */}
        <div className="mt-5 flex items-center gap-3">
          <span className="text-sm font-bold uppercase tracking-wide text-gray-500">Cantidad</span>
          <QuantitySelector qty={qty} onChange={setQty} />
        </div>

        {/* Buttons */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleAdd}
            className="rounded-xl bg-sahm-yellow px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
          >
            Agregar al carrito
          </button>
          <a
            href={buildWhatsAppMessageUrl(getProductWhatsAppMessage(product, 'Hola, quiero consultar precio y disponibilidad de', 'es'))}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-gray-200 px-6 py-3.5 text-center font-heading text-sm font-bold uppercase tracking-wide text-gray-700 transition hover:border-gray-400 hover:text-black"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <CartConfirmation show={showConfirmation} onDismiss={() => setShowConfirmation(false)} />
      </aside>
    </section>
  )
}
