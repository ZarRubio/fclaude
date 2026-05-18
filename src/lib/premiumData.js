import { CATALOG_CATEGORIES, CATALOG_PRODUCTS } from '../config/catalog'

const RAW_CATEGORIES = [
  {
    id: 'llantas',
    label: 'Llantas',
    eyebrow: 'Agarre diario',
    href: '/categorias/llantas',
    text: 'Medidas listas para trabajo diario, reparto urbano y motos eléctricas.',
  },
  {
    id: 'camaras',
    label: 'Cámaras',
    eyebrow: 'Reposición rápida',
    href: '/categorias/camaras',
    text: 'Referencias por aro, válvula y uso para reposición segura.',
  },
  {
    id: 'carburadores',
    label: 'Carburadores',
    eyebrow: 'Reposición',
    href: '/categorias/carburadores',
    text: 'Referencias PZ listas para mantenimiento y reemplazo.',
  },
  {
    id: 'repuestos',
    label: 'Repuestos',
    eyebrow: 'Mantenimiento',
    href: '/categorias/repuestos',
    text: 'Piezas seleccionadas por tipo de producto y referencia.',
  },
  {
    id: 'accesorios',
    label: 'Accesorios',
    eyebrow: 'Complementos',
    href: '/categorias/accesorios',
    text: 'Productos para mantenimiento, seguridad y cuidado.',
  },
]

export const premiumCategories = RAW_CATEGORIES.map(cat => {
  const catalogCategory = CATALOG_CATEGORIES.find(c => c.id === cat.id)
  const count = CATALOG_PRODUCTS.filter(p => p.category === (catalogCategory?.name || cat.label)).length

  return {
    ...cat,
    image: catalogCategory?.image || '',
    count,
  }
}).filter(category => category.count > 0)

export const heroProduct = CATALOG_PRODUCTS.find(product => product.id === 'llantas-moto-electrica-350-10-4pr') || CATALOG_PRODUCTS[0]

export const bestSellers = CATALOG_PRODUCTS.slice(0, 8)

export const catalogHighlights = [
  'Búsqueda por medida, aro y tipo de uso',
  'Atención para talleres, flotas y compradores directos',
  'Cotización por WhatsApp con stock real',
]

export const testimonials = [
  {
    quote: 'Nos ayudaron a ubicar la medida correcta sin perder tiempo. La cotización llegó rápido y clara.',
    name: 'Taller urbano',
    meta: 'Lima',
  },
  {
    quote: 'La presentación del producto y la asesoría nos dio confianza para comprar por volumen.',
    name: 'Flota delivery',
    meta: 'Perú',
  },
  {
    quote: 'Buen seguimiento por WhatsApp y opciones concretas para decidir.',
    name: 'Cliente recurrente',
    meta: 'Motociclista',
  },
]
