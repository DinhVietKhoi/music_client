/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import TagChart from "../tagchart/TagChart";

import "./swiperSlider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Song } from "../../typescriptVar/types";
export default function SwiperSlider({ listMusic }: { listMusic: Song[] }) {
  return (
    <div className="swiper-slider">
      <Swiper
        breakpoints={{
          1400: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          450: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Navigation, Autoplay]}
        loop={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden swiper-edit"
      >
        {listMusic &&
          listMusic.map((song: Song) => [
            <SwiperSlide>
              <TagChart song={song}></TagChart>
            </SwiperSlide>,
          ])}
      </Swiper>
    </div>
  );
}
