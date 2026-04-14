import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'

const COPY = {
  es: {
    kicker: 'Categorias',
    title: 'Explora por tipo de necesidad',
    cta: 'Ver productos',
    categoryLabel: 'Categoria',
    items: [
      {
        nombre: 'LLANTAS',
        descripcion: 'Agarre, duracion y seguridad para ruta o ciudad.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=900',
      },
      {
        nombre: 'CAMARAS',
        descripcion: 'Opciones reforzadas para distintas medidas de aro.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900',
      },
      {
        nombre: 'REPUESTOS',
        descripcion: 'Partes originales y alternativas certificadas.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900',
      },
    ],
  },
  en: {
    kicker: 'Categories',
    title: 'Explore by product type',
    cta: 'View products',
    categoryLabel: 'Category',
    items: [
      {
        nombre: 'TIRES',
        descripcion: 'Grip, durability and safety for highway and city.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=900',
      },
      {
        nombre: 'TUBES',
        descripcion: 'Reinforced options for different rim sizes.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900',
      },
      {
        nombre: 'SPARE PARTS',
        descripcion: 'Original and certified compatible alternatives.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900',
      },
    ],
  },
}

export default function Categorias({ lang }) {
  const [start, setStart] = useState(0)
  const [ref, visible] = useFadeIn()
  const copy = COPY[lang]
  const total = copy.items.length

  return (
    <section
      id="categorias"
      ref={ref}
      className={`relative px-6 py-20 transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.kicker}</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-5xl">{copy.title}</h2>

        <div className="mt-8 hidden grid-cols-3 gap-6 md:grid">
          {copy.items.map(cat => (
            <CategoriaCard key={cat.nombre} cat={cat} copy={copy} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <CategoriaCard cat={copy.items[start]} copy={copy} />
          <div className="mt-4 flex items-center justify-center gap-4">
            <NavButton direction="left" onClick={() => setStart(s => (s - 1 + total) % total)} />
            <span className="text-sm font-semibold text-slate-600">{start + 1} / {total}</span>
            <NavButton direction="right" onClick={() => setStart(s => (s + 1) % total)} />
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoriaCard({ cat, copy }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-sahm-purple/20 bg-slate-900 shadow-2xl shadow-sahm-purple/20">
      <img src={cat.image} alt={cat.nombre} className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-sahm-purple/85 via-sahm-purple/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-yellow">{copy.categoryLabel}</p>
        <h3 className="mt-2 text-3xl font-black">{cat.nombre}</h3>
        <p className="mt-2 max-w-sm text-sm text-white/80">{cat.descripcion}</p>
        <a href={cat.href} className="mt-4 inline-flex items-center rounded-full bg-sahm-yellow px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-sahm-purple">
          {copy.cta}
        </a>
      </div>
    </article>
  )
}

function NavButton({ onClick, direction }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700"
    >
      {direction === 'left' ? '<' : '>'}
    </button>
  )
}
