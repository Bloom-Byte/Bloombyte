import React from 'react'
import './BlogOne.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowDownCircleOutline } from "react-icons/io5";
const BlogOne = () => {

  const scrollToBlogPost = () => {

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
      <section className='blog'>
         <div className="blog-topic">
              <h1>Bytechain Blog: Insights and Innovations</h1>
              <p>We share our insights, expertise, and thought on the latest trends, technologies, and best practices in technology.</p>
          </div>
          <Slider {...settings} >
          <div className="blog-box">
              
              </div>
              <div className="blog-box">
              
              </div>
              <div className="blog-box">
              
              </div><div className="blog-box">
              
              </div><div className="blog-box">
              
              </div><div className="blog-box">
              
              </div>
          </Slider>
          <div className="blog-btn">
              <button onClick={scrollToBlogPost}>Blog Post <IoArrowDownCircleOutline
              className='career-downicon'/></button>
          </div>
</section>
  )
}

export default BlogOne