import React, { useEffect, useRef } from "react";
import "./gsapText.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const tl = gsap.timeline();

const GsapText = () => {
  const texts =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, distinctio?";

  const Tl = gsap.timeline();
  useEffect(() => {
    const allTxt = document.querySelectorAll(".txt");
    Tl.from(allTxt, {
      opacity: 0,
      delay: 1,
      ease: "powe4.out",
      stagger: 0.01,
    }).to(allTxt, {
      opacity: 1,
    });
  }, []);

  const cubeRef = useRef(null);

  useEffect(() => {
    const cube = cubeRef.current;
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to(".c", {
    //   scrollTrigger: {
    //     trigger: ".c",
    //     start: "top center",
    //     end: "top top",
    //     toggleActions: "restart pause reverse",
    //     scrub: "true",
    //     pin: "true",
    //     markers: "true",
    //   },
    //   x: 240,
    //   rotation: 360,
    //   duration: 3,
    // });

    tl.from(".b", { xPercent: -100 })
      .from(".c", { xPercent: 100 })
      .from(".d", { yPercent: -100 });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".wrapper",
      start: "top top",
      end: "+=4000",
      scrub: "true",
      pin: true,
      markers: true,
    });
    gsap.fromTo(
      cube,
      {
        x: -100,
      },
      { x: 0 }
    );
  }, []);
  return (
    <>
      <div className="wrapper">
        {/* <div className="wraper">
        {texts.split("").map((text, index) => (
          <span key={index} className="txt">
            {text}
          </span>
        ))}
      </div> */}

        <div className="cube a">
          BLUE
          <div ref={cubeRef} className="ghost"></div>
        </div>
        <div className="container-el">
          <div className="cube b">ORANGE</div>
          <div className="cube c">Pink </div>
          <div className="cube d">Green</div>
        </div>
      </div>
    </>
  );
};

export default GsapText;
