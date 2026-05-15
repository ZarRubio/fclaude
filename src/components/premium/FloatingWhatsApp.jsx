import { buildWhatsAppMessageUrl } from '../../config/site'

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppMessageUrl('Hola, quiero cotizar productos SAHM. La categoría, medida o referencia es: ')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/25 transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-yellow focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
      >
        <path d="M16.04 3.2A12.7 12.7 0 0 0 5.06 22.3L3.2 28.8l6.66-1.75A12.7 12.7 0 1 0 16.04 3.2Zm0 2.3a10.4 10.4 0 0 1 8.84 15.9 10.36 10.36 0 0 1-13.94 3.48l-.48-.28-3.95 1.04 1.06-3.84-.32-.5A10.4 10.4 0 0 1 16.04 5.5Zm-4.42 5.55c-.22 0-.57.08-.88.42-.3.34-1.15 1.12-1.15 2.74 0 1.61 1.18 3.17 1.34 3.4.16.22 2.27 3.63 5.62 4.94 2.78 1.1 3.35.88 3.95.83.6-.05 1.95-.8 2.22-1.57.28-.77.28-1.42.2-1.56-.08-.14-.3-.22-.63-.39-.33-.16-1.95-.96-2.25-1.07-.3-.11-.52-.16-.74.17-.22.32-.85 1.06-1.04 1.28-.19.22-.38.25-.7.08-.33-.16-1.38-.5-2.62-1.61-.97-.86-1.63-1.93-1.82-2.25-.19-.33-.02-.5.14-.66.15-.14.33-.38.5-.57.16-.19.22-.32.33-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.43-.27-.64-.53-.55-.74-.56h-.65Z" />
      </svg>
    </a>
  )
}
