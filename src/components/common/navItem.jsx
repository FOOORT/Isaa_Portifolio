"use client";
import React from "react";
import { motion } from "framer-motion";

const NavItem = ({ nav }) => {
  return (
    <div>
      <motion.span
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {nav}
      </motion.span>
    </div>
  );
};

export default NavItem;
