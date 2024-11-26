import React, { createContext, useContext, useState, useCallback } from 'react';
import projectsData from '@/data/projects.json';

interface SkillCategory {
  name: string;
  skills: string[];
}

interface SkillsContextType {
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  clearSkills: () => void;
  filteredProjects: any[];
  skillCategories: SkillCategory[];
}

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

// Base categories with their known skills
// Any skill not listed here will go to "Other Skills"
const BASE_CATEGORIES: { [key: string]: string[] } = {
  "Top Skills": [
    "Python", "JavaScript", "C++", "Azure", "AWS", "Docker", "PostgreSQL"
  ],
  "Programming Languages": [
    "Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "Go", "Rust", "PHP", "Ruby",
    "Swift", "Kotlin", "SQL", "R", "MATLAB", "Scala", "Perl", "Shell"
  ],
  "Web & Mobile Development": [
    "React", "Next.js", "Vue.js", "Angular", "Node.js", "Express.js", "Django", "Flask",
    "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Material UI", "REST APIs", "GraphQL",
    "WebSocket", "Redux", "React Query", "Webpack", "Vite", "React Native", "Flutter", 
    "Expo", "Android", "iOS", "Swift", "Kotlin","Mobile App Development", "PWA"
  ],
  "AI & ML (Artificial Intelligence & Machine Learning)": [
    "TensorFlow", "PyTorch", "Scikit-learn", "GPT-4", "LangChain", "Llama", "Gemini",
    "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Neural Networks",
    "Transformers", "BERT", "OpenAI", "Hugging Face"
  ],
  "Cloud & DevOps": [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub Actions",
    "Jenkins", "Terraform", "Ansible", "Linux", "Nginx", "Apache", "Serverless"
  ],
  "Databases": [
    "PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite", "Oracle", "Firebase",
    "Supabase", "DynamoDB", "Cassandra", "ElasticSearch", "GraphQL"
  ]
};

export const SkillsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Extract all unique skills from projects and categorize them
  const skillCategories = React.useMemo(() => {
    const allProjects = [
      ...projectsData.impactfulDeployments,
      ...projectsData.personalCreations,
      ...projectsData.academicEndeavors
    ];
    
    // Create a Set of all skills used in projects
    const usedSkillsSet = new Set<string>();
    allProjects.forEach(project => {
      project.techStack.forEach((skill: string) => usedSkillsSet.add(skill));
    });

    // Create a map to track which skills have been categorized
    const categorizedSkills = new Set<string>();
    
    // First, categorize known skills
    const categories = Object.entries(BASE_CATEGORIES).map(([name, skills]) => {
      const matchedSkills = skills.filter(skill => usedSkillsSet.has(skill));
      matchedSkills.forEach(skill => categorizedSkills.add(skill));
      return {
        name,
        skills: matchedSkills.sort()
      };
    }).filter(category => category.skills.length > 0);

    // Find uncategorized skills
    const otherSkills = Array.from(usedSkillsSet)
      .filter(skill => !categorizedSkills.has(skill))
      .sort();

    // Add "Other Skills" category if there are any uncategorized skills
    if (otherSkills.length > 0) {
      categories.push({
        name: "Other Skills",
        skills: otherSkills
      });
    }

    return categories;
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
      skillCategories
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