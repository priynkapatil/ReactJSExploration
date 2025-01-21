import React from 'react';
import shoes from '../assets/shoe_image.svg';
import amazon from '../assets/amazon.svg';
import flipkart from '../assets/flipkart.svg';
import '../css/header.css';
const Header = () => {
  return (
    <div className='header-layout'>
      <div>
        <p className='header-text'>YOUR FEET DESERVE THE BEST</p>
        <p className='header-subtext'>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className='flex-div btn-head'>
          <button className='btn-header'>Shop Now</button>
          <button className='btn2-header'>Category</button>
        </div>
        <div>
          <p className='text'>Also Available On</p>
          <div className='flex-div'>
            <img src={amazon} alt='amazon' />
            <img src={flipkart} alt='flipkart' />
          </div>
        </div>
      </div>
      <div>
        <img src={shoes} alt='header image' className='header-img' />
      </div>
    </div>
  );
};

export default Header;
