"use client";

import React from "react";
import { motion } from "framer-motion";
import GradualSpacing from "@/app/_components/HeroHeading";

const HeroSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-off-white text-off-black px-8">
      <motion.img
        src="/avatar.png"
        alt="Avatar"
        className="w-24 h-24 rounded-full mr-8 border-4 border-highlight-black"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="text-xl font-semibold"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span>
          <GradualSpacing text="Discover my story" />
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
