import React, { useState }  from 'react'
import './Navbar.css'
import Logo from './Bytechain-11.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const closeNavbar = () => {
    setIsOpen(false);
  };



  return (
    <div className='Navbar'>
      <div className="navbar-wall">
      <img src={Logo} alt="" />
      <div className="nav-list">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Services</a>
        <a href="">Projects</a>
        <a href="">Careers</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>

      </div>
         </div>
    )
}

export default Navbar