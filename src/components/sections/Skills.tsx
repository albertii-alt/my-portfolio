import { motion } from 'framer-motion';
import { skillGroups } from '../../data/skills';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function Skills() {
  return (
    <section id="skills" className="pt-10 pb-20 px-6">
      <div className="mx-auto" style={{ maxWidth: 'var(--content-max, 1100px)' }}>
        <p className="text-text-muted font-display text-sm uppercase tracking-widest mb-10">
          Skills &amp; Technologies
        </p>

        <motion.div
          className="flex flex-col gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skillGroups.map(({ category, skills }) => (
            <motion.div key={category} variants={fadeUp} transition={{ duration: 0.4, ease: 'easeOut' }}>
              <p className="text-text-muted font-display text-sm uppercase tracking-widest mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="bg-bg-surface border border-border text-text-secondary rounded-md px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
