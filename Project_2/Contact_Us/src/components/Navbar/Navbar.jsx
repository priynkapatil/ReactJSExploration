import React from 'react'
import logo from '../../assets/brand_logo.svg'
import './Navbar.css'
const Navbar = () => {
  return (
<nav className='nav-style'>
    <div>
        <img src={logo} alt="brand logo" />
    </div>
    <div >
    <ul className='menu'>
          <li>MENU</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </div>
</nav>  )
}

export default Navbar