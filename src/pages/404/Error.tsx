/** @format */

import React from "react";
import "./error.scss";
import Banner from "../../components/banner/Banner";

export default function Error() {
  return (
    <div className="error">
      <Banner image={+"2"}></Banner>
      <div className="error__container container">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
