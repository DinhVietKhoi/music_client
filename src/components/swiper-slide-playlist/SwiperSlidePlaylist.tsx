/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "./swiperSlidePlaylist.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TagPlaylist1 from "../tagPlaylist1/TagPlaylist1";
import { PlaylistType } from "../../typescriptVar/types";
interface SwiperSlidePlaylistProps {
  listPlaylist: PlaylistType[];
}
export default function SwiperSlidePlaylist({
  listPlaylist,
}: SwiperSlidePlaylistProps) {
  return (
    <div className="swiper-slide-playlist">
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
        {listPlaylist &&
          listPlaylist.map((playlist: PlaylistType) => [
            <SwiperSlide>
              <TagPlaylist1 playlist={playlist}></TagPlaylist1>
            </SwiperSlide>,
          ])}
      </Swiper>
    </div>
  );
}
