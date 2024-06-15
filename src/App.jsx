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

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<BackgroungImg backgroundClass="background"><Aboutmain /></BackgroungImg>} />
        <Route path="/services" element={<BackgroungImg backgroundClass="background1"><Servicemain /></BackgroungImg>} />
        <Route path="/projects" element={<BackgroungImg backgroundClass="background1"><Projectmain /></BackgroungImg>} />
        <Route path="/projectthree" element={<BackgroungImg backgroundClass="background1"><ProjectThree /></BackgroungImg>} />
        <Route path="/careers" element={<BackgroungImg backgroundClass="background1"><Careersmain /></BackgroungImg>} />
        <Route path="/careersthree" element={<BackgroungImg backgroundClass="background1"><Careersthree /></BackgroungImg>} />
       
      </Routes>
      <HomeFooter/>
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