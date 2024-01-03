import React from 'react';
import { footer } from '../data';

const Footer = () => {

  const {logo, copyrightText} = footer;

  return( 
    <footer className='bg-neutral-500 h-[125px] md:h-[195px] px-[20px]'>
      <div className='container mx-auto  h-full flex justify-between items-center md:items-end md:pb-[50px]' data-aos="fade-down" data-aos-delay='200'>

        <div className='mt-8'>
          <a href="#"> <img src={logo} alt="" className='h-[40px]'/> </a>
        </div>

        <p className='text-neutral-300 text-sm -mt-6 font-bold'>{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
