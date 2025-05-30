import { Project, Skill, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Automation',
    description: 'Automated inventory management and order processing for an online retailer, increasing efficiency by 40%.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Automation', 'API Integration', 'Python'],
  },
  {
    id: 2,
    title: 'SEO Optimization Campaign',
    description: 'Implemented comprehensive SEO strategy for a client, resulting in a 65% increase in organic traffic over 3 months.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['SEO', 'Content Strategy', 'Analytics'],
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    description: 'Designed and executed Facebook/Instagram ad campaigns for a local business, achieving a 3.2x ROI.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Facebook Ads', 'Instagram Ads', 'Marketing'],
  },
  {
    id: 4,
    title: 'Responsive Web Design',
    description: 'Created a modern, responsive website for a client in the hospitality industry, improving mobile conversions by 25%.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Web Design', 'Responsive', 'UX/UI'],
  }
];

export const skills: Skill[] = [
  { name: 'Automation', level: 95, category: 'technical' },
  { name: 'Web Design', level: 90, category: 'creative' },
  { name: 'SEO', level: 85, category: 'technical' },
  { name: 'Facebook/Instagram Ads', level: 90, category: 'technical' },
  { name: 'UI/UX Design', level: 80, category: 'creative' },
  { name: 'Python', level: 75, category: 'technical' },
  { name: 'JavaScript', level: 85, category: 'technical' },
  { name: 'React', level: 80, category: 'technical' },
  { name: 'Content Creation', level: 85, category: 'creative' },
  { name: 'Problem Solving', level: 95, category: 'soft' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Analytics', level: 85, category: 'technical' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/bara_style_1?igsh=eDJmbDNjdGg3dDkw',
    icon: 'Instagram'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/212726030614',
    icon: 'MessageCircle'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/aimrane-future',
    icon: 'Github'
  },
  {
    name: 'Email',
    url: 'mailto:aimranebara@gmail.com',
    icon: 'Mail'
  }
];

export const aboutMe = {
  bio: `I'm Bara Aimrane, a 20-year-old tech enthusiast specializing in Automation, Web Design, SEO, and Social Media Advertising. I leverage cutting-edge technology to help businesses streamline operations and establish a strong online presence.

With expertise in automation solutions, I develop systems that save time and reduce manual workload. My web design skills focus on creating responsive, user-friendly interfaces that drive conversions.

I implement data-driven SEO strategies that improve visibility and organic traffic. Additionally, my experience with Facebook and Instagram advertising helps businesses target the right audience with compelling campaigns that deliver measurable ROI.

I'm passionate about continuous learning and staying ahead of industry trends to deliver the best solutions for my clients.`,
  
  shortBio: "Tech specialist focused on automation, web design, and digital marketing solutions that drive real business results."
};