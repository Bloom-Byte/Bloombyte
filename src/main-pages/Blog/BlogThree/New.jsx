import React from 'react'
import newsData from './newsData'
import { MdArrowOutward } from "react-icons/md";
import IMAGECARD from '../BlogTwo/card.png'
import './New.css'
const New = () => {
  return (
    <section className='blogtwo2'>
          <div className="blogtwo-heading2">
              <h1>More Blog Posts</h1>
          </div>
          <div className="blogtwo-box2">
              {newsData.map((news) => (<div key={news.id} className="blogtwo-boxone2">
                <img src={IMAGECARD} alt=""  className='imagecardnew'/>
      
                  <div className="white-phonex2"></div>
                  <p>{news.content}</p>
                  <span>{news.date}</span>
                  <div className="read-btn2">
                  <button>Read <MdArrowOutward/></button>    
                  </div>
                  
              </div>
                ))}
          </div>
   </section>
  )
}

export default New