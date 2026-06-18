import type { Project } from '@/Interfaces/projects.ts'
import FilmSite from '@/assets/FilmSite.png'
import Contacts from '@/assets/Contact.png'
import Eneba from '@/assets/Eneba.png'
export const projects: Project[] = [
  {
    id: 1,
    name: 'FilmSite',
    image: FilmSite,
    description:
      'Full-stack movie browsing platform for discovering and exploring films. Built with React and ASP.NET Core, featuring API integration and ongoing development for new features.',
    githubLink: 'https://www.github.com/LaurynasT/filmsite',
  },
  {
    id: 2,
    name: 'Contact System',
    image: Contacts,
    description:
      'Contact management system developed during an internship at Teltonika. Built with Vue.js, TypeScript, and unit tested using Vitest. Focused on clean architecture and component reusability.',
    githubLink: 'https://www.github.com/LaurynasT/Contact-System',
  },
  {
    id: 3,
    name: 'Eneba Project',
    image: Eneba,
    description:
      'Full-stack marketplace-style application inspired by Eneba. Built with React, TypeScript, and ASP.NET Core Web API, focusing on product listing, filtering, and frontend-backend integration.',
    githubLink: 'https://github.com/LaurynasT/EnebaProject',
  },
]
