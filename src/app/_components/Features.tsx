"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Talk To Listen",
    description:
      "A web app with 1000+ users that leverages machine learning to enhance communication. Built using FastAPI and AWS.",
    image: "/portfolio/talktolisten.png",
  },
  {
    title: "JobsDreamer",
    description:
      "A platform that helps students find internships by automating job searches and notifications using AI tools.",
    image: "/portfolio/jobsdreamer.png",
  },
  {
    title: "Publication: Brand Bias in LLMs",
    description:
      "Research publication on understanding and addressing brand bias in large language models.",
    image: "/portfolio/publication.png", // Placeholder image, replace with actual if available
  },
  {
    title: "Bull Bot",
    description:
      "A chatbot app answering queries from 1500+ USF websites, integrating natural language processing.",
    image: "/portfolio/bullbot.png",
  },
  {
    title: "TTL Dataset",
    description:
      "An open-source dataset of 3M tokens, created for training the Talk To Listen app, with 2000 downloads monthly.",
    image: "/portfolio/ttldataset.png", // Placeholder image, replace with actual if available
  },
  {
    title: "api4all",
    description:
      "An open-source project integrating models from top ML providers for comprehensive comparisons.",
    image: "/portfolio/api4all.png", // Placeholder image, replace with actual if available
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 text-center relative">
        <h2 className="text-3xl font-bold text-off-black">
          Projects and Works
        </h2>
        <Carousel className="relative mt-8" opts={{ loop: true }}>
          <CarouselContent className="flex">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="relative flex-shrink-0 basis-full sm:basis-[48%] lg:basis-[30%]"
              >
                <div className="overflow-hidden border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform duration-300 h-96">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 h-48 flex flex-col justify-between">
                    <h3 className="text-xl font-medium text-off-black">
                      {project.title}
                    </h3>
                    <p className="text-off-black mt-2 overflow-hidden overflow-ellipsis">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Navigation for larger screens */}
          <CarouselPrevious className="hidden sm:flex absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer" />
          <CarouselNext className="hidden sm:flex absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer" />

          {/* Carousel Navigation for mobile screens */}
          <CarouselPrevious className="flex sm:hidden absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer" />
          <CarouselNext className="flex sm:hidden absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedProjects;
