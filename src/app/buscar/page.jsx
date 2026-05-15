import SearchCatalogClient from '../../components/premium/SearchCatalogClient'

export const metadata = {
  title: 'Buscar productos',
  description: 'Busca productos SAHM por medida, referencia, categoría o subcategoría.',
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-sahm-night px-4 pb-24 pt-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SearchCatalogClient />
      </div>
    </main>
  )
}
