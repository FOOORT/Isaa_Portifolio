"use client";
import React, { useState } from "react";
import { useMousePosition } from "@/utils/useMousePosition";
import HeroTextAnimation from "../common/heroTextAnimation";
import Scroll from "../scroll/scroll";
import Setter from "../setting/setter";
import HoverMask from "../setting/hoverMask";
import Hero from "./pages/hero";
import MaskedHero from "./pages/mask/hero";
import About from "./pages/about";
import MaskedAbout from "./pages/mask/about";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  return (
    <div className="flex justify-left items-center bg-gray">
      {/* Before  */}
      <Setter
        isHovered={isHovered}
        x={x}
        y={y}
        beforeMask={
          <>
            <Hero />
            <About />
            {/* <Scroll /> */}
          </>
        }
        afterMask={
          <>
            <HoverMask
              setIsHovered={setIsHovered}
              maskElement={<MaskedHero />}
            />

            <HoverMask
              setIsHovered={setIsHovered}
              maskElement={<MaskedAbout />}
            />
          </>
        }
      />
    </div>
  );
};

export default HomePage;
