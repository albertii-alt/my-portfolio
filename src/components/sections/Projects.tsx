import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProjects, otherProjects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="pt-10 pb-20 px-6 overflow-x-hidden">
      <div className="mx-auto" style={{ maxWidth: 'var(--content-max, 1100px)' }}>
        <p className="text-text-muted font-display text-sm uppercase tracking-widest mb-10">
          Projects
        </p>

        {/* Featured stack */}
        <div className="flex flex-col gap-16">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} featured={true} image={project.image} index={i} isLast={i === featuredProjects.length - 1} />
          ))}
        </div>

        {/* See All toggle */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <button
            onClick={() => setShowAll(v => !v)}
            className="font-display text-sm text-text-secondary border border-border rounded px-5 py-2 hover:border-border-active hover:text-text-primary transition-colors"
          >
            {showAll ? 'Show Less ↑' : 'See All Projects ↓'}
          </button>

          <AnimatePresence>
            {showAll && (
              <motion.div
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {otherProjects.map(project => (
                  <ProjectCard key={project.id} project={project} featured={false} image={project.image} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
