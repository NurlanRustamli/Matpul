// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import './style.css';

// import required modules
import {Autoplay,Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Autoplay,Pagination]} className="mySwiper"
      autoplay={{
        delay:2500,
        disableOnInteraction:false,
      }}
      >
        <SwiperSlide><img src="https://smartslider3.com/wp-content/uploads/2019/05/sliderexample.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://smartslider3.com/wp-content/uploads/2019/05/iceland.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://smartslider3.com/wp-content/uploads/2019/02/homepagesliders.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://smartslider3.com/wp-content/uploads/2018/07/gradientSlider.jpg" alt="" /></SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
