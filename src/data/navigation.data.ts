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
  whatsappRaw: '0895372115913',
  whatsappNumber: '+62 895-3721-15913',
  whatsappUrl: 'https://wa.me/62895372115913?text=Halo%20Robby%20Viory%20Fansya,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.',
  linkedin: 'https://www.linkedin.com/in/roby-viori-fansya-2b0423437/',
  cvPdf: '/cv/Robby-Viory-Fansya-CV.pdf',
  nurseflowCaseStudy: '/projects/nurseflow',
  igdCaseStudy: '/projects/igd-operations',
};
