import React, { useState } from "react";
import "./_toogle.css";
const Toogle = ({ onclick, ligth }) => {
  //   const [open, setOpen] = useState(ligth);

  return (
    <div onClick={onclick}>
      <div className={`main-eegs-toogle ${ligth ? "dark-mode-egg" : ""}`}>
        <div className="eggs-content-container">
          <div className="nuage-bleu nuage11"></div>
          <div className="nuage-bleu nuage12"></div>
          <div className="nuage-bleu nuage13"></div>
          <div className="nuage-bleu nuage14"></div>
          <div className="nuage-bleu nuage15"></div>
          <div className="nuage-bleu nuage16"></div>
          <div className="nuage-bleu nuage17"></div>

          <div className="nuage-blanc nuage21"></div>
          <div className="nuage-blanc nuage22"></div>
          <div className="nuage-blanc nuage23"></div>
          <div className="nuage-blanc nuage24"></div>
          <div className="nuage-blanc nuage25"></div>
          <div className="nuage-blanc nuage26"></div>

          <div className="cielvague">
            <div className="etoile-egg etoileeggs1"></div>
            <div className="etoile-egg etoileeggs2"></div>
            <div className="etoile-egg etoileeggs3"></div>
            <div className="etoile-egg etoileeggs4"></div>
            <div className="etoile-egg etoileeggs5"></div>
            <div className="etoile-egg etoileeggs6"></div>

            <div className="vague-ciel vague-ciel1"></div>
            <div className="vague-ciel vague-ciel2"></div>
            <div className="vague-ciel vague-ciel3"></div>
            <div className="vague-ciel vague-ciel4"></div>
            <div className="eggs-content">
              <div className="circle-eggs circle1-eggs"></div>
              <div className="circle-eggs circle2-eggs"></div>
              <div className="circle-eggs circle3-eggs"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toogle;
