import React from 'react'
import './BlogThree.css'
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
const BlogThree = () => {

  const navigate = useNavigate();

  const handleBackClick = () => {
      navigate(-1); 
    };

  return (
      <section className='blogthree-wall'> 
           <div className="blog-top1">
        <button className='blog-arrowz' onClick={handleBackClick}><HiMiniArrowSmallLeft /></button>
        <p><span>Career</span>/The Rise of Headless Commerce: Unlocking Flexibility and Scalability for E-commerce Businesses</p>
      </div>
      <div className="blog-top2">
        <h2>The Rise of Headless Commerce: Unlocking Flexibility and Scalability for E-commerce Businesses</h2>
      <p>_April 15, 2023_</p>
      </div>
      <div className="blog-boxz">
        <div className="blog-boxzoo">
          
</div>
      </div>
    </section>
  )
}

export default BlogThree