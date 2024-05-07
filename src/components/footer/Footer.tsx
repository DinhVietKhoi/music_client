/** @format */

import React from "react";
import Banner from "../banner/Banner";
import "./footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="copy-right">
          <span>&copy; 2024 Khoi Dinh.</span>
          <span>All rights reserved.</span>
        </div>
        <Banner image={+"4"}></Banner>
      </div>
    </div>
  );
}
