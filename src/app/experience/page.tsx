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
        "Conducted comprehensive research on bias in Large Language Models (LLMs) and optimized code generation techniques. Collaborated on multiple projects with researchers and students.",
      techStack: [
        "Algorithm",
        "Sanbox Testing",
        "Muli-Threaded Programming",
        "Data Structures",
        "Large Language Model (LLM)",
        "Parallel Computing",
        "Python",
      ],
      bulletPoints: [
        "Conducted comprehensive research on bias across many categories, such as age or gender, within Large Language Model (LLM).",
        "Built a specialized library in Python for systematic evaluation of 100,000 datasets in LLMs, significantly reducing manual effort.",
        "Collaborated with a team of researchers on studies focusing on mitigating bias in human health records using machine learning.",
        "Partnered with USF students and faculty to develop an AI personal assistant for learning paths and school course curricula.",
        "Researched techniques to optimize LLM code generation for complex data structures, algorithms, competitive programming.",
      ],
    },
    {
      date: "Sep 2023 - Dec 2023",
      title: "AI/ML Software Engineer (Intern)",
      company: "Resilience, Inc.",
      description:
        "Focused on building and designing a mindfulness mobile app aimed at enhancing emotional self-awareness.",
      techStack: [
        "AWS",
        "React Native",
        "Penetration Testing",
        "Flask",
        "Snyk",
        "Figma",
        "Linux",
        "Python",
      ],
      bulletPoints: [
        "Engineered a mindfulness app, resulting in enhanced emotional self-awareness across diverse user demographics.",
        "Executed design prototypes using Figma, further developing 5+ frontend features via React Native.",
        "Implemented a machine learning API endpoint with Flask (Python) on AWS EC2, leading to an 80% reduction in response latency.",
        "Implemented proactive security measures through penetration testing methodologies to fortify web applications and network infrastructure, resulting in a 50% reduction in potential security breaches and associated risks.",
        "Proactively secured the app by employing Snyk, addressing 100% of identified code vulnerabilities.",
        "Coordinated with cross-functional teams, including engineering and design for smooth production releases.",
      ],
    },
    {
      date: "June 2023 - Aug 2023",
      title: "AI/ML Developer (Intern)",
      company: "Resilience, Inc.",
      description:
        "Worked on developing deep learning models and optimizing them for emotional prediction in a mindfulness app.",
      techStack: [
        "Keras",
        "Deep Learning",
        "Numpy",
        "Pandas",
        "sklearn",
        "matplotlib",
        "TensorFlow",
        "Python",
      ],
      bulletPoints: [
        "Researched and selected deep learning/machine learning models, including CNN, RNN, XGBoost, and MLP, for effectively user emotions prediction based on through benchmarking and rigorous testing.",
        "Built a Convolutional Neural Network (CNN) model using Keras (TensorFlow) from scratch, achieving a 72% emotion classification accuracy.",
        "Streamlined machine learning processes by creating a pipeline for automated data handling and model training.",
        "Finetuned Whisper by multiprocessing through parallelization for CPUs to speed up translation time by 5.9x.",
        "Guided a team of five interns by writing a comprehensive documentation and hosting weekly feedback sessions, ensuring rapid tool mastery, addressing queries, code reviewing and bolstering overall progress and team synergy.",
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
