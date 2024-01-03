import React, { useEffect, useRef } from "react";

import "./__imageAvengers.css";
import image1 from "../../../assets/image/image scarlet/scarlet1/scarlet-removebg-preview.png";
import image2 from "../../../assets/image/image scarlet/scarlet1/scarlet_copie-removebg-preview2.png";
import image3 from "../../../assets/image/image scarlet/scarlet2/R1.jpg";
import image4 from "../../../assets/image/image scarlet/scarlet2/r3.jpg";
import { ScrollTrigger, gsap } from "gsap/all";

const ImageAvangers = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".image-1", {
        width: "700px",
      });

      ScrollTrigger.create({
        animation: tl,
        start: "top center",
        end: "top 10px",
        scrub: "true",
      });
    }, imageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="main-co" ref={imageRef}>
      <div
        className="image-2"
        style={{
          backgroundImage: `url(${image2}`,
        }}
      ></div>
      <div
        className="image-1"
        style={{
          backgroundImage: `url(${image1}`,
        }}
      ></div>
    </div>
  );
};

export default ImageAvangers;
