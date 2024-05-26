import React from 'react'
import './AboutOne.css'

const AboutOne = () => {
  return (
    <section className='Abt'>
      <div className="Abt-topic">
<h1>Crafting Digital Solutions for a Thriving Future</h1>
        <p>At Bytechain, we are passionate about empowering businesses to thrive in the digital age. Our journey began over a decade ago with a shared vision to create innovative web solutions that drive growth, efficiency, and customer satisfaction.</p>     </div>
      <div className="Abt-numbers">
        <div className="Abt-numb">
          <h3>10+</h3>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="Abt-numb">
        <h3>500+</h3>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="Abt-numb">
        <h3>98%</h3>
          <p>Client Satisfaction</p>
        </div>
       
      </div>
   </section>
  )
}

export default AboutOne