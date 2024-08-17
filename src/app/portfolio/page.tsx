"use client";

import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ImpactfulDeploymentCard from "./_components/FeaturedCard";
import PersonalCreationCard from "./_components/PersonalCard";
import AcademicEndeavorCard from "./_components/AcademicCard";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { motion } from "framer-motion";

const PortfolioPage: React.FC = () => {
  // Dummy Data
  const impactfulDeployments = [
    {
      title: "Project Alpha",
      image: "/portfolio/talktolisten.png",
      description:
        "A highly scalable e-commerce platform with 1000+ users. Let user talk to hundereds of languages. Published on AWS and Azure.",
      techStack: ["React", "Node.js", "AWS", "Azure", "Python", "FastAPI"],
      link: "/projects/project-alpha",
      users: 1500,
      website: "https://example.com",
      github: "https://github.com/example/project-alpha",
      bulletPoints: [
        "Implemented a RESTful API with Node.js.",
        "Deployed using AWS services including S3 and Lambda.",
        "Designed a responsive front-end using React.",
      ],
    },
    {
      title: "Project Beta",
      image: "/portfolio/jobsdreamer.png",
      description: "A social media app with a rapidly growing user base.",
      techStack: ["Vue.js", "Firebase", "GCP"],
      link: "/projects/project-beta",
      users: 2200,
      website: "https://example.com/beta",
      github: "https://github.com/example/project-beta",
      bulletPoints: [
        "Developed real-time chat functionality using Firebase.",
        "Integrated Google Cloud Platform services for scalability.",
        "Created a dynamic and interactive UI with Vue.js.",
      ],
    },
  ];

  const personalCreations = [
    {
      title: "Personal Blog",
      image: "/images/blog.jpg",
      description:
        "A personal blog built with Next.js and Tailwind CSS to share coding tutorials and experiences.",
      techStack: [
        "Next.js",
        "Tailwind CSS",
        "Vercel",
        "Markdown",
        "React",
        "JavaScript",
        "CSS",
        "HTML",
      ],
      link: "/projects/personal-blog",
      website: "https://example.com/blog",
      github: "https://github.com/example/personal-blog",
      bulletPoints: [
        "Implemented static site generation with Next.js for fast performance.",
        "Styled with Tailwind CSS for a modern and responsive design.",
        "Deployed on Vercel with continuous integration and deployment.",
        "Integrated Markdown for easy content management.",
      ],
    },
    {
      title: "AI Chatbot",
      image: "/images/ai-chatbot.jpg",
      description:
        "An AI-powered chatbot built with Python and TensorFlow for customer support automation.",
      techStack: [
        "Python",
        "TensorFlow",
        "Flask",
        "NLTK",
        "Heroku",
        "Docker",
        "REST API",
        "Git",
      ],
      link: "/projects/ai-chatbot",
      website: "https://example.com/ai-chatbot",
      github: "https://github.com/example/ai-chatbot",
      bulletPoints: [
        "Developed natural language processing capabilities using TensorFlow.",
        "Built a RESTful API with Flask for chatbot interactions.",
        "Trained the chatbot with a diverse dataset for improved accuracy.",
        "Deployed on Heroku for easy access and scalability.",
      ],
    },
    {
      title: "ML Model Deployment",
      image: "/images/ml-model.jpg",
      description:
        "A machine learning model deployment platform using Docker and Kubernetes.",
      techStack: [
        "Docker",
        "Kubernetes",
        "AWS",
        "TensorFlow",
        "Python",
        "Jenkins",
        "CI/CD",
        "Helm",
        "Prometheus",
      ],
      link: "/projects/ml-model-deployment",
      website: "https://example.com/ml-model-deployment",
      github: "https://github.com/example/ml-model-deployment",
      bulletPoints: [
        "Containerized machine learning models using Docker for consistency.",
        "Orchestrated deployment with Kubernetes for scalability and reliability.",
        "Integrated AWS services for storage and compute resources.",
        "Implemented CI/CD pipelines for automated deployments.",
      ],
    },
    {
      title: "E-commerce Website",
      image: "/images/ecommerce.jpg",
      description:
        "A fully-featured e-commerce website built with React and Node.js.",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Redux",
        "Stripe API",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      link: "/projects/ecommerce-website",
      website: "https://example.com/ecommerce",
      github: "https://github.com/example/ecommerce-website",
      bulletPoints: [
        "Developed a responsive front-end using React.",
        "Implemented a RESTful API with Node.js and Express.",
        "Used MongoDB for data storage and retrieval.",
        "Integrated payment gateways for secure transactions.",
      ],
    },
    {
      title: "Cloud Infrastructure Automation",
      image: "/images/cloud-infrastructure.jpg",
      description:
        "Automated cloud infrastructure setup and management using Terraform and AWS.",
      techStack: [
        "Terraform",
        "AWS",
        "Jenkins",
        "Ansible",
        "Docker",
        "Kubernetes",
        "EC2",
        "S3",
        "RDS",
        "CloudWatch",
      ],
      link: "/projects/cloud-infrastructure",
      website: "https://example.com/cloud-infrastructure",
      github: "https://github.com/example/cloud-infrastructure",
      bulletPoints: [
        "Defined infrastructure as code using Terraform for reproducibility.",
        "Automated provisioning of AWS resources including EC2, S3, and RDS.",
        "Implemented Jenkins pipelines for continuous integration and deployment.",
        "Monitored and managed infrastructure with AWS CloudWatch.",
      ],
    },
  ];

  const academicEndeavors = [
    {
      title: "Machine Learning Model",
      image: "/images/project5.jpg",
      description: "A machine learning model built for CS501 course.",
      techStack: ["Python", "TensorFlow"],
      course: "Machine Learning (CS 501)",
      github: "https://github.com/example/ml-model",
    },
    {
      title: "Database Design",
      image: "/images/project6.jpg",
      description: "A database design project for CS401 course.",
      techStack: ["SQL", "PostgreSQL"],
      course: "Database Systems (CS 401)",
      github: "https://github.com/example/db-design",
    },
    {
      title: "AI in Robotics",
      course: "Advanced Robotics (CS 451)",
      image: "/images/robotics.jpg",
      description: "A project exploring AI applications in robotics.",
      techStack: ["Python", "ROS", "OpenCV", "TensorFlow", "Linux"],
      github: "https://github.com/example/ai-robotics",
      website: "https://example.com/ai-robotics",
      bulletPoints: [
        "Developed AI algorithms for robot navigation.",
        "Integrated with ROS for real-time control.",
        "Applied computer vision techniques using OpenCV.",
      ],
      link: "/projects/ai-robotics",
    },
    {
      title: "Web Development Framework",
      course: "Web Technologies (CS 301)",
      image: "/images/web-dev.jpg",
      description: "A project to build a web development framework.",
      techStack: ["JavaScript", "Node.js", "Express", "React", "MongoDB"],
      github: "https://github.com/example/web-framework",
      website: "https://example.com/web-framework",
      bulletPoints: [
        "Designed a modular web framework using Node.js and Express.",
        "Implemented a dynamic front-end with React.",
        "Used MongoDB for data storage and retrieval.",
      ],
      link: "/projects/web-framework",
    },
    {
      title: "Cloud Computing Platform",
      course: "Cloud Computing (CS 601)",
      image: "/images/cloud-computing.jpg",
      description: "A cloud computing platform project for CS601 course.",
      techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "Python"],
      github: "https://github.com/example/cloud-platform",
      website: "https://example.com/cloud-platform",
      bulletPoints: [
        "Deployed scalable applications using AWS services.",
        "Containerized applications with Docker.",
        "Orchestrated deployments with Kubernetes.",
        "Automated infrastructure management with Terraform.",
      ],
      link: "/projects/cloud-platform",
    },
    {
      title: "Data Visualization Tool",
      course: "Data Science (CS 502)",
      image: "/images/data-visualization.jpg",
      description: "A data visualization tool built for CS502 course.",
      techStack: ["Python", "D3.js", "Pandas", "Flask", "JavaScript"],
      github: "https://github.com/example/data-visualization",
      website: "https://example.com/data-visualization",
      bulletPoints: [
        "Developed interactive visualizations using D3.js.",
        "Processed and analyzed data with Pandas.",
        "Built a web interface with Flask and JavaScript.",
      ],
      link: "/projects/data-visualization",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured Projects Section */}
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4 mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8"
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
            className="text-3xl font-bold text-gray-800 mb-4 mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          >
            Personal Projects
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8"
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
            className="text-3xl font-bold text-gray-800 mb-4 mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 2.7 }}
          >
            Academic Projects
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 2.8 }}
          >
            Projects associated with my academic courses, where I've applied
            theoretical knowledge to practical scenarios.
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
