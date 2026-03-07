import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["Design", "Develop", "Create"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const handleComplete = useCallback(() => {
    setTimeout(() => onComplete(), 400);
  }, [onComplete]);

  useEffect(() => {
    const duration = 2700;
    const startTime = performance.now();

    let rafId: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * 100);
      setCount(value);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        handleComplete();
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [handleComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex flex-col"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top-left label */}
      <motion.div
        className="absolute top-8 left-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs text-muted uppercase tracking-[0.3em]">
          Portfolio
        </span>
      </motion.div>

      {/* Center rotating words */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom-right counter */}
      <div className="absolute bottom-16 right-8">
        <span className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
          {String(count).padStart(3, "0")}
        </span>
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="h-full accent-gradient transition-transform duration-75"
          style={{
            transform: `scaleX(${count / 100})`,
            transformOrigin: "left",
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
        />
      </div>
    </motion.div>
  );
}
