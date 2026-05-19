'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="grid min-h-[calc(100vh-112px)] place-items-center bg-sahm-cream px-4 py-16 sm:px-6">
      <section className="w-full max-w-lg rounded-2xl border-2 border-white bg-white/80 p-8 text-center shadow-2xl shadow-sahm-purple/10 backdrop-blur sm:p-10">
        <div className="mx-auto grid h-24 w-28 place-items-center rounded-3xl bg-sahm-purple shadow-xl shadow-sahm-purple/20">
          <Image
            src="/images/Logos/ISOTIPO_SAHM.svg"
            alt=""
            width={88}
            height={68}
            className="h-16 w-auto object-contain"
            style={{ width: 'auto' }}
            priority
          />
        </div>

        <p className="mt-7 font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-purple">
          Algo no cargó bien
        </p>
        <h1 className="mt-2 font-heading text-4xl font-extrabold uppercase italic leading-none text-black sm:text-5xl">
          Intentémoslo otra vez.
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
          Hubo un problema preparando esta vista. Puedes reintentar o volver al catálogo.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={reset}
            className="rounded-xl bg-sahm-yellow px-6 py-3 font-heading text-sm font-extrabold uppercase tracking-wide text-black transition hover:brightness-95 active:scale-[0.98]"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/productos"
            className="rounded-xl border-2 border-slate-200 px-6 py-3 font-heading text-sm font-extrabold uppercase tracking-wide text-slate-700 transition hover:border-sahm-purple hover:text-sahm-purple"
          >
            Ver catálogo
          </Link>
        </div>
      </section>
    </main>
  )
}
