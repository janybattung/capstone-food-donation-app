import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BEAT HUNGER
            <i className="fas fa-hand-holding-water"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Who We Are
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/charities'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Charities
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li  className='btn--outline'>
              <Link
                to='/sign-up'
                className='nav-links-bottom'
                onClick={closeMobileMenu}
              >
                For charities not registered, <br/> CLICK HERE
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
