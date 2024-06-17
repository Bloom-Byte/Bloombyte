import React from 'react'
import './BlogTwo.css'
import { MdArrowOutward } from "react-icons/md";
import blogData from './blogData';
import IMAGECARD from './card.png'

const BlogTwo = () => {
  return (
      <section className='blogtwo'>
          <div className="blogtwo-heading">
              <h1>Blog Post</h1>
          </div>
          <div className="blogtwo-box">
              {blogData.map((blog) => (<div key={blog.id} className="blogtwo-boxone">
                <img src={IMAGECARD} alt=""  className='imagecard2'/>
      
                  <div className="white-phonex"></div>
                  <p>{blog.content}</p>
                  <span>{blog.date}</span>
                  <div className="read-btn">
                  <button>Read <MdArrowOutward/></button>    
                  </div>
                  
              </div>
                ))}
          </div>
   </section>
  )
}

export default BlogTwo