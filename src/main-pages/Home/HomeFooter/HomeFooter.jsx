import React from 'react'
import './HomeFooter.css'
import imagef from '../HomeFooter/mainmain.png'

const HomeFooter = () => {
  return (
      <div className='footer'>
          <div className="footer-nav">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>    
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