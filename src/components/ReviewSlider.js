import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const CommunitySlider = ({testimonials}) => {
  return (
    <Swiper slidesPerView={3} spaceBetween={32} centeredSlides={'auto'} grabCursor={true} modules={[]}>
      {testimonials.map((testimonials, idx) => {

        const {image, name, message} = testimonials;

        return <SwiperSlide key={idx}>
          <div className='relative h-[480px]'>
            <div className='bg-slate-800 opacity-50 w-full h-full absolute top-0 left-0'> </div>

            <div>
              <img src={image}/>
            </div>

            {/* Customer's Reviews */}
            <div className='absolute bottom-[30px] text-white p-[20px] text-center'>
              
              <div className='mb-8 italic text-lg relative'>
                {message}
              </div>
              <div className='flex items-center justify-center gap-x-[3px] '>
                <span className='text-[30px] text-primary-200 font-bold'>~</span>
                <div className='text-[20px] font-bold'>{name}</div>              
              </div>

            </div>
          </div>

        </SwiperSlide>
      })}
    </Swiper>
  );
};

export default CommunitySlider;
