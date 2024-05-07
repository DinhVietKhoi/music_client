/** @format */

import React from "react";
import "./loader.scss";
interface loaderProps {
  hideLoader: boolean;
}
export default function Loader({ hideLoader }: loaderProps) {
  return (
    <div className={hideLoader ? "loader" : "loader hide"}>
      <div className="loader__container">
        <div className="box-loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>Loading</span>
      </div>
    </div>
  );
}
