import React, { useEffect, useRef, useState } from "react";
import "./_mainPages.css";
import NavBar from "./content/navBar/NavBar";
import Banner from "./content/banner/Banner";
import ProjetRealiser from "./content/projectRealiser/ProjetRealiser";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
import AboutMe from "./content/aboutme/AboutMe";
import SkillsExp from "./content/skills&exp/SkillsExp";

const MainPages = () => {
  //locomotive scroll instantiation

  const [view, setView] = useState(false);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 0.3,
      lerp: 0.1,
    });

    scroll.on("scroll", (args) => {
      if (typeof args.currentElements["skills-Exp-containner"] === "object") {
        let progress = args.currentElements["skills-Exp-containner"].progress;

        gsap.to("#element-scrool", {
          scale: 80 * progress,
        });
      }
    });
  }, []);

  //annimation d'apparition texte banner
  useEffect(() => {
    gsap.fromTo(
      ".el-gsap-app",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.5,
        duration: 1,
      }
    );
  }, []);

  //annimation du bulle
  const bulleRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.addEventListener("mouseenter", (e) => {
      let x = e.pageX - bulleRef.current.offsetWidth / 2;

      let y = e.pageY - bulleRef.current.offsetHeight / 2;
      setPosition({
        x: x,
        y: y,
      });
    });
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX - bulleRef.current.offsetWidth / 2;

      let y = e.pageY - bulleRef.current.offsetHeight / 2;
      setPosition({
        x: x,
        y: y,
      });
    });

    return () => {
      document.removeEventListener("mousemove", (e) => {
        let x = e.clientX - bulleRef.current.offsetWidth / 2;

        let y = e.clientY - bulleRef.current.offsetHeight / 2;

        setPosition({
          x: x,
          y: y,
        });
      });
    };
  }, []);
  return (
    <>
      <div data-scroll-container>
        <NavBar />
        <Banner />
        <AboutMe />
        <SkillsExp />
        <ProjetRealiser />
      </div>

      {/* bulle */}
      <div
        // data-scroll-section
        ref={bulleRef}
        className="bulle"
        style={{
          transform: `translate(${position.x}px,${position.y}px)`,
          // top: position.y,
          // left: position.x,
        }}
      ></div>
    </>
  );
};

export default MainPages;
