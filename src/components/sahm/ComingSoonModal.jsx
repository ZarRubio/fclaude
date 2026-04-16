export default function ComingSoonModal({ open, onClose, title, message, buttonLabel }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/55 px-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="w-full max-w-md rounded-2xl border border-sahm-purple/25 bg-white p-6 shadow-2xl shadow-slate-900/30">
        <h3 className="text-2xl font-black text-sahm-purple">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{message}</p>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center rounded-full bg-sahm-purple px-5 py-2 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:brightness-110"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
