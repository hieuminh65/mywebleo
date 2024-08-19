import React, { useState } from "react";
import {
  GitHubLogoIcon,
  GlobeIcon,
  InfoCircledIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import "./styles/card.css";

const PersonalCreationCard: React.FC<{ project: any }> = ({ project }) => {
  const [showAll, setShowAll] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowAll = () => setShowAll(!showAll);
  const toggleDetails = () => setShowDetails(!showDetails);
  const handleOutsideClick = () => {
    if (showDetails) {
      setShowDetails(false);
    }
  };

  const visibleTagsCount = 3;
  const visibleTags = project.techStack.slice(0, visibleTagsCount);
  const hiddenTags = project.techStack.slice(visibleTagsCount);

  return (
    <div
      className="relative bg-off-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
      onClick={handleOutsideClick}
      style={{ minHeight: "100%" }} // Ensures all cards stretch to the same height
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div className="mb-4 flex-grow">
          <h3 className="text-xl font-semibold text-off-black">
            {project.title}
          </h3>
          <p className="text-dark-grey mt-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap">
            {visibleTags.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-gray-200 text-off-black text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {showAll &&
              hiddenTags.map((tech: string, index: number) => (
                <span
                  key={index + visibleTagsCount}
                  className="bg-gray-200 text-off-black text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            {hiddenTags.length > 0 && (
              <span
                onClick={toggleShowAll}
                className="bg-off-white text-off-black cursor-pointer text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                {showAll ? "Show Less" : `Show All (${hiddenTags.length})`}
              </span>
            )}
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
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
          <div className="absolute inset-0 bg-gray-100 bg-opacity-95 p-4 flex flex-col justify-center items-start">
            <h4 className="text-lg font-semibold mb-3">Highlights:</h4>
            <ul className="list-disc list-inside text-off-black">
              {project.bulletPoints.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default PersonalCreationCard;
