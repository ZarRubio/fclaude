import {
  CATALOG_CATEGORY_DATA,
  CATALOG_IMAGE_ROOT,
  CATALOG_PRODUCT_DATA,
  OPTIMIZED_IMAGE_ROOT,
} from './catalogData'

function assetPath(path) {
  return encodeURI(`/${path}`)
}

function originalImagePath(product, file) {
  if (product.sourceDir) return `${CATALOG_IMAGE_ROOT}/${product.sourceDir}/${file}`
  return `${CATALOG_IMAGE_ROOT}/${product.category}/${product.subcategory}/${product.name}/${file}`
}

function optimizedImagePath(productId, file) {
  return `${OPTIMIZED_IMAGE_ROOT}/${productId}/${file}`
}

function product(item) {
  const images = item.files.map((image, index) => ({
    label: image.label,
    original: assetPath(originalImagePath(item, image.file)),
    card: assetPath(optimizedImagePath(item.id, 'card.webp')),
    detail: assetPath(optimizedImagePath(item.id, `detail-${index + 1}.webp`)),
  }))

  return {
    ...item,
    slug: item.id,
    code: item.name.replace(/\s+/g, ' ').trim(),
    productUrl: `/productos/${item.id}`,
    images,
  }
}

export const CATALOG_PRODUCTS = CATALOG_PRODUCT_DATA.map(product)

export const CATALOG_CATEGORIES = CATALOG_CATEGORY_DATA.map(category => {
  const coverProduct = CATALOG_PRODUCTS.find(item => item.id === category.coverProductId)
  const coverImage = coverProduct?.images[category.coverImageIndex] || coverProduct?.images[0]

  return {
    ...category,
    image: coverImage?.card || '',
  }
})

export function getSubcategories(category) {
  return [...new Set(CATALOG_PRODUCTS.filter(item => item.category === category).map(item => item.subcategory))]
}

export function getProductById(id) {
  return CATALOG_PRODUCTS.find(productItem => productItem.id === id)
}

export function getProductLabel(productItem, lang = 'es') {
  if (productItem.category === 'Llantas') return `${lang === 'en' ? 'Tire' : 'Llanta'} ${productItem.name}`
  if (productItem.category === 'Carburadores') return `${lang === 'en' ? 'Carburetor' : 'Carburador'} ${productItem.name}`
  return `${lang === 'en' ? 'Tube' : 'Cámara'} ${productItem.name}`
}

export function getProductWhatsAppMessage(productItem, prefix, lang = 'es') {
  return `${prefix} ${getProductLabel(productItem, lang)} - ${productItem.subcategory}`
}

export function getCategoryBySlug(slug) {
  return CATALOG_CATEGORIES.find(cat => cat.id === slug)
}
