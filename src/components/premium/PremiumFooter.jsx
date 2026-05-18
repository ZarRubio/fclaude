import Link from 'next/link'
import { buildWhatsAppMessageUrl } from '../../config/site'

export default function PremiumFooter() {
  return (
    <footer className="bg-sahm-purple px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
        <div>
          <img src="/images/Logos/SAHM_Blanco_SAHM.svg" alt="SAHM" className="h-10 w-auto object-contain" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Llantas, cámaras y repuestos para motocicletas. Stock real, asesoría directa y despacho nacional.
          </p>
          <a
            href={buildWhatsAppMessageUrl('Hola, quiero cotizar productos SAHM. La categoría, medida o referencia es: ')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-xl bg-sahm-yellow px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wide text-black transition hover:brightness-95"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <FooterColumn title="Catálogo" items={[
          ['Llantas', '/categorias/llantas'],
          ['Cámaras', '/categorias/camaras'],
          ['Carburadores', '/categorias/carburadores'],
        ]} />

        <FooterColumn title="SAHM" items={[
          ['Inicio', '/'],
          ['Productos', '/productos'],
          ['Categorías', '/categorias'],
          ['Nosotros', '/nosotros'],
          ['Contacto', '/contacto'],
        ]} />

        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-white/40">Atención directa</p>
          <p className="mt-3 font-heading text-2xl font-extrabold uppercase italic text-white">Cotiza con un asesor en minutos.</p>
          <a
            href={buildWhatsAppMessageUrl('Hola, quiero cotizar productos SAHM. La categoría, medida o referencia es: ')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wide text-white transition hover:border-sahm-yellow hover:text-sahm-yellow"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 SAHM. Todos los derechos reservados.</p>
        <p>Repuestos para moto - Perú</p>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <p className="font-heading text-xs font-bold uppercase tracking-widest text-white/40">{title}</p>
      <div className="mt-4 grid gap-2.5">
        {items.map(([label, href]) => (
          <Link key={href} href={href} className="text-sm text-white/60 transition hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
