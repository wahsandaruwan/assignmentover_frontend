// Third-party components & modules
import { TiBook } from 'react-icons/ti'

// Custom components & modules
import CommonCard from '../Sections/CommonCard'

// Custom data
import featuresData from '../../Data/Features.json'

const Features = () => {
  return (
    <>
      <div className="page features">
        <h1 className="heading">Special Features</h1>
        <div className="features-grid">
          {featuresData.map((data) => {
            const { id, title, details } = data
            return (
              <CommonCard
                key={id}
                icon={<TiBook />}
                title={title}
                details={details}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Features
