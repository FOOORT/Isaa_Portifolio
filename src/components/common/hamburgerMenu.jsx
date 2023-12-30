"use client";
import React from "react";
import { motion } from "framer-motion";

const HamburgerMenu = () => {
  return (
    <motion.div
      className="w-screen left-0 bottom-0 fixed p-2 flex lg:hidden justify-center items-center text-sm font-medium z-50"
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.4 } },
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="flex gap-2 bg-gray p-2 rounded-full text-xs uppercase duration-100 border border-white/20">
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="bg-green px-4 py-2 rounded-full flex justify-center items-center"
        >
          About
        </motion.span>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="px-8 py-3 rounded-full"
        >
          Work
        </motion.span>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="px-8 py-3 rounded-full"
        >
          Contact
        </motion.span>
      </div>
    </motion.div>
  );
};

export default HamburgerMenu;
