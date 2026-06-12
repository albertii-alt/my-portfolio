export type ProjectStatus = 'active' | 'complete' | 'deployed'

export interface Project {
  id: string
  title: string
  tagline: string
  problem: string
  stack: string[]
  tags: string[]
  status: ProjectStatus
  featured: boolean
  github: string
  live?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 'pinili-cutlet-pos',
    title: 'Pinili Cutlet POS',
    tagline: 'LAN-based multi-device Point of Sale system',
    problem: 'Food stalls need unified order-taking and sales tracking across multiple devices — no internet required.',
    stack: ['Node.js', 'Express', 'Tauri', 'React', 'SQLite', 'TypeScript'],
    tags: ['Full-Stack', 'LAN', 'Real-World'],
    status: 'active',
    featured: true,
    github: 'https://github.com/albertii-alt/pinili-cutlet-pos',
    image: '/images/projects/PINILI CUTLET.png',
  },
  {
    id: 'vantage-dental',
    title: 'Vantage Dental Clinic',
    tagline: 'Enterprise appointment management system',
    problem: 'Dental clinics struggle with appointment conflicts, role permissions, and patient communication.',
    stack: ['Java Swing', 'MySQL', 'JavaMail', 'BCrypt', 'HikariCP'],
    tags: ['Desktop', 'Enterprise', 'Java'],
    status: 'complete',
    featured: true,
    github: 'https://github.com/albertii-alt/dental-clinic-appointment-management-system',
    image: '/images/projects/VANTAGE DENTAL CLINIC SYSTEM.png',
  },
  {
    id: 'flowday',
    title: 'FlowDay',
    tagline: 'Offline-first daily task and progress tracker',
    problem: 'Productivity apps should not need the cloud. Users deserve to own their data.',
    stack: ['React Native', 'Expo', 'SQLite', 'Zustand', 'TypeScript'],
    tags: ['Mobile', 'Offline-First', 'Productivity'],
    status: 'complete',
    featured: true,
    github: 'https://github.com/albertii-alt/flowday',
    image: '/images/projects/flowday.png',
  },
  {
    id: 'lumina-pos',
    title: 'Lumina POS',
    tagline: 'Hardware store point of sale system',
    problem: 'Hardware stores need a reliable POS that tracks inventory and supports multiple staff roles.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'Chart.js'],
    tags: ['Full-Stack', 'PHP', 'POS'],
    status: 'complete',
    featured: false,
    github: 'https://github.com/albertii-alt/hardware-pos',
    image: '/images/projects/lumina-pos.png',
  },
  {
    id: 'homebase-finder',
    title: 'HomeBase Finder',
    tagline: 'Modern property browsing web app',
    problem: 'Real estate searchers need a fast, intuitive interface without clutter.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite'],
    tags: ['Web App', 'Deployed', 'React'],
    status: 'deployed',
    featured: false,
    github: 'https://github.com/albertii-alt/homebase-finder',
    live: 'https://homebase-finder.vercel.app',
    image: '/images/projects/homebase-finder.png',
  },
  {
    id: 'library-system',
    title: 'Library Management System',
    tagline: 'Full-stack library management with Java backend',
    problem: 'Libraries need to track books, members, and borrow transactions without complex database admin.',
    stack: ['Java', 'SparkJava', 'Maven', 'HTML', 'CSS', 'JavaScript'],
    tags: ['Full-Stack', 'Java', 'Group Project'],
    status: 'complete',
    featured: false,
    github: 'https://github.com/albertii-alt/library_system_management',
    image: '/images/projects/library-system.png',
  },
  {
    id: 'bisayang-kusina',
    title: 'Bisayang Kusina',
    tagline: 'Modern login and sign-up page UI',
    problem: 'Demonstrates ability to build attractive, functional authentication interfaces.',
    stack: ['HTML5', 'CSS', 'JavaScript'],
    tags: ['UI', 'Frontend', 'Learning'],
    status: 'complete',
    featured: false,
    github: 'https://github.com/albertii-alt/bisayang_kusina',
    image: '/images/projects/bisayang-kusina.png',
  },
]

export const featuredProjects = projects.filter(p => p.featured)
export const otherProjects = projects.filter(p => !p.featured)