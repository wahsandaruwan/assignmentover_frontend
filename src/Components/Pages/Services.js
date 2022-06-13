import MainButton from '../Elements/MainButton'
import ServiceCard from '../Sections/ServiceCard'
import serviceData from '../../Data/Services.json'

const Services = () => {
  return (
    <>
      <div className="page services">
        <h1 className="heading">Our Services</h1>
        <div className="tabs">
          <MainButton buttonText="Assignment Services" extraClass="active" />
          <MainButton buttonText="Research Services" />
          <MainButton buttonText="Other Services" />
        </div>
        <div className="services-grid">
          <div className="assignments">
            {serviceData.map((data, index) => {
              const { id, title, details } = data
              return <ServiceCard key={id} title={title} details={details} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
