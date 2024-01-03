import React, { useEffect, useRef } from "react";
import "./TexteSeCroise.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
const TexteSeCroise = () => {
  console.log("hellos");
  const h1ref = useRef(null);
  const h2ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline();

    tl1.fromTo(h1ref.current, { x: -500 }, { x: 100 });
    tl2.fromTo(h2ref.current, { x: 2200 }, { x: 100 });

    ScrollTrigger.create({
      animation: tl1,
      start: "top 80%",
      end: "top 100px",
      markers: "true",
      scrub: 1,
    });
    ScrollTrigger.create({
      animation: tl2,
      start: "top 80%",
      end: "top 100px",
      markers: "true",
      scrub: 1,
    });
  }, []);
  return (
    <div cl assName="countainer-txte-se-croise">
      <div className="text-contenaire">
        <h1
          style={{
            fontSize: "100px",
            width: "max-content",
          }}
          ref={h1ref}
        >
          ipsum dolor
        </h1>
        <h2
          ref={h2ref}
          style={{
            fontSize: "100px",
            width: "max-content",
          }}
        >
          Lorem, ipsum
        </h2>
      </div>
    </div>
  );
};

export default TexteSeCroise;
