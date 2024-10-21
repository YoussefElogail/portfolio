import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { GridBackground } from "../ui/GridBackgrounds";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="pt-36 pb-20 ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <GridBackground />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            dynamic web magic with next.js
          </h2>
          <TextGenerateEffect
            className="capitalize text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming concepts into seamless experiences"
          />
          <p className="capitalize text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            We craft intuitive, visually stunning digital products that
            captivate and inspire users.
          </p>
          <a href="#about">
            <MagicButton
              icon={<FaLocationArrow />}
              text="Show my work"
              // icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
