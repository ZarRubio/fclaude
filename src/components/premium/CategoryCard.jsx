import Link from 'next/link'

export default function CategoryCard({ category }) {
  return (
    <Link
      href={category.href}
      className="group flex h-full flex-col rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-sm transition hover:border-sahm-yellow hover:shadow-md"
    >
      <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">
        {category.eyebrow}
      </span>
      <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase text-black group-hover:text-sahm-purple">
        {category.label}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{category.text}</p>
      <span className="mt-4 text-sm font-bold text-sahm-yellow">Ver productos -&gt;</span>
    </Link>
  )
}
