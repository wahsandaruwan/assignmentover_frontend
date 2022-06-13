// Third-party components & modules
import { PropTypes } from 'prop-types'

// Custom styling
import './Styles/AboutCardStyles.css'

const AboutCard = ({ extraClass, subHeading, details }) => {
  return (
    <>
      <div className={`about-card ${extraClass}`}>
        <h1 className="sub-heading">{subHeading}</h1>
        <div className="details">{details}</div>
      </div>
    </>
  )
}

// Type checking
AboutCard.propTypes = {
  extraClass: PropTypes.string,
  subHeading: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
}

// Default values
AboutCard.defaultProps = {
  extraClass: '',
  subHeading: 'About Us',
  details: 'Sample Details',
}

export default AboutCard
