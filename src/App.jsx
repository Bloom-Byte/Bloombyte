import React, { useEffect } from 'react'
import Home from './main-pages/Home/HomeMain'
import HomeFooter from './main-pages/Home/HomeFooter/HomeFooter'
import Navbar from './Navbar/Navbar'
import Aboutmain from './main-pages/AboutUs/Aboutmain'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Servicemain from './main-pages/Service/Servicemain'
import Projectmain from './main-pages/Projects/Projectmain'


const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<BackgroungImg backgroundClass="background"><Aboutmain /></BackgroungImg>} />
        <Route path="/services" element={<BackgroungImg backgroundClass="background1"><Servicemain /></BackgroungImg>} />
        <Route path="/projects" element={<BackgroungImg backgroundClass="background1"><Projectmain /></BackgroungImg>} />
        
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