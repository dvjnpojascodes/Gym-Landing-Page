import React from 'react';
import { review } from '../data';
import ReviewSlider from './ReviewSlider';


const Community = () => {

  const {icon, title, testimonials} = review;
  return (
    <section className='section relative'>
      <div className='container mx-auto'>
        <div className='flex'>

          {/* Title Section */}
          <div className='section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto' data-aos='fade-down' data-aos-offset='200' data-aos-delay='200'>
            <img src={icon} alt=''></img>
            <h2 className='h2 section-title'>{title} <span className='text-primary-200'>.</span></h2>
          </div>

          {/* slider */}
          <div className='absolute -right-[375px] lg:-right-[230px] w-[1140px] top-48 lg:top-0' data-aos='fade-left' data-aos-offset='200' data-aos-delay='300'>
             <ReviewSlider testimonials={testimonials}/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Community;
