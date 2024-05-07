/** @format */

import React, { useEffect, useState } from "react";
import "./artistDetail.scss";
import Loader from "../../components/loader/Loader";
import Banner from "../../components/banner/Banner";
import { api } from "../../axios/Api";
import { Song } from "../../typescriptVar/types";
import TagSong from "../../components/tagsong/TagSong";
import { Link, useParams } from "react-router-dom";
export default function ArtistDetail() {
  const [loader, setLoader] = useState(true);

  const [listMusic, setListMusic] = useState<Song[]>([]);
  const { id } = useParams();
  useEffect(() => {
    api
      .get("/song/getSongByArtist", { params: { artistId: id } })
      .then((response) => {
        setListMusic(response.data);
      });
  }, [id]);

  useEffect(() => {
    if (listMusic.length > 0) {
      setLoader(false);
    }
  }, [listMusic]);
  return (
    <div className="artist-detail">
      <Loader hideLoader={loader}></Loader>

      <Banner image={+"1"}></Banner>

      {listMusic.length > 0 && (
        <div className="artist-detail__container container">
          <div className="artist-detail__list">
            <div className="head">
              <div className="title">
                <h1>
                  <p>{listMusic.length}</p> Songs in the list
                </h1>
                <Link to="/artists">Back to Artists</Link>
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
