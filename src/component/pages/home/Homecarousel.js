import React from "react";

import banner from "../../../assest/images/banner.jpg";
// import './home.css'
function Homecarousel() {
  return (
    <div>
      <div
        className="hero__item set-bg "
        data-setbg="img/hero/banner.jpg"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero__text">
          <span>FRUIT FRESH</span>
          <h2>
            Vegetable <br />
            100% Organic
          </h2>
          <p>Free Pickup and Delivery Available</p>
          <a href="#" className="primary-btn">
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homecarousel;
