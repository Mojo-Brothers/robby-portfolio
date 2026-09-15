export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Proyek', href: '/projects' },
  { label: 'Tentang Saya', href: '/about' },
  { label: 'Kontak', href: '/contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Mojo-Brothers',
  email: 'obbyvior@gmail.com',
  linkedin: 'https://www.linkedin.com/in/robby-viory-fansya/',
  nurseflowRepo: 'https://github.com/Mojo-Brothers/NurseFlow-WebApp',
  igdRepo: 'https://github.com/Mojo-Brothers/igd-manajemen-sistem',
};
