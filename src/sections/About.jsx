import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { stats } from '../data/experience';
import { Code2, Cloud, Database, Shield } from 'lucide-react';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="relative overflow-hidden bg-background py-20">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl filter"></div>

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
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Profile Image/Avatar */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="h-64 w-64 rounded-2xl bg-gradient-to-br from-primary to-secondary p-1 sm:h-80 sm:w-80">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-surface">
                    <span className="text-gradient font-heading text-8xl font-bold sm:text-9xl">
                      S
                    </span>
                  </div>
                </div>
                {/* Floating icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="glow absolute -right-4 -top-4 rounded-lg bg-primary p-3"
                >
                  <Cloud className="h-6 w-6 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="glow-green absolute -bottom-4 -left-4 rounded-lg bg-secondary p-3"
                >
                  <Code2 className="h-6 w-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4 leading-relaxed text-textSecondary">
                <p>
                  I'm a{' '}
                  <span className="font-semibold text-primary">
                    DevOps and Infrastructure Engineer
                  </span>{' '}
                  at IBM, working with the{' '}
                  <span className="font-semibold text-primary">WES-Dev-Qe</span> (Workload
                  Engineering Services) team. My primary focus is on{' '}
                  <span className="font-semibold text-secondary">
                    SAP infrastructure automation
                  </span>{' '}
                  on IBM Cloud, where I leverage Terraform and Ansible to build reliable, scalable,
                  and secure systems.
                </p>

                <p>
                  I'm passionate about building automated solutions that eliminate manual toil and
                  reduce deployment times. From orchestrating complex SAP HANA deployments to
                  implementing CI/CD pipelines with Tekton, I thrive on solving infrastructure
                  challenges at scale.
                </p>

                <p>
                  Beyond the terminal and cloud consoles, I have a deep interest in{' '}
                  <span className="font-semibold text-secondary">Indian classical literature</span>,
                  particularly Ayurvedic texts and Sanskrit works. I also enjoy exploring{' '}
                  <span className="font-semibold text-secondary">personal finance strategies</span>,
                  especially debt mutual funds and capital preservation. When I'm not automating
                  infrastructure, you'll find me traveling between{' '}
                  <span className="font-semibold text-primary">Bengaluru and Nagpur</span>.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="rounded-lg border border-border bg-surface p-4 text-center transition-colors duration-300 hover:border-primary"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-gradient mb-1 text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-textSecondary">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Icons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span className="font-mono text-sm text-textSecondary">IBM Cloud</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2">
                  <Code2 className="h-5 w-5 text-secondary" />
                  <span className="font-mono text-sm text-textSecondary">Terraform</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2">
                  <Database className="h-5 w-5 text-primary" />
                  <span className="font-mono text-sm text-textSecondary">SAP HANA</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span className="font-mono text-sm text-textSecondary">Ansible</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


