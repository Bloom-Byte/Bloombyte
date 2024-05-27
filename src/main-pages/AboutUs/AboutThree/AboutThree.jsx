import React from 'react'
import './AboutThree.css'
import teamData from './teamData';
const AboutThree = () => {
  return (
      <section className='Abtree'>
           <div className="Abtree-topic">
              <h2>Our Team</h2>
              <p>At the core of Bytechain's success lies a talented and passionate team of developers, designers, project managers, and industry experts. With a diverse range of skills and expertise, our team members work in tandem to deliver innovative solutions that address complex challenges.</p>
          </div>
          <div className="Abtree-circle">
          {teamData.map((member, index) => (
          <div className="circle-content" key={index}>
            <div className="cir"></div>
            <h4>{member.name}</h4>
            <span>{member.role}</span>
          </div>
        ))}
          </div>
    </section>
  )
}

export default AboutThree