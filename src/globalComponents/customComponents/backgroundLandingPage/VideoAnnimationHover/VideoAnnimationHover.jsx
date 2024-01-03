import React, { useEffect, useRef } from "react";
import "./__videoannimation.css";
import videoM from "../../../../assets/video/gameoverman.mp4";
const VideoAnnimationHover = () => {
  const videoRef = useRef(null);

  const canvasRef = useRef();

  useEffect(() => {
    const canvasCurent = canvasRef.current;
    const videoCurent = videoRef.current;
    function resizeCanvas() {
      canvasCurent.width = window.innerWidth;
      canvasCurent.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let ctx = canvasCurent.getContext("2d");

    let posX = 0;
    canvasCurent.addEventListener("mousemove", (event) => {
      setTimeout(() => (posX = event.offsetX), 100);
      console.log(posX);
    });

    function annimation() {
      ctx.clearRect(0, 0, canvasCurent.width, canvasCurent.height);

      ctx.save();
      ctx.beginPath();
      ctx.rect(posX - 600 / 2, 0, 600, canvasCurent.height);

      ctx.clip();

      ctx.drawImage(videoCurent, 0, 0, canvasCurent.width, canvasCurent.height);
      ctx.restore();
      requestAnimationFrame(annimation);
    }
    annimation();
  }, []);

  return (
    <div className="main-container-video">
      <canvas ref={canvasRef} className="canvas-viedo" />
      <video ref={videoRef} className="video" type="video/mp4" autoPlay muted>
        <source src={videoM} />
      </video>
    </div>
  );
};

export default VideoAnnimationHover;
