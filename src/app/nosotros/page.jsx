import Link from 'next/link'

export const metadata = {
  title: 'Nosotros',
  description: 'SAHM Parts: catálogo de repuestos, llantas, cámaras y accesorios para moto.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sahm-cream px-4 pb-24 pt-8 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">SAHM Parts</span>
        <h1 className="mt-2 font-heading text-5xl font-extrabold uppercase italic text-black sm:text-6xl">
          Repuestos claros para comprar mejor.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
          Organizamos llantas, cámaras, repuestos y accesorios por tipo de producto para que puedas ubicar referencias, armar tu pedido y cotizar con stock actualizado.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ['Catálogo ordenado', 'Productos agrupados por categoría, subcategoría, medida y referencia.'],
            ['Atención directa', 'Asesoría por WhatsApp para confirmar stock, precio y despacho.'],
            ['Despacho nacional', 'Opciones de envío para compradores directos, talleres y flotas.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-xl font-extrabold uppercase text-black">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-sahm-purple p-8">
          <h2 className="font-heading text-3xl font-extrabold uppercase italic text-white">¿Tienes alguna consulta?</h2>
          <p className="mt-3 text-sm text-white/70">Escríbenos por WhatsApp con la categoría, medida o referencia que necesitas.</p>
          <Link
            href="/contacto"
            className="mt-5 inline-block rounded-xl bg-sahm-yellow px-7 py-3 font-heading text-sm font-bold uppercase tracking-wide text-black"
          >
            Contactar
          </Link>
        </div>
      </div>
    </main>
  )
}
