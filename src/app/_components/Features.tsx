"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Talk To Listen",
    description:
      "A brief description of the project, its goals, and technologies used.",
    image: "/portfolio/talktolisten.png",
  },
  {
    title: "JobsDreamer",
    description:
      "A brief description of the project, its goals, and technologies used.",
    image: "/portfolio/jobsdreamer.png",
  },
  {
    title: "Bull Bot",
    description:
      "A brief description of the project, its goals, and technologies used.",
    image: "/portfolio/bullbot.png",
  },
  // Add more projects as needed
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-bold text-off-black"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium text-off-black">
                  {project.title}
                </h3>
                <p className="text-off-black mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
