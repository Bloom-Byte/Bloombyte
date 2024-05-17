import React from 'react'
import './HomeTwo.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeTwo = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    
    <section className='hometwo'>
      <div className="hometwo-content">
      <div className="topic">
        <h1>Featured <br />
          <span>Projects</span></h1>
      </div>
      <Slider {...settings}>
        <div className="card"  >
         <img src="https://www.123freevectors.com/ezoimgfmt/i2.wp.com/files.123freevectors.com/wp-content/original/112575-plain-white-blurred-background-vector.jpg?w=500&q=95&ezimgfmt=rs:500x281/rscb11/ng:webp/ngcb10" alt="" />
         <div className="card-content">
         <h4>Platform for Outdoor Gear Company</h4>   
         <p>E-commerce</p>
            </div>
         </div>
         <div className="card">
         <img src="https://www.123freevectors.com/ezoimgfmt/i2.wp.com/files.123freevectors.com/wp-content/original/112575-plain-white-blurred-background-vector.jpg?w=500&q=95&ezimgfmt=rs:500x281/rscb11/ng:webp/ngcb10" alt="" />
         <div className="card-content">
         <h4>Platform for Outdoor Gear Company</h4>   
         <p>E-commerce</p>   
         </div>
         
        </div>
        <div className="card">
        <img src="https://www.123freevectors.com/ezoimgfmt/i2.wp.com/files.123freevectors.com/wp-content/original/112575-plain-white-blurred-background-vector.jpg?w=500&q=95&ezimgfmt=rs:500x281/rscb11/ng:webp/ngcb10" alt="" />
         <div className="card-content">
         <h4>Platform for Outdoor Gear Company</h4>   
         <p>E-commerce</p>    
         </div>
         
        </div>
        <div className="card">
        <img src="https://www.123freevectors.com/ezoimgfmt/i2.wp.com/files.123freevectors.com/wp-content/original/112575-plain-white-blurred-background-vector.jpg?w=500&q=95&ezimgfmt=rs:500x281/rscb11/ng:webp/ngcb10" alt="" />
         <div className="card-content">
         <h4>Platform for Outdoor Gear Company</h4>   
         <p>E-commerce</p>      
         </div>
         
        </div>
        <div className="card">
        <img src="https://www.123freevectors.com/ezoimgfmt/i2.wp.com/files.123freevectors.com/wp-content/original/112575-plain-white-blurred-background-vector.jpg?w=500&q=95&ezimgfmt=rs:500x281/rscb11/ng:webp/ngcb10" alt="" />
         <div className="card-content">
         <h4>Platform for Outdoor Gear Company</h4>   
         <p>E-commerce</p>
      </div>
          </div>
          </Slider>
     </div>
    
      
    </section>
  )
}

export default HomeTwo