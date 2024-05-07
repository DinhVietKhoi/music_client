/** @format */

import React from "react";
import banner from "../../assets/banner/banner.jpg";
import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
import footer from "../../assets/banner/footer.jpg";
import "./banner.scss";
interface BannerProps {
  image: number;
}
export default function Banner({ image }: BannerProps) {
  const imageList = [banner, banner1, banner2, banner3, footer];
  const selectedImage = imageList[image];
  return (
    <div className="banner">
      <div
        className="banner__container"
        style={{ backgroundImage: `url(${selectedImage})` }}
      ></div>
    </div>
  );
}
