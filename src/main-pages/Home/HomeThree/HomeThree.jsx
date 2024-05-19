import React from 'react'
import './HomeThree.css'
import { MdArrowOutward } from "react-icons/md";

const HomeThree = () => {
  return (
      <section className='homethree'>
          <div className="threewall">
              <div className="threetopic">
                  <h1>Tailored</h1>
                  <h1 className='speci'> <hr />Web Solutions</h1>
                  <h1> <span>for your Business</span></h1>
              </div>
              <div className="three-btn">
                  <button className='getbtn'>Get in Touch</button>
<button className='vbtn'> View Projects</button>
              </div>
          </div>
          <div className="three-content">
              <hr />
              <p>Web Development <MdArrowOutward className='arrowicon-tree'/></p>
              <hr />
              <p>Mobile App Development <MdArrowOutward className='arrowicon-tree'/></p>
              <hr />
              <p>E-commerce Solutions <MdArrowOutward className='arrowicon-tree'/>
              </p>
              <hr />
              <p>CRM Solutions <MdArrowOutward className='arrowicon-tree'/>
              </p>
              <hr />
              <p>Logistics Solutions <MdArrowOutward className='arrowicon-tree'/>
              </p>
              <hr />
              <p>EdTech Solutions <MdArrowOutward className='arrowicon-tree'/></p>
              
          </div>
</section>
  )
}

export default HomeThree