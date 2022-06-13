// Third-party components & modules
import { PropTypes } from 'prop-types'
import { TiDocumentText } from 'react-icons/ti'

// Custom styling
import './Styles/ServiceCardStyles.css'

const ServiceCard = ({ title, details }) => {
  return (
    <>
      <div className="service-card">
        <div className="icon">
          <TiDocumentText />
        </div>
        <div className="title">{title}</div>
        <div className="details">{details}</div>
      </div>
    </>
  )
}

// Type checking
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
}

// Default values
ServiceCard.defaultProps = {
  title: 'Assignment Writing',
  details: `We perfectly do any kind of Assignment Writing.`,
}

export default ServiceCard
