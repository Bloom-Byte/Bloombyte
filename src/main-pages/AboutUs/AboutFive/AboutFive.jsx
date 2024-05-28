import React from 'react'
import './AboutFive.css'

const AboutFive = () => {
    const smallBoxCount = 20;
    const smallBoxes = Array.from({ length: smallBoxCount });
  


  return (
      <section className='Abtfive'>
           <div className="Abtfive-topic">
              <h2>Companies We’ve <br />
              <span>Worked With</span>
              </h2>
              
              <p>Bytechain has had the privilege of collaborating with businesses across various industries, from e-commerce and logistics to CRM and EdTech.</p>    </div>
          <div className="Abtfive-box">
          {smallBoxes.map((_, index) => (   <div className="Abtfive-smallbx">
                  
              </div> ))}
              
          </div>
   </section>
  )
}

export default AboutFive