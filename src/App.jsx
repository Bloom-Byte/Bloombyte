import React, { useEffect } from 'react'
import Home from './main-pages/Home/HomeMain'
import HomeFooter from './main-pages/Home/HomeFooter/HomeFooter'
import Navbar from './Navbar/Navbar'
import Aboutmain from './main-pages/AboutUs/Aboutmain'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Servicemain from './main-pages/Service/Servicemain'
import Projectmain from './main-pages/Projects/Projectmain'
import ProjectThree from './main-pages/Projects/ProjectThree/ProjectThree'
import Careersmain from './main-pages/Careers/Careersmain'
import Careersthree from './main-pages/Careers/Careersthree/Careersthree'
import Blogmain from './main-pages/Blog/Blogmain'
import BlogThree from './main-pages/Blog/BlogThree/BlogThree'
import Contactmain from './main-pages/Contact/Contactmain'
import SBlogThree from './main-pages/Blog/BlogThree/SBlogThree'
import SCareersthree from './main-pages/Careers/Careersthree/SCareersthree'
import SProjectThree from './main-pages/Projects/ProjectThree/SProjectThree'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/projectthree" element={<BackgroungImg backgroundClass="background1"><SProjectThree /></BackgroungImg>} />
      <Route path="/careersthree" element={<BackgroungImg backgroundClass="background1"><SCareersthree /></BackgroungImg>} />
      <Route path="/blogthree" element={<BackgroungImg backgroundClass="background1"><SBlogThree /></BackgroungImg>} />
      
        <Route path="*" element={
          <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<BackgroungImg backgroundClass="background"><Aboutmain /></BackgroungImg>} />
        <Route path="/services" element={<BackgroungImg backgroundClass="background1"><Servicemain /></BackgroungImg>} />
        <Route path="/projects" element={<BackgroungImg backgroundClass="background1"><Projectmain /></BackgroungImg>} />
         <Route path="/careers" element={<BackgroungImg backgroundClass="background1"><Careersmain /></BackgroungImg>} />
        <Route path="/blog" element={<BackgroungImg backgroundClass="background1"><Blogmain /></BackgroungImg>} />
        <Route path="/contact" element={<BackgroungImg backgroundClass="background1"><Contactmain /></BackgroungImg>} />
       
      </Routes>
            <HomeFooter />
            </>
    } />
       </Routes>
  </Router>
  )
}

const BackgroungImg = ({ backgroundClass, children }) => {
 
  useEffect(() => {
    document.body.className = backgroundClass;

 
    return () => {
      document.body.className = '';
    };
  }, [backgroundClass]);

  return children;
};


export default App