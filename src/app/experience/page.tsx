"use client";

import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Timeline from "./_components/Timeline";

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      date: "May 2024 - Present",
      title: "Research Assistant",
      company: "University of South Florida",
      description:
        "Conducted comprehensive research on bias in large language models, developed AI-based solutions for educational purposes.",
      techStack: ["Python", "TensorFlow", "Keras", "AWS", "Flask"],
      bulletPoints: [
        "Engineered an AI personal assistant to optimize learning paths and course curricula.",
        "Developed a specialized library in Python to evaluate datasets, reducing manual effort.",
        "Collaborated with faculty and students to mitigate bias in LLMs.",
      ],
    },
    {
      date: "Sep 2023 - Dec 2023",
      title: "AI/ML Software Engineer (Intern)",
      company: "Resilience, Inc.",
      description:
        "Focused on building and deploying machine learning models for a mindfulness app aimed at enhancing emotional self-awareness.",
      techStack: ["React Native", "Python", "AWS", "Flask", "Snyk"],
      bulletPoints: [
        "Engineered a machine learning API endpoint with Flask on AWS EC2, reducing latency by 80%.",
        "Developed frontend features via React Native, enhancing user experience.",
        "Applied proactive security measures, resulting in a 50% reduction in potential security breaches.",
      ],
    },
    {
      date: "June 2023 - Aug 2023",
      title: "AI/ML Developer (Intern)",
      company: "Resilience, Inc.",
      description:
        "Worked on developing deep learning models and optimizing them for emotional prediction in a mindfulness app.",
      techStack: ["Keras", "TensorFlow", "Numpy", "Pandas", "Python"],
      bulletPoints: [
        "Built a CNN model achieving 72% emotion classification accuracy.",
        "Streamlined machine learning processes by automating data handling and model training.",
        "Improved model training speed by 5.9x through parallelization.",
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
