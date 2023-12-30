"use client";
import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Full stack developer",
  "Project Manager",
  "Certified Trainer",
  "Freelancer",
];

const HeroTextAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000 // every 4 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h2 className="text-2xl font-light mb-4 uppercase">
      <TextTransition springConfig={presets.stiff}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h2>
  );
};

export default HeroTextAnimation;
