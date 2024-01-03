import React from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from '../data';
import '../productSlider.css';


const WorkoutSlider = () => {

  const {programs} = products;

  return <Swiper slidesPerView={2} spaceBetween={28} navigation={true} breakpoints={{768: {slidesPerView:2}, 1024: {slidesPerView:3} }} modules={[Navigation]} className='workoutSlider ml-6'>
      {programs.map((program, idx)=> {

        const {image, name} = program;

        return <SwiperSlide key={idx} className='max-w-[370px] max-h-[370px] relative'>
          <img src={image} alt='' className='w-full h-full object-cover '/>
          <div className='absolute left-[20px] bottom-[20px] bg-white h[26px] px-[14px] flex items-center rounded-[1px]'>
            <div className='font-primary font-semibold text-sm text-neutral-500'>{name}</div>
          </div>
        </SwiperSlide>
      })}
  </Swiper>
};

export default WorkoutSlider;
