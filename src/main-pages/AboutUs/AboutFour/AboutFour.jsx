import React from 'react'
import './AboutFour.css'
import impactData from './impactData'

const AboutFour = () => {
  return (
      <section className='Abtfour'>
            <div className="Abtfour-topic">
              <h2>Our Impact</h2>
              <p>Over the years, Bytechain has had the privilege of collaborating with businesses across various industries, from e-commerce and logistics to CRM and EdTech. Our portfolio showcases a diverse range of successful projects, each one a testament to our expertise and commitment to delivering transformative digital solutions.</p>    </div>
          
              {impactData.map((categoryData, index) => (
        <div key={index} className="four-blue">
          <h4>{categoryData.category}</h4>
          <div className="fivehun">
            <span>{categoryData.stats[0].value}</span>
            <p>{categoryData.stats[0].description}</p>
          </div>
          <hr />
          <div className="ninetyf">
            <span>{categoryData.stats[1].value}</span>
            <p>{categoryData.stats[1].description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default AboutFour