export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'creative' | 'soft';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}