import React from 'react'
import './Careersthree.css'
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";
import JOBS from '../jobs/jobs'
import Homefooter from '../../Home/HomeFooter/HomeFooter'
import { useNavigate } from 'react-router-dom';
const Careersthree = () => {
  const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); 
      };


  return (
      <section className='careerthree-wall'>
            <div className="careertree-top">
        <button className='arrowz' onClick={handleBackClick}><HiMiniArrowSmallLeft /></button>
        <p><span>Career</span>/Senior Web Developer</p>
        <div className="top-btnz">
          <button>Apply <MdArrowOutward/></button>
        </div>   
          </div>
          <div className="careerbox">
        <div className="careerbox-wall">
          <div className="careerbox-one">
            <div>
          <h3>
          Job Title</h3> <p>Senior Web Developer
            </p>
          </div>
            <div>
            <h3>
            Job Type</h3> <p>Contract
            </p>
            </div>  </div>
          <div className="linez">
            <hr />
            <hr />

          </div>
          <div className="linez2">
            <hr />
          </div>
                      <div className="careerbox-one erros">
            <div>
            <h3>Location</h3>
            <p>Remote</p>
            </div>
            <div><h3>Compensation</h3>
            <p>₦ 200,000</p></div>
          </div>
          
        </div>
       
          </div>
          <div className="topic-boxz">
      <div className="topic-wally">
          <h3>Job Description</h3>
          <p>We are seeking an experienced Senior Web Developer to join our dynamic team. In this role, you will work closely with cross-functional teams to develop and maintain complex web applications using the latest technologies and frameworks. You will also have the opportunity to mentor junior developers and contribute to our best practices and coding standards.</p>
    </div>
          </div>
          <div className="topic-boxz">
      <div className="topic-wally">
          <h3>Key Responsibilities</h3>
          <p className='spelz'> <ul><li>Develop and maintain responsive, high-performance web applications</li>
            <li>Collaborate with designers, project managers, and other stakeholders throughout the project lifecycle</li>
            <li>Implement best practices for code quality, maintainability, and scalability</li>
                      <li>Mentor and provide guidance to junior developers</li>
                      <li>Stay up-to-date with emerging web technologies and industry trends</li>
       </ul>
          </p>
    </div>
          </div>
          <div className="topic-boxz">
      <div className="topic-wally">
          <h3>Qualifications</h3>
          <p className='spelz'>  <ul><li>5+ years of experience in web development</li>
            <li>Expertise in React, Node.js, and modern JavaScript frameworks</li>
            <li>Strong knowledge of HTML5, CSS3, and responsive design principles</li>
                      <li>Experience with Agile methodologies and version control systems</li>
                      <li>Excellent problem-solving and communication skills</li>
                      <li>Bachelor's degree in Computer Science or a related field (or equivalent experience)</li>
          </ul>        
          </p>
                  
              </div>
          </div>
          <div className="ring-start">
        <div className="ring-wall">
        
          <div className="line3">
            <hr />
          </div>
           
</div>
      </div>
     
    </section>
  )
}

export default Careersthree