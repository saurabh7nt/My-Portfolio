import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { certifications } from '../data/certifications';
import { Award } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    <section id="certifications" className="relative overflow-hidden bg-background py-20">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 h-96 w-96 rounded-full bg-secondary/5 blur-3xl filter"></div>

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
              Certifications <span className="text-gradient">& Credentials</span>
            </h2>
            <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
            <p className="mx-auto max-w-2xl text-textSecondary">
              Cloud-native and DevOps credentials — official exams and structured coursework
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            variants={containerVariants}
            className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-xs ${
                      cert.official
                        ? 'bg-secondary/10 text-secondary'
                        : 'bg-border/60 text-textSecondary'
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
                <h3 className="mb-1 font-heading text-lg font-semibold text-textPrimary transition-colors duration-300 group-hover:text-primary">
                  {cert.name}
                </h3>
                {cert.issuer !== cert.status && (
                  <p className="text-sm text-textSecondary">{cert.issuer}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
