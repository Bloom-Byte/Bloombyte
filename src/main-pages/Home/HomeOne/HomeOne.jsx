import React from 'react'
import './HomeOne.css'
import { MdArrowOutward } from "react-icons/md";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const HomeOne = () => {
  return (
    <section>
      <div className="home-content">
        <div className="home-words">
<h1>Innovative Web and Mobile Solutions 
          </h1>
          <p>Bytechain crafts cutting-edge Web applications and Mobile to help your business thrive in the digital age.</p>
         
        </div>
        <div className="home-icon">
          <button className='getintouch'>Get in Touch <MdArrowOutward /></button>
          <button className='viewproject'> View Projects</button>
        </div>
        <div className="scroll-icon">
          <IoArrowDownCircleOutline className='down-icon'/>
        </div>
      </div>
    </section>
  )
}

export default HomeOne