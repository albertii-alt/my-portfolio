import { useState } from 'react';
import { motion } from 'framer-motion';
import { GitFork, ExternalLink } from 'lucide-react';
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
  featured?: boolean;
  image?: string;
}

function ImageFallback({ aspectClass }: { aspectClass: string }) {
  return (
    <div className={`${aspectClass} w-full bg-bg-base flex items-center justify-center`}>
      <span className="font-display text-xs text-text-muted">[ screenshot coming soon ]</span>
    </div>
  );
}

function BrowserMockup({ image, title, projectId }: { image: string; title: string; projectId: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="rounded-t-lg overflow-hidden border-b border-border">
      <div className="bg-bg-elevated border-b border-border flex items-center gap-3 px-[14px] py-[10px]">
        <div className="flex items-center gap-[6px]">
          <span className="w-[10px] h-[10px] rounded-full bg-[#E2554F] block" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#E8B14B] block" />
          <span className="w-[10px] h-[10px] rounded-full bg-accent block" />
        </div>
        <div className="flex-1 bg-bg-base border border-border rounded-md flex items-center justify-center py-0.5">
          <span className="font-display text-xs text-text-muted">{projectId}.local</span>
        </div>
      </div>
      {failed ? (
        <ImageFallback aspectClass="aspect-[16/10]" />
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full aspect-[16/10] object-cover block"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function RegularImage({ image, title }: { image: string; title: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <ImageFallback aspectClass="aspect-video" />
  ) : (
    <img
      src={image}
      alt={title}
      className="w-full aspect-video object-cover rounded-t-lg border-b border-border block"
      onError={() => setFailed(true)}
    />
  );
}

export default function ProjectCard({ project, compact = false, featured = false, image }: Props) {
  return (
    <motion.div
      className="bg-bg-surface border border-border rounded-lg flex flex-col gap-4 h-full overflow-hidden"
      whileHover={{ y: -2, borderColor: 'var(--color-accent-dim)' }}
      transition={{ duration: 0.2 }}
    >
      {image && featured && <BrowserMockup image={image} title={project.title} projectId={project.id} />}
      {image && !featured && <RegularImage image={image} title={project.title} />}
      <div className="flex flex-col gap-4 p-6 pt-4 flex-1">
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
          <GitFork size={14} /> GitHub
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
      </div>
    </motion.div>
  );
}
