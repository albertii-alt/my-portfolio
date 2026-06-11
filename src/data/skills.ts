export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'Kotlin', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'React Native', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Vite'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'SparkJava', 'PHP'],
  },
  {
    category: 'Databases',
    skills: ['SQLite', 'MySQL', 'PostgreSQL', 'JSON Storage'],
  },
  {
    category: 'Tools & Infra',
    skills: ['Git', 'GitHub', 'Tauri', 'Expo', 'Socket.IO', 'Zustand', 'Maven', 'Amazon Q'],
  },
  {
    category: 'AI & Agents',
    skills: ['Claude API', 'Ollama', 'Continue (VS Code)', 'LLM Integration', 'Agentic Dev'],
  },
]