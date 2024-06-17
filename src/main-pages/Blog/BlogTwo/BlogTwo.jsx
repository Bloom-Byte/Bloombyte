import React from 'react'
import './BlogTwo.css'
import { MdArrowOutward } from "react-icons/md";
import blogData from './blogData';
import IMAGECARD from './card.png'
import { useNavigate } from 'react-router-dom';

const BlogTwo = () => {
  const navigate = useNavigate();

  const handleViewCareers = () => {
    navigate('/blogthree');
};
  return (
      <section className='blogtwo'>
          <div className="blogtwo-heading">
              <h1>Blog Post</h1>
          </div>
          <div className="blogtwo-box">
              {blogData.map((blog) => (<div key={blog.id} className="blogtwo-boxone">
                <img src={IMAGECARD} alt=""  className='imagecard3'/>
      
                  <div className="white-phonex"></div>
                  <p>{blog.content}</p>
                  <span>{blog.date}</span>
                  <div className="read-btn">
                  <button onClick={handleViewCareers}>Read <MdArrowOutward/></button>    
                  </div>
                  
              </div>
                ))}
          </div>
   </section>
  )
}

export default BlogTwo