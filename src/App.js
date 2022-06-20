// Custom components & modules
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Features from './Components/Pages/Features'
import Home from './Components/Pages/Home'
import Services from './Components/Pages/Services'
import Testimonials from './Components/Pages/Testimonials'
import Footer from './Components/Sections/Footer'
import NavBar from './Components/Sections/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Features /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
