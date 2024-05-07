/** @format */

import React from "react";
import "./history.scss";
import Banner from "../../components/banner/Banner";
import { IoMdCodeDownload } from "react-icons/io";
import { Link } from "react-router-dom";

export default function History() {
  return (
    <div className="history">
      <Banner image={+"1"}></Banner>

      <div className="history__container container">
        <div className="favorites__songs">
          <div className="head">
            <div className="title">
              <span>RECENTLY LISTENED</span>
              <h1>
                <p>HISTORY</p>
              </h1>
            </div>
            <Link to="/music">CLEAR ALL</Link>
          </div>
          <div className="body">
            {[...Array(10).keys()].map((index: number) => (
              <div key={index} className=" col c-6 m-12">
                <div className="item">
                  {/* <TagSong
                    image={sontung}
                    nameartist="Sơn Tùng MTP"
                    namesong="Cơn mưa ngang qua"
                  ></TagSong> */}
                </div>
              </div>
            ))}
            <div className="load-more">
              <IoMdCodeDownload />

              <span>Load more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
