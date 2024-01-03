import React, { useState } from "react";
import "./__card_styles.css";

import { InView } from "react-intersection-observer";

const Card_service = ({
  linkImgProps,
  titleProps,
  texteProps,
  imgTexteProps,
}) => {
  
  const [Position, setPosition] = useState({ x: 0, y: 0 });

  //rehefa hita ilay composant izany oe hitanu utilisateur eo @ecran de executer ito fonction ito
  let [Annimation, setAnnimation] = useState("");
  const handleIntersection = (inView) => {
    if (inView) {
      setAnnimation("active-cards");
      console.log("cards avitver");

      setTimeout(() => {
        setAnnimation("");
      }, 4000);
    } else {
      setAnnimation("");
    }
  };
  // --------

  const annimation = (event) => {
    const card = event.currentTarget;

    let client = card.getBoundingClientRect();

    let x = event.clientX - client.left;
    let y = event.clientY - client.top;

    setPosition({ x, y });
  };

  return (
    <div className="card-container" onMouseMove={annimation}>
      <div
        className="card-annim"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(800px circle at ${Position.x}px ${Position.y}px, rgba(155, 113, 245, 0.3), transparent 40%)`,
        }}
      ></div>
      <InView as="div" onChange={handleIntersection}>
        <div className={`main-container-content-card ${Annimation}`}>
          <div className="head-card ">
            <div className="image-title-card ">
              <img src={linkImgProps} alt="services icons" width={'80px'}/>
            </div>
            <p>{titleProps}</p>
          </div>
          <div className="content-card">
            <div className="image-text-card">
              <img src={imgTexteProps} alt="" />
            </div>
            <div className="texte-card">{texteProps}</div>
          </div>
        </div>
      </InView>
    </div>
  );
};

export default Card_service;
