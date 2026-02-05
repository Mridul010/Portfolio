import { Mail, Github, Linkedin, Twitter, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // EMAILJS CONFIGURATION
  const SERVICE_ID = "service_xma10ok";
  const TEMPLATE_ID = "template_t378rma";
  const PUBLIC_KEY = "zr14gVItTwwEYpCCh";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const socialLinks = [
    { icon: <Github size={24} />, label: 'GitHub', href: 'https://github.com/mridul010' },
    { icon: <Linkedin size={24} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mridul-chundaran' },
    { icon: <Twitter size={24} />, label: 'Twitter', href: 'https://x.com/ChundaranM35150' },
    { icon: <Mail size={24} />, label: 'Email', href: 'mailto:mridulchundaran@gmail.com' },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          message: formData.get('message'),
          to_name: "Mridul",
        },
        PUBLIC_KEY
      );
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20 bg-zinc-950/50 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-32 -left-32 w-96 h-96 border-2 border-yellow-400/10 rounded-full"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6">
            Let's <span className="text-yellow-400">Connect</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-yellow-400"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                >
                  <Mail className="text-black" size={20} />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">mridulchundaran@gmail.com</p>
                </div>
              </motion.div>

              <div className="flex gap-4 pt-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.4 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 border-2 border-yellow-400/20 hover:border-yellow-400 hover:bg-yellow-400 text-yellow-400 hover:text-black rounded-full flex items-center justify-center transition-all duration-300 group"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-yellow-400/20 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: 'rgb(250, 204, 21)' }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-zinc-950 border-2 border-yellow-400/20 focus:border-yellow-400 rounded-lg text-white outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: 'rgb(250, 204, 21)' }}
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-zinc-950 border-2 border-yellow-400/20 focus:border-yellow-400 rounded-lg text-white outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02, borderColor: 'rgb(250, 204, 21)' }}
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-950 border-2 border-yellow-400/20 focus:border-yellow-400 rounded-lg text-white outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(250, 204, 21, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-yellow-400 text-black hover:bg-yellow-300 transition-colors duration-300 rounded-lg relative overflow-hidden group flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 font-bold">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-yellow-300"
                  initial={{ x: '-100%' }}
                  whileHover={!isSubmitting ? { x: 0 } : {}}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg border border-green-400/20"
                  >
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20"
                  >
                    <AlertCircle size={20} />
                    <span>Message failed to send. Please email me directly at mridulchundaran@gmail.com</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-yellow-400/20 text-center text-gray-400"
        >
          <p>© 2026 Mridul Chundaran. Designed & Built with passion.</p>
        </motion.div>
      </div>
    </section>
  );
}
