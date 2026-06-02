import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, CheckCircle, Copy } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isCopied, setIsCopied] = useState(false);

  const email = 'saurabhtajne07@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/saurabh-tajane-8686801b8/';
  const githubUrl = 'https://github.com/saurabh7nt';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-20">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl filter"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-4 font-heading text-4xl font-bold sm:text-5xl">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
            <p className="mx-auto max-w-2xl text-textSecondary">
              I'm always open to discussing infrastructure challenges, SAP automation, or IBM Cloud
              architecture. Feel free to reach out.
            </p>
          </motion.div>

          <div className="mx-auto max-w-2xl">
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-border bg-surface p-8 sm:p-10"
            >
              {/* Primary actions: Email + LinkedIn */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:${email}`}
                  className="glow group flex flex-1 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/90"
                  aria-label="Send an email to Saurabh"
                >
                  <Mail className="h-5 w-5" />
                  Email Me
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center justify-center gap-3 rounded-xl border border-primary px-6 py-4 font-semibold text-primary transition-all duration-300 hover:bg-primary/10"
                  aria-label="Connect with Saurabh on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </div>

              {/* Email address with copy */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm">
                <a
                  href={`mailto:${email}`}
                  className="text-textSecondary transition-colors hover:text-primary"
                >
                  {email}
                </a>
                <motion.button
                  onClick={copyEmail}
                  className="rounded p-1.5 transition-colors hover:bg-background"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {isCopied ? (
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  ) : (
                    <Copy className="h-4 w-4 text-textSecondary" />
                  )}
                </motion.button>
              </div>

              {/* Secondary info: Location + GitHub */}
              <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
                <div className="flex items-center gap-2 text-sm text-textSecondary">
                  <MapPin className="h-4 w-4 text-primary" />
                  Bengaluru, India
                </div>
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm text-textSecondary transition-all duration-300 hover:border-primary hover:text-primary"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5 transition-colors group-hover:text-primary" />
                  GitHub
                </motion.a>
              </div>
            </motion.div>

            {/* Areas of Interest */}
            <motion.div
              variants={itemVariants}
              className="mt-8 rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="mb-3 text-lg font-semibold text-textPrimary">Areas of Interest</h3>
              <ul className="grid gap-2 text-sm text-textSecondary sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  Cloud Infrastructure & Automation
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  SAP Deployment Solutions
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  CI/CD Pipeline Architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  DevOps Best Practices
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
