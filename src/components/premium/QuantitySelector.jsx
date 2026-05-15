'use client'

export default function QuantitySelector({ qty, onChange, min = 1, max = 99 }) {
  return (
    <div className="flex items-center gap-0 overflow-hidden rounded-lg border-2 border-gray-200 w-fit">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, qty - 1))}
        disabled={qty <= min}
        aria-label="Restar"
        className="h-9 w-9 text-lg font-bold text-gray-600 transition hover:bg-gray-100 disabled:opacity-30"
      >
        −
      </button>
      <span className="w-9 text-center text-sm font-bold text-black">{qty}</span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, qty + 1))}
        disabled={qty >= max}
        aria-label="Sumar"
        className="h-9 w-9 text-lg font-bold text-gray-600 transition hover:bg-gray-100 disabled:opacity-30"
      >
        +
      </button>
    </div>
  )
}
