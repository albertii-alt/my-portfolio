import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../../data/projects';

const statusLabel: Record<string, string> = {
  active: 'Active',
  complete: 'Complete',
  deployed: 'Deployed',
};

const statusColor: Record<string, string> = {
  active: 'text-accent border-accent/40 bg-accent/10',
  complete: 'text-text-secondary border-border bg-bg-elevated',
  deployed: 'text-blue-400 border-blue-400/40 bg-blue-400/10',
};

interface Props {
  project: Project;
  compact?: boolean;
}

export default function ProjectCard({ project, compact = false }: Props) {
  return (
    <motion.div
      className="bg-bg-surface border border-border rounded-lg p-6 flex flex-col gap-4 h-full"
      whileHover={{ y: -2, borderColor: 'var(--color-accent-dim)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-text-primary text-base leading-snug">{project.title}</h3>
        <span className={`shrink-0 font-display text-xs px-2 py-0.5 rounded border ${statusColor[project.status]}`}>
          {statusLabel[project.status]}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs text-text-muted border border-border rounded px-2 py-0.5 font-display">
            {tag}
          </span>
        ))}
      </div>

      {!compact && (
        <p className="text-text-secondary text-sm leading-relaxed">{project.problem}</p>
      )}

      {/* Stack pills */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.stack.map(s => (
          <span key={s} className="bg-bg-elevated text-text-muted text-xs rounded px-2 py-0.5">
            {s}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-1 border-t border-border">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary text-sm transition-colors"
        >
          <Github size={14} /> GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent text-sm transition-colors"
          >
            <ExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
