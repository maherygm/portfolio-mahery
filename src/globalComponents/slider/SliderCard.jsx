import React, { useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slider.css";

import cardimage1 from "../../assets/image/sliderImages/cardImage/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg";
import cardimage2 from "../../assets/image/sliderImages/cardImage/andrew-neel-cckf4TsHAuw-unsplash.jpg";
import cardimage3 from "../../assets/image/sliderImages/cardImage/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg";
import cardimage4 from "../../assets/image/sliderImages/cardImage/farzad-p-xSl33Wxyc-unsplash.jpg";
import cardimage5 from "../../assets/image/sliderImages/cardImage/thisisengineering-raeng-t4qI2IDcL5s-unsplash.jpg";
import cardimage6 from "../../assets/image/sliderImages/cardImage/ilya-pavlov-OqtafYT5kTw-unsplash.jpg";

const SliderCard = () => {
  const cardsData = [
    {
      title: "Card 1",
      image: cardimage1,
      content: "Content for Card 1",
    },
    {
      title: "Card 2",
      image: cardimage2,
      content: "Content for Card 2",
    },
    {
      title: "Card 3",
      image: cardimage3,
      content: "Content for Card 3",
    },
    {
      title: "Card 4",
      image: cardimage4,
      content: "Content for Card 3",
    },
    {
      title: "Card 5",
      image: cardimage5,
      content: "Content for Card 3",
    },
    {
      title: "Card 6",
      image: cardimage6,
      content: "Content for Card 3",
    },
    // Ajoutez d'autres données de carte selon vos besoins
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // speed: 10000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    nextArrow: null,
    prevArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //annimation drag
  let [Position, setPosition] = useState({ x: null, y: null });

  let [visible, setVisible] = useState(false);

  let handlemousemove = (e) => {
    setVisible(true);
    let element = e.currentTarget;

    let client = element.getBoundingClientRect();

    let x = e.clientX - client.left;
    let y = e.clientY - client.top + 10;

    setPosition({ x, y });
  };

  let handlemouseleave = () => {
    setVisible(false);
  };

  const sliderRef = useRef();

  // Fonction pour passer à la diapositive suivante
  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  // Fonction pour revenir à la diapositive précédente
  const handlePreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const [mousePressed, setMousePressed] = useState(false);
  const handlemousedown = () => {
    setMousePressed(true);
  };
  const handlemouseup = () => {
    setMousePressed(false);
  };

  console.log(sliderRef);
  return (
    <div
      className="slider-content-card"
      onMouseMove={handlemousemove}
      onMouseLeave={handlemouseleave}
      onMouseDown={handlemousedown}
      onMouseUp={handlemouseup}
    >
      {visible && (
        <div
          className={`hovered-component ${mousePressed ? "pressed" : ""}`}
          style={{
            position: "absolute",
            transform: `translate(${Position.x}px, ${Position.y}px)`,
          }}
          on
        >
          {!mousePressed && <p>Drag</p>}
          {mousePressed && (
            <>
              <div className="triangle triangle-1"></div>
              <div className="triangle triangle-2"></div>
            </>
          )}
        </div>
      )}

      <div
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <div
                className={`card-body`}
                style={{
                  background: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="contenaire-texte">
                  <h3 className="card-slider-title">{card.title}</h3>
                  <p className="card-slider-content">{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderCard;
