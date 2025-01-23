import React, { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

import logo from '../assets/brand_logo.svg';
import '../Css/Navbar.css';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const Hamburger = (
    <MdOutlineMenu
      className='HamburgerMenu'
      size='30px'
      color='black'
      onClick={() => setClick(!click)}
    />
  );

  const Close = (
    <MdClose
      className='HamburgerMenu'
      size='30px'
      color='black'
      onClick={() => setClick(!click)}
    />
  );

  return (
    <div className='nav-align'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div className='DesktopNavigation'>
        <NavbarLinks />
      </div>
      <div>
        <button className='btn-nav'>Login</button>
      </div>
      <div className='MobileNavigation'>
        {click ? Hamburger : Close}
        <div>{!click && <NavbarLinks />}</div>
      </div>
    </div>
  );
};

export default Navbar;
