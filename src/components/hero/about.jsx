"use client";
import React, { useState } from "react";
import { useMousePosition } from "@/utils/useMousePosition";
import { motion } from "framer-motion";
import HeroTextAnimation from "../common/heroTextAnimation";
import Scroll from "../scroll/scroll";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <section className="min-h-screen top-0 flex justify-left items-center bg-gray">
      <div className="text-left font-thin text-5xl md:text-7xl lg:text-7xl uppercase duration-150 w-full lg:pr-[8vw] h-full flex flex-col justify-left items-left p-4 lg:p-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-bold mb-4 uppercase">About me</h2>I am
          <span className="text-green">selective skilled</span>
          Developer with strong focus on producing high quality & impactifully
          digital experience
        </div>
      </div>
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "easeOut" }}
        className=" text-left font-thin text-5xl md:text-7xl lg:text-7xl uppercase duration-150 w-full lg:pr-[8vw] h-full flex flex-col justify-center items-left absolute mask p-4 lg:p-12"
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
          <h2 className="text-sm font-bold mb-4 uppercase">About me</h2>I am
          <span className="text-white">Pro skilled</span>
          product designer with focus on producing high quality & impactifully
          digital experience
        </div>
      </motion.div>
    </section>
  );
};

export default About;
