import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'
import { buildWhatsAppMessageUrl } from '../../config/site'

const COPY = {
  es: {
    kicker: 'Productos destacados',
    title: 'Listos para entrega',
    catalogButton: 'Solicitar catalogo',
    askAvailability: 'Consultar disponibilidad',
    waCatalog: 'Hola, quiero recibir el catalogo completo de SAHM',
    waProduct: 'Hola, deseo consultar disponibilidad del producto',
    items: [
      { id: 1, nombre: 'Llanta Sportmax', codigo: 'BT45F', tag: 'Urbano', color: 'from-orange-200 to-amber-100' },
      { id: 2, nombre: 'Llanta Pilot Street', codigo: 'PS103', tag: 'Mixto', color: 'from-sky-200 to-cyan-100' },
      { id: 3, nombre: 'Camara Universal 3.00', codigo: 'CM300', tag: 'Durable', color: 'from-violet-200 to-fuchsia-100' },
      { id: 4, nombre: 'Kit de Frenos', codigo: 'KF2024', tag: 'Seguridad', color: 'from-rose-200 to-pink-100' },
      { id: 5, nombre: 'Filtro de Aire Sport', codigo: 'FA150', tag: 'Rendimiento', color: 'from-emerald-200 to-lime-100' },
      { id: 6, nombre: 'Aceite Motor 4T', codigo: 'AM20W50', tag: 'Mantenimiento', color: 'from-yellow-200 to-amber-100' },
    ],
  },
  en: {
    kicker: 'Featured products',
    title: 'Ready to ship',
    catalogButton: 'Request catalog',
    askAvailability: 'Check availability',
    waCatalog: 'Hi, I want the full SAHM catalog',
    waProduct: 'Hi, I want to check availability for product',
    items: [
      { id: 1, nombre: 'Sportmax Tire', codigo: 'BT45F', tag: 'Urban', color: 'from-orange-200 to-amber-100' },
      { id: 2, nombre: 'Pilot Street Tire', codigo: 'PS103', tag: 'Mixed', color: 'from-sky-200 to-cyan-100' },
      { id: 3, nombre: 'Universal Tube 3.00', codigo: 'CM300', tag: 'Durable', color: 'from-violet-200 to-fuchsia-100' },
      { id: 4, nombre: 'Brake Kit', codigo: 'KF2024', tag: 'Safety', color: 'from-rose-200 to-pink-100' },
      { id: 5, nombre: 'Sport Air Filter', codigo: 'FA150', tag: 'Performance', color: 'from-emerald-200 to-lime-100' },
      { id: 6, nombre: '4T Engine Oil', codigo: 'AM20W50', tag: 'Maintenance', color: 'from-yellow-200 to-amber-100' },
    ],
  },
}

const ITEMS_PER_VIEW = 3

function getVisible(items, start, count) {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(items[(start + i) % items.length])
  }
  return result
}

export default function ProductosDestacados({ lang }) {
  const [start, setStart] = useState(0)
  const [ref, visible] = useFadeIn()
  const copy = COPY[lang]
  const visibles = getVisible(copy.items, start, ITEMS_PER_VIEW)
  const mobileItem = copy.items[start % copy.items.length]

  return (
    <section
      id="productos"
      ref={ref}
      className={`px-6 py-20 transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-sahm-purple/20 bg-[#fff9df] p-8 shadow-2xl shadow-sahm-purple/10 md:p-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.kicker}</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-5xl">{copy.title}</h2>
          </div>
          <a
            href={buildWhatsAppMessageUrl(copy.waCatalog)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-sahm-purple px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-sahm-purple/30"
          >
            {copy.catalogButton}
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <NavBtn direction="left" onClick={() => setStart(s => (s - 1 + copy.items.length) % copy.items.length)} />
          <div className="grid flex-1 grid-cols-3 gap-5">
            {visibles.map(item => (
              <ProductoCard key={`${item.id}-${start}`} producto={item} copy={copy} />
            ))}
          </div>
          <NavBtn direction="right" onClick={() => setStart(s => (s + 1) % copy.items.length)} />
        </div>

        <div className="md:hidden">
          <ProductoCard producto={mobileItem} copy={copy} />
          <div className="mt-5 flex items-center justify-center gap-4">
            <NavBtn direction="left" onClick={() => setStart(s => (s - 1 + copy.items.length) % copy.items.length)} />
            <span className="text-sm font-semibold text-slate-600">{(start % copy.items.length) + 1} / {copy.items.length}</span>
            <NavBtn direction="right" onClick={() => setStart(s => (s + 1) % copy.items.length)} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductoCard({ producto, copy }) {
  const waUrl = buildWhatsAppMessageUrl(
    `${copy.waProduct} ${producto.codigo} - ${producto.nombre}`
  )

  return (
    <article className="group overflow-hidden rounded-3xl border border-sahm-purple/15 bg-white shadow-lg shadow-sahm-purple/10 transition hover:-translate-y-1">
      <div className={`h-32 bg-gradient-to-r ${producto.color}`} />
      <div className="p-5">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-slate-600">{producto.tag}</span>
        <h3 className="mt-4 text-lg font-black text-slate-900">{producto.nombre}</h3>
        <p className="mt-1 text-3xl font-black tracking-[0.12em] text-sahm-purple">{producto.codigo}</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-sahm-yellow py-3 text-xs font-black uppercase tracking-[0.1em] text-slate-900"
        >
          {copy.askAvailability}
        </a>
      </div>
    </article>
  )
}

function NavBtn({ onClick, direction }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-black text-slate-700"
    >
      {direction === 'left' ? '<' : '>'}
    </button>
  )
}
