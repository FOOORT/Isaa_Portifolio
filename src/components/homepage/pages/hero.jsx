import HeroTextAnimation from "@/components/common/heroTextAnimation";
import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col gap-2 mt-[30vh]">
      <HeroTextAnimation />
      Making
      <span className="text-green">good shit</span> since 2009
    </section>
  );
};

export default Hero;
