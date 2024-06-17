import React from 'react'
import './CareersOne.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { IoArrowDownCircleOutline } from "react-icons/io5";


const CareersOne = () => {

  const scrollToCareer = () => {

    const scrollDistance = 840;

    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth',
    });
  };



  var settings = {
    infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 2000, 

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

  return (
      <section className='careerone'>
           <div className="careerone-topic">
              <h1>Join the Bytechain Team</h1>
              <p>We are passionate about creating innovative web solutions that empower businesses to thrive in the digital age.</p>
          </div>
          <Slider {...settings} >
          <div className="careerone-box">
              
              </div>
              <div className="careerone-box">
              
              </div>
              <div className="careerone-box">
              
              </div><div className="careerone-box">
              
              </div><div className="careerone-box">
              
              </div><div className="careerone-box">
              
              </div>
          </Slider>
          <div className="careerone-btn">
              <button onClick={scrollToCareer}>Open Positions <IoArrowDownCircleOutline
              className='career-downicon'/></button>
          </div>
    </section>
  )
}

export default CareersOne