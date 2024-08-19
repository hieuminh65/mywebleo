"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-12 py-12 rounded-xl bg-off-white">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.img
          src="/avatar.png"
          alt="Leo"
          className="rounded-full w-48 h-48 mb-8 md:mb-0 md:mr-8 shadow-lg"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-off-black">About Me</h2>
          <p className="text-lg text-off-black mt-4">
            I&apos;m Leo, a passionate software developer who loves creating
            innovative software. My journey in tech began with a fascination for
            AI and the latest technology trends. I enjoy learning new skills and
            working on various projects, exploring different areas within the
            field, and continuously expanding my knowledge.
          </p>
          <div className="mt-8 flex space-x-6 justify-center md:justify-start">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="https://github.com/yourusername" passHref>
                <img
                  src="/logos/github.png"
                  alt="GitHub"
                  className="w-8 h-8 rounded-full"
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="https://linkedin.com/in/yourusername" passHref>
                <img
                  src="/logos/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 h-8 rounded-full"
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="https://devpost.com/yourusername" passHref>
                <img
                  src="/logos/devpost.png"
                  alt="Devpost"
                  className="w-8 h-8 rounded-full"
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="https://huggingface.co/yourusername" passHref>
                <img
                  src="/logos/huggingface.png"
                  alt="Huggingface"
                  className="w-8 h-8 rounded-full"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
