import React from 'react';
import WorkoutSlider from '../components/WorkoutSlider';
import { products } from '../data';

const Workouts = () => {

  const {title, icon} = products;

  return (
    <section className='section'>

        <div className='section-title-group max-w-[600px] mx-auto px-4 lg:px-0' data-aos='fade-down' data-aos-delay='200'>
          <img src={icon}/>
          <h2 className='h2 section-title'>{title} <span className='text-primary-200'>.</span> </h2>
        </div>

        {/* slider container */}
        <div data-aos='fade-down' data-aos-delay='300'>
          <WorkoutSlider/>
        </div>
    </section>
  );
};

export default Workouts;
