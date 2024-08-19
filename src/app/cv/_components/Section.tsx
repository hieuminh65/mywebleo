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
        className="flex justify-between items-center w-full p-4 bg-gray-50 rounded-lg border-b-4 border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-highlight-orange hover:bg-off-white hover:border hover:border-highlight-orange hover:shadow-lg hover:scale-105 transition-transform transition-shadow transition-border duration-300"
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
