import MainButton from '../Elements/MainButton'
import ServiceCard from '../Sections/ServiceCard'
import serviceData from '../../Data/Services.json'
import { useState } from 'react'

const Services = () => {
  const [serviceType, setServiceType] = useState('Assignments')
  return (
    <>
      <div className="page services">
        <h1 className="heading">Our Services</h1>
        <div className="tabs">
          <MainButton
            buttonText="Assignment Services"
            clickFunc={() => setServiceType('Assignments')}
            extraClass="active"
          />
          <MainButton buttonText="Research Services" />
          <MainButton buttonText="Other Services" />
        </div>
        <div className="services-grid">
          <div className="assignments">
            {serviceData[0].body.map((data) => {
              const { id, title, details, type } = data
              return (
                type === 'Assignments' && (
                  <ServiceCard key={id} title={title} details={details} />
                )
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
