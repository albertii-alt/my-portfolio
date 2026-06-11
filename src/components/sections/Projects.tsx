import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProjects, otherProjects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="pt-10 pb-20 px-6">
      <div className="mx-auto" style={{ maxWidth: 'var(--content-max, 1100px)' }}>
        <p className="text-text-muted font-display text-sm uppercase tracking-widest mb-10">
          Projects
        </p>

        {/* Featured grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {featuredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

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
                  <ProjectCard key={project.id} project={project} compact />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
