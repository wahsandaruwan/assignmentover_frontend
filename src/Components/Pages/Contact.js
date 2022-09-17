// Third-party components & modules
import { FaWhatsapp, FaEnvelopeSquare } from 'react-icons/fa'

// Custom components & modules
import CommonCard from '../Sections/CommonCard'
import ContactForm from '../Sections/ContactForm'
import { openEmailClient, openWhatsAppClient } from '../../Helpers/OpenClients'

const Contact = () => {
  return (
    <>
      <div className="page contact">
        <h1 className="heading">Contact Us</h1>
        <div className="contact-grid">
          <ContactForm extraClass="span-column" />
          <div className="other-contact-methods">
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
      </div>
    </>
  )
}

export default Contact
