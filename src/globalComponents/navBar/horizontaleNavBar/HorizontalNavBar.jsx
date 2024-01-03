import React, { useState } from "react";
import "./__horizontalNavBar.css";
import Toogle from "../../customComponents/toogleBtn/Toogle";
import { Close, Menu } from "@mui/icons-material";

const HorizontalNavBar = () => {
  const navData = [
    {
      title: "Acceuil",
      link: "/acceuil",
    },
    {
      title: "A propos",
      link: "/acceuil",
    },
    {
      title: "Contact",
      link: "/acceuil",
    },
    {
      title: "Services",
      link: "/acceuil",
    },
  ];

  const [ligth, setLigth] = useState(false);
  const handleclick = () => setLigth(!ligth);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="horizontal-nav-bar">
      <nav className={`navbar ${open ? "active" : ""}`}>
        <h1 className="horizontal-nav-title">Akoor</h1>
        <div className="nav-content">
          <ul>
            {navData.map((nav, index) => (
              <li key={index}>
                <span>{nav.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="toogle-btn-nav">
          <Toogle onclick={handleclick} ligth={ligth} />
        </div>
        <div className="menu-icon-nav">
          {open ? (
            <Close
              sx={{
                fontSize: "40px",
              }}
              onClick={handleClickOpen}
            />
          ) : (
            <Menu
              sx={{
                fontSize: "40px",
              }}
              onClick={handleClickOpen}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default HorizontalNavBar;
