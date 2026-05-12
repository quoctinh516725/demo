import React, { useState } from "react";
import VideoBanner from "../components/VideoBanner";
import { TypeAnimation } from "react-type-animation";
import PageTransition from "../components/PageTransition";
import avatar from "../assets/avatar.jpg";

import Menu from "../components/Menu";

const Home = () => {
  return (
    <PageTransition>
      <VideoBanner />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div class="sm:hidden relative w-40 h-40 mb-10">
          <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-transparent blur-2xl"></div>

          <img
            src={avatar}
            alt="avatar"
            class="relative w-full h-full object-cover rounded-full border-4 border-gray-600"
          />
        </div>

        <h1 className="prata-regular text-white text-2xl  sm:text-4xl font-bold [text-shadow:2px_2px_5px_white]">
          NGUYỄN QUỐC <span className="text-blue-500   ">TÍNH</span>
        </h1>
        <TypeAnimation
          sequence={[
            "I am a Web Developer",
            1000,
            "",
            500,
            "I am a Frontend Developer",
            1000,
          ]}
          wrapper="p"
          speed={50}
          className="prata-regular text-white text-2xl mt-4 font-semibold [text-shadow:2px_2px_5px_white]"
          repeat={Infinity}
        />
      </div>
    </PageTransition>
  );
};

export default Home;
