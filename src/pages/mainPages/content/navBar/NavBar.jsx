import React, { useState } from "react";
import "./__navBar.css";
import Toogle from "../../../../globalComponents/customComponents/toogleBtn/Toogle";
const NavBar = () => {
  const [ligth, setLigth] = useState(false);

  function handleCLick(params) {
    setLigth(!ligth);

    document.querySelector("body").classList.toggle("darkTheme");
  }
  return (
    <div className="main-container-navbar">
      <div className="content-navBar">
        <h2>MENU</h2>
        <h1>PERSONAL PORTFOLIO</h1>
        <div className="toogle-content">
          <h2>MAHERY</h2>
          <Toogle ligth={ligth} onclick={handleCLick} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
