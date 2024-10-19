import React, { useState, useEffect } from 'react'
import './CareersTwo.css'
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import IMAGECARD from './card.png'
import { useNavigate } from 'react-router-dom';
import { getOpenJobOpenings } from '../../../api'; // Import the API function

const CareersTwo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const response = await getOpenJobOpenings();
        if (response.success && Array.isArray(response.data.job_openings)) {
          setJobs(response.data.job_openings);
          setFilteredJobs(response.data.job_openings);
        } else {
          throw new Error('Invalid response format or no job openings found');
        }
      } catch (error) {
        console.error('Error fetching job openings:', error);
        setError('Failed to fetch job openings. Please try again later.');
        setJobs([]);
        setFilteredJobs([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const formatSalaryInNaira = (salary) => {
    // Check if salary is a valid number
    const numericSalary = Number(salary);
    if (isNaN(numericSalary)) {
      return salary; // Return the original value if it's not a number
    }
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numericSalary);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Search term:', searchTerm);
    console.log('All jobs:', jobs);

    const formattedSearchTerm = searchTerm.toLowerCase().trim();
    const filtered = jobs.filter(job => {
      console.log('Processing job:', job); // Log each job object

      // Safely access properties
      const title = job.title || '';
      const jobType = job.job_type || '';
      const location = job.location || '';
      const salary = job.salary ? job.salary.toString() : '';

      const matchTitle = title.toLowerCase().includes(formattedSearchTerm);
      const matchType = jobType.toLowerCase().includes(formattedSearchTerm);
      const matchLocation = location.toLowerCase().includes(formattedSearchTerm);
      const matchSalary = salary.toLowerCase().includes(formattedSearchTerm);
      
      console.log(`Job ${job.id} - Title: ${matchTitle}, Type: ${matchType}, Location: ${matchLocation}, Salary: ${matchSalary}`);
      
      return matchTitle || matchType || matchLocation || matchSalary;
    });

    console.log('Filtered jobs:', filtered);
    setFilteredJobs(filtered);
    
    document.activeElement.blur();
    window.scrollTo({
      top: window.scrollY + 100,
      behavior: 'smooth'
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleViewCareers = () => {
    navigate('/careersthree');
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='careertwo'>
      <div className="careertwo-heading"><h1>Open Positions</h1></div>
      <div className="search-container">
        <div className="input-wrapper">
          <IoSearchOutline className='search-icon'/>
          <input 
            type="text" 
            placeholder="Search Positions" 
            className="search-input"  
            value={searchTerm}
            onChange={handleSearch}   
            onKeyDown={handleKeyDown} 
          />
        </div>
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div className="careertwo-areabox">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div className="careertwo-areabox1" key={job.id}>
              <img src={IMAGECARD} alt=""  className='imagecard'/>
              <div className="careertwo-btns">
                <button>{capitalizeFirstLetter(job.job_type)}</button>
                <button>Remote</button>
                <button>{job.salary ? formatSalaryInNaira(job.salary) : 'Salary not specified'}</button>
              </div>
              <div className="xspecial">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
              </div>
              <div className="apply">
                <button onClick={handleViewCareers}>Apply <MdArrowOutward className='arrow-icon'/> </button>
              </div>
            </div>
          ))
        ) : (
          <div>No job openings found.</div>
        )}
      </div>
    </div> 
  )
}

export default CareersTwo
