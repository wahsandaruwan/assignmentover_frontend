// Third-party components & modules
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FaWhatsappSquare } from 'react-icons/fa'

// Custom components & modules
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Features from './Components/Pages/Features'
import Home from './Components/Pages/Home'
import Services from './Components/Pages/Services'
import Testimonials from './Components/Pages/Testimonials'
import Footer from './Components/Sections/Footer'
import NavBar from './Components/Sections/NavBar'
import { openWhatsAppClient } from './Helpers/OpenClients'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="features" element={<Features />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <div className="fixed-whatsapp-btn">
        <FaWhatsappSquare onClick={() => openWhatsAppClient()} />
      </div>
    </>
  )
}

export default App
