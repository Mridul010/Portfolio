import { Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Projects() {
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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: 'Smart Lead AI',
      description: 'End-to-End full-stack ML application using Python, Scikit-Learn, and Flask to predict customer conversion probabilities with 91% accuracy.',
      image: 'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMjUxMjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Scikit-Learn', 'Flask'],
      link: 'https://github.com/Mridul010/Smart-Lead-Ai',
      date: 'Nov 2025'
    },
    {
      title: 'Emotion Detection',
      description: 'AI-based web app using Python and Flask to classify emotions from text. Integrated IBM Watson AI Libraries for core analysis.',
      image: 'https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcwMjM1NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Flask', 'IBM Watson'],
      link: 'https://github.com/Mridul010/final_project',
      date: 'Oct 2025'
    },
    {
      title: 'TrackEx',
      description: 'Personal finance & stock prediction app with tax calculation. Implemented Bi-LSTM, XGBoost, and CNN models achieving 92% accuracy.',
      image: 'https://images.unsplash.com/photo-1633533448522-26ee3eab7961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc3MDI2NTMwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Firebase', 'ML'],
      link: 'https://github.com/Mridul010', // Placeholder as specific repo wasn't provided
      date: 'Feb 2025'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-black/50 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 w-32 h-32 border-2 border-yellow-400/10"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-yellow-400"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-950/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-yellow-400/20 hover:border-yellow-400 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="h-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Animated corner accent */}
                <motion.div
                  initial={{ width: 0, height: 0 }}
                  whileHover={{ width: 60, height: 60 }}
                  className="absolute top-0 right-0 bg-yellow-400/20"
                  style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
                />
              </div>

              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl text-white font-bold">{project.title}</h3>
                  <span className="text-xs text-yellow-400/80 font-mono border border-yellow-400/20 px-2 py-1 rounded">{project.date}</span>
                </div>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + tagIndex * 0.1 }}
                      className="px-3 py-1 text-xs bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300 transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>


              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.6)] z-10"
              >
                <Github className="text-black" size={20} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}