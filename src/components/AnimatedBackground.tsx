import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const particleCount = 15;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Animated gradient background - Optimized */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(250, 204, 21, 0.08) 0%, transparent 50%)',
          willChange: 'opacity'
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Simplified Gradient Orb - Single instead of multiple interacting ones */}
      <motion.div
        className="absolute w-[40rem] h-[40rem] rounded-full blur-[100px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, transparent 70%)',
          willChange: 'transform',
        }}
        animate={{
          x: ['-20%', '20%', '-20%'],
          y: ['-20%', '20%', '-20%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Particles - Reduced count and simplified properties */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-yellow-400/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Static Grid - Moved to static CSS or simplified */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(250, 204, 21, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 204, 21, 0.3) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Optimized Floating Shapes - Reduced complexity and count */}
      <motion.div
        className="absolute top-1/4 left-[5%] w-64 h-64 border border-yellow-400/5 rounded-3xl"
        style={{ willChange: 'transform' }}
        animate={{
          rotate: [0, 180],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(rgba(250,204,21,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
    </div>
  );
}
