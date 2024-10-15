"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CopilotPopup } from "@copilotkit/react-ui";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GradualSpacing from "./_components/HeroHeading";
import TextRevealByWord from "./_components/TextReveal";
import ArrowDown from "@/components/ArrowDown";
import About from "./_components/About";
import Skills from "./_components/Skills";
import FeaturedProjects from "./_components/Features";

export default function HomePage() {
  const [showPage, setShowPage] = useState(false);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const showPageTimer = setTimeout(() => {
      setShowPage(true);
    }, 2000);

    return () => {
      clearTimeout(showPageTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen flex flex-col">
      {!showPage && (
        <div className="flex-grow flex items-center justify-center bg-white">
          <GradualSpacing
            text="Hello!"
            className="text-4xl font-bold text-off-black"
          />
        </div>
      )}
      {showPage && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
          </motion.div>
          <div className="flex-grow flex flex-col items-center justify-center bg-white text-center px-4">
            <TextRevealByWord text="Building the future, one line of code at a time." />
            <ArrowDown isVisible={showArrow} />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="space-y-12 my-12"
          >
            <About />
            <Skills />
            <FeaturedProjects />
            <Footer />
            <div
              style={
                {
                  "--copilot-kit-primary-color": "#1A1A1A",
                } as React.CSSProperties
              }
            >
              <CopilotPopup
                labels={{
                  title: "Leo Bot 🤖",
                  initial: "Hi you! 👋 Want to ask something about Leo?",
                }}
                defaultOpen={false}
              />
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
