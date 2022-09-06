// Third-party components & modules
import { Routes, Route, useLocation } from 'react-router-dom'
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
import Dashboard from './Components/Pages/Dashboard'
import Login from './Components/Pages/Login'

const App = () => {
  // Current route information
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/dashboard' ? (
        <NavBar />
      ) : (
        ''
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="features" element={<Features />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      {location.pathname !== '/login' && location.pathname !== '/dashboard' ? (
        <>
          <Footer />
          <div className="fixed-whatsapp-btn">
            <FaWhatsappSquare onClick={() => openWhatsAppClient()} />
          </div>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default App
