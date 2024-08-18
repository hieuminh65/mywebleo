"use client";

import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          src="/avatar.png"
          alt="Leo"
          className="rounded-full w-48 h-48 mb-8 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-off-black">About Me</h2>
          <p className="text-lg text-off-black mt-4">
            I&apos;m Leo, a passionate software developer with a love for
            creating innovative software. My journey in tech began with a
            fascination for the latest AI and technology trends. I&apos;m always
            looking for new challenges and opportunities to learn and grow.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start items-center md:space-x-4">
            <div className="flex space-x-6 mb-8 md:mb-0 md:mr-8">
              <Link href="https://github.com/yourusername" passHref>
                <img
                  src="/logos/github.png"
                  alt="GitHub"
                  className="w-8 h-8 rounded-full"
                />
              </Link>
              <Link href="https://linkedin.com/in/yourusername" passHref>
                <img
                  src="/logos/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 h-8 rounded-full"
                />
              </Link>
              <Link href="https://devpost.com/yourusername" passHref>
                <img
                  src="/logos/devpost.png"
                  alt="Devpost"
                  className="w-8 h-8 rounded-full"
                />
              </Link>
              <Link href="https://huggingface.co/yourusername" passHref>
                <img
                  src="/logos/huggingface.png"
                  alt="Huggingface"
                  className="w-8 h-8 rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
