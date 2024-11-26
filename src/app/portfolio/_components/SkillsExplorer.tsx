import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSkills } from '@/contexts/SkillsContext';
import { Cross2Icon, ChevronDownIcon, ChevronUpIcon, MagnifyingGlassIcon, StarFilledIcon } from '@radix-ui/react-icons';

const SkillsExplorer: React.FC = () => {
  const { skillCategories, selectedSkills, toggleSkill, clearSkills, filteredProjects } = useSkills();
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setExpandedCategories(skillCategories.map(cat => cat.name));
    } else {
      setExpandedCategories([]);
    }
  };

  const filteredCategories = skillCategories.map(category => ({
    ...category,
    skills: category.skills.filter(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.skills.length > 0);

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleExpand}
            className="text-dark-grey hover:text-highlight-orange transition-colors flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                <ChevronUpIcon className="w-5 h-5" />
                <span>Hide Skills</span>
              </>
            ) : (
              <>
                <ChevronDownIcon className="w-5 h-5" />
                <span>Browse All Skills</span>
              </>
            )}
          </button>
          {selectedSkills.length > 0 && (
            <button
              onClick={clearSkills}
              className="text-sm text-dark-grey hover:text-highlight-orange transition-colors"
            >
              Clear Selection
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="relative mb-4">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-grey" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-highlight-orange"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-8 space-y-4">
        {!isExpanded ? (
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map((skill) => (
              <motion.button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className="bg-highlight-orange text-white px-3 py-1 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
                <Cross2Icon className="inline-block ml-1 w-3 h-3" />
              </motion.button>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {filteredCategories.map((category) => (
              <div key={category.name} className="border border-gray-200 rounded-lg p-4">
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center justify-between text-lg font-semibold text-off-black mb-2"
                >
                  <span className="flex items-center">
                    {category.name}
                    {category.name === 'Top Skills' && (
                      <StarFilledIcon className="inline-block w-5 h-5 ml-2 text-highlight-orange" />
                    )}
                  </span>
                  {expandedCategories.includes(category.name) ? (
                    <ChevronUpIcon className="w-5 h-5" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedCategories.includes(category.name) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
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
                    {project.techStack.map((tech: string) => (
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