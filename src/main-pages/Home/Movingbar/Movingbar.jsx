import React from 'react'
import './Movingbar.css'
import { PiStarFourFill } from "react-icons/pi";

const Movingbar = () => {
  return (
      <div className='bar'> <div className="whitebar">
          <div className='roll'>
              <div className="roll-content">
              <PiStarFourFill className='iconstar'/>
              App Development    
              </div>
              <div className="roll-content">
              <PiStarFourFill className='iconstar'/>
              E-commerce Solutions     
              </div>
              <div className="roll-content">
              <PiStarFourFill  className='iconstar'/>
              Website Development
                 
              </div>
              <div className="roll-content">
              <PiStarFourFill  className='iconstar'/>
              UI/UX Design Services
              </div>
              <div className="roll-content">
              <PiStarFourFill  className='iconstar'/>
                  
              Online Store Development
              </div>
          </div>
          
      </div></div>
  )
}

export default Movingbar