import React, { useState, useEffect }  from 'react'
import './Navbar.css'
import Logo from './mainmain.png'
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Sign from './main.png'
import { Link, useLocation  } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(getActiveButton(location.pathname));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
 
  const handleButtonClick = (buttonName) => {
    if (buttonName !== activeButton) {
      setActiveButton(buttonName);
    }
  };
    function getActiveButton(pathname) {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/about':
        return 'About Us';
      case '/services':
        return 'Services';
      case '/projects':
        return 'Projects';
      case '/careers':
        return 'Careers';
      case '/blog':
        return 'Blog';
      case '/contact':
        return 'Contact';
      default:
        return 'Home';    }
  }


  
 useEffect(() => {
  setActiveButton(getActiveButton(location.pathname));
 }, [location]);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
 
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
  }, [isMenuOpen]);
  


  return (
    <div className='Navbar'>
      <div className="navbar-wall">
      <div className="bar-icon"  onClick={toggleMenu}><RiMenu2Line  className='bar-iconreal'/></div>
      <img src={Logo} alt="logo" />
      <div className="nav-list">
        <Link to='/' className={`link ${activeButton === 'Home' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Home')}>Home</Link>
        <Link to='/about' className={`link ${activeButton === 'About Us' ? 'active' : ''}`}
            onClick={() => handleButtonClick('About Us')}>About Us</Link>
        <Link  to='/services' className={`link ${activeButton === 'Services' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Services')}
      >Services</Link>
        <Link href="#"  className={`link ${activeButton === 'Projects' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Projects')}>Projects</Link>
        <Link href="#"  className={`link ${activeButton === 'Careers' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Careers')}
       >Careers</Link>
        <Link href="#" className={`link ${activeButton === 'Blog' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Blog')}>Blog</Link>
        <Link href="#" className={`link ${activeButton === 'Contact' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Contact')}>Contact</Link>
        </div>
        <div className={`nav-list2 ${isMenuOpen ? 'open' : ''}`}>
          <div className="iconx">
          <IoMdClose onClick={toggleMenu} className='closeiconx'/>
          </div>          <div className="sign">
          <img src={Sign} alt="" className='' />
          </div>
          <Link to='/'  className="link" onClick={closeMenu}>Home</Link>
          <Link to='/about' className="link" onClick={closeMenu}>About</Link>
          <Link to='/services'  className="link" onClick={closeMenu}>Services</Link>
          <Link href="#"  className="link" onClick={closeMenu}>Project</Link>
          <Link href="#"  className="link" onClick={closeMenu}>Blog</Link>
          <Link href="#"  className="link" onClick={closeMenu}>Contact</Link>

        </div>
      </div>
         </div>
    )
}

export default Navbar