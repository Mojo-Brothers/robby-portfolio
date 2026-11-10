export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Proyek', href: '/projects' },
  { label: 'Karya Kreatif', href: '/creative' },
  { label: 'Resume & CV', href: '/resume' },
  { label: 'Tentang Saya', href: '/about' },
  { label: 'Kontak', href: '/contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Mojo-Brothers',
  email: 'obbyvior@gmail.com',
  linkedin: 'https://www.linkedin.com/in/roby-viori-fansya-2b0423437/',
  cvPdf: '/cv/Robby-Viory-Fansya-CV.pdf',
  nurseflowCaseStudy: '/projects/nurseflow',
  igdCaseStudy: '/projects/igd-operations',
};
