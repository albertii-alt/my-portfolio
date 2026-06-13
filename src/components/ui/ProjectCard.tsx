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
  isLast?: boolean;
}

function FeaturedBrowserMockup({ image, title, projectId }: { image?: string; title: string; projectId: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden mb-5">
      <div className="bg-bg-elevated border-b border-border flex items-center gap-3 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-[10px] h-[10px] rounded-full bg-[#E2554F] block" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#E8B14B] block" />
          <span className="w-[10px] h-[10px] rounded-full bg-accent block" />
        </div>
        <div className="flex-1 bg-bg-base border border-border rounded-md flex items-center justify-center py-0.5">
          <span className="font-display text-xs text-text-muted">{projectId}.local</span>
        </div>
      </div>
      {!image || failed ? (
        <div className="w-full md:aspect-[2/1] bg-bg-surface flex items-center justify-center">
          <span className="font-display text-xs text-text-muted">[ screenshot coming soon ]</span>
        </div>
      ) : (
        <img src={image} alt={title} className="w-full h-auto md:aspect-[2/1] md:object-contain bg-bg-surface block" onError={() => setFailed(true)} />
      )}
    </div>
  );
}


function RegularImage({ image, title }: { image: string; title: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="aspect-video w-full bg-bg-base flex items-center justify-center">
      <span className="font-display text-xs text-text-muted">[ screenshot coming soon ]</span>
    </div>
  ) : (
    <img
      src={image}
      alt={title}
      className="w-full aspect-video object-cover rounded-t-lg border-b border-border block"
      onError={() => setFailed(true)}
    />
  );
}

export default function ProjectCard({ project, compact = false, featured = false, image, isLast = false }: Props) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Shared container for mockup + content */}
        <div className="w-full md:max-w-[85%] md:mx-auto">
          <FeaturedBrowserMockup image={image} title={project.title} projectId={project.id} />

          {/* Content row */}
          <div className="flex justify-between items-start gap-6 flex-wrap mt-5">
          {/* Left */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="font-display text-xl text-text-primary">{project.title}</h3>
              <span className={`shrink-0 font-display text-xs px-2 py-0.5 rounded border ${statusColor[project.status]}`}>
                {statusLabel[project.status]}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap mb-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs text-text-muted border border-border rounded px-2 py-0.5 font-display">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-text-secondary text-sm max-w-md">{project.problem}</p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-end gap-2.5 min-w-[160px]">
            <div className="flex gap-2 flex-wrap justify-end">
              {project.stack.map(s => (
                <span key={s} className="bg-bg-elevated text-text-muted text-xs rounded px-2 py-0.5">{s}</span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-accent font-display text-sm hover:underline"
            >
              <GitFork size={14} /> View on GitHub →
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-text-secondary hover:text-accent font-display text-sm hover:underline"
              >
                <ExternalLink size={14} /> Live Demo →
              </a>
            )}
          </div>
          </div>
        </div>

        {/* Divider — hidden after last item */}
        {!isLast && (
          <div className="mt-8 h-px bg-bg-elevated" />
        )}
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

