import React, { useState, useEffect } from 'react'
import './ProjectTwo.css'
import { useNavigate } from 'react-router-dom';
import { getPublishedProjects } from '../../../api';

const ProjectTwo = () => {
    const [projects, setProjects] = useState([]);
    const [activeSelector, setActiveSelector] = useState('E-commerce');
    const [isLoading, setIsLoading] = useState(true); // New state for loading
    const navigate = useNavigate();

    const handleSelectorClick = (selector) => {
      setActiveSelector(selector);
  };

  const handleViewProject = () => {
    navigate('/projectthree');
};
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getPublishedProjects();
        console.log('Fetched projects:', response); // Log the entire response for debugging
        const fetchedProjects = response.data.projects; // Access the projects array from the response
        
        // Sort projects by creation date or ID
        const sortedProjects = fetchedProjects.sort((a, b) => {
            return new Date(b.created_at || 0) - new Date(a.created_at || 0) || b.id - a.id;
        });

        setProjects(sortedProjects); // Update the state with sorted projects
        onProjectsChange(sortedProjects.length); // Notify parent component about the number of projects
      } catch (error) {
        console.error('Error fetching published projects:', error); // Log any errors
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchProjects();
  }, []);

  return (
      <section className='project-twowall'>
          <div className="projecttwo-top">
              <h1>Projects</h1>
            
      </div>
      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div> // Inline style for loading
      ) : (
        <div className="project-cards">
                {projects && projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="white">
                        {/* Display the project image inside the white div */}
                        {project.image_urls && project.image_urls.length > 0 && (
                            <img 
                                src={project.image_urls[0]} 
                                alt={project.name} 
                                onError={(e) => {
                                    e.target.src = 'path/to/fallback/image.jpg'; // Fallback image if the original fails to load
                                }}
                            />
                        )}
                    </div>
                        <div className="projectk-content">
                      <h3>{project.name}</h3>
                     
                            <button onClick={handleViewProject}>View Project</button> 
                        </div>
                    </div>
                ))}
            </div>
      )}
   </section>
  )
}

export default ProjectTwo
