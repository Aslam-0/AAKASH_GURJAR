export interface TrainerProfile {
  name: string;
  nickname?: string;
  title: string;
  tagline: string;
  bioHeadline: string;
  bioParagraphs: string[];
  experienceYears: number | string;
  athletesCoached: string;
  location: string;
  gymName: string;
  instagram: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  heroImage: string;
  physiqueImage: string;
  aboutImage: string;
  lifestyleImage: string;
  philosophyImage?: string;
  redHoodieImage?: string;
  redAthleticImage?: string;
  fullBodyImage?: string;
  galleryImages: {
    src: string;
    title: string;
    caption: string;
    tag: string;
  }[];
  certifications: Certification[];
  achievements: Achievement[];
  services: Service[];
  philosophyPillars: PhilosophyPillar[];
  transformations: TransformationItem[];
  testimonials: TestimonialItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  icon?: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  year: string;
  detail: string;
  highlight?: boolean;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  duration?: string;
  recommendedFor: string;
  badge?: string;
  popular?: boolean;
}

export interface PhilosophyPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  quote?: string;
}

export interface TransformationItem {
  id: string;
  clientName: string;
  category: 'Fat Loss' | 'Muscle Gain' | 'Recomp' | 'Contest Prep';
  duration: string;
  stats: {
    label: string;
    value: string;
  }[];
  summary: string;
  beforeImg?: string;
  afterImg?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  program: string;
  quote: string;
  rating: number;
  results: string;
}
