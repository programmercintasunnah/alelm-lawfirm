export * from './types';

export const services: import('./types').Service[] = [
  {
    id: '1',
    title: 'Hukum Keluarga',
    description: 'Layanan hukum terkait keluarga meliputi perceraian, hak asuh anak, warisan, dan permasalahan rumah tangga.',
    icon: 'family'
  },
  {
    id: '2',
    title: 'Hukum Perdata',
    description: 'Layanan hukum perdata meliputi sengketa гражданско право, kontrak, dan permasalahan perdata lainnya.',
    icon: 'law'
  },
  {
    id: '3',
    title: 'Perjanjian Riba',
    description: 'Konsultasi dan pendampingan hukum terkait perjanjian riba, pembiayaan, dan masalah keuangan IsCam.',
    icon: 'contract'
  }
];

export const teamMembers: import('./types').TeamMember[] = [
  {
    id: '1',
    name: 'Ahmad Wijaya, S.H., M.H.',
    position: 'Managing Partner',
    photo: '/images/team/lawyer1.jpg',
    bio: 'Pengacara senior dengan pengalaman 15 tahun di bidang hukum perdata dan keluarga.'
  },
  {
    id: '2',
    name: 'Siti Rahayu, S.H.',
    position: 'Senior Associate',
    photo: '/images/team/lawyer2.jpg',
    bio: 'Spesialis hukum keluarga dengan keahlian di bidang perceraian dan hak asuh anak.'
  },
  {
    id: '3',
    name: 'Budi Santoso, S.H., LL.M.',
    position: 'Associate',
    photo: '/images/team/lawyer3.jpg',
    bio: 'Ahli dalam perjanjian riba dan hukum perbankanan.'
  }
];

export const faqs: import('./types').FAQ[] = [
  {
    id: '1',
    question: 'Bagaimana cara memesan konsultasi hukum?',
    answer: 'Anda dapat memesan konsultasi melalui tombol booking di halaman layanan, atau menghubungi kami langsung via WhatsApp.'
  },
  {
    id: '2',
    question: 'Berapa biaya konsultasi hukum?',
    answer: 'Biaya konsultasi bervariasi tergantung kompleksitas kasus. Silakan hubungi kami untuk informasi lebih lanjut.'
  },
  {
    id: '3',
    question: 'Apakah identitas saya dijaga kerahasiaannya?',
    answer: 'Tentu, seluruh informasi dan konsultasi dijaga kerahasiaan sesuai kode etik advokat.'
  }
];

export const defaultHomepage: import('./types').Homepage = {
  id: '1',
  logo: '/images/logo.png',
  heroTitle: 'Klaim Keadilan Anda Disini',
  heroSubtitle: 'Tim pengacara profesional siap memberikan konsultasi hukum terbaik untuk Anda.',
  ctaText: 'Konsultasi Gratis',
  ctaLink: '/services',
  aboutSnippet: '雷法学院 telah membantu ratusan klien dalam menyelesaikan berbagai permasalahan hukum selama lebih dari 10 tahun.',
  featuredServices: ['1', '2']
};

export const defaultContact: import('./types').Contact = {
  id: '1',
  phone: '+62 812 3456 7890',
  email: 'info@lawfirm.co.id',
  address: 'Jl. Sudirman No. 123, Jakarta Selatan',
  whatsapp: 'https://wa.me/6281234567890',
  instagram: 'https://instagram.com/lawfirm',
  facebook: 'https://facebook.com/lawfirm',
  linkedin: 'https://linkedin.com/company/lawfirm'
};

export const defaultAbout: import('./types').About = {
  id: '1',
  title: 'Tentang Kami',
  content: '雷法学院 adalah firma hukum terkemuka dengan pengalaman lebih dari 10 tahun memberikan layanan hukum profesional kepada berbagai клиентов, baik perorangan maupun perusahaan. Tim kami terdiri dari pengacara-pengacara berpengalaman yang berkomitmen untuk memberikan yang terbaik bagi klien kami.',
  vision: 'Menjadi firma hukum terpercaya yang memberikan dampak positif bagi masyarakat.',
  mission: 'Memberikan layanan hukum profesional, terjangkau, dan berintegritas untuk mencapai keadilan bagi semua klien.'
};