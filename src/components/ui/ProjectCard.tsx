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
  index?: number;
}

function ImageFallback({ aspectClass }: { aspectClass: string }) {
  return (
    <div className={`${aspectClass} w-full bg-bg-base flex items-center justify-center`}>
      <span className="font-display text-xs text-text-muted">[ screenshot coming soon ]</span>
    </div>
  );
}

function BrowserMockup({ image, title, projectId, landscape = false }: { image: string; title: string; projectId: string; landscape?: boolean }) {
  const [failed, setFailed] = useState(false);
  const imgClass = landscape
    ? 'w-full h-full object-cover block'
    : 'w-full aspect-[16/10] object-cover block';
  return (
    <div className={`overflow-hidden flex flex-col ${landscape ? 'h-full' : 'border-b border-border'}`}>
      <div className="bg-bg-elevated border-b border-border flex items-center gap-3 px-[14px] py-[10px] shrink-0">
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
        <ImageFallback aspectClass={landscape ? 'flex-1' : 'aspect-[16/10]'} />
      ) : (
        <img
          src={image}
          alt={title}
          className={imgClass}
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

export default function ProjectCard({ project, compact = false, featured = false, image, index = 0 }: Props) {
  const isOdd = index % 2 !== 0;

  if (featured) {
    return (
      <motion.div
        className="bg-bg-surface border border-border rounded-lg overflow-hidden flex flex-col md:grid md:grid-cols-2"
        initial={{ opacity: 0, x: isOdd ? 60 : -60, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -2, borderColor: 'var(--color-accent-dim)' }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
      >
        {image && (
          <>
            <div className={`md:hidden`}>
              <BrowserMockup image={image} title={project.title} projectId={project.id} />
            </div>
            <div className={`hidden md:block ${isOdd ? 'md:order-2 border-l' : 'border-r'} border-border`}>
              <BrowserMockup image={image} title={project.title} projectId={project.id} landscape />
            </div>
          </>
        )}
        <div className={`flex flex-col gap-4 p-6 md:p-8 justify-center flex-1 ${isOdd ? 'md:order-1' : ''}`}>
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-text-primary text-base leading-snug">{project.title}</h3>
            <span className={`shrink-0 font-display text-xs px-2 py-0.5 rounded border ${statusColor[project.status]}`}>
              {statusLabel[project.status]}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs text-text-muted border border-border rounded px-2 py-0.5 font-display">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">{project.problem}</p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.stack.map(s => (
              <span key={s} className="bg-bg-elevated text-text-muted text-xs rounded px-2 py-0.5">{s}</span>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-1 border-t border-border">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary text-sm transition-colors">
              <GitFork size={14} /> GitHub
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-text-secondary hover:text-accent text-sm transition-colors">
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-bg-surface border border-border rounded-lg flex flex-col gap-4 h-full overflow-hidden"
      whileHover={{ y: -2, borderColor: 'var(--color-accent-dim)' }}
      transition={{ duration: 0.2 }}
    >
      {image && <RegularImage image={image} title={project.title} />}
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

