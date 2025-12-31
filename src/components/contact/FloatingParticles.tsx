import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FloatingParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
