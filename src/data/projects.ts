import type { Project } from '@/Interfaces/projects.ts'
import FilmSite from '@/assets/FilmSite.png'
export const projects: Project[] = [
  {
    id: 1,
    name: 'FilmSite',
    image: FilmSite,
    description: 'A website for film enthusiasts to explore and discover movies. Made with React.js and ASP.Net. Still being worked on.',
    githubLink: 'https://www.github.com/LaurynasT/filmsite',
  },
  {
    id: 2,
    name: 'Contact System',
    image: '',
    description: 'Contact system project which was made in Teltonika Intership, it was made with Vue.js + Typescript also Vitest was used for Unit Testing.',
    githubLink: 'https://www.github.com/LaurynasT/Contact-System',
  },
  {
    id: 3,
    name: 'EnebeProject',
    image: '',
    description: '',
    githubLink: 'https://github.com/LaurynasT/EnebaProject',
  }
]
