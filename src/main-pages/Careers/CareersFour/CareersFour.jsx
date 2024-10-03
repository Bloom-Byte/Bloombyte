import React from 'react'
import './CareersFour.css'
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { SlCloudUpload } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
const CareersFour = () => {
  const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/careersthree'); 
      };
  return (
  <section className='careersfour-wall'>
      <div className="careerfour-top">
        <button className='arrowz' onClick={handleBackClick}><IoIosArrowBack /></button>
        <p><span>Career/Senior Web Developer</span>/Apply</p>
       
          </div>
          <div className='project-gap'>
          <div className='project-input-container'>
        <label htmlFor="name" className='project-label'>Full Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          className='project-input' 
          placeholder="Full Name"
        />
      </div>
      <div className='project-input-container'>
        <label htmlFor="name" className='project-label'>Email Address</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          className='project-input' 
          placeholder="Email Address"
        />
      </div>
      <div className='project-input-container'>
  <label htmlFor="name" className='project-label'>Phone Number</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          className='project-input' 
          placeholder="Phone Number"
        />
      </div>
      <div className='project-input-container'>
        <label htmlFor="linkedin" className='project-label'>LinkedIn URL</label>
        <input 
          type="text" 
          id="linkedin" 
          name="linkedin" 
          className='project-input' 
          placeholder="LinkedIn URL"
        />
      </div>
      <div className='project-input-container'>
        <label htmlFor="github" className='project-label'>Github URL (optional)</label>
        <input 
          type="text" 
          id="github" 
          name="github" 
          className='project-input' 
          placeholder="GitHub URL"
        />
      </div>
      <div className='project-input-container'>
        <label htmlFor="name" className='project-label'>Portfolio URL (optional)</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          className='project-input' 
          placeholder="Portfolio URL"
        />
      </div>
      <div className='project-input-container'>
        <label htmlFor="fitForRole" className='project-label'>Why you think you are fit for this role?</label>
        <input 
          type="text" 
          id="fitForRole" 
          name="fitForRole" 
          className='project-large' 
          placeholder="Why you think you are fit for this role?"
        />
      </div>
      <div className="file-upload-container">
  <div className="file-upload-box">
    <div className="file-upload-content">
      <SlCloudUpload className="file-upload-icon" />
      <p className="file-upload-text">
      Choose images, videos or drag and drop here
      </p>
    </div>
    <input type="file" id="files" name="files"  multiple className="file-upload-input" />
    <label htmlFor="files" className="file-upload-label">Cover Image</label>
  </div>
</div>
<div className="button-container">
  <button 
    type="submit" 
    className="submit-button"
  >
    Continue
  </button>
  
</div>
      </div>
      
  </section>
  )
}

export default CareersFour