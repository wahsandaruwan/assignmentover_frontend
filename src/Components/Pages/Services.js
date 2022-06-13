// Inbuilt components & modules
import { useState } from 'react'

// Third-party components & modules
import { TiDocumentText, TiChartPieOutline, TiEdit } from 'react-icons/ti'

// Custom components & modules
import MainButton from '../Elements/MainButton'
import ServiceCard from '../Sections/ServiceCard'

// Custom data
import serviceData from '../../Data/Services.json'

const Services = () => {
  // Service state
  const [serviceType, setServiceType] = useState('Assignments')

  return (
    <>
      <div className="page services">
        <h1 className="heading">Our Services</h1>
        <div className="tabs">
          <MainButton
            buttonText="Assignment Services"
            clickFunc={() => setServiceType('Assignments')}
            extraClass={serviceType === 'Assignments' && 'active'}
          />
          <MainButton
            buttonText="Research Services"
            clickFunc={() => setServiceType('Research')}
            extraClass={serviceType === 'Research' && 'active'}
          />
          <MainButton
            buttonText="Other Services"
            clickFunc={() => setServiceType('Other')}
            extraClass={serviceType === 'Other' && 'active'}
          />
        </div>
        <div className="services-grid">
          {serviceType === 'Assignments' ? (
            <div className="service-type">
              {serviceData[0].body.map((data) => {
                const { id, title, details, type } = data
                return (
                  type === 'Assignments' && (
                    <ServiceCard
                      key={id}
                      icon={<TiDocumentText />}
                      title={title}
                      details={details}
                    />
                  )
                )
              })}
            </div>
          ) : serviceType === 'Research' ? (
            <div className="service-type">
              {serviceData[1].body.map((data) => {
                const { id, title, details, type } = data
                return (
                  type === 'Research' && (
                    <ServiceCard
                      key={id}
                      icon={<TiChartPieOutline />}
                      title={title}
                      details={details}
                    />
                  )
                )
              })}
            </div>
          ) : (
            <div className="service-type">
              {serviceData[2].body.map((data) => {
                const { id, title, details, type } = data
                return (
                  type === 'Other' && (
                    <ServiceCard
                      key={id}
                      icon={<TiEdit />}
                      title={title}
                      details={details}
                    />
                  )
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Services
