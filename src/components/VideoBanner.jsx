import React from "react";
import video from "../assets/video1.mp4";
import { TypeAnimation } from "react-type-animation";

const VideoBanner = () => {
  return (
    <video
      src={video}
      autoPlay
      loop
      muted
      className="h-screen max-w-none sm:max-w-full object-cover"
    ></video>
  );
};

export default VideoBanner;
