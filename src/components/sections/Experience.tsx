import { motion } from 'framer-motion';
import { timeline } from '../../data/timeline';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function Experience() {
  return (
    <section id="experience" className="pt-10 pb-20 px-6">
      <div className="mx-auto" style={{ maxWidth: 'var(--content-max, 1100px)' }}>
        <p className="text-text-muted font-display text-sm uppercase tracking-widest mb-10">
          Journey
        </p>

        <motion.div
          className="relative flex flex-col"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Accent line */}
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-accent/30" />

          {timeline.map((entry) => (
            <motion.div
              key={`${entry.year}-${entry.title}`}
              className="relative pl-8 pb-8 last:pb-0"
              variants={fadeUp}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full bg-accent" />

              <span className="font-display text-accent text-sm">{entry.year}</span>
              <p className="text-text-primary font-medium text-sm mt-0.5">{entry.title}</p>
              <p className="text-text-secondary text-sm mt-1 leading-relaxed">{entry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
