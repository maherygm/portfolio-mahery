import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import React, { useLayoutEffect, useRef } from "react";

import "./Svg.css";
const SvgAnnimation = () => {
  const elementRef = useRef(null);
  gsap.registerPlugin(MotionPathPlugin);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to(elementRef.current, {
        motionPath: {
          path: "path",
          align: "path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        transformOrigin: "50% 50%",
        duration: 5,
        ease: "power1.inOut",
      });
    }, elementRef);
  });
  return (
    <>
      <div className="svg" ref={elementRef}></div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="995.565"
          height="455.516"
          viewBox="0 0 995.565 455.516"
        >
          <path
            id="Tracé_1"
            data-name="Tracé 1"
            d="M0,0S238.244-69.626,394.466,19.7c28.745,16.435,52.446,38.035,72.834,62.764,89.712,108.813,111.836,276.245,205.816,311C921.866,485.464,995,368,995,368"
            transform="translate(0.14 26.356)"
            fill="none"
            stroke="#707070"
            stroke-width="1"
          />
        </svg>
      </div>
    </>
  );
};

export default SvgAnnimation;
