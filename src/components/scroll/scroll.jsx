"use client";
import { motion } from "framer-motion";

const Scroll = () => {
  return (
    <motion.div
      className="fixed lg:absolute bottom-0 left-0 text-left m-12 hidden lg:flex gap-2 uppercase text-xs border border-white px-12 py-3 z-50 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 150, damping: 10 }}
    >
      Scroll
    </motion.div>
  );
};

export default Scroll;
