import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState(0);
  const [cursorTrail, setCursorTrail] = useState<Array<{ x: number; y: number }>>([]);
  const requestRef = useRef<number>(undefined);
  const previousTimeRef = useRef<number>(undefined);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  const trailLength = 12;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPositionRef.current.x;
      const dy = e.clientY - lastPositionRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      setVelocity(distance);

      lastPositionRef.current = { x: e.clientX, y: e.clientY };
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Use requestAnimationFrame for smoother updates
  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        setCursorTrail((prevTrail) => {
          const newTrail = [mousePosition, ...prevTrail];
          return newTrail.slice(0, trailLength);
        });
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 50,
          mass: 0.1,
        }}
      >
        <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]"></div>
      </motion.div>

      {/* Smooth cursor trail using SVG path */}
      <svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]" style={{ mixBlendMode: 'screen' }}>
        <defs>
          <radialGradient id="cursorGradient">
            <stop offset="0%" stopColor="rgb(250, 204, 21)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(250, 204, 21)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {cursorTrail.map((position, index) => {
          if (index === 0) return null;
          const size = 20 - index * 1.5;
          const opacity = 1 - index * 0.08;

          return (
            <motion.circle
              key={index}
              cx={position.x}
              cy={position.y}
              r={size / 2}
              fill="url(#cursorGradient)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: opacity,
                scale: 1,
              }}
              transition={{
                duration: 0.2,
                ease: 'easeOut',
              }}
            />
          );
        })}
      </svg>

      {/* Velocity-based trailing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9995]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: velocity > 5 ? 0.8 : 0,
          scale: velocity > 5 ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
          mass: 0.2,
          delay: 0.05,
        }}
      >
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
      </motion.div>

      {/* Outer ring that follows cursor with delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 25,
          mass: 0.5,
        }}
      >
        <div className="w-8 h-8 border border-yellow-400/40 rounded-full"></div>
      </motion.div>

      {/* Larger outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          mass: 0.8,
        }}
      >
        <div className="w-12 h-12 border border-yellow-400/20 rounded-full"></div>
      </motion.div>
    </>
  );
}
