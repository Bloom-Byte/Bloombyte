import React from 'react'
import './ServiceOne.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const ServiceOne = () => {
  const scrollToServices = () => {

    const scrollDistance = 800;

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
      <section className='serviceone'>
          <div className="serviceone-topic">
              <h1>Web Solutions for Your Business Growth</h1>
              <p>Unleash the power of innovative technology with Bytechain's expert services.</p>
          </div>
          <Slider {...settings} >
          <div className="servicone-box">
              
              </div>
              <div className="servicone-box">
              
              </div>
              <div className="servicone-box">
              
              </div><div className="servicone-box">
              
              </div><div className="servicone-box">
              
              </div><div className="servicone-box">
              
              </div>
          </Slider>
          <div className="serviceone-btn">
              <button onClick={scrollToServices}>View Services <IoArrowDownCircleOutline
              className='service-downicon'/></button>
          </div>
</section>
  )
}

export default ServiceOne