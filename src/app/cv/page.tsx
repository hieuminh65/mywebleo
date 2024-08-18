"use client";

import React, { useState } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Section from "./_components/Section";
import Subsection from "./_components/Subsection";
import cv from "../../data/cv.json";
import ShimmerButton from "@/components/buttons/LearnMore";

const cvData = cv;

const CVPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(
    cvData.sections[0].title
  );
  const [openSubsection, setOpenSubsection] = useState<string | null>(
    cvData.sections[0].subsections[0].title
  );

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
    setOpenSubsection(null); // Reset subsection when section changes
  };

  const toggleSubsection = (subsection: string) => {
    setOpenSubsection(openSubsection === subsection ? null : subsection);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-off-black mb-4 mt-8">
            CV & Resume
          </h2>
          <div className="w-full h-1 bg-highlight-orange mb-16"></div>

          {/* Document Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-off-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-xl font-semibold text-off-black mb-2">
                1-Page Resume
              </h3>
              <p className="text-dark-grey text-center mb-4">
                A concise, one-page overview of my experience and skills.
              </p>
              <ShimmerButton>View PDF</ShimmerButton>
            </div>

            <div className="bg-off-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-xl font-semibold text-off-black mb-2">
                Printed Version
              </h3>
              <p className="text-dark-grey text-center mb-4">
                A formatted, print-ready version of my resume.
              </p>
              <ShimmerButton>Download PDF</ShimmerButton>
            </div>

            <div className="bg-off-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-xl font-semibold text-off-black mb-2">
                Full CV
              </h3>
              <p className="text-dark-grey text-center mb-4">
                A detailed CV including all my projects, publications, and more.
              </p>
              <ShimmerButton>View PDF</ShimmerButton>
            </div>
          </div>

          {cvData.sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              isOpen={openSection === section.title}
              onToggle={() => toggleSection(section.title)}
            >
              {section.subsections.map((subsection, subIndex) => (
                <Subsection
                  key={subIndex}
                  title={subsection.title}
                  content={subsection.content}
                  isOpen={openSubsection === subsection.title}
                  onToggle={() => toggleSubsection(subsection.title)}
                  time={subsection.time}
                  location={subsection.location}
                />
              ))}
            </Section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CVPage;
