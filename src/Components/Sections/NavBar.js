import { useState } from 'react'

// Third-party components & modules
import { Link } from 'react-router-dom'

// Custom styling
import './Styles/NavBarStlyes.css'

const NavBar = () => {
  // Menu active state
  const [active, setActive] = useState('home')
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <img src="./assets/logo.png" alt="Assignment Over" />
        </div>
        <div className="menu">
          <li>
            <Link
              to="/"
              className={active === 'home' && 'active'}
              onClick={() => setActive('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className={active === 'about' && 'active'}
              onClick={() => setActive('about')}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="services"
              className={active === 'services' && 'active'}
              onClick={() => setActive('services')}
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              to="features"
              className={active === 'features' && 'active'}
              onClick={() => setActive('features')}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              className={active === 'testimonials' && 'active'}
              onClick={() => setActive('testimonials')}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className={active === 'contact' && 'active'}
              onClick={() => setActive('contact')}
            >
              Contact Us
            </Link>
          </li>
        </div>
      </div>
    </>
  )
}

export default NavBar
