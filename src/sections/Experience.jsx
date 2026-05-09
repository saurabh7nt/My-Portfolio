import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { experienceData } from '../data/experience';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="relative overflow-hidden bg-surface py-20">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl filter"></div>

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
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
            <p className="mx-auto max-w-2xl text-textSecondary">
              My professional journey in DevOps and cloud infrastructure
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mx-auto max-w-4xl">
            {experienceData.map((experience, _index) => (
              <motion.div key={experience.id} variants={itemVariants} className="relative">
                {/* Timeline Line */}
                <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

                {/* Experience Card */}
                <div className="relative pb-12 pl-20">
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-5 top-2 h-6 w-6 rounded-full border-4 border-surface bg-primary shadow-lg"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75"></div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary"
                    whileHover={{ x: 5 }}
                  >
                    {/* Header */}
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <h3 className="font-heading text-2xl font-bold text-textPrimary">
                            {experience.role}
                          </h3>
                        </div>
                        <p className="mb-1 text-lg font-semibold text-primary">
                          {experience.company}
                        </p>
                        <p className="font-mono text-sm text-textSecondary">{experience.team}</p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-primary">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-semibold">{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-textSecondary">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-textSecondary">
                        Key Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-start gap-3 text-textSecondary"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                            <span className="leading-relaxed">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <div className="inline-block rounded-xl border border-border bg-background p-6">
              <p className="text-textSecondary">
                <span className="font-semibold text-primary">Open to opportunities:</span>{' '}
                Interested in challenging DevOps and cloud infrastructure roles
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;


