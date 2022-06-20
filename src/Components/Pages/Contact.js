// Third-party components & modules
import { FaWhatsapp, FaEnvelopeSquare } from 'react-icons/fa'

// Custom components & modules
import CommonCard from '../Sections/CommonCard'
import ContactForm from '../Sections/ContactForm'

const Contact = () => {
  return (
    <>
      <div className="page contact">
        <h1 className="heading">Contact</h1>
        <div className="contact-grid">
          <ContactForm extraClass="span-column" />
          <CommonCard
            icon={<FaWhatsapp />}
            title="WhatsApp"
            details="+94 77 302 4723"
          />
          <CommonCard
            icon={<FaEnvelopeSquare />}
            title="Email"
            details="info@assignmentover.com"
          />
        </div>
      </div>
    </>
  )
}

export default Contact
