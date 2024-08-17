import React, { useState } from "react";
import {
  GitHubLogoIcon,
  GlobeIcon,
  InfoCircledIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import "./styles/card.css";

const ImpactfulDeploymentCard: React.FC<{ project: any }> = ({ project }) => {
  const [showAll, setShowAll] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowAll = () => setShowAll(!showAll);

  const visibleTagsCount = 4;
  const visibleTags = project.techStack.slice(0, visibleTagsCount);
  const hiddenTags = project.techStack.slice(visibleTagsCount);

  const toggleDetails = () => setShowDetails(!showDetails);

  const handleOutsideClick = () => {
    if (showDetails) {
      setShowDetails(false);
    }
  };

  return (
    <div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-full lg:max-w-2xl mx-auto flex flex-col justify-between"
      onClick={handleOutsideClick}
      style={{ minHeight: "100%" }} // Ensures all cards stretch to the same height
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 left-0 bg-off-black text-off-white text-sm px-4 py-2">
          {project.users}+ Users
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            {project.title}
          </h3>
          <p className="text-gray-600 mt-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap">
            {visibleTags.map((tech: any, index: any) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {showAll &&
              hiddenTags.map((tech: any, index: any) => (
                <span
                  key={index + visibleTagsCount}
                  className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            {hiddenTags.length > 0 && (
              <span
                onClick={toggleShowAll}
                className="bg-off-black text-white cursor-pointer text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
              >
                {showAll ? "Show Less" : `Show All (${hiddenTags.length})`}
              </span>
            )}
          </div>
        </div>
        <div className="mt-6 flex items-center space-x-2">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <GlobeIcon />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <GitHubLogoIcon />
            </a>
          )}
          {project.bulletPoints && project.bulletPoints.length > 0 && (
            <button
              onClick={toggleDetails}
              className="btn flex items-center space-x-1 text-sm px-3 py-2"
            >
              <InfoCircledIcon className="w-4 h-4" />
            </button>
          )}
          {project.link && (
            <a
              href={project.link}
              className="btn flex items-center space-x-1 text-sm px-3 py-2"
            >
              <span>Learn More</span>
              <ArrowRightIcon className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
      {showDetails &&
        project.bulletPoints &&
        project.bulletPoints.length > 0 && (
          <div className="absolute inset-0 bg-gray-100 bg-opacity-95 p-6 flex flex-col justify-center items-start">
            <h4 className="text-lg font-semibold mb-3">Key Highlights:</h4>
            <ul className="list-disc list-inside text-gray-800">
              {project.bulletPoints.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default ImpactfulDeploymentCard;
