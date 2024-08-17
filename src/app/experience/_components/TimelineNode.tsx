"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineNodeProps {
  date: string;
  title: string;
  company: string;
  description: string;
  techStack: string[];
  isLeft?: boolean;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({
  date,
  title,
  company,
  description,
  techStack,
  isLeft = false,
}) => {
  return (
    <motion.div
      className={`relative mb-8 flex justify-between items-center w-full ${
        isLeft ? "flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: -100 }} // Start above the timeline
      animate={{ opacity: 1, y: 0 }} // Move to the correct position
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="order-1 w-5/12"></div>
      <motion.div
        className="z-20 flex items-center order-1 bg-highlight-orange shadow-xl w-8 h-8 rounded-full"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3, ease: "easeOut" }} // Slight delay to scale after movement
      ></motion.div>
      <motion.div
        className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 ${
          isLeft ? "text-right" : "text-left"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }} // Show card after the node reaches position
      >
        <h4 className="mb-1 text-xl font-bold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{company}</p>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-3 flex flex-wrap justify-start">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 mb-2 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineNode;
