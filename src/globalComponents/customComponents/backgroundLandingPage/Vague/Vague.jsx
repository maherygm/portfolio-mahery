import React, { useEffect, useRef, useState } from "react";

function Vague() {
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let amplitude = 75;
    let frequency = 0.005;
    let phase = 0;

    function animation() {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(0, canvasHeight);

      let Hauteur = canvasHeight;

      for (let i = 0; i < canvasWidth * 4.5; i += 2) {
        const y = amplitude * Math.sin(frequency * i + phase) + Hauteur;
        context.lineTo(i, y);
        Hauteur--;
      }

      context.closePath();
      context.fill();
      context.stroke();
      phase += 0.01;

      requestAnimationFrame(animation);
    }

    animation();

    const handleResize = () => {
      setCanvasWidth(window.innerWidth);
      setCanvasHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasWidth, canvasHeight]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      style={{
        position: "absolute",
        display: "block",
        top: "0",
        backgroundColor: "white",
      }}
    ></canvas>
  );
}

export default Vague;
