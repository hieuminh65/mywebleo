"use client";

import React from "react";

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
  imageUrl?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  subtitle,
  content,
  imageUrl,
}) => {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold text-off-black mb-4">{title}</h3>
      <h4 className="text-lg font-medium text-dark-grey mb-4">{subtitle}</h4>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover mb-6 rounded-lg shadow-lg"
        />
      )}
      <ul className="list-disc list-inside text-off-black text-medium space-y-2">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ContentSection;
