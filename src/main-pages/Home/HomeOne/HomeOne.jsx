import React, { useRef, useEffect }  from 'react'
import './HomeOne.css'
import { MdArrowOutward } from "react-icons/md";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const HomeOne = () => {

  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('click', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('click', handleScroll);
      }
    };
  }, []);


  return (
    <section className='Homeone'>
      <div className="home-content">
        <div className="home-words">
<h1>Innovative Web and Mobile Solutions 
          </h1>
          <p>Bytechain crafts cutting-edge Web applications and Mobile to help your business thrive in the digital age.</p>
         
        </div>
        <div className="home-icon">
          <button className='getintouch'>Get in Touch <MdArrowOutward /></button>
          <button className='viewproject'> View Projects</button>
        </div>
        <div className="scroll-icon" ref={scrollRef}>
          <IoArrowDownCircleOutline className='down-icon'/>
        </div>
      </div>
    </section>
  )
}

export default HomeOne