// Third-party components & modules
import { PropTypes } from 'prop-types'
import { TiDocumentText } from 'react-icons/ti'

// Custom styling
import './Styles/CommonCardStyles.css'

const CommonCard = ({ icon, title, details, clickFunc }) => {
  return (
    <>
      <div className="common-card" onClick={() => clickFunc()}>
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
        <div className="details">{details}</div>
      </div>
    </>
  )
}

// Type checking
CommonCard.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  clickFunc: PropTypes.func,
}

// Default values
CommonCard.defaultProps = {
  icon: <TiDocumentText />,
  title: 'Assignment Writing',
  details: `We perfectly do any kind of Assignment Writing.`,
}

export default CommonCard
