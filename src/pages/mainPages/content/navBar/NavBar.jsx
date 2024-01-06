import React, { useEffect, useState } from "react";
import "./__navBar.css";
import Toogle from "../../../../globalComponents/customComponents/toogleBtn/Toogle";
import Menu from "../../../../globalComponents/menu/Menu";
import { InView } from "react-intersection-observer";
import { gsap } from "gsap";
const NavBar = () => {
  const [ligth, setLigth] = useState(false);
  const [open, setOpen] = useState(false);

  function handleCLick(params) {
    setLigth(!ligth);

    document.querySelector("body").classList.toggle("darkTheme");
  }
  function handleCLickOpenMenuBar(params) {
    setOpen(true);
    if (window.innerWidth > 954) {
      gsap.to(".bar-navigation", {
        width: "100%",
        duration: 1,
        stagger: 0.1,
      });
    } else {
      gsap.to(".bar-navigation", {
        width: "100%",
        duration: 0.5,
        stagger: 0.1,
      });
    }
  }
  function handleCloseMenuBar(params) {
    if (window.innerWidth > 954) {
      gsap.to(".bar-navigation", {
        width: "0%",
        duration: 1,
        stagger: 0.1,
      });
    } else {
      gsap.to(".bar-navigation", {
        width: "0%",
        duration: 0.5,
        stagger: 0.1,
      });
    }

    setTimeout(() => {
      setOpen(false);
    }, 1360);
  }
  const [scrool, setscrool] = useState(false);
  function NavTOP(params) {
    if (!params) {
      setscrool(true);
    } else {
      setscrool(false);
    }
  }

  return (
    <>
      <div
        data-scroll-section
        className={`main-container-navbar ${scrool ? "navfixed" : ""}`}
      >
        <div className="content-navBar">
          <h2
            id="menu-clickbtn"
            className="el-gsap-app"
            onClick={handleCLickOpenMenuBar}
          >
            MENU
          </h2>
          <h1 className="el-gsap-app">PERSONAL PORTFOLIO</h1>
          <div className="toogle-content el-gsap-app">
            <h2>MAHERY</h2>
            <Toogle ligth={ligth} onclick={handleCLick} />
          </div>
        </div>
      </div>

      <div className={`Menu-bar ${!open ? "hiden" : ""}`}>
        <div className="bar-navigation item-1">
          <h1 className="title-menu">Menu</h1>
        </div>
        <div className="bar-navigation item-2">
          <p>Projet Realiser</p>
        </div>
        <div className="bar-navigation item-3">
          <p>Parcours Academique</p>
        </div>
        <div className="bar-navigation item-4">
          <p>Atouts</p>
        </div>
        <div className="bar-navigation item-5">
          <h1 onClick={handleCloseMenuBar} className="title-menu">
            X
          </h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;
