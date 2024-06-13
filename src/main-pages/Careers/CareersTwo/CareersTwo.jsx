import React from 'react'
import './CareersTwo.css'
import { IoSearchOutline } from "react-icons/io5";

const CareersTwo = () => {
  return (
      <div className='careertwo'>
          <div className="careertwo-heading"><h1>Open Positions</h1></div>
          <div class="search-container">
              <div className="input-wrapper">
              <IoSearchOutline className='search-icon'/>
        <input type="text" placeholder="Search Positions" className="search-input" />
            
              </div>
              <button>Search</button>
    </div>
      </div> 
)
}

export default CareersTwo