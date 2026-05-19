import LoadingProgress from '../components/premium/LoadingProgress'

export default function Loading() {
  return (
    <main className="grid min-h-[calc(100vh-112px)] place-items-center bg-sahm-cream px-4 py-16 sm:px-6">
      <section
        role="status"
        aria-live="polite"
        aria-label="Cargando contenido"
        className="w-full max-w-sm text-center"
      >
        <LoadingProgress />

        <p className="mt-5 font-heading text-sm font-extrabold uppercase tracking-widest text-sahm-purple">
          Cargando catálogo
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Estamos preparando productos y disponibilidad.
        </p>
      </section>
    </main>
  )
}
