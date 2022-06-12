// Third-party components & modules
import { PropTypes } from 'prop-types'

// Custom styling
import './Styles/AboutCardStyles.css'

const AboutCard = ({ subHeading, details }) => {
  return (
    <>
      <div className="about-card">
        <h1 className="sub-heading">Who we are?</h1>
        <div className="details">{details}</div>
      </div>
    </>
  )
}

// Type checking
AboutCard.propTypes = {
  subHeading: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
}

// Default values
AboutCard.defaultProps = {
  subHeading: 'About Us',
  details: 'Sample Details',
}

export default AboutCard
