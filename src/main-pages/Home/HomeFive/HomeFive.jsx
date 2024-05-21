import React from 'react'
import './HomeFive.css'
import Comma from '../HomeFive/coma1.png'
import Comma2 from '../HomeFive/coma2.png'
import { GoPerson } from "react-icons/go";

const HomeFive = () => {
  return (
      <section className='five-start'>
          <div className="five-wall">
              <h1>
                  <span>Raving Clients</span><span className="break"><br /></span>
                  of Bytechain
                 
              </h1>        
          <div className="five-content">
              <p>At Bytechain, we take immense pride in the trust and satisfaction our clients have placed in us. Their success stories and testimonials are a testament to our commitment to delivering exceptional web solutions that drive growth and innovation.</p>
          </div>    
          </div>
          <div className="five-box">
              <div className="five-box1">
                  <div className="five-img1">
                  <img src={Comma} alt="" />
                  <img src={Comma2} alt="" />    
                  </div>
                  <p>"As a startup, we were looking for a reliable partner to bring our innovative idea to life. Bytechains's team exceeded our expectations with their professionalism, creativity, and commitment to delivering an outstanding web application. Their collaborative approach and attention to detail ensured that our vision was realized seamlessly."</p>
                  <div className="comment-content">
                      <div className="head-icon">
                      <GoPerson />
                      </div>
                      <div className="comment-topic">
                          <h4>Jessica Lee</h4>
                          <small>Co-Founder, InnovaTech Startup</small>
                      </div>
                  </div>
              </div>
              <div className="five-box2">
              <div className="five-img2">
                  <img src={Comma} alt="" />
                  <img src={Comma2} alt="" />    
                  </div>
                  <p>"As a startup, we were looking for a reliable partner to bring our innovative idea to life. Bytechains's team exceeded our expectations with their professionalism, creativity, and commitment to delivering an outstanding web application. Their collaborative approach and attention to detail ensured that our vision was realized seamlessly."</p>
                  <div className="comment-content">
                      <div className="head-icon">
                      <GoPerson />
                      </div>
                      <div className="comment-topic">
                      <h4>Jessica Lee</h4>
                          <small>Co-Founder, InnovaTech Startup</small>
                      </div>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default HomeFive