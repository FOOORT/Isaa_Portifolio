"use client";
import React from "react";

const HoverMask = ({ setIsHovered, maskElement }) => {
  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {maskElement}
    </div>
  );
};

export default HoverMask;
