import React from 'react'
import './jobs.css'
import IMAGECARD from '../CareersTwo/card.png'
import { MdArrowOutward } from "react-icons/md";


const jobs = () => {
    const jobData = [

            {
              type: 'Contract',
              location: 'Remote',
              salary: '₦200,000',
              title: 'Senior Web Developer',
              description: 'We are seeking an experienced Senior Web Developer to join our dynamic team.'
            },
            {
              type: 'Full-time',
              location: 'On-site',
              salary: '₦300,000',
              title: 'Junior Web Developer',
              description: 'We are seeking an enthusiastic Junior Web Developer to join our growing team.'
            },
            {
              type: 'Part-time',
              location: 'Remote',
              salary: '₦150,000',
              title: 'Frontend Developer',
              description: 'We are seeking an experienced Senior Web Developer to join our dynamic team.'
            },
            {
              type: 'Full-time',
              location: 'On-site',
              salary: '₦400,000',
              title: 'Backend Developer',
              description: 'We are seeking an experienced Senior Web Developer to join our dynamic team.'
            },  ];
  return (
      <section className='move2'>
           <div className="move-heading2">
          <h1>Related Jobs</h1>      
          </div>
          <div className="careertwo-areabox2">
      {jobData.map((job, index) => (
        <div className="careertwo-areabox12">
            <img src={IMAGECARD} alt=""  className='imagecard2'/>
      
          <div className="careertwo-btns2">
            <button>{job.type}</button>
            <button>{job.location}</button>
            <button>{job.salary}</button>
          </div>
          <div className="xspecial2">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </div>
          <div className="apply2">
          <button>Apply <MdArrowOutward className='arrow-icon2'/> </button>
          </div>
        </div>
        ))}
      
      </div>
   </section>
  )
}

export default jobs