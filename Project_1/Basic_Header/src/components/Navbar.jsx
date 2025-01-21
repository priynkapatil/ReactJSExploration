import React from 'react';
import logo from '../assets/brand_logo.svg';
import '../Css/Navbar.css';
const Navbar = () => {
  return (
    <div className='nav-align'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div>
        <ul className='menu'>
          <li>MENU</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <button className='btn-nav'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
