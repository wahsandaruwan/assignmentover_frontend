// Custom components & modules
import AboutCard from '../Sections/AboutCard'

const About = () => {
  return (
    <>
      <div className="page about">
        <h1 className="heading">About Us</h1>
        <div className="about-info-grid">
          <AboutCard
            extraClass="span-column"
            subHeading="Who we are?"
            details="One of the greatest assignment writing services in the globe is AssignmentOver.com. The major goal of the organization is to deliver high-quality services to students in the most straightforward manner feasible. We used to observe a lot of students having a lot of trouble completing their academic projects, so we decided to help them out by providing custom academic writing services. Custom AssignmentOver.com has employed one of the top groups of writers with the goal of offering par excellence services to our valued clients. Individually, each writer possesses exceptional writing skills as well as academic field expertise; as a result, we can write flawless essays, dissertations, theses, case studies, projects, mini projects, and any other academic assignments on any topic, as well as IT services and website creations with maintenance, ranging from the most complex to the simplest."
          />
          <AboutCard
            extraClass="highlight"
            subHeading="Our speciality"
            details="Our skilled writers work tirelessly to provide students with papers in a variety of fields. The majority of the time, the topic can be challenging, but we do our best to answer the customer's questions and assist them with their projects. It's challenging to balance studies and work. This is why our writers handle your projects so that you may devote your time to further study or office work. We provide students with high-quality papers that are free of plagiarism."
          />
          <AboutCard
            extraClass="highlight"
            subHeading="Process we follow"
            details="We follow a pretty straightforward procedure. Our customer service representatives are always available to assist you. Even after your project has been submitted, we make sure that the customer receives a prompt answer. We have a lot of repeat customers, and it's a pleasure to assist them with their complex research projects."
          />
          <AboutCard
            extraClass="span-column"
            subHeading="Quality output"
            details="At AssignmentOver.com, we have a very high-quality standard, thus none of our customers have ever received low-quality paper. Apart from assisting with professional and best academic writing, AssignmentOver.com is always willing to support all of their customers by removing their ambiguities and responding to all of their questions through their friendly and loyal customer service. Furthermore, many students from all over the world want assignment writing assistance, and we are happy to assist them. So, no matter where you are in the world, if you require essay writing assistance, simply contact us via WhatsApp or customer care inquiry."
          />
        </div>
      </div>
    </>
  )
}

export default About
