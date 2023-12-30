import HamburgerMenu from "@/components/common/hamburgerMenu";
import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import React from "react";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <HamburgerMenu />
      <Hero />
      <About/>
    </div>
  );
};

export default Landing;
