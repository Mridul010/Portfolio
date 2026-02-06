import { Code2, Palette, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skills = [
    {
      icon: <Code2 size={32} />,
      title: 'Development',
      description: 'Building scalable and performant web applications with modern technologies'
    },
    {
      icon: <Palette size={32} />,
      title: 'Design',
      description: 'Creating beautiful, user-centered interfaces that delight and inspire'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Innovation',
      description: 'Pushing boundaries with creative solutions and cutting-edge approaches'
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20 bg-zinc-950/50 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-20 -right-20 w-64 h-64 border border-yellow-400/10 rounded-full"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            About <span className="text-yellow-400">Me</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-yellow-400"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate software developer with a keen eye for detail and a love for creating
              memorable digital experiences. As a fresh graduate, I’m excited to take on challenges, learn from real projects,
              and grow alongside innovative teams.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My approach combines technical expertise with creative thinking, ensuring every project
              not only looks stunning but performs flawlessly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              <motion.div
                style={{ willChange: 'transform' }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 border-4 border-yellow-400 rounded-full"
              />
              <motion.div
                style={{ willChange: 'transform' }}
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-4 border-4 border-yellow-400/30 rounded-full"
              />
              <motion.div
                style={{ willChange: 'transform' }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-8 border-4 border-yellow-400/10 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="p-8 bg-black/50 backdrop-blur-sm border-2 border-yellow-400/20 hover:border-yellow-400 transition-colors duration-300 rounded-2xl group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-yellow-400 mb-4"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-2xl mb-3 text-white">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
