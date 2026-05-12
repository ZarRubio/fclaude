import { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/sahm/Navbar'
import Footer from '../components/sahm/Footer'
import FloatingWhatsApp from '../components/sahm/FloatingWhatsApp'
import ScrollProgress from '../components/sahm/ScrollProgress'
import ProductCard from '../components/sahm/ProductCard'
import { CATALOG_PRODUCTS, getProductLabel } from '../config/catalog'

const COPY = {
  es: {
    placeholder: 'Buscar por medida, referencia o subcategoría…',
    searchButton: 'Buscar',
    results: (count, q) => q ? `${count} resultado${count === 1 ? '' : 's'} para "${q}"` : `${count} producto${count === 1 ? '' : 's'} en catálogo`,
    empty: q => `No se encontraron productos para "${q}".`,
    emptyHint: 'Prueba con otra medida o referencia. Ejemplos: 2.75-10, TR87, Motos.',
    browseCatalog: 'Ver catálogo completo',
    recentTitle: 'Catálogo completo',
  },
  en: {
    placeholder: 'Search by size, reference or subcategory…',
    searchButton: 'Search',
    results: (count, q) => q ? `${count} result${count === 1 ? '' : 's'} for "${q}"` : `${count} product${count === 1 ? '' : 's'} in catalog`,
    empty: q => `No products found for "${q}".`,
    emptyHint: 'Try a different size or reference. Examples: 2.75-10, TR87, Motos.',
    browseCatalog: 'Browse full catalog',
    recentTitle: 'Full catalog',
  },
}

// Strip accents and lowercase for accent-insensitive matching
function normalize(str) {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

// Score a product against a single normalized token
function scoreProduct(p, token, label) {
  const name = normalize(p.name)
  const code = normalize(p.code)
  const sub = normalize(p.subcategory)
  const cat = normalize(p.category)
  const normLabel = normalize(label)

  if (name === token || code === token) return 4           // exact name/code
  if (name.startsWith(token) || code.startsWith(token)) return 3  // prefix
  if (name.includes(token) || code.includes(token)) return 2       // name/code contains
  if (normLabel.includes(token) || sub.includes(token) || cat.includes(token)) return 1
  return 0
}

function searchProducts(query, products, lang) {
  const q = normalize(query.trim())
  if (!q) return products

  // Split into tokens — every token must score > 0 for the product to appear
  const tokens = q.split(/\s+/).filter(Boolean)

  const scored = []
  for (const p of products) {
    const label = getProductLabel(p, lang)
    let totalScore = 0
    let matched = true
    for (const token of tokens) {
      const s = scoreProduct(p, token, label)
      if (s === 0) { matched = false; break }
      totalScore += s
    }
    if (matched) scored.push({ p, score: totalScore })
  }

  // Sort by score descending; stable (same score keeps catalog order)
  scored.sort((a, b) => b.score - a.score)
  return scored.map(s => s.p)
}

export default function SearchPage({ query: initialQuery, lang, setLang }) {
  const [inputValue, setInputValue] = useState(initialQuery)
  const [activeQuery, setActiveQuery] = useState(initialQuery)
  const copy = COPY[lang]

  useEffect(() => {
    document.title = activeQuery
      ? `"${activeQuery}" — SAHM`
      : (lang === 'es' ? 'Buscar — SAHM' : 'Search — SAHM')
  }, [activeQuery, lang])

  useEffect(() => {
    setInputValue(initialQuery)
    setActiveQuery(initialQuery)
  }, [initialQuery])

  // Live search: update results after a short debounce
  useEffect(() => {
    const timer = setTimeout(() => setActiveQuery(inputValue), 250)
    return () => clearTimeout(timer)
  }, [inputValue])

  const results = useMemo(
    () => searchProducts(activeQuery, CATALOG_PRODUCTS, lang),
    [activeQuery, lang]
  )

  const handleSubmit = e => {
    e.preventDefault()
    const q = inputValue.trim()
    setActiveQuery(q)
    if (q) {
      window.history.replaceState(null, '', `${window.location.pathname}#/buscar?q=${encodeURIComponent(q)}`)
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased text-slate-900">
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />

      <main className="px-4 py-10 sm:px-6 lg:py-14">
        <div className="mx-auto max-w-[92rem]">
          {/* Search bar */}
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="search"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder={copy.placeholder}
              autoFocus
              className="min-w-0 flex-1 rounded-2xl border border-sahm-purple/20 bg-white px-5 py-3.5 text-base font-semibold text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-sahm-purple focus:outline-none focus:ring-2 focus:ring-sahm-purple/20"
            />
            <button
              type="submit"
              className="cursor-pointer shrink-0 rounded-2xl bg-sahm-purple px-6 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-white shadow-lg shadow-sahm-purple/30 transition hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-1"
            >
              {copy.searchButton}
            </button>
          </form>

          {/* Results count */}
          <p className="mt-6 text-sm font-semibold text-slate-500">
            {copy.results(results.length, activeQuery)}
          </p>

          {/* Grid or empty state */}
          {results.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {results.map(product => (
                <ProductCard key={product.id} product={product} lang={lang} />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[2rem] border border-sahm-purple/15 bg-[#fff9df] p-10 text-center">
              <p className="text-xl font-black text-slate-900">{copy.empty(activeQuery)}</p>
              <p className="mt-3 text-slate-600">{copy.emptyHint}</p>
              <a
                href="#/productos"
                className="mt-6 inline-flex rounded-full bg-sahm-purple px-6 py-3 text-xs font-black uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5"
              >
                {copy.browseCatalog}
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  )
}
