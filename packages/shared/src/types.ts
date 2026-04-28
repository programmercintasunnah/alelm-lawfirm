export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  photo: string;
  bio: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Contact {
  id: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  linkedin: string;
}

export interface Homepage {
  id: string;
  logo: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
  ctaLink: string;
  aboutSnippet: string;
  featuredServices: string[];
}

export interface About {
  id: string;
  title: string;
  content: string;
  vision: string;
  mission: string;
}

export interface Booking {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  slug: string;
}

export interface Scheduling {
  id: string;
  lawyerId: string;
  date: string;
  time: string;
  available: boolean;
}

export type PackageType = 'basic' | 'custom';