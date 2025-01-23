import React, { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

import logo from '../../assets/brand_logo.svg';
import './Navbar.css';
import Navlink from './Navlink';
const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const Hamburger = (
    <MdOutlineMenu
      className='HamburgerMenu'
      size='30px'
      color='black'
      onClick={() => setShowHamburger(!showHamburger)}
    />
  );

  const Close = (
    <MdClose
      className='HamburgerMenu'
      size='30px'
      color='black'
      onClick={() => setShowHamburger(!showHamburger)}
    />
  );

  return (
    <nav className='nav-style'>
      <div>
        <img src={logo} alt='brand logo' />
      </div>
      <div className='nav-menu-desk'>
        <Navlink/>
      </div>
      <div className='nav-menu-mob'>
        {showHamburger ?  Close:Hamburger}
        {showHamburger && <Navlink />}
      </div>
    </nav>
  );
};

export default Navbar;
