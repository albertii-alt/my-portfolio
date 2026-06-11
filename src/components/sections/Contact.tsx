import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { Mail, GitFork, Link } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const transition = (delay = 0): Transition => ({ duration: 0.4, ease: 'easeOut', delay });

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText('albertoiidaro0@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="pt-10 pb-20 px-6">
      <div className="mx-auto flex flex-col items-center text-center gap-6" style={{ maxWidth: '600px' }}>

        <motion.h2
          className="font-display text-3xl text-text-primary"
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true }}
          transition={transition(0)}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          className="text-text-secondary"
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true }}
          transition={transition(0.1)}
        >
          Available for freelance projects, internships, and collaboration.
        </motion.p>

        {/* Email button + toast */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true }}
          transition={transition(0.2)}
        >
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 bg-accent text-bg-base font-display px-6 py-3 rounded-md hover:bg-accent/90 transition-colors"
          >
            <Mail size={16} />
            albertoiidaro0@gmail.com
          </button>
          {copied && (
            <span className="text-accent text-sm font-display">Email copied!</span>
          )}
        </motion.div>

        {/* Social row */}
        <motion.div
          className="flex items-center gap-6"
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true }}
          transition={transition(0.3)}
        >
          <a
            href="https://github.com/albertii-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm"
          >
            <GitFork size={16} /> GitHub
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm"
          >
            <Link size={16} /> Facebook
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-text-muted text-sm font-display mt-8"
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true }}
          transition={transition(0.4)}
        >
          Built by Jay-ar Daro · 2026
        </motion.p>

      </div>
    </section>
  );
}
