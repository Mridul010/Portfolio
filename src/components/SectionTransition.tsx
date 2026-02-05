import { motion, useScroll, useTransform } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function SectionTransition({ children, id, className = '' }: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{ opacity, scale, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
