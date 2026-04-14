import { useFadeIn } from '../../hooks/useFadeIn'

const COPY = {
  es: {
    stepsKicker: 'Como comprar',
    stepsTitle: 'Proceso simple en 3 pasos',
    steps: [
      {
        title: 'Nos escribes por WhatsApp',
        text: 'Nos pasas modelo de moto o codigo de pieza y tu ciudad.',
      },
      {
        title: 'Te enviamos opciones',
        text: 'Comparas marcas, precios y tiempos de entrega antes de pagar.',
      },
      {
        title: 'Despacho y seguimiento',
        text: 'Coordinamos envio y te mantenemos informado hasta la entrega.',
      },
    ],
    testimonialsKicker: 'Testimonios',
    testimonialsTitle: 'Confianza construida en cada pedido',
    testimonials: [
      {
        quote: 'La atencion es rapida y siempre me recomiendan la pieza correcta.',
        author: 'Jorge M. - Taller Independiente',
      },
      {
        quote: 'Me llego en 48 horas y el empaque vino impecable.',
        author: 'Diana R. - Motociclista',
      },
      {
        quote: 'Manejo flota y SAHM me mantiene el stock estable todo el mes.',
        author: 'Rider Express SAC',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Respuestas rapidas',
    faq: [
      {
        q: 'Como se si el repuesto aplica a mi moto?',
        a: 'Te pedimos marca, modelo y anio para validar compatibilidad antes de cotizar.',
      },
      {
        q: 'Hacen envios fuera de Lima?',
        a: 'Si. Enviamos a todo el pais con operadores confiables y numero de seguimiento.',
      },
      {
        q: 'Que metodos de pago aceptan?',
        a: 'Transferencia, Yape y otros medios coordinados por WhatsApp al confirmar pedido.',
      },
    ],
    step: 'Paso',
  },
  en: {
    stepsKicker: 'How to buy',
    stepsTitle: 'Simple 3-step process',
    steps: [
      {
        title: 'Message us on WhatsApp',
        text: 'Share your motorcycle model or part code and your city.',
      },
      {
        title: 'We send options',
        text: 'Compare brands, prices and delivery times before payment.',
      },
      {
        title: 'Shipping and tracking',
        text: 'We coordinate delivery and keep you updated until it arrives.',
      },
    ],
    testimonialsKicker: 'Testimonials',
    testimonialsTitle: 'Trust built on every order',
    testimonials: [
      {
        quote: 'Service is fast and they always recommend the right part.',
        author: 'Jorge M. - Independent Workshop',
      },
      {
        quote: 'It arrived in 48 hours and packaging was excellent.',
        author: 'Diana R. - Rider',
      },
      {
        quote: 'I manage a fleet and SAHM keeps my monthly stock stable.',
        author: 'Rider Express SAC',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Quick answers',
    faq: [
      {
        q: 'How do I know if a part fits my motorcycle?',
        a: 'We ask for brand, model and year to validate compatibility before quoting.',
      },
      {
        q: 'Do you ship outside Lima?',
        a: 'Yes. We ship nationwide with trusted carriers and tracking numbers.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'Bank transfer and other methods coordinated through WhatsApp at checkout.',
      },
    ],
    step: 'Step',
  },
}

export default function Confianza({ lang }) {
  const [ref, visible] = useFadeIn()
  const copy = COPY[lang]

  return (
    <section
      ref={ref}
      className={`px-6 py-16 transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <div id="como-comprar" className="rounded-3xl border border-sahm-purple/20 bg-white p-8 shadow-xl shadow-sahm-purple/10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.stepsKicker}</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">{copy.stepsTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {copy.steps.map((paso, index) => (
              <article key={paso.title} className="rounded-2xl border border-sahm-yellow/40 bg-gradient-to-br from-white to-yellow-50 p-5">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-sahm-purple">{copy.step} {index + 1}</p>
                <h3 className="mt-2 text-lg font-black text-slate-900">{paso.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{paso.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="testimonios">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.testimonialsKicker}</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">{copy.testimonialsTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.testimonials.map(item => (
              <blockquote key={item.author} className="rounded-2xl border border-sahm-purple/15 bg-white p-6 shadow-lg shadow-sahm-purple/10">
                <p className="text-slate-700">"{item.quote}"</p>
                <footer className="mt-4 text-sm font-bold text-slate-900">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div id="faq" className="rounded-3xl border border-sahm-purple/20 bg-gradient-to-br from-white to-yellow-50 p-8 shadow-lg shadow-sahm-purple/10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.faqKicker}</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">{copy.faqTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.faq.map(item => (
              <article key={item.q} className="rounded-2xl border border-sahm-yellow/40 bg-white p-5">
                <h3 className="text-base font-black text-slate-900">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
