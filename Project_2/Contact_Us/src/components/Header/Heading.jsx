import React from 'react';
import './Header.css';
import BannerForm from './BannerForm';
const Heading = () => {
  return (
    <div>
      <p className='heading'>CONTACT US</p>
      <p className='subHeading'>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
      <div className='padding-added'> 
        <BannerForm />
      </div>
    </div>
  );
};

export default Heading;
