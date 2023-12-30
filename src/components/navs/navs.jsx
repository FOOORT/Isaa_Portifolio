"use client";
import React from "react";
import HamburgerMenu from "../common/hamburgerMenu";
import { motion } from "framer-motion";

const Navs = () => {
  return (
    <motion.nav
      initial={({ y: -100, opacity: 0 }, "hidden")}
      animate={({ y: 0, opacity: 1 }, "visible")}
      className="fixed top-0 right-0 text-right m-12 hidden lg:flex flex-col gap-4 uppercase text-xs font-semibold z-50 duration-100"
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.4 } },
      }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        About
      </motion.span>
      <motion.span
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        Work
      </motion.span>
      <motion.span
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        Contact
      </motion.span>
    </motion.nav>
  );
};

export default Navs;
