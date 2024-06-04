import React from 'react'
import './ProjectOne.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const ProjectOne = () => {
  var settings = {
    infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval in milliseconds (3 seconds)

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
              initialSlide: 2,
              infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
          }
        }
      ]
    };
    const scrollToProject = () => {

      const scrollDistance = 840;
  
      window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth',
      });
    };
  return (
    <section className='projectone'>
    <div className="projecteone-topic">
        <h1>Where Innovation Meets Excellence</h1>
        <p>Discover our portfolio of groundbreaking web solutions.</p>
    </div>
    <Slider {...settings} >
    <div className="projectone-box">
        
        </div>
        <div className="projectone-box">
        
        </div>
        <div className="projectone-box">
        
        </div><div className="projectone-box">
        
        </div><div className="projectone-box">
        
        </div><div className="projectone-box">
        
        </div>
    </Slider>
    <div className="projecteone-btn">
        <button onClick={scrollToProject}>View Projects <IoArrowDownCircleOutline
        className='projecte-downicon'/></button>
    </div>
</section>
  )
}

export default ProjectOne