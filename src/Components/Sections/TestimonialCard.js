// Third-party components & modules
import { PropTypes } from 'prop-types'
import { TiStarFullOutline } from 'react-icons/ti'

// Custom styling
import './Styles/TestimonialCardStyles.css'

const TestimonialCard = ({ extraClass, id, field, review, rating, user }) => {
  return (
    <>
      <div key={id} className={`testimonial-card ${extraClass}`}>
        <h1 className="field">{field}</h1>
        <div className="review">{review}</div>
        <div className="rating">
          {Array.apply(null, { length: rating }).map((element, index) => {
            return <TiStarFullOutline />
          })}
        </div>
        <div className="user">{user}</div>
      </div>
    </>
  )
}

// Type checking
TestimonialCard.propTypes = {
  extraClass: PropTypes.string,
  field: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
}

// Default values
TestimonialCard.defaultProps = {
  extraClass: '',
  field: 'Management',
  review:
    'Thank you very much for the great output with professional references.',
  rating: 5,
  user: '@janesh31',
}

export default TestimonialCard
