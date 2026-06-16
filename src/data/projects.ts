import type { Project } from '@/Interfaces/projects.ts';
import FilmSite from '@/assets/FilmSite.png';
export const projects: Project[] = [
  {
    id: 1,
    name: 'FilmSite',
    image: FilmSite ,
    description: 'A website for film enthusiasts to explore and discover movies.' ,
    githubLink: 'https://www.github.com/LaurynasT/filmsite' ,
  },
  {
    id: 2,
    name: 'Contact System',
    image: '' ,
    description: 'A simple project to demonstrate Vue.js capabilities.' ,
    githubLink: 'https://www.github.com/LaurynasT/Contact-System' ,
  }
];