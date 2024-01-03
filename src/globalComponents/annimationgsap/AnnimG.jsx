import React, { useLayoutEffect, useRef } from "react";
import "./Anni.css";
import { gsap } from "gsap";
const AnnimG = () => {
  const box = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(box.current, {
        x: 200,
        delay: 1,
        duration: 2,
        rotation: 360,
      });
    }, box);
    return () => {
      ctx.revert();
    };
  });
  return (
    <div ref={box} className="hello">
      hello
    </div>
  );
};

export default AnnimG;
