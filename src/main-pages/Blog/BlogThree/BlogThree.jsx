import React from 'react'
import './BlogThree.css'
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { MdOutlineShare } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Homefooter from '../../Home/HomeFooter/HomeFooter'
import New from './New';
const BlogThree = () => {

  const navigate = useNavigate();

  const handleBackClick = () => {
      navigate("/blog"); 
    };

    const handleShareClick = () => {
      if (navigator.share) {
        navigator.share({
          url: window.location.href,
        })
        .then(() => console.log(' Peace Share is successful'))
        .catch((error) => console.log('Peace there is a sharing failure', error));
      } else {
        alert('Peace Web Share API is not supported in your browser.');
      }
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
      <div className="china">
        <div className="china-wall">
        <div className="line4">
            <hr />
          </div>
          <p>In the ever-evolving landscape of e-commerce, businesses are constantly seeking ways to deliver exceptional customer experiences while maintaining flexibility and scalability. The traditional monolithic e-commerce platforms, while powerful, often struggle to keep up with the pace of innovation and changing customer demands. Enter headless commerce, a revolutionary approach that decouples the front-end presentation layer from the back-end commerce functionality, unlocking a world of opportunities for e-commerce businesses.</p>
          <p>In a headless commerce architecture, the front-end (the customer-facing interface) is separated from the back-end (the core commerce functionality). This separation allows businesses to choose the best-of-breed solutions for each component and seamlessly integrate them, creating a highly customized and flexible e-commerce platform.</p>
          <p>In the ever-evolving landscape of e-commerce, businesses are constantly seeking ways to deliver exceptional customer experiences while maintaining flexibility and scalability. The traditional monolithic e-commerce platforms, while powerful, often struggle to keep up with the pace of innovation and changing customer demands. Enter headless commerce, a revolutionary approach that decouples the front-end presentation layer from the back-end commerce functionality, unlocking a world of opportunities for e-commerce businesses.</p>
          <p>In a headless commerce architecture, the front-end (the customer-facing interface) is separated from the back-end (the core commerce functionality). This separation allows businesses to choose the best-of-breed solutions for each component and seamlessly integrate them, creating a highly customized and flexible e-commerce platform.</p>
          <div className="line5">
            <hr />
          </div>
        </div>
      </div>
      <div className="share-btn">
        <button onClick={handleShareClick}>Share Post <MdOutlineShare className='share-icon'/></button>
      </div>
    </section>
  )
}

export default BlogThree