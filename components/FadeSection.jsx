'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FadeSection({ children, className = '' }) {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Trigger only once
        }
      },
      { threshold: 0.7 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: hasAnimated ? 1 : 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`will-change-[opacity,transform] transform-gpu ${className}`}
    >
      {children}
    </motion.section>
  );
}
