import React from "react";
import "./__aboutMe.css";
const AboutMe = () => {
  return (
    <div data-scroll-section className="about-me-section">
      <div data-scroll data-scroll-speed="7" className="about-bloc bloc-1">
        <h1 className="about-title">
          Salut,Je Suis Mahery <br />
          Web,Mobile Developer & 3d Modelist & UI/UX Designer
        </h1>
        <p className="about-sous-title">
          Front End Developer/Mobile developer/Javascript Fan/Creative
          Development
        </p>
      </div>
      <div data-scroll data-scroll-speed="2" className="about-bloc bloc-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          itaque odit dolorem et, odio tenetur? Eum qui repellat autem officia!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          itaque odit dolorem et, odio tenetur? Eum qui repellat autem officia!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          itaque odit dolorem et, odio tenetur? Eum qui repellat autem officia!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
