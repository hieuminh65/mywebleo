"use client";

import React from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface SectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full p-4 bg-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight-orange hover:bg-gray-200 transition-colors"
      >
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span>
          {isOpen ? (
            <ChevronDownIcon className="w-6 h-6" />
          ) : (
            <ChevronRightIcon className="w-6 h-6" />
          )}
        </span>
      </button>
      {isOpen && <div className="mt-2 pl-4">{children}</div>}
    </div>
  );
};

export default Section;
