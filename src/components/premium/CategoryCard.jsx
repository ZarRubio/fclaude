import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard({ category }) {
  return (
    <Link
      href={category.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sahm-yellow/40 hover:shadow-xl hover:shadow-sahm-purple/10"
    >
      {/* Image panel */}
      <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: '4/3' }}>
        {category.image ? (
          <Image
            src={category.image}
            alt={category.label}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-6 transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sahm-purple/10 to-sahm-yellow/10">
            <span className="font-heading text-6xl font-extrabold uppercase text-sahm-purple/20">
              {category.label[0]}
            </span>
          </div>
        )}

        {/* Eyebrow badge */}
        <span className="absolute left-3 top-3 rounded-full bg-sahm-purple px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-white">
          {category.eyebrow}
        </span>

        {/* Product count badge */}
        {category.count > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-wide text-sahm-purple shadow-sm backdrop-blur-sm">
            {category.count} ref.
          </span>
        )}

        {/* Yellow accent stripe on hover */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-sahm-yellow transition-transform duration-300 group-hover:scale-x-100"
        />
      </div>

      {/* Text panel */}
      <div className="flex flex-1 flex-col p-5">
        <h2 className="font-heading text-2xl font-extrabold uppercase text-black transition-colors duration-200 group-hover:text-sahm-purple">
          {category.label}
        </h2>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-gray-500">{category.text}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-sahm-yellow transition-gap duration-200">
          Ver productos
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 translate-x-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
