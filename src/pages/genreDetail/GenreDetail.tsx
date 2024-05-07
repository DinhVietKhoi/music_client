/** @format */

import React, { useEffect, useState } from "react";
import "./genreDetail.scss";
import Loader from "../../components/loader/Loader";
import Banner from "../../components/banner/Banner";
import { api } from "../../axios/Api";
import { Song } from "../../typescriptVar/types";
import TagSong from "../../components/tagsong/TagSong";
import { Link, useParams } from "react-router-dom";
export default function GenreDetail() {
  const [loader, setLoader] = useState(true);

  const [listMusic, setListMusic] = useState<Song[]>([]);
  const { id } = useParams();
  useEffect(() => {
    api
      .get("/song/getSongByGenres", { params: { genres: id } })
      .then((response) => {
        setListMusic((list) => [...list, ...response.data]);
      });
  }, []);

  useEffect(() => {
    if (listMusic.length > 0) {
      setLoader(false);
    }
  }, [listMusic]);
  return (
    <div className="genre-detail">
      <Loader hideLoader={loader}></Loader>

      <Banner image={+"1"}></Banner>

      {listMusic.length > 0 && (
        <div className="genre-detail__container container">
          <div className="genre-detail__list">
            <div className="head">
              <div className="title">
                <h1>
                  <p>{listMusic.length}</p> Songs in the list
                </h1>
                <Link to="/genres">Back to genres</Link>
              </div>
            </div>
            <div className="body">
              {listMusic.map((song: Song, index: number) => [
                <div key={index} className=" col c-6 m-12">
                  <div className="item">
                    <TagSong song={song}></TagSong>
                  </div>
                </div>,
              ])}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
