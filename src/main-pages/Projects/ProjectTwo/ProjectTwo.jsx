import React, { useState }  from 'react'
import './ProjectTwo.css'

const ProjectTwo = () => {

    const [activeSelector, setActiveSelector] = useState('E-commerce');

    const handleSelectorClick = (selector) => {
      setActiveSelector(selector);
  };
  
  const projects = [
    { id: 1, title: 'Platform for Outdoor Gear Company', categories: ['E-commerce', 'Logistics'] },
    { id: 2, title: 'Logistics Management System', categories: ['E-commerce',, 'EdTech'] },
    { id: 3, title: 'CRM for Small Businesses', categories: ['E-commerce', 'CRM','Others'] },
    { id: 4, title: 'Online Learning Platform', categories: ['E-commerce','Others'] },
    { id: 5, title: 'Miscellaneous Project', categories: ['E-commerce', 'EdTech'] },
    { id: 6, title: 'All Data Project', categories: ['E-commerce', 'CRM'] },
      ];
  

const filteredProjects = projects.filter(project => project.categories.includes(activeSelector));

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
      <div className="project-cards">
                {filteredProjects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="white"></div>
                        <div className="projectk-content">
                            <h3>{project.title}</h3>
                            <button>View Project</button>
                        </div>
                    </div>
                ))}
            </div>
   </section>
  )
}

export default ProjectTwo
