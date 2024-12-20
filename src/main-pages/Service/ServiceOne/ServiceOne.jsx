import React from "react";
import "./ServiceOne.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const ServiceOne = () => {
  const scrollToServices = () => {
    const scrollDistance = 840;

    window.scrollTo({
      top: scrollDistance,
      behavior: "smooth",
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="serviceone">
      <div className="serviceone-topic">
        <h1>Web Solutions for Your Business Growth</h1>
        <p>
          Unleash the power of innovative technology with ByteChain&apos;s
          expert services.
        </p>
      </div>
      <Slider {...settings}>
        <div className="servicone-box">
          <img src="https://cdn.dribbble.com/userupload/15973642/file/original-9b1256bc0b31d08e471519037b3844e5.png?resize=1200x900&vertical=center" />
        </div>
        <div className="servicone-box">
          <img src="https://cdn.dribbble.com/userupload/17300365/file/original-b4c945c107899fba3e5880552cc42784.png?resize=1200x900&vertical=center" />
        </div>
        <div className="servicone-box">
          <img src="https://cdn.dribbble.com/userupload/17299496/file/original-44214a4ccaa445d1b78f0b89935c9340.png?resize=1200x900&vertical=center" />
        </div>
        <div className="servicone-box">
          <img
            src="https://cdn.dribbble.com/userupload/15520660/file/original-c9c93736cd28ab3b819de3428b7a9500.png?resize=1200x900&vertical=center"
            alt=""
          />
        </div>
        <div className="servicone-box">
          <img src="https://cdn.dribbble.com/userupload/13454252/file/original-afae7c7dc10568dcf547afe18db4e3f8.png?resize=1200x900&vertical=center" />
        </div>
        <div className="servicone-box">
          <img
            src="https://cdn.dribbble.com/userupload/16584512/file/original-1f2ffe3e1a941a60dd7f6d58b387d863.jpg?resize=1200x900&vertical=center"
            alt=""
          />
        </div>
        <div className="servicone-box">
          <img src="https://cdn.dribbble.com/userupload/17204972/file/original-4f45759edd2f403b619bab0ce5b165e7.jpg?resize=1200x900&vertical=center" />
        </div>
      </Slider>
      <div className="serviceone-btn">
        <button onClick={scrollToServices}>
          View Services{" "}
          <IoArrowDownCircleOutline className="service-downicon" />
        </button>
      </div>
    </section>
  );
};

export default ServiceOne;
