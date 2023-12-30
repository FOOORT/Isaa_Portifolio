"use client";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import MagnetIcon from "../common/magnetIcon";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <motion.ul
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-0 right-0 text-right mb-[20vh] lg:mb-12 m-4 lg:m-12 hidden md:flex flex-col gap-2 uppercase text-lg z-50 duration-100"
    >
      <MagnetIcon icon={<FaLinkedinIn />} />
      <MagnetIcon icon={<AiFillInstagram />} />
      <MagnetIcon icon={<FaSquareXTwitter />} />
      <MagnetIcon icon={<FaGithub />} />
      <MagnetIcon icon={<SiGmail />} />
    </motion.ul>
  );
};

export default Socials;
