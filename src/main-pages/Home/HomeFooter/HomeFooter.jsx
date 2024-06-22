import React, { useEffect } from 'react'
import './HomeFooter.css'
import imagef from '../HomeFooter/mainmain.png'
import { Link, useLocation  } from 'react-router-dom'

const HomeFooter = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, [location.pathname]); // Trigger on pathname change

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top on link click
  };
  return (
      <div className='footer'>
          <div className="footer-nav">
          <Link to='/' className='flink'  onClick={handleClick}>Home</Link>
          <Link to='/about' className='flink'  onClick={handleClick}>About Us</Link>
          <Link to='/services' className='flink'  onClick={handleClick}>Services</Link>
          <Link to='/projects' className='flink'  onClick={handleClick}>Projects</Link>
          <Link to='/careers' className='flink'  onClick={handleClick}>Careers</Link>
          <Link to='/blog' className='flink'  onClick={handleClick}>Blog</Link>
          <Link to='/contact' className='flink'  onClick={handleClick}>Contact</Link>    
          </div>
          <hr />
          <div className="last">
              <img src={imagef} alt="" />
              <div className="last-footer">
             <p>&copy; 2024 Bytechain. All rights reserved.</p> 
</div>
        </div>
      </div>
  )
}

export default HomeFooter