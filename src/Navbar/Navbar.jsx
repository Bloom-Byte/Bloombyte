import React, { useState }  from 'react'
import './Navbar.css'
import Logo from './logo2min.png'
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Sign from './Bytechain-19-min.png'


const Navbar = () => {
  const [activeButton, setActiveButton] = useState('Home'); // Initialize active button state with 'Home'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Function to handle click on a button
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? 'Home' : buttonName);
  };
   

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className='Navbar'>
      <div className="navbar-wall">
      <div className="bar-icon"  onClick={toggleMenu}><RiMenu2Line  className='bar-iconreal'/></div>
      <img src={Logo} alt="logo" />
      <div className="nav-list">
        <a href="#" className={activeButton === 'Home' ? 'active' : ''}
            onClick={() => handleButtonClick('Home')}>Home</a>
        <a href="#" className={activeButton === 'About Us' ? 'active' : ''}
            onClick={() => handleButtonClick('About Us')}>About Us</a>
        <a href="#" className={activeButton === 'Services' ? 'active' : ''}
            onClick={() => handleButtonClick('Services')}
      >Services</a>
        <a href="#"  className={activeButton === 'Projects' ? 'active' : ''}
            onClick={() => handleButtonClick('Projects')}>Projects</a>
        <a href="#"  className={activeButton === 'Careers' ? 'active' : ''}
            onClick={() => handleButtonClick('Careers')}
       >Careers</a>
        <a href="#" className={activeButton === 'Blog' ? 'active' : ''}
            onClick={() => handleButtonClick('Blog')}>Blog</a>
        <a href="#" className={activeButton === 'Contact' ? 'active' : ''}
            onClick={() => handleButtonClick('Contact')}>Contact</a>
        </div>
        <div className={`nav-list2 ${isMenuOpen ? 'open' : ''}`}>
          <div className="iconx">
          <IoMdClose onClick={toggleMenu} className='closeiconx'/>
          </div>          <div className="sign">
          <img src={Sign} alt="" className=''  loading='lazy'/>
          </div>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Project</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>

        </div>
      </div>
         </div>
    )
}

export default Navbar