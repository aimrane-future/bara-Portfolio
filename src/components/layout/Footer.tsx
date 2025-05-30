import React from 'react';
import { Heart } from 'lucide-react';
import { socialLinks } from '../../data';
import SocialIcon from '../ui/SocialIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((social) => (
              <SocialIcon key={social.name} social={social} />
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">
              &copy; {currentYear} Bara Aimrane. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 flex items-center justify-center">
              Made with <Heart className="mx-1 text-red-500" size={14} /> and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;