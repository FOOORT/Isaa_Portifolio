import HeroTextAnimation from "@/components/common/heroTextAnimation";
import React from "react";

const MaskedHero = () => {
  return (
    <section id="hero" className="flex flex-col gap-2 mt-[30vh]">
      <HeroTextAnimation />
      Hidding
      <span className="text-white">bad shit</span> since 2009
    </section>
  );
};

export default MaskedHero;
