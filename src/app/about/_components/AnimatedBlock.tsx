"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedBlock: React.FC<{
  text: string;
  imgSrc: string;
  bgColor: string;
}> = ({ text, imgSrc, bgColor }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        y: [30, 0],
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: "-20%", y: "10%", opacity: 0 }}
      animate={controls}
      className={`flex items-center space-x-4 mb-16 p-6 rounded-lg ${bgColor} mx-auto max-w-4xl`}
    >
      <img
        src={imgSrc}
        alt={text}
        className="w-24 h-24 rounded-full object-cover"
      />
      <h2 className="text-xl font-medium text-off-black">{text}</h2>
    </motion.div>
  );
};

const AnimatedBlocksPage: React.FC = () => {
  const blocks = [
    {
      text: "Hi, I'm Leo, but my real name is Hieu Minh Nguyen.",
      imgSrc: "/images/avatar.png",
      bgColor: "bg-off-white",
    },
    {
      text: "I'm an international student from Ha Noi, Vietnam.",
      imgSrc: "/images/avatar.png",
      bgColor: "bg-highlight-orange",
    },
    {
      text: "I’m currently an undergraduate student at the University of South Florida.",
      imgSrc: "/images/usf.jpg",
      bgColor: "bg-cool-grey",
    },
    {
      text: "I’m pursuing a degree in Computer Science in the vibrant city of Tampa, Florida.",
      imgSrc: "/images/tampa.jpg",
      bgColor: "bg-highlight-teal",
    },
    {
      text: "My journey in tech started with a fascination for problem-solving and building innovative software solutions.",
      imgSrc: "/images/coding.jpg",
      bgColor: "bg-off-white",
    },
    {
      text: "Outside of the classroom, you’ll find me on the soccer field, where I channel my love for the game.",
      imgSrc: "/images/soccer.jpg",
      bgColor: "bg-cool-grey",
    },
    {
      text: "I’m a huge fan of Messi; his journey inspires me to push my limits in everything I do.",
      imgSrc: "/images/messi.jpg",
      bgColor: "bg-highlight-teal",
    },
    {
      text: "I’m passionate about technology, especially in the areas of AI and software development.",
      imgSrc: "/images/ai.jpg",
      bgColor: "bg-off-white",
    },
    {
      text: "My goal is to create impactful software that can improve people's lives.",
      imgSrc: "/images/software.jpg",
      bgColor: "bg-cool-grey",
    },
    {
      text: "Thank you for joining me on this journey. Let’s connect and create something amazing together!",
      imgSrc: "/images/connect.jpg",
      bgColor: "bg-highlight-teal",
    },
  ];

  return (
    <div className="min-h-screen py-20 mx-6">
      {blocks.map((block, index) => (
        <AnimatedBlock
          key={index}
          text={block.text}
          imgSrc={block.imgSrc}
          bgColor={block.bgColor}
        />
      ))}
    </div>
  );
};

export default AnimatedBlocksPage;
