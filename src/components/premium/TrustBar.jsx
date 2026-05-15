import { Fragment } from 'react'

const trustItems = [
  { Icon: UsersIcon, text: '1,200+ clientes atendidos' },
  { Icon: CardIcon, text: 'Yape y Plin aceptados' },
  { Icon: WrenchIcon, text: 'Talleres y flotas' },
  { Icon: ClockIcon, text: 'Respuesta en 8 minutos' },
  { Icon: WhatsAppIcon, text: 'Pedidos por WhatsApp' },
  { Icon: CheckCircleIcon, text: 'Stock confirmado antes del pago' },
  { Icon: TruckIcon, text: 'Envíos a todo el Perú' },
]

export default function TrustBar() {
  const looped = [...trustItems, ...trustItems, ...trustItems]

  return (
    <section className="overflow-hidden border-y border-sahm-yellow/45 bg-sahm-night py-2.5 shadow-inner" aria-label="Beneficios SAHM">
      <div className="flex overflow-hidden">
        <div className="flex w-max shrink-0 animate-marquee items-center">
          {looped.map((item, index) => (
            <Fragment key={`${item.text}-${index}`}>
              <TrustItem item={item} />
              <span className="mx-1 h-4 w-px shrink-0 bg-white/25" />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustItem({ item }) {
  const { Icon, text } = item
  return (
    <span className="inline-flex shrink-0 items-center gap-2 px-4 py-0.5 font-heading text-[12px] font-extrabold uppercase tracking-wide text-white/90 sm:px-5">
      <Icon />
      {text}
    </span>
  )
}

function CheckCircleIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.3" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h12v10H3zM15 10h4l2 3v3h-6z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.8M16 3.2a4 4 0 0 1 0 7.6" />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path strokeLinecap="round" d="M2.5 10h19" />
    </svg>
  )
}

function WrenchIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.5-3.5a6 6 0 0 1-7.7 7.7l-6.8 6.8a2 2 0 0 1-2.8-2.8l6.8-6.8a6 6 0 0 1 7.7-7.7z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.44 6.6 2.01 12.05 2.01c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.49-8.42z" />
    </svg>
  )
}
