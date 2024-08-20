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
      "Discover a new world of interaction with 'Talk To Listen' on your mobile phone – where your voice brings characters to life! Engage in seamless conversations with a diverse universe of characters, each boasting their own unique personality and voice.",
    videoUrl: "https://www.youtube.com/embed/T8Z6xf7o7DI?autoplay=1",
    heroImageUrl: "/portfolio/talktolisten.png",
    websiteLink: "https://www.talktolisten.com",
    techStacks: [
      {
        category: "Front-End",
        technologies: [
          "Expo React Native (JavaScript)",
          "Redux",
          "Firebase",
          "Axios",
          "Expo Update",
        ],
      },
      {
        category: "Back-End",
        technologies: [
          "FastAPI (Python)",
          "SQLAlchemy",
          "Firebase",
          "Docker",
          "Nginx",
          "Gunicorn",
          "Alembic",
          "Pydantic",
          "Pytest",
          "RESTful APIs",
          "Azure Virtual Machine",
        ],
      },
      {
        category: "Infrastructure",
        technologies: [
          "Azure Virtual Machine",
          "Azure Application Gateway",
          "Azure Load Balancer",
          "Azure Virtual Network",
          "Azure Network Security Group",
        ],
      },
      {
        category: "Database",
        technologies: [
          "PostgreSQL",
          "Azure Database for PostgreSQL",
          "Azure Blob Storage",
          "Azure CDN (Content Delivery Network)",
        ],
      },
      {
        category: "CI/CD",
        technologies: [
          "Git/GitHub",
          "GitHub Actions",
          "Docker",
          "Azure Virtual Machine",
        ],
      },
      {
        category: "Security",
        technologies: [
          "SSL/TLS",
          "Firebase Authentication",
          "Azure Network Security Group",
        ],
      },
    ],
    contentSections: [
      {
        id: "features",
        title: "Features",
        content: [
          "Voice-Activated Conversations: Interact with characters using your voice, you don't have to type anything, or touch the screen, just talk and listen.",
          "Diverse Characters: Engage with a wide range of characters, each with their own unique personality and voice.",
          "Real-Time Interaction: Experience real-time responses to your voice commands.",
          "Group Conversations: Talk with multiple characters at once.",
          "Immersive Storytelling: Dive into a world of storytelling and adventure.",
          "Customizable Characters: Personalize your characters with unique traits and characteristics.",
          "Cross-Platform Compatibility: Access 'Talk To Listen' on any device, anytime, anywhere.",
          "Multi-Language Support: Communicate with characters in multiple languages.",
          "Safe and Secure: Enjoy a safe and secure environment for conversations, generating content that is safe for all ages.",
        ],
      },
      {
        id: "overview",
        title: "Overview",
        subtitle: "A high-level view of the application architecture",
        content: [
          "The application's architecture is distributed, with several components interacting to provide the overall functionality. The front-end is built with Expo React Native, Redux, Firebase, and Axios, while the back-end uses FastAPI, SQLAlchemy, Firebase, Docker, and other technologies. The data is stored in a PostgreSQL database, and the application uses GitHub Actions, Docker, and Azure services for continuous integration and deployment. It also integrates with third-party APIs for features like voice live streaming and text to speech.",
        ],
        imageUrl: "/portfolio/talktolisten/overview.png",
      },
      {
        id: "infrastructure",
        title: "Infrastructure",
        subtitle:
          "Azure Virtual Machine, Azure Application Gateway, Azure Load Balancer, Azure Virtual Network, Azure Network Security Group.",
        content: [
          "Azure Application Gateway: A web traffic load balancer that manage traffic to servers. It provides SSL termination, which offloads the encryption and decryption of SSL traffic from web servers, and health probes, which automatically remove unhealthy instances from the rotation. (This service is expensive, so it is likely to be removed in the future.)",
          "Azure Load Balancer: Distributes incoming network traffic across multiple virtual machines to ensure high availability and fault tolerance.",
          "Azure Virtual Network: Connects virtual machines to each other and to other Azure services securely. The virtual machined are only accessible through this internal load balancer.",
          "Azure Network Security Group: Provides network security by filtering inbound and outbound traffic to the virtual machines.",
        ],
      },
      {
        id: "front-end",
        title: "Front-End",
        subtitle:
          "Expo React Native (JavaScript), Redux, Firebase, Axios, Expo Update.",
        content: [
          "Expo React Native (JavaScript): A cross-platform framework for building mobile applications using JavaScript and React. It allows developers to write code once and deploy it on both iOS and Android platforms.",
          "Expo Update: Service that allows over-the-air updates for Talk To Listen. The app can be updated immediately without going through the app store. Any bugs or issues can be fixed quickly and efficiently.",
          "Redux: A state management library that helps manage the application's state in a predictable way.",
          "Firebase: Provide secure authentication for users and store data in real-time.",
          "Axios: A promise-based HTTP client that makes it easy to send asynchronous HTTP requests to the backend server.",
        ],
      },
      {
        id: "back-end",
        title: "Back-End",
        subtitle:
          "FastAPI (Python), SQLAlchemy, Firebase, Docker, Nginx, Gunicorn, Alembic, Pydantic, Pytest, RESTful APIs, Azure Virtual Machine.",
        content: [
          "FastAPI (Python): Modern, fast (high-performance) Python framework for building APIs.",
          "RESTful APIs: The backend services expose RESTful APIs that the frontend can consume to interact with the application.",
          "Azure Virtual Machines: Multiple virtual machines are used to host the backend services. The virtual machines are duplicated to ensure high availability and fault tolerance. Talk To Listen uses Azure Virtual Machines to host the backend services, and always has more than one instance running to ensure that the application is always available.",
          "SQLAlchemy: A Python SQL toolkit and Object-Relational Mapping (ORM) library that provides a set of high-level APIs for working with databases.",
          "Firebase: Provides secure authentication with frontend and backend services. Only allowed users can access the application.",
          "Docker: The backend services are containerized using Docker to ensure consistency and portability across different environments.",
          "PyTest: All backend services are tested using PyTest to ensure that they work as expected.",
          "SSL/TLS: The backend services use SSL/TLS to encrypt data in transit and ensure secure communication between the frontend and backend.",
        ],
      },
      {
        id: "database",
        title: "Database",
        subtitle:
          "PostgreSQL, Azure Database for PostgreSQL, Azure Blob Storage, Azure CDN (Content Delivery Network).",
        content: [
          "PostgreSQL: Talk To Listen uses PostgreSQL as the primary database to store user data, character information, and other application data.",
          "Azure Database for PostgreSQL: A fully managed database service that provides high availability, scalability, and security for PostgreSQL databases.",
          "Azure Blob Storage: Used to store large amounts of unstructured data, such as images, audio files, and other media files.",
          "Azure CDN (Content Delivery Network): The Azure CDN is used to cache static content, such as images and media files, to improve performance and reduce latency for users.",
        ],
      },
      {
        id: "database-design",
        title: "Database-Design",
        imageUrl: "/portfolio/talktolisten/eer.png",
        content: [
          "The database schema is designed to store user data, character information, and other application data in a structured and efficient manner.",
          "Entity-Relationship Diagram: The database schema is designed using an Entity-Relationship Diagram (ERD) to visualize the relationships between different entities and attributes.",
        ],
      },
      {
        id: "ci-cd",
        title: "CI-CD",
        subtitle: "Git/GitHub, GitHub Actions, Docker, Azure Virtual Machine.",
        content: [
          "Git/GitHub: The source code is stored in GitHub repositories for version control and collaboration.",
          "GitHub Actions: Used for continuous integration and continuous deployment (CI/CD) to automate the build, test, and deployment processes for the backend services.",
          "Docker: The backend services are containerized using Docker to ensure consistency and portability across different environments.",
          "Azure Virtual Machine: The backend services are deployed on Azure Virtual Machines using Docker containers.",
        ],
      },
      {
        id: "security",
        title: "Security",
        content: [
          "User's data and privacy are of utmost importance. The application uses various security measures to ensure that user data is protected and secure.",
          "SSL/TLS: The backend services use SSL/TLS to encrypt data in transit and ensure secure communication between the frontend and backend.",
          "Firebase Authentication: Provides secure authentication for users and ensures that only authorized users can access the application.",
          "Azure Network Security Group: Filters inbound and outbound traffic to the virtual machines to provide network security.",
          "Delete User Data: Users can delete their account at any time, and all data is deleted from the database and storage.",
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
