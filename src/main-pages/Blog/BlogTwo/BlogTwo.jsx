import React, { useEffect, useState } from 'react';
import './BlogTwo.css';
import { MdArrowOutward } from "react-icons/md";
import { getPublishedBlogs } from '../../../api'; // Import the function
import IMAGECARD from './card.png';
import { useNavigate } from 'react-router-dom';

const BlogTwo = () => {
  const [blogs, setBlogs] = useState([]); // State to store fetched blogs
  const navigate = useNavigate();

  const handleViewCareers = () => {
    navigate('/blogthree');
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getPublishedBlogs(); // Fetch blogs from API
        console.log('Fetched blogs data:', response); // Log the entire response
        const fetchedBlogs = Array.isArray(response.data.blogs) ? response.data.blogs : [];
        
        // Sort blogs by creation date or ID
        const sortedBlogs = fetchedBlogs.sort((a, b) => {
          return new Date(b.created_at || 0) - new Date(a.created_at || 0) || b.id - a.id;
        });

        setBlogs(sortedBlogs); // Update state with fetched blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs(); // Call the fetch function
   }, []);

  // Function to format the date string
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className='blogtwo'>
      <div className="blogtwo-heading">
        <h1>Blog Post</h1>
      </div>
      <div className="blogtwo-box">
        {blogs.map((blog) => (
          <div key={blog.id} className="blogtwo-boxone">
            <img src={IMAGECARD} alt="" className='imagecard3' />
            <div className="white-phonex"></div>
            <p>{blog.title}</p> {/* Assuming blog has a title property */}
            <span >{formatDate(blog.created_at)}</span>
            <div className="read-btn">
              <button onClick={handleViewCareers}>Read <MdArrowOutward /></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogTwo;