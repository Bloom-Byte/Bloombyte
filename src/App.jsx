import React from 'react'
import Home from './main-pages/Home/HomeMain'
import HomeFooter from './main-pages/Home/HomeFooter/HomeFooter'
import Navbar from './Navbar/Navbar'
import Aboutmain from './main-pages/AboutUs/Aboutmain'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Servicemain from './main-pages/Service/Servicemain'


const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutmain />} />
        <Route path="/services" element={<Servicemain />} />
      </Routes>
      <HomeFooter/>
  </Router>
  )
}

export default App