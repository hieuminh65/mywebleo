"use client";

import React from "react";
import { motion } from "framer-motion";
import GradualSpacing from "@/app/_components/HeroHeading";

const HeroSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-white text-off-black px-8">
      <motion.img
        src="/avatar.png"
        alt="Avatar"
        className="w-24 h-24 rounded-full mr-8 border-4 border-off-white shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
      <div className="text-4xl font-bold text-off-black">
        <span>
          <GradualSpacing text="Discover my story" />
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
