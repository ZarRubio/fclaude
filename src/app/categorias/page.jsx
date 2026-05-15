import Link from 'next/link'
import CategoryCard from '../../components/premium/CategoryCard'
import { premiumCategories } from '../../lib/premiumData'

export const metadata = {
  title: 'Categorías',
  description: 'Explora las categorías SAHM: llantas, cámaras, repuestos y accesorios.',
}

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-sahm-cream px-4 pb-24 pt-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-black">Inicio</Link>
          <span>/</span>
          <span className="font-bold text-black">Categorías</span>
        </nav>

        <h1 className="font-heading text-5xl font-extrabold uppercase italic text-black sm:text-6xl">
          Categorías
        </h1>
        <p className="mt-2 text-gray-500">Elige una línea de producto para ver el catálogo completo.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {premiumCategories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </main>
  )
}
