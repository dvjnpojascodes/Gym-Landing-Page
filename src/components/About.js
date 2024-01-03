import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { about } from '../data';

const About = () => {

  const {title, subtitle1, subtitle2, icon, link} = about;
  return (
    <section className=' py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]'>
      <div className='container mx-auto px-[20px] lg:px-[135px]'>

        {/* main title */}
        <div className='section-title-group justify-start' data-aos='fade-down' data-aos-delay='100'>
          <img src={icon} alt=""/>
          <h2 className='h2 section-title'>{title} <span className='text-primary-200'>.</span></h2>
        </div>

        {/* subtitle */}
        <p className='md:text-body-md mb-12 text-justify' data-aos='fade-down' data-aos-delay='200'>{subtitle1}</p>
        <p className='md:text-body-md mb-8 text-justify' data-aos='fade-down' data-aos-delay='300'>{subtitle2}</p>

        {/* Links */}
        <div data-aos='fade-down' data-aos-delay='400'>
          <a href='#' className='link flex items-center gap-x-4 hover:gap-x-6 transition-all'>
            {link}
            <IoIosArrowDroprightCircle className='text-2xl'/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
