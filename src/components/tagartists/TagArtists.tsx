/** @format */

import React from "react";
import "./tagArtists.scss";
interface TagArtistsProps {
  name: string;
  image: string;
}
export default function TagArtists({ name, image }: TagArtistsProps) {
  return (
    <div className="tag-artists">
      <div className="tag-artists__container">
        <img src={image} alt=""></img>
        <span>{name}</span>
      </div>
    </div>
  );
}
