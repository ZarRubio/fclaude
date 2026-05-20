import { CATEGORIES } from '../config/categories'
import { CATALOG_PRODUCTS } from '../config/catalog'

const siteUrl = 'https://sahmparts.com'

export default function sitemap() {
  const staticRoutes = ['', '/productos', '/categorias', '/buscar', '/carrito', '/nosotros', '/contacto']
  const categoryRoutes = CATEGORIES.filter(category => category.enabled).map(category => `/categorias/${category.id}`)
  const productRoutes = CATALOG_PRODUCTS.map(product => product.productUrl)

  return [...staticRoutes, ...categoryRoutes, ...productRoutes].map(route => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/productos') || route.startsWith('/categorias') ? 0.8 : 0.6,
  }))
}
