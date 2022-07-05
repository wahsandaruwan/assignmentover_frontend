// Third-party components & modules
import { useLocation } from 'react-router-dom'

// Third-party components & modules
import { Link } from 'react-router-dom'

// Custom styling
import './Styles/NavBarStlyes.css'

const NavBar = () => {
  // Current url path
  const location = useLocation()

  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <img src="./assets/logo.png" alt="Assignment Over" />
        </div>
        <div className="menu">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="services"
              className={location.pathname === '/services' ? 'active' : ''}
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              to="features"
              className={location.pathname === '/features' ? 'active' : ''}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              className={location.pathname === '/testimonials' ? 'active' : ''}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className={location.pathname === '/contact' ? 'active' : ''}
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
