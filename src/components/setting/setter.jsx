"use client";
import { motion } from "framer-motion";

const Setter = ({ isHovered, x, y, beforeMask, afterMask }) => {
  const size = x <= 0 && y <= 0 ? 0 : isHovered ? 300 : 40;
  return (
    <div className="flex justify-left items-center bg-gray">
      {/* Before  */}
      <div className="text-left font-black text-6xl md:text-7xl lg:text-8xl uppercase duration-150 w-full flex flex-col justify-left items-left p-4 lg:p-12">
        {beforeMask}
      </div>

      {/* Masked */}
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "easeOut" }}
        className=" text-left font-black text-6xl md:text-7xl lg:text-8xl uppercase duration-150 w-full flex flex-col justify-center items-left absolute mask p-4 lg:p-12"
      >
        {afterMask}
      </motion.div>
    </div>
  );
};

export default Setter;
