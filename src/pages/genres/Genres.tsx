/** @format */

import React from "react";
import Banner from "../../components/banner/Banner";
import { Link } from "react-router-dom";
import "./genres.scss";
import TagGenres from "../../components/tagGenres/TagGenres";
export default function Genres() {
  return (
    <div className="genres">
      <Banner image={+"0"}></Banner>

      <div className="genres__container container">
        <div className="genres__music">
          <div className="head">
            <div className="title">
              <h1>
                MUSIC <p>GENRES</p>
              </h1>
            </div>
          </div>
          <div className="body">
            <Link to="/genres/1" className="col c-3 m-6 l-12">
              <TagGenres image={+"1"} type={+"1"}></TagGenres>
            </Link>
            <Link to="/genres/2" className="col c-3 m-6 l-12">
              <TagGenres image={+"2"} type={+"2"}></TagGenres>
            </Link>
            <Link to="/genres/3" className="col c-3 m-6 l-12">
              <TagGenres image={+"3"} type={+"3"}></TagGenres>
            </Link>
            <Link to="/genres/4" className="col c-3 m-6 l-12">
              <TagGenres image={+"4"} type={+"4"}></TagGenres>
            </Link>
            <Link to="/genres/5" className="col c-3 m-6 l-12">
              <TagGenres image={+"5"} type={+"5"}></TagGenres>
            </Link>
            <Link to="/genres/6" className="col c-3 m-6 l-12">
              <TagGenres image={+"6"} type={+"6"}></TagGenres>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
