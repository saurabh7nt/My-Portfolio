import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, X } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

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
    <section id="projects" className="relative overflow-hidden bg-background py-20">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl filter"></div>

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
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
            <p className="mx-auto max-w-2xl text-textSecondary">
              A showcase of infrastructure automation, cloud deployments, and DevOps solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-primary"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Card Content */}
                <div className="p-6">
                  {/* Project Number Badge */}
                  <div className="mb-4 inline-block rounded-lg bg-primary/10 px-3 py-1 font-mono text-sm text-primary">
                    #{project.id.toString().padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 font-heading text-xl font-semibold text-textPrimary transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 line-clamp-3 text-sm text-textSecondary">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="rounded border border-border bg-background px-2 py-1 font-mono text-xs text-textSecondary"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="rounded border border-border bg-background px-2 py-1 font-mono text-xs text-textSecondary">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-border bg-surface"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 flex items-start justify-between border-b border-border bg-surface p-6">
                <div className="flex-1">
                  <div className="mb-3 inline-block rounded-lg bg-primary/10 px-3 py-1 font-mono text-sm text-primary">
                    #{selectedProject.id.toString().padStart(2, '0')}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-textPrimary">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg p-2 transition-colors duration-200 hover:bg-border"
                >
                  <X className="h-6 w-6 text-textSecondary" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6 p-6">
                {/* Description */}
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-textPrimary">Overview</h4>
                  <p className="leading-relaxed text-textSecondary">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Details */}
                {selectedProject.details && (
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-textPrimary">Details</h4>
                    <p className="leading-relaxed text-textSecondary">{selectedProject.details}</p>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-textPrimary">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-sm text-textSecondary transition-colors duration-300 hover:border-secondary hover:text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;


