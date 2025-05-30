import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categoryColors = {
    technical: 'bg-primary-500',
    creative: 'bg-accent-500',
    soft: 'bg-secondary-500',
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${skill.level}%`,
      transition: {
        duration: 0.8,
        delay: delay * 0.1,
        ease: 'easeInOut',
      }
    }
  };

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={barVariants}
          className={`h-full rounded-full ${categoryColors[skill.category]}`}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;