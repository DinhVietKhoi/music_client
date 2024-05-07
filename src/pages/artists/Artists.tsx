/** @format */

import React, { useEffect, useState } from "react";

import "./artists.scss";

import TagArtists from "../../components/tagartists/TagArtists";
import Banner from "../../components/banner/Banner";
import { IoMdCodeDownload } from "react-icons/io";
import { Artist } from "../../typescriptVar/types";
import { api } from "../../axios/Api";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";
export default function Artists() {
  const [loader, setLoader] = useState(true);

  const [listArtist, setListArtist] = useState<Artist[]>([]);
  useEffect(() => {
    api.get("/artist/getAllArtist").then((response) => {
      setListArtist(response.data);
    });
  }, []);
  useEffect(() => {
    if (listArtist.length > 0) {
      setLoader(false);
    }
  }, [listArtist]);
  return (
    <div className="artists">
      <Loader hideLoader={loader}></Loader>

      <Banner image={+"2"}></Banner>

      <div className="artists__container container">
        <div className="head">
          <div className="title">
            <h1>
              TOP <p>ARTISTS</p>
            </h1>
          </div>
        </div>
        <div className="body">
          {listArtist &&
            listArtist.map((artist: Artist) => [
              <Link
                to={`/artists/${artist._id}`}
                key={artist._id}
                className=" col c-3 m-6 l-12"
              >
                <div className="item">
                  <TagArtists
                    image={artist.image}
                    name={artist.name}
                  ></TagArtists>
                </div>
              </Link>,
            ])}
        </div>
        <div className="load-more">
          <IoMdCodeDownload />

          <span>Load more</span>
        </div>
      </div>
    </div>
  );
}
