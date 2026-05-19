import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import TrustBar from './TrustBar'

export default function Layout({ children }) {
  return (
    <>
      <a href="#contenido-principal" className="skip-link">Saltar al contenido</a>
      <Navbar />
      <TrustBar />
      <div id="contenido-principal" tabIndex={-1}>
        {children}
      </div>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
