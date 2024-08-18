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
      "A brief description of the project, its goals, and technologies used.",
    image: "/portfolio/talktolisten.png",
  },
  {
    title: "JobsDreamer",
    description:
      "A brief description of the project, its goals, and technologies used.",
    image: "/portfolio/jobsdreamer.png",
  },
  {
    title: "Bull Bot",
    description:
      "A brief description of the project, its goals, and technologies used.",
    image: "/portfolio/bullbot.png",
  },
  {
    title: "Bull Bot 2",
    description:
      "A brief description of the project, its goals, and technologies used.",
    image: "/portfolio/bullbot.png",
  },
  {
    title: "Bull Bot 3",
    description:
      "A brief description of the project, its goals, and technologies used.",
    image: "/portfolio/bullbot.png",
  },
  // Add more projects as needed
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
                <div className="overflow-hidden border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-medium text-off-black">
                      {project.title}
                    </h3>
                    <p className="text-off-black mt-2">{project.description}</p>
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
