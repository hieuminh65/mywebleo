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
    title: "JobsDreamer",
    subtitle: "All internships on the internet in last 24 hours to your email",
    heroImageUrl: "/portfolio/jobsdreamer.png",
    websiteLink: "https://www.jobsdreamer.com",
    techStacks: [
      {
        category: "Microservices and Automation",
        technologies: [
          "AWS EventBridge",
          "AWS Step Functions",
          "AWS Elastic Container Registry (ECR)",
        ],
      },
      {
        category: "Web Scraping",
        technologies: [
          "Python",
          "Scrapy",
          "Selenium",
          "AWS Fargate",
          "ISP Proxy Server",
          "AWS Lambda",
          "AWS Elastic Container Registry (ECR)",
          "AWS Virtual Private Cloud (VPC)",
          "AWS NAT Gateway",
          "AWS Elastic IP",
          "AWS Internet Gateway",
          "GitHub Actions",
        ],
      },
      {
        category: "Data Processing Pipeline",
        technologies: [
          "AWS Fargate",
          "GPT 4o",
          "Google Gemini Pro",
          "AWS S3",
          "AWS Elastic Container Registry (ECR)",
          "AWS Simple Email Service (SES)",
          "AWS Lambda",
          "Fine-tuned Llama 3",
        ],
      },
      {
        category: "Frontend",
        technologies: ["Next.js", "Tailwind CSS", "React.js", "TypeScript"],
      },
    ],
    contentSections: [
      {
        id: "overview",
        title: "Overview",
        imageUrl: "/portfolio/jobsdreamer/overview.png",
        content: [
          "The software collects scraped data from the internet and processes it to provide a list of internships to the user. The code is closed source for security reasons.",
          "Schedule the Web Scraping process to run every 24 hours using AWS EventBridge.",
          "All processes are orchestrated using AWS Step Functions to automate workflows by connecting various AWS services and custom application logic.",
          "Create a NAT Gateway using AWS Lambda to allow the VPC to access the internet. Creating and deleting the NAT Gateway as needed can help save 80% of the costs compared to keeping the NAT Gateway running 24/7 when it's not in use.",
          "Preprocess new search terms and group similar search terms for web scraping, instead of using all the search terms, and save 90% of the time and cost.",
          "Web Scraping: The software scrapes the internet for internships using the search terms and saves the data to an S3 bucket.",
          "Data Processing Pipeline: The software processes the scraped data to provide a list of internships to the user.",
          "Sending an email to the user with the list of internships with their desired position only using AWS SES.",
          "Delete the NAT Gateway after all processes are completed to save costs.",
        ],
      },
      {
        id: "web-scraping",
        title: "Web Scraping",
        imageUrl: "/portfolio/jobsdreamer/web-scraping.png",
        content: [
          "The software uses a list of search terms to scrape the internet for internships from various job sites.",
          "The container is pulled from the Amazon Elastic Container Registry (ECR) and run on AWS Fargate.",
          "The software go to the internet through a proxy server.",
        ],
      },
      {
        id: "data-pipeline",
        title: "Data-Pipeline",
        subtitle: "Overview of the data processing pipeline",
        imageUrl: "/portfolio/jobsdreamer/data-pipeline.png",
        content: [
          "Download the raw data from AWS S3 bucket.",
          "Cleaning: delete duplicate data and clean the data.",
          "Categorizing and Reviewing: categorize the each internship by the search term with fine-tuned Llama 3 and final review by GPT 4o.",
        ],
      },
      {
        id: "technologies",
        title: "Technologies",
        content: [
          "Python, Scrapy, Selenium: used for web scraping.",
          "AWS Fargate, AWS Lambda, AWS Elastic Container Registry (ECR): used for containerization of the web scraping process.",
          "AWS Step Functions, AWS EventBridge, AWS Simple Email Service (SES), AWS S3: used for orchestrating the workflow and sending emails.",
          "Fine-tuned Llama 3, Google Gemini Pro, GPT 4o: used for categorizing and reviewing the internships.",
          "AWS Virtual Private Cloud (VPC), AWS NAT Gateway, AWS Elastic IP, AWS Internet Gateway: used for connecting the VPC to the internet.",
          "ISP Proxy Server: used for connecting to the internet and avoiding IP blocking.",
          "GitHub Actions: used for CI/CD.",
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
