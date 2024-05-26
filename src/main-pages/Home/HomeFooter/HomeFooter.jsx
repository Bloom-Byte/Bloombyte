import React from 'react'
import './HomeFooter.css'
import imagef from '../HomeFooter/mainmain.png'
import { Link } from 'react-router-dom'

const HomeFooter = () => {
  return (
      <div className='footer'>
          <div className="footer-nav">
          <Link to='/'className='flink'>Home</Link>
          <Link to='/about' className='flink'>About Us</Link>
          <Link className='flink'>Services</Link>
          <Link className='flink'>Projects</Link>
          <Link className='flink'>Careers</Link>
          <Link className='flink'>Blog</Link>
          <Link className='flink'>Contact</Link>    
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