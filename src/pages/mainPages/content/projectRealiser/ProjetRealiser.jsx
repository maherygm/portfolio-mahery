import React, { useEffect, useState } from "react";
import "./__projetRealiser.css";

import img1 from "../../../../assets/image/capure/sirius.jpeg";

import { InView } from "react-intersection-observer";
import gsap from "gsap";

const ProjetRealiser = () => {
  function handleChange(params) {
    console.log(params);
    if (params) {
      gsap.to(".image-a-scale", {
        scale: 1.5,
        duration: 1,
        delay: 1,
      });
    }
  }
  return (
    <div data-scroll-section className="projet-realiser-main">
      <div className="projet-realiser-bloc">
        <h1 className="title-section">Mes Projet</h1>
        <div className="projet-realiser-item">
          <div
            data-scroll
            data-scroll-speed="10"
            className="projet-realiser-description"
          >
            <h1>Sirius Education</h1>
            <h2>Study is everywhere</h2>
            <p>Education/sirius-education.org</p>
          </div>

          <div className="projet-realiser-image">
            <InView onChange={handleChange}>
              <img className="image-a-scale" src={img1} />
            </InView>
          </div>

          {/* <div className="projet-realiser-description">
            <h1>Real IT</h1>
            <h2>City Numerics</h2>
            <p>Information/Real-it.org</p>
          </div>
          <div className="projet-realiser-image">
            <img src={img1} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjetRealiser;
