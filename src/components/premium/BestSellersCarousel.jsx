'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { getProductLabel } from '../../config/catalog'

const PAGE_SIZE = 4

export default function BestSellersCarousel({ products }) {
  const pages = useMemo(() => {
    const groups = []
    for (let index = 0; index < products.length; index += PAGE_SIZE) {
      groups.push(products.slice(index, index + PAGE_SIZE))
    }
    return groups
  }, [products])
  const [page, setPage] = useState(0)

  const canSlide = pages.length > 1
  const activeProducts = pages[page] || []

  useEffect(() => {
    if (!canSlide) return

    const timer = setInterval(() => {
      setPage(current => (current + 1) % pages.length)
    }, 5200)

    return () => clearInterval(timer)
  }, [canSlide, pages.length])

  const goPrev = () => setPage(current => (current - 1 + pages.length) % pages.length)
  const goNext = () => setPage(current => (current + 1) % pages.length)

  return (
    <div className="gsap-reveal">
      <div className="relative">
        {canSlide && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Ver productos anteriores"
              className="absolute -left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border-2 border-sahm-yellow bg-white text-sahm-purple shadow-lg shadow-sahm-purple/10 transition hover:-translate-x-0.5 hover:bg-sahm-yellow sm:-left-6 lg:-left-10"
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Ver productos siguientes"
              className="absolute -right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border-2 border-sahm-yellow bg-white text-sahm-purple shadow-lg shadow-sahm-purple/10 transition hover:translate-x-0.5 hover:bg-sahm-yellow sm:-right-6 lg:-right-10"
            >
              <ArrowRightIcon />
            </button>
          </>
        )}

        <div key={page} className="grid animate-fade-in gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activeProducts.map((product, index) => (
            <FeaturedProduct key={product.id} product={product} priority={page === 0 && index < 2} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {pages.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Ver grupo ${index + 1}`}
            onClick={() => setPage(index)}
            className={`h-2 rounded-full transition-all ${
              index === page ? 'w-8 bg-sahm-purple' : 'w-2 bg-sahm-purple/20 hover:bg-sahm-purple/40'
            }`}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/productos"
          className="inline-block rounded-xl border-2 border-gray-200 bg-white px-8 py-3 font-heading text-sm font-bold uppercase tracking-wide text-gray-700 transition hover:border-gray-400 hover:text-black"
        >
          Ver todo el catálogo
        </Link>
      </div>
    </div>
  )
}

function FeaturedProduct({ product, priority }) {
  const label = getProductLabel(product, 'es')

  return (
    <Link href={product.productUrl} className="group block">
      <article className="overflow-hidden rounded-2xl border-2 border-white bg-white shadow-sm transition hover:-translate-y-1 hover:border-sahm-yellow hover:shadow-xl hover:shadow-sahm-purple/10">
        <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-white">
          <span className="absolute left-4 top-4 z-10 rounded-full bg-sahm-purple px-3 py-1 font-heading text-[10px] font-extrabold uppercase tracking-widest text-sahm-yellow shadow-md">
            {product.category}
          </span>
          <img
            src={product.images[0].detail || product.images[0].card}
            alt={label}
            loading={priority ? 'eager' : 'lazy'}
            className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-x-0 bottom-0 translate-y-full bg-sahm-yellow px-3 py-3 text-center font-heading text-xs font-extrabold uppercase tracking-wide text-sahm-purple transition duration-300 group-hover:translate-y-0">
            Ver producto
          </span>
        </div>
      </article>
      <div className="px-2 pb-2 pt-3 text-center">
        <p className="font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-yellow [text-shadow:0_1px_0_rgba(61,39,133,0.35)]">
          {product.category}
        </p>
        <h3 className="mt-1 font-heading text-xl font-extrabold uppercase leading-none text-sahm-purple">
          {product.code}
        </h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
          {product.subcategory}
        </p>
      </div>
    </Link>
  )
}

function ArrowLeftIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-7 w-7" fill="currentColor">
      <path fillRule="evenodd" d="M12.9 3.9a1 1 0 0 1 0 1.4L8.2 10l4.7 4.7a1 1 0 0 1-1.4 1.4l-5.4-5.4a1 1 0 0 1 0-1.4l5.4-5.4a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-7 w-7" fill="currentColor">
      <path fillRule="evenodd" d="M7.1 16.1a1 1 0 0 1 0-1.4l4.7-4.7-4.7-4.7a1 1 0 0 1 1.4-1.4l5.4 5.4a1 1 0 0 1 0 1.4l-5.4 5.4a1 1 0 0 1-1.4 0z" clipRule="evenodd" />
    </svg>
  )
}
