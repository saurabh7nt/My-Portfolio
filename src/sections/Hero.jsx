import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Briefcase } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'DevOps Engineer',
    'Cloud Platform Engineer',
    'IBM Cloud Infrastructure Engineer',
    'Terraform & Ansible Practitioner',
    'SAP Automation Engineer',
  ];

  useEffect(() => {
    const currentFullText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary blur-3xl filter"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-secondary blur-3xl filter delay-1000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,98,254,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,98,254,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-mono text-lg text-primary"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 font-heading text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient">Saurabh Tajane</span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6 h-16 sm:h-20"
          >
            <h2 className="font-heading text-2xl text-textSecondary sm:text-3xl md:text-4xl">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-textSecondary sm:text-xl"
          >
            Building resilient SAP infrastructure on IBM Cloud — one pipeline at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              onClick={scrollToProjects}
              className="glow group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/90"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Briefcase className="h-5 w-5" />
              View My Work
            </motion.button>

            <motion.a
              href="/Saurabh_Tajane_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-border bg-surface px-8 py-4 font-semibold text-textPrimary transition-all duration-300 hover:bg-border"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex cursor-pointer flex-col items-center gap-2 text-textSecondary"
            onClick={() => {
              const element = document.querySelector('#about');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
          >
            <span className="font-mono text-sm">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


