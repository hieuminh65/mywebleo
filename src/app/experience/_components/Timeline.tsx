"use client";

import React from "react";
import TimelineNode from "./TimelineNode";

const Timeline: React.FC<{ experiences: any[] }> = ({ experiences }) => {
  return (
    <div className="container mx-auto">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="absolute border-opacity-20 border-2 border-cool-grey h-full left-1/2 transform -translate-x-1/2"></div>
        {experiences.map((experience, index) => (
          <TimelineNode
            key={index}
            date={experience.date}
            title={experience.title}
            company={experience.company}
            description={experience.description}
            techStack={experience.techStack}
            bulletPoints={experience.bulletPoints}
            isLeft={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
