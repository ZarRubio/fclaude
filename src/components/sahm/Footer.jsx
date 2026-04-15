import { NAV_LINKS_BY_LANG } from '../../config/navigation'
import { WHATSAPP_URL, buildWhatsAppMessageUrl } from '../../config/site'

const COPY = {
  es: {
    bannerKicker: 'Listo para pedir',
    bannerTitle: 'Hablemos de la pieza correcta y del mejor siguiente paso.',
    bannerText:
      'Cotiza por WhatsApp, revisa productos destacados y convierte la visita en una compra mucho mas clara.',
    bannerPrimary: 'Cotizar por WhatsApp',
    bannerSecondary: 'Ver productos',
    bannerMessage: 'Hola, quiero cotizar repuestos para mi moto',
    brandText:
      'Distribucion comercial de llantas, camaras y repuestos para moto con foco en claridad, velocidad y continuidad para taller o flota.',
    navigation: 'Navegacion',
    services: 'Lineas destacadas',
    contact: 'Contacto',
    whatsapp: 'WhatsApp comercial',
    contactText: 'Atencion para cotizaciones, validacion de compatibilidad y seguimiento de pedidos.',
    backToTop: 'Volver arriba',
    rights: '2026 SAHM. Todos los derechos reservados.',
    serviceItems: ['Llantas', 'Camaras', 'Frenos y control', 'Mantenimiento'],
    badges: ['Respuesta agil', 'Despacho nacional', 'Atencion bilingue'],
  },
  en: {
    bannerKicker: 'Ready to order',
    bannerTitle: 'Let us talk about the right part and the best next step.',
    bannerText:
      'Quote on WhatsApp, review featured products and turn the visit into a much clearer purchase.',
    bannerPrimary: 'Quote on WhatsApp',
    bannerSecondary: 'Browse products',
    bannerMessage: 'Hi, I want to get a quote for spare parts for my motorcycle',
    brandText:
      'Commercial distribution of motorcycle tires, tubes and spare parts with a focus on clarity, speed and continuity for workshops or fleets.',
    navigation: 'Navigation',
    services: 'Featured lines',
    contact: 'Contact',
    whatsapp: 'Commercial WhatsApp',
    contactText: 'Support for quoting, fitment validation and order follow-up.',
    backToTop: 'Back to top',
    rights: '2026 SAHM. All rights reserved.',
    serviceItems: ['Tires', 'Tubes', 'Brakes and control', 'Maintenance'],
    badges: ['Fast response', 'Nationwide shipping', 'Bilingual support'],
  },
}

export default function Footer({ lang }) {
  const copy = COPY[lang]
  const navLinks = NAV_LINKS_BY_LANG[lang]

  return (
    <footer id="contacto" className="mt-12 bg-[#140f27] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-sahm-purple p-8 shadow-2xl shadow-sahm-purple/25 sm:p-10">
          <div className="soft-grid absolute inset-0 opacity-25" />
          <div className="relative flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-sahm-yellow">{copy.bannerKicker}</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl">{copy.bannerTitle}</h2>
              <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">{copy.bannerText}</p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={buildWhatsAppMessageUrl(copy.bannerMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-sahm-yellow px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-slate-900 transition hover:-translate-y-0.5"
              >
                {copy.bannerPrimary}
              </a>
              <a
                href="#productos"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-white/15"
              >
                {copy.bannerSecondary}
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 px-1 py-12 md:grid-cols-[1.2fr_0.85fr_0.85fr_1fr]">
          <div>
            <a href="#inicio" className="text-4xl font-black italic tracking-tight text-sahm-yellow">
              SAHM
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">{copy.brandText}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {copy.badges.map(badge => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">{copy.navigation}</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-200 transition hover:text-sahm-yellow">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">{copy.services}</h4>
            <ul className="mt-4 space-y-3">
              {copy.serviceItems.map(item => (
                <li key={item} className="text-sm text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">{copy.contact}</h4>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{copy.contactText}</p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:bg-white/10"
            >
              <WhatsAppIcon />
              {copy.whatsapp}
            </a>

            <a
              href="#inicio"
              className="mt-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.1em] text-sahm-yellow transition hover:text-white"
            >
              {copy.backToTop}
              <ArrowUpIcon />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 px-1 pt-5 text-center text-xs text-slate-400">
          <p>{copy.rights}</p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}
