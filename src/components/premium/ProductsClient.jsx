'use client'

import { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { getProductLabel } from '../../config/catalog'

const CATEGORIES = ['Todos', 'Llantas', 'Cámaras', 'Carburadores', 'Repuestos', 'Accesorios']

function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export default function ProductsClient({ products }) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = useMemo(() => {
    const query = normalize(search.trim())
    return products.filter(product => {
      const haystack = normalize([
        getProductLabel(product, 'es'),
        product.code,
        product.category,
        product.subcategory,
        product.name,
      ].join(' '))
      const matchesSearch = !query || query.split(/\s+/).every(token => haystack.includes(token))
      const matchesCategory = activeCategory === 'Todos' || normalize(product.category) === normalize(activeCategory)
      return matchesSearch && matchesCategory
    })
  }, [products, search, activeCategory])

  return (
    <div>
      <div className="mt-8">
        <input
          type="search"
          value={search}
          onChange={event => setSearch(event.target.value)}
          placeholder="Buscar producto..."
          className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 outline-none transition focus:border-sahm-yellow sm:max-w-sm"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {CATEGORIES.map(category => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-xs font-heading font-bold uppercase tracking-wide transition ${
              activeCategory === category
                ? 'bg-sahm-purple text-white'
                : 'border-2 border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:text-black'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-400">
        {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 4} />
          ))}
        </div>
      ) : (
        <div className="mt-16 py-12 text-center">
          <p className="font-heading text-2xl font-bold uppercase text-gray-300">Sin resultados</p>
          <p className="mt-2 text-gray-400">Intenta con otro término o categoría.</p>
        </div>
      )}
    </div>
  )
}
