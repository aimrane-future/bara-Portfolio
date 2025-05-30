import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ParticlesBackground from '../ui/ParticlesBackground';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      <ParticlesBackground />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent-500/30 shadow-xl">
              <img 
                src="https://avatars.githubusercontent.com/u/198911814?v=4" 
                alt="Bara Aimrane" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 mix-blend-overlay"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400">
              BARA AIMRANE
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
              20 years old
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            {['Automation', 'Web Design', 'SEO', 'Facebook/Instagram Ads'].map((tag, index) => (
              <span 
                key={index} 
                className="skill-tag bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-100"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              variant="accent" 
              size="lg" 
              onClick={scrollToAbout}
            >
              Discover More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <button 
              onClick={scrollToAbout}
              aria-label="Scroll to about section"
              className="text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <ChevronDown size={28} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;