import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ProjectThree.css'
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";
const ProjectThree = () => {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/projects'); 
  };

  return (
      <section className='projectree-wall'>
      <div className="projectree-top">
        <button onClick={handleBackClick}><HiMiniArrowSmallLeft /></button>
        <p><span>Project</span>/Platform for Outdoor Gear Company</p>
        <div className="top-btn">
          <button>View Project <MdArrowOutward/></button>
        </div>   
      </div>
      <div className="terraboxz-wall">
<div className="terrabox"></div>
      </div>

      
      <div className="giantbox">
        <div className="giantbox-wall">
          <div className="giantbox-one">
            <div>
          <h3>
          Project Title</h3> <p>Gear Up! E-commerce Platform for Outdoor Gear Company
            </p>
          </div>
            <div>
            <h3>
            Category</h3> <p>Logistics Solutions
            </p>
            </div>  </div>
          <div className="line">
            <hr />
            <hr />

          </div>
          <div className="line2">
            <hr />
          </div>
                      <div className="giantbox-one">
            <div>
            <h3>Project Start Date</h3>
            <p>January 1, 2022</p>
            </div>
            <div><h3>Project Start Date</h3>
            <p>2022</p></div>
          </div>
        </div>
    
      </div>
     
    </section>
  )
}

export default ProjectThree