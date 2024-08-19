"use client";

import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ImpactfulDeploymentCard from "./_components/FeaturedCard";
import PersonalCreationCard from "./_components/PersonalCard";
import AcademicEndeavorCard from "./_components/AcademicCard";
import { motion } from "framer-motion";

const PortfolioPage: React.FC = () => {
  const impactfulDeployments = [
    {
      title: "Talk To Listen",
      image: "/portfolio/talktolisten.png",
      description:
        "A SaaS app with 1000+ active users, leveraging machine learning to enhance communication across multiple languages. Deployed on AWS and Azure.",
      techStack: ["React", "FastAPI", "AWS", "Azure", "Python", "Docker"],
      link: "/portfolio/talk-to-listen",
      users: 1000,
      website: "https://www.talktolisten.com",
      github: "https://github.com/hieuminh65/talk-to-listen",
      bulletPoints: [
        "Built scalable distributed system architecture using Azure and AWS.",
        "Developed 30+ RESTful APIs using FastAPI (Python) and Docker.",
        "Managed all stages from design to deployment on both iOS and Android.",
      ],
    },
    {
      title: "JobsDreamer",
      image: "/portfolio/jobsdreamer.png",
      description:
        "A platform assisting students in finding internships, with automated web scraping and notifications.",
      techStack: ["Python", "Scrapy", "Selenium", "AWS", "Google Gemini"],
      link: "/projects/jobsdreamer",
      users: 500,
      website: "https://www.jobsdreamer.com",
      github: "https://github.com/hieuminh65/jobsdreamer",
      bulletPoints: [
        "Automated daily job data processing with AI tools.",
        "Integrated a GPT-4 and Google Gemini system for data classification.",
        "Implemented advanced cookie handling and data validation processes.",
      ],
    },
  ];

  const personalCreations = [
    {
      title: "Bull Bot",
      image: "/portfolio/bullbot.png",
      description:
        "A full-stack chatbot app answering queries across 1500+ USF websites, using advanced NLP and AI.",
      techStack: [
        "Flask",
        "AWS",
        "Vite.js",
        "Express.js",
        "Python",
        "Langchain",
      ],
      link: "/projects/bullbot",
      website: "https://www.bullbot.tech",
      github: "https://github.com/hieuminh65/bullbot",
      bulletPoints: [
        "Developed a scalable NLP system with Hugging Face models.",
        "Integrated microservice architecture with AWS services.",
        "Reduced deployment costs by 90% through model optimization.",
      ],
    },
    {
      title: "api4all",
      image: "/portfolio/api4all.png",
      description:
        "An open-source project for integrating and comparing ML models from various providers.",
      techStack: [
        "Python",
        "ML/LLM provider APIs",
        "Object-Oriented Programming",
      ],
      link: "/projects/api4all",
      website: "https://github.com/hieuminh65/api4all",
      github: "https://github.com/hieuminh65/api4all",
      bulletPoints: [
        "Maintained integration with top ML providers.",
        "Conducted comprehensive model performance comparisons.",
      ],
    },
    {
      title: "Chatbot GPT",
      image: "/images/chatbot-gpt.png",
      description:
        "A dynamic ChatGPT clone built with React.js and Node.js, using OpenAI API for advanced conversational capabilities.",
      techStack: ["React.js", "Node.js", "OpenAI API", "JavaScript"],
      link: "/projects/chatbot-gpt",
      website: "https://example.com/chatbot-gpt",
      github: "https://github.com/hieuminh65/chatbot-gpt",
      bulletPoints: [
        "Integrated OpenAI API for real-time chat interactions.",
        "Deployed the app with continuous integration and deployment pipelines.",
      ],
    },
    {
      title: "Resume Keywords",
      image: "/images/resume-keywords.png",
      description:
        "A Streamlit app generating optimized resume bullet points using Snowflake Arctic LLM.",
      techStack: ["Python", "Streamlit", "Snowflake", "LLM"],
      link: "/projects/resume-keywords",
      website: "https://example.com/resume-keywords",
      github: "https://github.com/hieuminh65/resume-keywords",
      bulletPoints: [
        "Built a keyword optimization tool using Snowflake Data Cloud.",
        "Integrated Snowflake Arctic LLM for large-scale data processing.",
      ],
    },
  ];

  const academicEndeavors = [
    {
      title: "Car Repairing Design",
      image: "/images/car-repairing-design.png",
      description:
        "A database design project for car parts trading, built for a database systems course.",
      techStack: ["Python", "PostgreSQL", "Streamlit", "Azure", "SQL"],
      course: "Database Systems",
      github: "https://github.com/hieuminh65/car-repairing-design",
    },
    {
      title: "InCollege",
      image: "/images/incollege.png",
      description:
        "A college networking app developed in a software engineering course.",
      techStack: ["Python", "Scrum (Agile)", "OOP", "Git"],
      course: "Intro to Software Engineering",
      github: "https://github.com/hieuminh65/incollege",
      bulletPoints: [
        "Led development using Agile methodologies.",
        "Implemented object-oriented architecture for scalability.",
      ],
      link: "/projects/incollege",
    },
    {
      title: "Stock Data",
      image: "/images/stock-data.png",
      description:
        "A software development system project visualizing stock data.",
      techStack: ["C#", ".NET", "Visual Studio", "OOP"],
      course: "Software Development Systems",
      github: "https://github.com/hieuminh65/stock-data",
      website: "https://example.com/stock-data",
      bulletPoints: [
        "Created a C# .NET application for stock data visualization.",
        "Designed object-oriented classes in Visual Studio.",
      ],
      link: "/projects/stock-data",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured Projects Section */}
          <h2 className="text-4xl font-bold text-off-black mb-4 mt-8">
            Portfolio
          </h2>
          <div className="w-full h-1 bg-highlight-orange mb-16"></div>
          <motion.h2
            className="text-3xl font-bold text-off-black mb-4 mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-dark-grey mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            Real-world projects deployed as products with real users, showcasing
            significant impact and innovation.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
          >
            {impactfulDeployments.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 1.0 + index * 0.2,
                }}
              >
                <ImpactfulDeploymentCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* Personal Projects Section */}
          <motion.h2
            className="text-3xl font-bold text-off-black mb-4 mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          >
            Personal Projects
          </motion.h2>
          <motion.p
            className="text-dark-grey mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.6 }}
          >
            These projects are my own personal creations, demonstrating my
            passion for building software and exploring new technologies.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 2.0 }}
          >
            {personalCreations.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 2.2 + index * 0.2,
                }}
              >
                <PersonalCreationCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* Academic Projects Section */}
          <motion.h2
            className="text-3xl font-bold text-off-black mb-4 mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 2.7 }}
          >
            Academic Projects
          </motion.h2>
          <motion.p
            className="text-dark-grey mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 2.8 }}
          >
            Projects associated with my academic courses, where I&apos;ve
            applied theoretical knowledge to practical scenarios.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 3.2 }}
          >
            {academicEndeavors.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 3.4 + index * 0.2,
                }}
              >
                <AcademicEndeavorCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
