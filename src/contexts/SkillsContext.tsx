import React, { createContext, useContext, useState, useCallback } from 'react';
import projectsData from '@/data/projects.json';

interface SkillsContextType {
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  clearSkills: () => void;
  filteredProjects: any[];
  allSkills: string[];
}

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

export const SkillsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Extract all unique skills from projects
  const allSkills = React.useMemo(() => {
    const skillsSet = new Set<string>();
    
    // Combine all projects
    const allProjects = [
      ...projectsData.impactfulDeployments,
      ...projectsData.personalCreations,
      ...projectsData.academicEndeavors
    ];
    
    // Extract skills from techStack
    allProjects.forEach(project => {
      project.techStack.forEach((skill: string) => skillsSet.add(skill));
    });
    
    return Array.from(skillsSet).sort();
  }, []);

  // Filter projects based on selected skills
  const filteredProjects = React.useMemo(() => {
    if (selectedSkills.length === 0) return [];

    const allProjects = [
      ...projectsData.impactfulDeployments,
      ...projectsData.personalCreations,
      ...projectsData.academicEndeavors
    ];

    return allProjects.filter(project =>
      selectedSkills.every(skill => project.techStack.includes(skill))
    );
  }, [selectedSkills]);

  const toggleSkill = useCallback((skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  }, []);

  const clearSkills = useCallback(() => {
    setSelectedSkills([]);
  }, []);

  return (
    <SkillsContext.Provider value={{
      selectedSkills,
      toggleSkill,
      clearSkills,
      filteredProjects,
      allSkills
    }}>
      {children}
    </SkillsContext.Provider>
  );
};

export const useSkills = () => {
  const context = useContext(SkillsContext);
  if (!context) {
    throw new Error('useSkills must be used within a SkillsProvider');
  }
  return context;
}; 