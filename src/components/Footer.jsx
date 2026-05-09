import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-textSecondary">
            <span>© 2026 Saurabh. Built with React & </span>
            <Heart className="h-4 w-4 animate-pulse fill-primary text-primary" />
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-primary transition-all duration-300 hover:bg-primary/20"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-semibold">Back to Top</span>
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </motion.button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 border-t border-border pt-6 text-center">
          <p className="text-xs text-textSecondary">DevOps Engineer @ IBM | Bengaluru, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


