import React from 'react'
import './More.css'
const More = () => {

    const projectData = [
        { id: 1, title: 'Platform for Outdoor Gear Company' },
        { id: 2, title: 'Platform for Outdoor Gear Company' },
        { id: 3, title: 'Platform for Outdoor Gear Company' },
        { id: 4, title: 'Platform for Outdoor Gear Company' }
      ];
  return (
      <section className='move'>
          <div className="move-heading">
          <h1>More Projects</h1>      
          </div>
        
          <div className="project-cards">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
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

export default More