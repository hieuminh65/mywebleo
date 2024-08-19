"use client";

import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProjectHeader from "./_components/ProjectHeader";
import TechStackSection from "./_components/TechStackSection";
import TableOfContents from "./_components/TableOfContents";
import ContentSection from "./_components/ContentSection";

const ProjectPage: React.FC = () => {
  const projectData = {
    title: "Talk To Listen",
    subtitle:
      "Engage in seamless conversations with characters brought to life by your voice.",
    videoUrl: "https://www.youtube.com/embed/T8Z6xf7o7DI?autoplay=1",
    heroImageUrl: "/images/talk-to-listen-hero.jpg",
    websiteLink: "https://example.com/talk-to-listen",
    techStacks: [
      {
        category: "Front-End",
        technologies: ["React Native", "Redux", "Firebase", "Axios"],
      },
      {
        category: "Back-End",
        technologies: ["FastAPI", "SQLAlchemy", "Docker", "Nginx"],
      },
      {
        category: "Infrastructure",
        technologies: ["Azure", "GitHub Actions", "Docker"],
      },
    ],
    contentSections: [
      {
        id: "overview",
        title: "Overview",
        subtitle: "A high-level view of the application architecture",
        content: [
          "The application's architecture is distributed, with several components interacting to provide the overall functionality.",
          "Each component is designed to be modular and scalable, ensuring that the application can handle a growing number of users and features.",
          "The architecture includes both front-end and back-end services, as well as infrastructure components that support the application's deployment and operation.",
        ],
        imageUrl: "/images/architecture-diagram.jpg",
      },
      {
        id: "front-end",
        title: "Front-End",
        subtitle: "Technologies and frameworks used in the front-end",
        content: [
          "The front-end is built with Expo React Native, providing a robust framework for building cross-platform mobile applications.",
          "Redux is used for state management, ensuring that the application's state is predictable and easy to debug.",
          "Firebase is integrated for authentication and real-time database functionalities.",
          "Axios is used for making HTTP requests to the back-end services.",
        ],
      },
      {
        id: "back-end",
        title: "Back-End",
        subtitle: "Technologies and frameworks used in the back-end",
        content: [
          "The back-end uses FastAPI, a modern web framework for building APIs with Python 3.7+.",
          "SQLAlchemy is used for database interactions, providing a powerful ORM for managing database schemas and queries.",
          "Docker is used for containerizing the application, ensuring that it can run consistently across different environments.",
          "Nginx is used as a reverse proxy and load balancer, ensuring that the application can handle a large number of concurrent requests.",
        ],
      },
      {
        id: "infrastructure",
        title: "Infrastructure",
        subtitle: "Cloud services and tools used for deployment",
        content: [
          "The infrastructure uses Azure Virtual Machine, providing scalable and reliable cloud computing resources.",
          "Azure Load Balancer is used to distribute incoming network traffic across multiple servers, ensuring high availability and reliability.",
          "Other Azure services, such as Azure Storage and Azure SQL Database, are used to store and manage application data.",
        ],
      },
    ],
  };

  const sections = projectData.contentSections.map((section) => section.title);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <ProjectHeader
          title={projectData.title}
          subtitle={projectData.subtitle}
          videoUrl={projectData.videoUrl}
          heroImageUrl={projectData.heroImageUrl}
          websiteLink={projectData.websiteLink}
        />
        <div className="flex flex-col md:flex-row md:ml-4">
          <div className="w-full md:w-3/4">
            <TechStackSection techStacks={projectData.techStacks} />
            {projectData.contentSections.map((section) => (
              <ContentSection
                key={section.id}
                id={section.id}
                title={section.title}
                subtitle={section.subtitle}
                content={section.content}
                imageUrl={section.imageUrl}
              />
            ))}
          </div>
          {sections.length > 0 && (
            <aside className="w-full md:w-1/4 md:pl-8 mt-8 md:mt-0">
              <TableOfContents sections={sections} />
            </aside>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
