"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedBeamCircle } from "./CircleBeam";

const Skills: React.FC = () => {
  return (
    <section className="bg-off-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-bold text-off-black"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-off-black mt-4"
        >
          With strong experience in full-stack development, I’ve built
          end-to-end projects for both web and mobile platforms. I’m also
          passionate about AI and ML, especially in Natural Language Processing
          and Large Language Models.
        </motion.p>
        <AnimatedBeamCircle />
      </div>
    </section>
  );
};

export default Skills;
