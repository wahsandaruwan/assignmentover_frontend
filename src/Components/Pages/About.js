import AboutCard from '../Sections/AboutCard'

const About = () => {
  return (
    <>
      <div className="page about">
        <h1 className="heading">About Us</h1>
        <div className="about-info-grid">
          <AboutCard
            subHeading="Who we are?"
            details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio atque,
          eaque in, consequuntur totam quidem consequatur temporibus id
          accusantium rem animi eum quo. Minus sunt quisquam veniam similique,
          repudiandae labore qui neque facilis? Illo facere, ducimus doloremque,
          minima mollitia, exercitationem sed asperiores ipsum culpa autem
          fugiat dolorem ullam deleniti hic accusamus adipisci dolor tempore. At
          voluptate nostrum expedita dignissimos nulla alias cupiditate nobis et
          nam veritatis animi sunt beatae, eos aspernatur delectus suscipit illo
          omnis tempora! Id expedita suscipit consectetur error dolorum
          explicabo! Quos perspiciatis possimus architecto rem neque quam
          tempora incidunt omnis iste molestiae, doloribus provident magnam
          nobis harum!"
          />
        </div>
      </div>
    </>
  )
}

export default About
