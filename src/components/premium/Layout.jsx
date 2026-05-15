import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import TrustBar from './TrustBar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <TrustBar />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
