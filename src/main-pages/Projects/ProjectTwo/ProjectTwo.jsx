import React, { useState }  from 'react'
import './ProjectTwo.css'

const ProjectTwo = () => {

    const [activeSelector, setActiveSelector] = useState('E-commerce');

    const handleSelectorClick = (selector) => {
      setActiveSelector(selector);
    };

  return (
      <section className='project-twowall'>
          <div className="projecttwo-top">
              <h1>Projects</h1>
              <div className="selectors">
              <p
            className={activeSelector === 'E-commerce' ? 'active' : ''}
            onClick={() => handleSelectorClick('E-commerce')}
          >
            E-commerce
          </p>
          <p
            className={activeSelector === 'Logistics' ? 'active' : ''}
            onClick={() => handleSelectorClick('Logistics')}
          >
            Logistics
          </p>
          <p
            className={activeSelector === 'CRM' ? 'active' : ''}
            onClick={() => handleSelectorClick('CRM')}
          >
            CRM
          </p>
          <p
            className={activeSelector === 'EdTech' ? 'active' : ''}
            onClick={() => handleSelectorClick('EdTech')}
          >
            EdTech
          </p>
          <p
            className={activeSelector === 'Others' ? 'active' : ''}
            onClick={() => handleSelectorClick('Others')}
          >
            Others
          </p>
              </div>
          </div>
   </section>
  )
}

export default ProjectTwo
