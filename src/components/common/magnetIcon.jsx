"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MagnetIcon = ({ icon }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const MouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const MouseLeave = (e) => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={MouseMove}
      onMouseLeave={MouseLeave}
      className="flex p-6 z-50 cursor-pointer hover:bg-green rounded-full duration-150"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.6 }}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 10 }}
    >
      {icon}
    </motion.div>
  );
};

export default MagnetIcon;
