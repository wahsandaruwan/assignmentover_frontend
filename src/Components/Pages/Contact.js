// Third-party components & modules
import { FaWhatsapp, FaEnvelopeSquare } from 'react-icons/fa'

// Custom components & modules
import CommonCard from '../Sections/CommonCard'
import ContactForm from '../Sections/ContactForm'

const Contact = () => {
  // Function to open email client
  const openEmailClient = () => {
    window.location.href = 'mailto:info@assignmentover.com'
  }

  // Function to open whatsapp client
  const openWhatsAppClient = () => {
    window.open('https://wa.me/0773024723', '_blank')
  }

  return (
    <>
      <div className="page contact">
        <h1 className="heading">Contact Us</h1>
        <div className="contact-grid">
          <ContactForm extraClass="span-column" />
          <CommonCard
            icon={<FaWhatsapp />}
            title="WhatsApp"
            details="+94 77 302 4723"
            clickFunc={openWhatsAppClient}
          />
          <CommonCard
            icon={<FaEnvelopeSquare />}
            title="Email"
            details="info@assignmentover.com"
            clickFunc={openEmailClient}
          />
        </div>
      </div>
    </>
  )
}

export default Contact
