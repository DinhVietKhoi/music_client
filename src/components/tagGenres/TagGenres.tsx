/** @format */

import React from "react";
import genres1 from "../../assets/genres/1.jpg";
import genres2 from "../../assets/genres/2.jpg";
import genres3 from "../../assets/genres/3.jpg";
import genres4 from "../../assets/genres/4.jpg";
import genres5 from "../../assets/genres/5.jpg";
import genres6 from "../../assets/genres/6.jpg";
import "./tagGenres.scss";
interface TagGenresProps {
  image: number;
  type: number;
}
export default function TagGenres({ image, type }: TagGenresProps) {
  const imageList = [genres1, genres2, genres3, genres4, genres5, genres6];
  const selectedImage = imageList[image - 1];
  const typeList = ["Remix", "Rock", "Sufi", "Romantic", "Sports", "Retro"];
  const selectedType = typeList[type - 1];
  return (
    <div className="tag-genres">
      <div className="tag-genres__container">
        <span>{selectedType}</span>
        <img src={selectedImage} alt=""></img>
      </div>
    </div>
  );
}
