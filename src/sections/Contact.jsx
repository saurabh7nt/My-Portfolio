import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, Copy } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const email = 'saurabh@example.com';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

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

          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-textPrimary">Location</h3>
                  <p className="text-textSecondary">📍 Bengaluru, India</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold text-textPrimary">Email</h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${email}`}
                      className="text-textSecondary transition-colors hover:text-primary"
                    >
                      {email}
                    </a>
                    <motion.button
                      onClick={copyEmail}
                      className="rounded p-1.5 transition-colors hover:bg-surface"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Copy email"
                    >
                      {isCopied ? (
                        <CheckCircle className="h-4 w-4 text-secondary" />
                      ) : (
                        <Copy className="h-4 w-4 text-textSecondary" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-textPrimary">Connect on Social</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="group rounded-lg border border-border bg-surface p-3 transition-all duration-300 hover:border-primary hover:bg-primary/10"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-6 w-6 text-textSecondary transition-colors group-hover:text-primary" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="group rounded-lg border border-border bg-surface p-3 transition-all duration-300 hover:border-primary hover:bg-primary/10"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="h-6 w-6 text-textSecondary transition-colors group-hover:text-primary" />
                  </motion.a>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="mb-3 text-lg font-semibold text-textPrimary">Areas of Interest</h3>
                <ul className="space-y-2 text-sm text-textSecondary">
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
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-xl border border-border bg-surface p-8"
              >
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-textPrimary"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-textPrimary placeholder-textSecondary transition-colors focus:border-primary focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-textPrimary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-textPrimary placeholder-textSecondary transition-colors focus:border-primary focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-textPrimary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-textPrimary placeholder-textSecondary transition-colors focus:border-primary focus:outline-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="glow flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary/90"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-secondary"
                  >
                    Thank you for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;


