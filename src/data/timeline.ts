export interface TimelineEntry {
  year: string
  title: string
  description: string
  type: 'project' | 'education' | 'milestone'
}

export const timeline: TimelineEntry[] = [
  {
    year: '2026',
    title: 'Pinili Cutlet POS System',
    description: 'Built a LAN-based multi-device POS with Tauri, React, and Node.js for a local food stall.',
    type: 'project',
  },
  {
    year: '2026',
    title: 'Local LLM Dev Environment',
    description: 'Set up Ollama + Continue in VS Code with qwen2.5-coder for autocomplete and llama3.1 for agent chat.',
    type: 'milestone',
  },
  {
    year: '2026',
    title: 'Vantage Dental Clinic System',
    description: 'Completed 2nd year project — a full Java Swing desktop app with MySQL, multi-role access, and email notifications.',
    type: 'project',
  },
  {
    year: '2026',
    title: 'FlowDay Mobile App',
    description: 'Shipped an offline-first React Native productivity app with streak tracking and SQLite storage.',
    type: 'project',
  },
  {
    year: '2026',
    title: 'Lumina POS',
    description: 'Built a PHP-based hardware store POS with inventory management and role-based access.',
    type: 'project',
  },
  {
    year: '2025',
    title: 'Bisayang Kusina',
    description: 'Built a modern website for showcasing visayan foods with HTML, CSS, and JavaScript featuring responsive design and smooth animations.',
    type: 'project',
  },
    {
    year: '2024',
    title: 'Learning My First Programming Language(Java)',
    description: 'Built simple console apps and cotinuing to learn more about programming concepts and problem-solving.',
    type: 'project',
  },
  {
    year: '2023',
    title: 'Started BS Information Technology',
    description: 'Enrolled at Trinidad Municipal College, Trinidad, Bohol. Began building real systems beyond coursework.',
    type: 'education',
  },
]