import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Word sets
const WORD_SETS = [
  ["Unmistakably", "Original®", "Design"],
  ["Creative", "Nexera", "Studio®"],
  ["Pixel", "Perfect®", "Experiences"],
  ["Bold", "Innovative", "Solutions", "Today"],
  ["The", "Future", "Of", "Web", "Design"],
  ["Crafting", "Digital", "Masterpieces"],
  ["Designing", "With", "Passion", "And", "Precision"],
  ["Elevate", "Your", "Brand", "With", "Nexera®"],
  ["From Concept", "To Execution", "Perfectly", "Done"],
  ["AI-Powered", "Tools", "Innovation", "For", "Everyone"],
  ["Building", "Websites", "And", "AI Tools", "Fast"],
];

// Colors
const BASE_COLOR = "#ebe7df";
const UNIQUE_COLOR = "#ffd6f2";

export default function HeroAnimatedText() {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  // State for current word set
  const [words, setWords] = useState(getRandomSet());
  const [uniqueIndex, setUniqueIndex] = useState(
    Math.floor(Math.random() * words.length)
  );

  // Intersection Observer to pause animation when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  // Loop animation using state + AnimatePresence
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      const nextSet = getRandomSet();
      setWords(nextSet);
      setUniqueIndex(Math.floor(Math.random() * nextSet.length));
    }, 1500); // every 1.5 sec

    return () => clearInterval(interval);
  }, [isVisible]);

  // Split words into 2 rows
  const splitIndex = Math.ceil(words.length / 2);
  const row1Words = words.slice(0, splitIndex);
  const row2Words = words.slice(splitIndex);

  return (
    <div
      ref={heroRef}
      className="min-h-screen w-full bg-[#f7f2ea] flex items-center justify-center px-4 md:px-0"
    >
      <div className="flex flex-col items-center gap-3 select-none w-full max-w-4xl">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center items-center gap-3 w-full">
          <AnimatePresence mode="wait">
            {row1Words.map((word, i) => (
              <PixelBlock
                key={word + "-r1-" + uniqueIndex}
                text={word}
                isUnique={i === uniqueIndex}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center items-center gap-3 w-full">
          <AnimatePresence mode="wait">
            {row2Words.map((word, i) => (
              <PixelBlock
                key={word + "-r2-" + uniqueIndex}
                text={word}
                isUnique={i + splitIndex === uniqueIndex}
              />
            ))}
          </AnimatePresence>
        </div>
        
        {/* Floating Scroll Down Arrow */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */
function PixelBlock({ text, isUnique }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{
        opacity: 1,
        y: 0,
        backgroundColor: isUnique ? UNIQUE_COLOR : BASE_COLOR,
      }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="px-5 py-3 text-center flex-shrink-0"
    >
      <span className="font-Pixelo text-[20px] md:text-[26px] leading-none text-black">
        {text}
      </span>
    </motion.div>
  );
}

// Helper
function getRandomSet() {
  return WORD_SETS[Math.floor(Math.random() * WORD_SETS.length)];
}
