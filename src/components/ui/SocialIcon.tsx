import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SocialLink } from '../../types';

interface SocialIconProps {
  social: SocialLink;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ social, className = '' }) => {
  const IconComponent = LucideIcons[social.icon as keyof typeof LucideIcons];

  if (!IconComponent) {
    console.error(`Icon ${social.icon} not found`);
    return null;
  }

  const baseClasses = "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300";
  
  // Custom styling for each social media
  const socialClasses = {
    Instagram: "bg-gradient-to-tr from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",
    MessageCircle: "bg-green-500 hover:bg-green-600 text-white",
    Github: "bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-700 dark:hover:bg-gray-600",
  };

  const iconClass = socialClasses[social.icon as keyof typeof socialClasses] || "bg-blue-500 hover:bg-blue-600 text-white";

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      className={`${baseClasses} ${iconClass} ${className}`}
    >
      <IconComponent size={20} />
    </a>
  );
};

export default SocialIcon;