import React, { useEffect } from "react";
import "./Banner.css";
import LocomotiveScroll from "locomotive-scroll";
import MovingComponent from "react-moving-text";
const Banner = () => {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("[ data-scroll-container]"),
  //     smooth: true,
  //     // multiplier: 0.3,
  //   });
  // }, []);
  return (
    <div data-scroll-section className="banner-container">
      <div className="banner-main">
        <h1 className="el-gsap-app">
          <MovingComponent
            type="unfold"
            duration="1200ms"
            delay="1s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="forwards"
          >
            ART
          </MovingComponent>
        </h1>
        <h1 className="el-gsap-app">&</h1>
        <h1 className="el-gsap-app">CREATION</h1>
      </div>
    </div>
  );
};

export default Banner;
