"use client";
import React from "react";
import { motion } from "framer-motion";
import NavItem from "../common/navItem";

const Navs = () => {
  return (
    <motion.nav
      initial={({ y: -100, opacity: 0 }, "hidden")}
      animate={({ y: 0, opacity: 1 }, "visible")}
      className="fixed top-0 right-0 text-right m-12 hidden lg:flex flex-col gap-4 uppercase text-xs font-semibold z-50 duration-100"
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 1 } },
      }}
    >
      <NavItem nav="About" />
      <NavItem nav="Work" />
      <NavItem nav="Contact" />
    </motion.nav>
  );
};

export default Navs;
