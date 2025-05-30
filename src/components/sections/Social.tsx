import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { socialLinks } from '../../data';
import SocialIcon from '../ui/SocialIcon';

const Social: React.FC = () => {
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

  return (
    <section id="social" className="section bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-600 to-primary-600 dark:from-accent-400 dark:to-primary-400"
          >
            Connect With Me
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Let's connect on social media. Feel free to reach out for collaborations, questions, or just to say hello!
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SocialIcon social={social} className="w-14 h-14 md:w-16 md:h-16" />
                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {social.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Social;