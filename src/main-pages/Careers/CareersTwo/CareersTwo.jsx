import React, { useState } from 'react'
import './CareersTwo.css'
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import jobPositions from './jobPositions';
import IMAGECARD from './card.png'

const CareersTwo = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobPositions);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    const formattedSearchTerm = searchTerm.toLowerCase().replace(/[\s\-\/]/g, '');
    const filtered = jobPositions.filter(job =>
      job.title.toLowerCase().replace(/[\s\-\/]/g, '').includes(formattedSearchTerm) ||
      job.type.toLowerCase().replace(/[\s\-\/]/g, '').includes(formattedSearchTerm) ||
      job.location.toLowerCase().replace(/[\s\-\/]/g, '').includes(formattedSearchTerm) ||
      job.salary.toLowerCase().replace(/[\s\-\/]/g, '').includes(formattedSearchTerm)
    );
    setFilteredJobs(filtered);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };


  return (
      <div className='careertwo'>
          <div className="careertwo-heading"><h1>Open Positions</h1></div>
          <div class="search-container">
              <div className="input-wrapper">
              <IoSearchOutline className='search-icon'/>
        <input type="text" placeholder="Search Positions" className="search-input"  value={searchTerm}
            onChange={handleSearch}   onKeyDown={handleKeyDown} />
            
              </div>
              <button onClick={handleSearchClick}>Search</button>
      </div>
      <div className="careertwo-areabox">
      {filteredJobs.map((job, index) => (
        <div className="careertwo-areabox1">
            <img src={IMAGECARD} alt=""  className='imagecard'/>
      
          <div className="careertwo-btns">
            <button>{job.type}</button>
            <button>{job.location}</button>
            <button>{job.salary}</button>
          </div>
          <div className="xspecial">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </div>
          <div className="apply">
          <button>Apply <MdArrowOutward className='arrow-icon'/> </button>
          </div>
        </div>
        ))}
      
      </div>
      </div> 
)
}

export default CareersTwo