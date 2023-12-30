"use client";
import React, { useState } from "react";
import { useMousePosition } from "@/utils/useMousePosition";
import { motion } from "framer-motion";
import HeroTextAnimation from "../common/heroTextAnimation";
import Scroll from "../scroll/scroll";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 250 : 40;
  return (
    <div className="min-h-screen top-0 flex justify-left items-center bg-gray">
      <div className="text-left font-black text-6xl md:text-7xl lg:text-8xl uppercase duration-150 w-full h-full flex flex-col justify-left items-left p-4 lg:p-12">
        <div className="flex flex-col gap-2">
          <HeroTextAnimation />
          Making
          <span className="text-green">good shit</span>
          since 2009
        </div>
        <Scroll />
      </div>
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "easeOut" }}
        className=" text-left font-black text-6xl md:text-7xl lg:text-8xl uppercase duration-150 w-full h-full flex flex-col justify-center items-left absolute mask p-4 lg:p-12"
      >
        <div
          className="flex flex-col gap-2"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <HeroTextAnimation />
          Hidding
          <span className="text-white">bad shit</span>
          since 2009
        </div>
        <Scroll />
      </motion.div>
    </div>
  );
};

export default Hero;
