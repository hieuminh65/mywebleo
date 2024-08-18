"use client";

import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Timeline from "./_components/Timeline";

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      date: "2023 - Present",
      title: "Software Engineer",
      company: "Tech Corp",
      description:
        "Developing scalable web applications with a focus on cloud services and modern web technologies.",
      techStack: ["React", "Node.js", "AWS", "TypeScript"],
      bulletPoints: [
        "Led the migration of legacy systems to cloud-based infrastructure.",
        "Implemented a CI/CD pipeline, reducing deployment times by 40%.",
        "Collaborated with cross-functional teams to define project requirements and milestones.",
      ],
    },
    {
      date: "2021 - 2023",
      title: "Junior Developer",
      company: "Startup Inc.",
      description:
        "Worked on various frontend and backend projects, building features for the company&apos;s core product.",
      techStack: ["JavaScript", "Express.js", "MongoDB"],
      bulletPoints: [
        "Designed and implemented RESTful APIs using Express.js and MongoDB.",
        "Improved application performance by 20% through code optimizations.",
        "Worked closely with UX/UI designers to enhance user experience.",
      ],
    },
    {
      date: "2020 - 2021",
      title: "Intern Intern  Intern Intern Intern Intern Intern",
      company: "Web Solutions Web Solutions Web Solutions",
      description:
        "Assisted in the development of client websites and learned the basics of web development.",
      techStack: ["HTML", "CSS", "jQuery"],
      bulletPoints: [
        "Contributed to the redesign of client websites, enhancing visual appeal and user experience.",
        "Implemented responsive design features, increasing mobile traffic by 15%.",
        "Assisted in the development and maintenance of e-commerce platforms.",
        "Assisted in the development and maintenance of e-commerce platforms.",
        "Assisted in the development and maintenance of e-commerce platforms.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-off-black mb-4 mt-8">
            Professional Experience
          </h2>
          <div className="w-full h-1 bg-highlight-orange mb-16"></div>
          <Timeline experiences={experiences} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
