/** @format */

import React, { useEffect, useState } from "react";
import "./playlist.scss";
// import { Link } from "react-router-dom";
import Banner from "../../components/banner/Banner";

// import SwiperSlider from "../../components/swiper-slider/SwiperSlider";
// import TagSong from "../../components/tagsong/TagSong";
import { IoMdCodeDownload } from "react-icons/io";
import { api } from "../../axios/Api";
import { PlaylistType } from "../../typescriptVar/types";
import TagPlaylist from "../../components/tagPlaylist/TagPlaylist";
import SwiperSlidePlaylist from "../../components/swiper-slide-playlist/SwiperSlidePlaylist";
import Loader from "../../components/loader/Loader";
export default function Playlist() {
  const [loader, setLoader] = useState(true);

  const [listPlaylist, setListPlaylistc] = useState<PlaylistType[]>([]);
  useEffect(() => {
    api.get("/playlist/getAllPlaylist", { params: 0 }).then((response) => {
      setListPlaylistc((list) => [...list, ...response.data]);
    });
  }, []);
  useEffect(() => {
    if (listPlaylist.length > 0) {
      setLoader(false);
    }
  }, [listPlaylist]);
  return (
    <div className="play-list">
      <Loader hideLoader={loader}></Loader>

      <Banner image={+"1"}></Banner>

      <div className="play-list__container container">
        <div className="play-list__trending">
          <div className="head">
            <div className="title">
              <h1>
                TRENDING <p>PLAYLIST</p>
              </h1>
            </div>
          </div>
          <div className="body">
            <SwiperSlidePlaylist
              listPlaylist={listPlaylist}
            ></SwiperSlidePlaylist>
          </div>
        </div>
        <div className="play-list__list">
          <div className="head">
            <div className="title">
              <h1>
                <p>{listPlaylist.length}</p> Playlist in the list
              </h1>
            </div>
            {/* <select>
              <option>Popular</option>
              <option>Most Player</option>
              <option>A to Z</option>
              <option> Z to A</option>
            </select> */}
          </div>
          <div className="body">
            {listPlaylist &&
              listPlaylist.map((playlist: PlaylistType) => (
                <div key={playlist._id} className=" col c-6 m-12">
                  <div className="item">
                    <TagPlaylist playlist={playlist}></TagPlaylist>
                  </div>
                </div>
              ))}
          </div>
          <div className="load-more">
            <IoMdCodeDownload />

            <span>Load more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
