import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutMe, skills } from '../../data';
import SkillBar from '../ui/SkillBar';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Group skills by category
  const skillCategories = {
    technical: skills.filter(skill => skill.category === 'technical'),
    creative: skills.filter(skill => skill.category === 'creative'),
    soft: skills.filter(skill => skill.category === 'soft'),
  };

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
              About Me
            </h2>
            
            <div className="prose prose-lg dark:prose-invert">
              {aboutMe.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-accent-600 dark:from-secondary-400 dark:to-accent-400">
              My Skills
            </h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-primary-600 dark:text-primary-400">Technical Skills</h3>
              {skillCategories.technical.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index} />
              ))}
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-accent-600 dark:text-accent-400">Creative Skills</h3>
              {skillCategories.creative.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index} />
              ))}
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-secondary-600 dark:text-secondary-400">Soft Skills</h3>
              {skillCategories.soft.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;