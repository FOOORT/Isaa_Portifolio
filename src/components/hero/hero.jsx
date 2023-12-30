"use client";
import React, { useState } from "react";
import { useMousePosition } from "@/utils/useMousePosition";
import { motion } from "framer-motion";
import HeroTextAnimation from "../common/heroTextAnimation";
import Scroll from "../scroll/scroll";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = x <= 0 && y <= 0 ? 0 : isHovered ? 250 : 40;
  return (
    <div className="flex justify-left items-center bg-gray">
      {/* Before  */}
      <div className="text-left font-black text-6xl md:text-7xl lg:text-8xl uppercase duration-150 w-full flex flex-col justify-left items-left p-4 lg:p-12">
        <div className="flex flex-col gap-2 mt-[40vh]">
          <HeroTextAnimation />
          Making
          <span className="text-green">good shit</span>x {x}y {y}
        </div>
        <h2 className="mt-[25vh]">check 2</h2>
        <h2 className="text-9x font-thin my-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          sapiente praesentium vitae neque numquam, tempore labore soluta
          repellat sequi ullam eum corrupti fugiat inventore excepturi quidem
          unde iure harum quo?
        </h2>
        <h2>check 2</h2>
        <h2 className="text-9x font-thin my-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          sapiente praesentium vitae neque numquam, tempore labore soluta
          repellat sequi ullam eum corrupti fugiat inventore excepturi quidem
          unde iure harum quo?
        </h2>
        <Scroll />
      </div>

      {/* Masked */}
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "easeOut" }}
        className=" text-left font-black text-6xl md:text-7xl lg:text-8xl uppercase duration-150 w-full flex flex-col justify-center items-left absolute mask p-4 lg:p-12"
      >
        <div
          className="flex flex-col gap-2 mt-[40vh]"
          onMouseEnter={() => {
            // onMouseMoveCapture={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <HeroTextAnimation />
          Hidding
          <span className="text-white">bad shit</span>x {x}y {y}
        </div>
        <h2
          onMouseEnter={() => {
            // onMouseMoveCapture={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="mt-[25vh]"
        >
          check 2
        </h2>
        <h2 className="text-9x font-thin my-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          sapiente praesentium vitae neque numquam, tempore labore soluta
          repellat sequi ullam eum corrupti fugiat inventore excepturi quidem
          unde iure harum quo?
        </h2>
        <h2
          onMouseEnter={() => {
            // onMouseMoveCapture={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          check 2
        </h2>
        <h2 className="text-9x font-thin my-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          sapiente praesentium vitae neque numquam, tempore labore soluta
          repellat sequi ullam eum corrupti fugiat inventore excepturi quidem
          unde iure harum quo?
        </h2>
      </motion.div>
    </div>
  );
};

export default Hero;
