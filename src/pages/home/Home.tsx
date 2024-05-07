/** @format */

import React, { useEffect, useState } from "react";

import "./home.scss";

import { Link } from "react-router-dom";
import TagSong from "../../components/tagsong/TagSong";
import SwiperSlider from "../../components/swiper-slider/SwiperSlider";
import Banner from "../../components/banner/Banner";
import { Song } from "../../typescriptVar/types";
import { api } from "../../axios/Api";
import Loader from "../../components/loader/Loader";

export default function Home() {
  const [loader, setLoader] = useState(true);
  const [listMusic, setListMusic] = useState<Song[]>([]);
  const [newMusic, setNewMusic] = useState<Song[]>([]);
  useEffect(() => {
    api.get("/song/getAllSong").then((response) => {
      setListMusic(response.data);
    });
    api.get("/song/getNewSong").then((response) => {
      setNewMusic(response.data);
    });
  }, []);
  useEffect(() => {
    if (listMusic.length > 0 && newMusic.length > 0) {
      setLoader(false);
    }
  }, [listMusic, newMusic]);
  return (
    <div className="home">
      <Loader hideLoader={loader}></Loader>
      <Banner image={+"0"}></Banner>
      <div className="home__container container">
        <div className="home__top-trending">
          <div className="head">
            <div className="title">
              <span>LISTEN TOP TRENDING</span>
              <h1>
                Top <p>TRENDING</p>
              </h1>
            </div>
            <Link to="/music">VIEW ALL</Link>
          </div>
          <div className="body">
            <SwiperSlider listMusic={listMusic}></SwiperSlider>
          </div>
        </div>
        <div className="home__top-charts">
          <div className="head">
            <h1>
              TOP <p>CHARTS</p>
            </h1>
            <Link to="/music">EXPLORE MORE</Link>
          </div>
          <div className="body">
            {/* <div className="row"> */}
            {listMusic &&
              listMusic.map((song: Song, index: number) => [
                <div key={index} className=" col c-6 m-12">
                  <div className="item">
                    {/* <span className="stt">{index + 1}</span> */}
                    <TagSong song={song}></TagSong>
                  </div>
                </div>,
              ])}
            {/* </div> */}
          </div>
        </div>
        <div className="home__new-releases">
          <div className="head">
            <div className="title">
              <span>NEW TO LISTEN</span>
              <h1>
                NEW <p>RELEASES</p>
              </h1>
            </div>
            <Link to="/music">VIEW ALL</Link>
          </div>
          <div className="body">
            <SwiperSlider listMusic={newMusic}></SwiperSlider>
          </div>
        </div>
      </div>
    </div>
  );
}
