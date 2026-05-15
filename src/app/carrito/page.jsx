import CartClient from '../../components/premium/CartClient'

export const metadata = {
  title: 'Mi pedido',
  description: 'Arma tu pedido SAHM y envialo por WhatsApp.',
}

export default function CartPage() {
  return (
    <main className="min-h-screen bg-sahm-cream px-4 pb-24 pt-8 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <CartClient />
      </div>
    </main>
  )
}
