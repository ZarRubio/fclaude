import Link from 'next/link'
import { buildWhatsAppMessageUrl } from '../../config/site'

export const metadata = {
  title: 'Contacto',
  description: 'Contacta a SAHM por WhatsApp para cotizar repuestos, llantas y cámaras para moto.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sahm-cream px-4 pb-24 pt-8 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">Contacto</span>
          <h1 className="mt-2 font-heading text-5xl font-extrabold uppercase italic text-black sm:text-6xl">
            Cotiza con un asesor.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            Envía tu categoría, medida o referencia y recibe una respuesta con stock, precio y opciones claras.
          </p>
        </div>

        <div className="rounded-2xl bg-sahm-purple p-8">
          <h2 className="font-heading text-3xl font-extrabold uppercase italic text-white">WhatsApp directo</h2>
          <p className="mt-2 text-sm text-white/70">Abrimos una conversacion con tu consulta lista para enviar.</p>
          <a
            href={buildWhatsAppMessageUrl('Hola, quiero cotizar productos SAHM. La categoría, medida o referencia es: ')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-xl bg-sahm-yellow px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
          >
            Abrir WhatsApp
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-gray-100 bg-white p-6">
            <h3 className="font-heading text-lg font-extrabold uppercase text-black">Horario</h3>
            <p className="mt-2 text-sm text-gray-500">Lunes a sábado, 9 a. m. - 6 p. m. Respuesta rápida por WhatsApp.</p>
          </div>
          <div className="rounded-2xl border-2 border-gray-100 bg-white p-6">
            <h3 className="font-heading text-lg font-extrabold uppercase text-black">Despacho</h3>
            <p className="mt-2 text-sm text-gray-500">Envíos a todo el Perú. Confirma disponibilidad antes de pagar.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/productos" className="text-sm font-bold text-sahm-purple transition hover:underline">
            Volver al catálogo de productos
          </Link>
        </div>
      </div>
    </main>
  )
}
