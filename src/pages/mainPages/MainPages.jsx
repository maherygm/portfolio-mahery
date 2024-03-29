import React, { useEffect, useRef, useState } from "react";
import "./_mainPages.css";
import NavBar from "./content/navBar/NavBar";
import Banner from "./content/banner/Banner";
import ProjetRealiser from "./content/projectRealiser/ProjetRealiser";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import AboutMe from "./content/aboutme/AboutMe";
import SkillsExp from "./content/skills&exp/SkillsExp";
import ContactMe from "./content/contactme/ContactMe";

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

  useEffect(() => {
    gsap.to("body", {
      scale: 0.5,
      height: "100vh",
    });
    gsap.to("body", {
      scale: 1,
      delay: 5,
      height: "auto",
    });
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
      <div data-scroll-container className="main-containner">
        <NavBar />
        <Banner />
        <AboutMe />
        <SkillsExp />
        <ProjetRealiser />
        <ContactMe />
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
