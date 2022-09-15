import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar () {
  const [click, setClick] = useState(false);
  const [button, setButton] =useState(true)
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

    useEffect(() => {
      showButton();
    }, []);

  window.addEventListener("resize", showButton)


  // fix navbar onclick!!!
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            ALISON KILLEN <i className='fas fa-laptop-code' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "navMenuActive" : "navMenu"}>
            <li className='navItem'>
              <Link to='/' className='navLinks' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* about page should include skills too */}
            <li className='navItem'>
              <Link to='/about' className='navLinks' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            {/* <li className='navItem'>
              <Link
                to='/projects'
                className='navLinks'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li> */}
            {/* <li className="navItem">
              <Link to="/skills" className="navLinks" onClick={closeMobileMenu}>
                Skills
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLinks" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li> */}
            <li className='navItem'>
              <Link
                to='/resume'
                className='navLinks'
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>

            <li className='navItem'>
              <Link
                to='/contact'
                className='navLinks'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">Contact</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar
