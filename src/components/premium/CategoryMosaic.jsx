import Link from 'next/link'

export default function CategoryMosaic({ categories }) {
  const [featured, ...secondary] = categories

  if (!featured) return null

  return (
    <div className="gsap-reveal grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
      <CategoryPanel category={featured} featured />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {secondary.map(category => (
          <CategoryPanel key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

function CategoryPanel({ category, featured = false }) {
  return (
    <Link
      href={category.href}
      className={`group relative isolate block overflow-hidden rounded-2xl bg-sahm-purple shadow-xl shadow-sahm-purple/10 ${
        featured ? 'min-h-[420px] lg:min-h-[560px]' : 'min-h-[260px]'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sahm-purple via-sahm-purple/95 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,192,0,0.22),transparent_36%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />

      {category.image && (
        <img
          src={category.image}
          alt={category.label}
          className={`absolute right-0 top-1/2 z-0 -translate-y-1/2 object-contain opacity-95 transition duration-700 group-hover:scale-105 ${
            featured ? 'h-[86%] w-[70%] p-4 sm:w-[62%]' : 'h-[82%] w-[68%] p-4'
          }`}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-sahm-purple via-sahm-purple/65 to-transparent" />

      <div className={`relative z-10 flex h-full flex-col justify-end p-6 ${featured ? 'sm:p-9' : ''}`}>
        <span className="mb-3 w-fit rounded-full border border-sahm-yellow/50 bg-sahm-yellow px-3 py-1 font-heading text-[10px] font-extrabold uppercase tracking-widest text-sahm-purple">
          {category.count} productos
        </span>
        <p className="font-heading text-xs font-extrabold uppercase tracking-[0.22em] text-sahm-yellow">
          {category.eyebrow}
        </p>
        <h3 className={`mt-2 font-heading font-extrabold uppercase italic leading-none text-white ${featured ? 'text-6xl sm:text-7xl' : 'text-4xl'}`}>
          {category.label}
        </h3>
        <p className={`mt-3 max-w-sm text-white/65 ${featured ? 'text-base' : 'text-sm'}`}>
          {category.text}
        </p>
        <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-heading text-xs font-extrabold uppercase tracking-wide text-white transition group-hover:border-sahm-yellow group-hover:bg-sahm-yellow group-hover:text-sahm-purple">
          Ver línea
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
            <path fillRule="evenodd" d="M7.3 15.7a1 1 0 0 1 0-1.4l4.3-4.3-4.3-4.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
