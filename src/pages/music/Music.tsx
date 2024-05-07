/** @format */

import React, { useEffect, useState } from "react";

import "./music.scss";
import Banner from "../../components/banner/Banner";
import TagSong from "../../components/tagsong/TagSong";
import { IoMdCodeDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import SwiperSlider from "../../components/swiper-slider/SwiperSlider";
import { api } from "../../axios/Api";
import { Song } from "../../typescriptVar/types";
import Loader from "../../components/loader/Loader";
import { FaPlay } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { playAllSong } from "../../redux/playerSlice";

export default function Music() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  const [listMusic, setListMusic] = useState<Song[]>([]);
  const [skip, setSkip] = useState<number>(10);
  useEffect(() => {
    api.get("/song/getAllSong", { params: 0 }).then((response) => {
      setListMusic((list) => [...list, ...response.data]);
    });
  }, []);
  const handleLoadMore = async () => {
    await api.get("/song/getAllSong", { params: { skip } }).then((response) => {
      if (response.data.length == 0) return;
      setListMusic((list) => [...list, ...response.data]);
      setSkip(skip + 10);
    });
  };
  useEffect(() => {
    if (listMusic.length > 0) {
      setLoader(false);
    }
  }, [listMusic]);
  return (
    <div className="music">
      <Loader hideLoader={loader}></Loader>

      <Banner image={+"1"}></Banner>

      {listMusic.length > 0 && (
        <div className="music__container container">
          <div className="music__list">
            <div className="head">
              <div className="title">
                <h1>
                  <p>{listMusic.length}</p> Songs in the list
                </h1>
              </div>
              {/* <select>
                <option>Popular</option>
                <option>Most Player</option>
                <option>A to Z</option>
                <option> Z to A</option>
              </select> */}
              <button onClick={() => dispatch(playAllSong(listMusic))}>
                <FaPlay />
                Play
              </button>
            </div>
            <div className="body">
              {listMusic.map((song: Song, index: number) => [
                <div key={index} className=" col c-6 m-12">
                  <div className="item">
                    {/* <span className="stt">{index + 1}</span> */}
                    <TagSong
                      song={song}
                      // handleCurrentMusic={handleCurrentMusic}
                    ></TagSong>
                  </div>
                </div>,
              ])}
            </div>
            <div className="load-more" onClick={handleLoadMore}>
              <IoMdCodeDownload />

              <span>Load more</span>
            </div>
          </div>
          <div className="music__play-list">
            <div className="head">
              <div className="title">
                <h1>
                  FREE <p>PLAY LIST</p>
                </h1>
              </div>
              <Link to="/playlist">VIEW ALL</Link>
            </div>
            <div className="body">
              <SwiperSlider listMusic={listMusic}></SwiperSlider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
