import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Bu sətri əlavə et
import "swiper/css";
import "swiper/css/pagination";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-5424610/img-1713522444-1374-736871-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzk0MCw1MzAsOTAsImpwZyJd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-5424610/img-1713522444-1374-736871-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzk0MCw1MzAsOTAsImpwZyJd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-5424610/img-1713522444-1374-736871-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzk0MCw1MzAsOTAsImpwZyJd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-5424610/img-1713522444-1374-736871-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzk0MCw1MzAsOTAsImpwZyJd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-5424610/img-1713522444-1374-736871-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzk0MCw1MzAsOTAsImpwZyJd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-5424610/img-1713522444-1374-736871-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzk0MCw1MzAsOTAsImpwZyJd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-5424610/img-1713522444-1374-736871-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzk0MCw1MzAsOTAsImpwZyJd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-5424610/img-1713522444-1374-736871-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzk0MCw1MzAsOTAsImpwZyJd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-5424610/img-1713522444-1374-736871-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzk0MCw1MzAsOTAsImpwZyJd.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
