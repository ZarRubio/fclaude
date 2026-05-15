import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-sahm-cream px-4">
      <div className="max-w-xl rounded-2xl border-2 border-gray-100 bg-white p-8 text-center shadow-sm">
        <span className="font-heading text-xs font-bold uppercase tracking-widest text-sahm-purple">404</span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold uppercase italic text-black">No encontramos esta ruta.</h1>
        <p className="mt-2 text-sm text-gray-500">La página que buscas no existe o fue movida.</p>
        <Link href="/" className="mt-6 inline-block rounded-xl bg-sahm-yellow px-7 py-3 font-heading text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95">
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
