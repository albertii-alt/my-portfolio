import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const transition = (delay = 0): Transition => ({
  duration: 0.4,
  ease: 'easeOut',
  delay,
});

const stats = [
  '8+ Projects Built',
  '3 Years Learning',
  'Full-Stack + AI',
  'Open Source on GitHub',
];

export default function About() {
  return (
    <section id="about" className="pt-10 pb-20 px-6">
      <div className="mx-auto" style={{ maxWidth: 'var(--content-max, 1100px)' }}>
        <p className="text-text-muted font-display text-sm uppercase tracking-widest mb-10">
          About
        </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left — story */}
        <motion.div
          className="flex flex-col gap-5"
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true }}
          transition={transition(0)}
        >
          <p className="text-text-secondary text-base leading-relaxed">
            I'm a 3rd year IT student at Trinidad Municipal College, but most of what
            I know came from building real things — a POS system for a local food stall,
            a dental clinic management platform, a mobile productivity app.
          </p>
          <p className="text-text-secondary text-base leading-relaxed">
            I focus on full-stack systems that small businesses and communities can
            actually use. Right now I'm deep into agentic development — building software
            with AI as a core collaborator, not just a tool.
          </p>
        </motion.div>

        {/* Right — stat pills */}
        <div className="flex flex-col gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat}
              className="px-5 py-3 rounded border border-border bg-bg-surface text-text-primary font-display text-sm"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={transition(i * 0.08)}
            >
              <span className="text-accent mr-2">▸</span>{stat}
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
