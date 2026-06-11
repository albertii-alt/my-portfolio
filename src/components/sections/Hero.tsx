import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const transition = (delay = 0) => ({
  duration: 0.4,
  ease: 'easeOut',
  delay,
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `radial-gradient(circle, var(--color-border-active) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
    >
      {/* Fade-out vignette so dot grid doesn't compete with text */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-base/60 via-transparent to-bg-base pointer-events-none" />

      <div
        className="relative z-10 w-full mx-auto px-6 pt-32 pb-16"
        style={{ maxWidth: 'var(--content-max, 1100px)' }}
      >
        {/* Role label */}
        <motion.p
          className="font-display text-accent text-sm tracking-widest uppercase mb-4"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={transition(0)}
        >
          Full-Stack Developer &amp; AI Builder
        </motion.p>

        {/* H1 + blinking cursor */}
        <motion.h1
          className="font-display text-text-primary leading-tight mb-6 text-4xl md:text-5xl"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={transition(0.1)}
        >
          Jay-ar Daro
          <span className="text-accent animate-blink">▋</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-text-secondary text-lg max-w-lg mb-10 leading-relaxed"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={transition(0.2)}
        >
          Building intelligent, practical systems that solve real community
          and business problems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4 mb-10"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={transition(0.3)}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg-base font-display text-sm rounded font-semibold hover:bg-accent/90 transition-colors"
          >
            View My Work <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 border border-border-active text-text-primary font-display text-sm rounded hover:border-accent hover:text-accent transition-colors"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Meta row */}
        <motion.p
          className="text-text-muted text-sm font-display"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={transition(0.4)}
        >
          Based in Trinidad, Bohol · Open to Freelance &amp; Opportunities
        </motion.p>
      </div>
    </section>
  );
}
