import banner from './assets/image.jpg';
import './Headerbanner.css';
import React from 'react';

const HeaderBanner = () => {
  return (
    <div className="bannercontainer">
      <img src={banner} alt="Banner" className="banner" />
    </div>
  );
};

export default HeaderBanner;