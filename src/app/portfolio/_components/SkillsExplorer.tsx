import React from 'react';
import { motion } from 'framer-motion';
import { useSkills } from '@/contexts/SkillsContext';
import { Cross2Icon } from '@radix-ui/react-icons';

const SkillsExplorer: React.FC = () => {
  const { allSkills, selectedSkills, toggleSkill, clearSkills, filteredProjects } = useSkills();

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-off-black">Explore by Skills</h2>
        {selectedSkills.length > 0 && (
          <button
            onClick={clearSkills}
            className="text-sm text-dark-grey hover:text-highlight-orange transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill) => (
            <motion.button
              key={skill}
              onClick={() => toggleSkill(skill)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedSkills.includes(skill)
                  ? 'bg-highlight-orange text-white'
                  : 'bg-gray-200 text-dark-grey'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
              {selectedSkills.includes(skill) && (
                <Cross2Icon className="inline-block ml-1 w-3 h-3" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {selectedSkills.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-off-black">
            Projects using {selectedSkills.join(' & ')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-off-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group"
              >
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-off-black mb-2">
                    {project.title}
                  </h4>
                  <p className="text-dark-grey mb-4">{project.description}</p>
                  <div className="flex flex-wrap">
                    {project.techStack.map((tech: string, index: number) => (
                      <span
                        key={tech}
                        className={`bg-gray-200 text-off-black text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full ${
                          selectedSkills.includes(tech)
                            ? 'bg-highlight-orange/20 text-highlight-orange'
                            : ''
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SkillsExplorer; 