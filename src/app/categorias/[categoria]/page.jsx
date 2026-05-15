import Link from 'next/link'
import ProductCard from '../../../components/premium/ProductCard'
import { CATEGORIES, getCategoryById } from '../../../config/categories'
import { CATALOG_PRODUCTS, getSubcategories } from '../../../config/catalog'

export const dynamicParams = false

export function generateStaticParams() {
  return CATEGORIES.map(category => ({ categoria: category.id }))
}

export async function generateMetadata({ params }) {
  const { categoria } = await params
  const category = getCategoryById(categoria)
  const label = category?.name || categoria
  return {
    title: label,
    description: category?.description || `Catálogo de ${label} SAHM.`,
  }
}

export default async function CategoryPage({ params }) {
  const { categoria } = await params
  const category = getCategoryById(categoria)
  const label = category?.name || categoria
  const catalogName = category?.catalogName || label
  const products = CATALOG_PRODUCTS.filter(product => product.category === catalogName)
  const subcategories = getSubcategories(catalogName)

  return (
    <main className="min-h-screen bg-sahm-cream px-4 pb-24 pt-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-black">Inicio</Link>
          <span>/</span>
          <Link href="/categorias" className="hover:text-black">Categorías</Link>
          <span>/</span>
          <span className="font-bold text-black">{label}</span>
        </nav>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">Categoría</span>
            <h1 className="mt-1 font-heading text-5xl font-extrabold uppercase italic text-black sm:text-6xl">{label}</h1>
            {category?.description && (
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-500">{category.description}</p>
            )}
          </div>
          <p className="text-sm font-bold text-gray-400">
            {products.length} {products.length === 1 ? 'producto' : 'productos'} encontrados
          </p>
        </div>

        {subcategories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {subcategories.map(sub => (
              <span key={sub} className="rounded-full border-2 border-gray-200 bg-white px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-wide text-gray-600">
                {sub}
              </span>
            ))}
          </div>
        )}

        {products.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => <ProductCard key={product.id} product={product} priority={index < 4} />)}
          </div>
        ) : (
          <div className="mt-16 rounded-2xl border-2 border-gray-100 bg-white p-10 text-center shadow-sm">
            <p className="font-heading text-2xl font-bold uppercase text-gray-300">Sin productos</p>
            <p className="mt-2 text-gray-400">Esta categoría no tiene productos publicados todavía.</p>
            <Link
              href="/productos"
              className="mt-6 inline-block rounded-full bg-sahm-yellow px-6 py-3 text-sm font-heading font-bold uppercase tracking-wide text-black hover:brightness-95"
            >
              Ver todos los productos
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
