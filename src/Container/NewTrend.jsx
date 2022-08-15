
import React from "react";
import "./NewTrend.css";
import img1 from "../imgs/headphone1.png";
import img2 from "../imgs/headphone2.png";
import img3 from "../imgs/headphone3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

function NewTrend() {
  return (
    <div className="containerNT">
      <div className="NT-text">
        <h1>
          <span className="clr-text">New</span> Trends
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit</p>
      </div>

      
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 1200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2}/>
        </SwiperSlide>
       
      </Swiper>
      
   </div>
  )
}

export default NewTrend;
