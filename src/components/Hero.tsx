import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  const name = "MRIDUL CHUNDARAN";
  const title = "SOFTWARE DEVELOPER";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="inline-block px-6 py-2 border-2 border-yellow-400 rounded-full mb-8 backdrop-blur-sm bg-yellow-400/10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-yellow-400 tracking-wider text-sm"
            >
              WELCOME TO MY PORTFOLIO
            </motion.span>
          </div>
        </motion.div>

        {/* Animated Name */}
        <div className="mb-4 overflow-hidden">
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-2 whitespace-nowrap">
            {name.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterAnimation}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-yellow-400"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.3em] text-yellow-400">
              {title}
            </h2>
            <div className="h-[2px] w-12 bg-yellow-400"></div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Crafting exceptional digital experiences through innovative code and creative problem-solving
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-yellow-400 text-black hover:bg-yellow-300 transition-colors duration-300 rounded-full relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-yellow-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.8 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-8"
      >
        <ArrowDown className="text-yellow-400" size={32} />
      </motion.div>

      {/* Floating geometric shapes - Optimized */}
      <motion.div
        style={{ willChange: 'transform' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-10 w-20 h-20 border-2 border-yellow-400/20 rounded-lg"
      />
      <motion.div
        style={{ willChange: 'transform' }}
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-20 w-16 h-16 border-2 border-yellow-400/30"
      />

      {/* Additional shapes - Simplified animations */}
      <motion.div
        style={{ willChange: 'opacity, transform' }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-[20%] w-6 h-6 border border-yellow-400 rounded-sm rotate-45"
      />

      <motion.div
        style={{ willChange: 'transform' }}
        animate={{
          x: [0, 30, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 left-[15%] w-4 h-4 bg-yellow-400/20 rounded-full"
      />

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
        className="absolute top-1/2 left-[10%] w-32 h-32 border border-yellow-400/5 rounded-full"
      />

      <motion.div
        style={{ willChange: 'transform' }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-10 w-12 h-12 bg-yellow-400/10 rounded-full"
      />
    </section>
  );
}