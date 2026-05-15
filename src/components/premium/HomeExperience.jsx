import Link from 'next/link'
import ProductCard from './ProductCard'
import CategoryCard from './CategoryCard'
import StatsTrustPanel from './StatsTrustPanel'
import { bestSellers, catalogHighlights, featuredProductTypes, heroProduct, premiumCategories, testimonials } from '../../lib/premiumData'
import { buildWhatsAppMessageUrl } from '../../config/site'

export default function HomeExperience() {
  return (
    <>
      <section className="bg-sahm-purple px-4 py-16 sm:px-6 lg:pb-16 lg:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-widest text-sahm-yellow">
              Repuestos para moto - Perú
            </span>
            <h1 className="mt-6 font-heading text-5xl font-extrabold uppercase italic leading-none text-white sm:text-6xl lg:text-7xl">
              Llantas, cámaras y repuestos con stock real.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              Catálogo profesional para motos, talleres y flotas. Precios claros, asesoría directa y despacho nacional.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/productos"
                className="rounded-xl bg-sahm-yellow px-8 py-4 text-center font-heading text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
              >
                Ver catálogo
              </Link>
              <Link
                href="/categorias"
                className="rounded-xl border-2 border-white/25 px-8 py-4 text-center font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:border-white/50 hover:bg-white/10"
              >
                Ver categorías
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm">
              <img
                src={heroProduct.images[0].detail}
                alt="Llanta SAHM"
                className="h-72 w-full bg-white object-contain sm:h-96"
              />
              <div className="mt-4 grid grid-cols-3 gap-2">
                {['Stock real', 'Asesoría', 'Despacho'].map(item => (
                  <div key={item} className="rounded-xl bg-white/10 py-2 text-center text-xs font-heading font-bold uppercase tracking-wide text-white/75">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <StatsTrustPanel />
      </section>

      <section className="border-y border-sahm-yellow/40 bg-sahm-cream px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {featuredProductTypes.map(type => (
              <span key={type} className="font-heading text-base font-extrabold uppercase tracking-widest text-gray-400">
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sahm-cream px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">Líneas de producto</span>
            <h2 className="mt-2 font-heading text-4xl font-extrabold uppercase italic text-black">Encuentra lo que necesitas.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {premiumCategories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sahm-cream px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">Más vendidos</span>
            <h2 className="mt-2 font-heading text-4xl font-extrabold uppercase italic text-black">Referencias listas para salir.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 2} />
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
      </section>

      <section className="bg-sahm-night px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-yellow">Asesoría directa</span>
              <h2 className="mt-3 font-heading text-4xl font-extrabold uppercase italic leading-tight text-white sm:text-5xl">
                ¿No encuentras tu pieza?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Cuéntanos la categoría, medida o referencia y te ayudamos a ubicar el producto correcto antes de cotizar.
              </p>
              <a
                href={buildWhatsAppMessageUrl('Hola, quiero consultar un producto SAHM. La categoría, medida o referencia es: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl bg-sahm-yellow px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
              >
                Consultar por WhatsApp
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              {catalogHighlights.map(item => (
                <p key={item} className="flex items-center gap-3 border-b border-white/10 py-3 text-sm font-bold text-white/70 last:border-0">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sahm-yellow" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sahm-cream px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">Clientes</span>
            <h2 className="mt-2 font-heading text-4xl font-extrabold uppercase italic text-black">Lo que dicen.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map(item => (
              <article key={item.name} className="rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-sm">
                <p className="text-base leading-relaxed text-gray-700">"{item.quote}"</p>
                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="font-heading text-sm font-extrabold uppercase text-black">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
