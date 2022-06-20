// Third-party components & modules
import { PropTypes } from 'prop-types'

// Custom components & modules
import InputBox from '../Elements/InputBox'
import MainButton from '../Elements/MainButton'
import TextArea from '../Elements/TextArea'

// Custom styling
import './Styles/ContactFormStyles.css'

const ContactForm = ({ extraClass }) => {
  return (
    <>
      <div className={`form contact-form ${extraClass}`}>
        <div className="col">
          <InputBox inputType="text" inputPlaceholder="Your Name..." />
          <InputBox inputType="text" inputPlaceholder="Your Email..." />
          <InputBox inputType="text" inputPlaceholder="Your Phone Number..." />
        </div>
        <div className="col">
          <TextArea inputPlaceholder="Message..." />
          <MainButton buttonText="Send Message" />
        </div>
      </div>
    </>
  )
}

// Type checking
ContactForm.propTypes = {
  extraClass: PropTypes.string,
}

// Default values
ContactForm.defaultProps = {
  extraClass: '',
}

export default ContactForm
