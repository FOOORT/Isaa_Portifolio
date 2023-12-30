"use client";
import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.h1
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="top-0 fixed lg:m-12 text-center left-0 uppercase text-sm font-black border-b-lightgreen border-b-2 px-4 py-4 lg:py-2 z-50 gap-1 duration-150 w-screen lg:w-auto"
    >
      ISSA NSABIMANA
    </motion.h1>
  );
};

export default Logo;
