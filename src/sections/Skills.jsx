import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillsData } from '../data/skills';
import { Cloud, GitBranch, Database, Code, Shield, Server } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categoryIcons = {
    'Cloud & Infrastructure': Cloud,
    'CI/CD & DevOps': GitBranch,
    'SAP Technology': Database,
    'Programming & Scripting': Code,
    'Security & Compliance': Shield,
    'Backend (Working Knowledge)': Server,
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="relative overflow-hidden bg-surface py-20">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl filter"></div>

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
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
            <p className="mx-auto max-w-2xl text-textSecondary">
              A comprehensive toolkit for building and managing cloud infrastructure at scale
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillsData.map((category, categoryIndex) => {
              const IconComponent = categoryIcons[category.category];

              return (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  className="group rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary"
                  whileHover={{ y: -5 }}
                >
                  {/* Category Header */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 transition-colors duration-300 group-hover:bg-primary/20">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-textPrimary">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        variants={skillVariants}
                        className="cursor-default rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-sm text-textSecondary transition-all duration-300 hover:border-secondary hover:text-secondary"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-block rounded-xl border border-border bg-background p-6">
              <p className="mb-2 text-textSecondary">
                <span className="font-semibold text-primary">Continuous Learning:</span> Always
                exploring new tools and technologies
              </p>
              <p className="font-mono text-sm text-textSecondary">
                Current Focus: Advanced Tekton Pipelines & IBM Cloud Security Best Practices
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


