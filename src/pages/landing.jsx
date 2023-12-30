import HamburgerMenu from "@/components/common/hamburgerMenu";
// import About from "@/components/hero/about";
import HomePage from "@/components/homepage/homePage";
import React from "react";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <HamburgerMenu />
      <HomePage />
      {/* <About/> */}
    </div>
  );
};

export default Landing;
