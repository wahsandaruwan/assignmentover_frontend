// Custom components & modules
import TestimonialCard from '../Sections/TestimonialCard'

// Custom data
import testimonialsData from '../../Data/Testimonials.json'

const Testimonials = () => {
  return (
    <>
      <div className="page testimonials">
        <h1 className="heading">Testimonials</h1>
        <div className="testimonials-grid">
          {testimonialsData.map((data) => {
            const { id, field, review, rating, user } = data
            return (
              <TestimonialCard
                key={id}
                field={field}
                review={review}
                rating={rating}
                user={user}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Testimonials
