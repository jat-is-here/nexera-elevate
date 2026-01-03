import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { navLinks } from "./navLinks";

const FloatingIslandDesktop = () => {
  const location = useLocation();
  const { scrollY } = useScroll();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pillIndex, setPillIndex] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const [logoFocused, setLogoFocused] = useState(false);

  // 🔹 Active route index
  const activeIndex = navLinks.findIndex(
    (link) => location.pathname === link.path
  );

  // 🔹 Sync pill when route changes
  useEffect(() => {
    setPillIndex(activeIndex);
  }, [activeIndex]);

  // 🔹 Hover handlers
  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredIndex(index);
    setPillIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);

    timeoutRef.current = window.setTimeout(() => {
      setPillIndex(activeIndex);
    }, 1000); // ⏱ 1 second delay
  };

  // 🔹 Scroll effects (unchanged)
  const blur = useTransform(scrollY, [0, 120], ["blur(0px)", "blur(10px)"]);
  const scale = useTransform(scrollY, [0, 120], [1, 0.97]);
  const background = useTransform(
    scrollY,
    [0, 120],
    ["rgba(15,15,15,0.4)", "rgba(15,15,15,0.8)"]
  );

  return (
    <motion.nav
      style={{ backdropFilter: blur, scale, background }}
      className="
        hidden lg:block
        mx-auto max-w-6xl
        rounded-full border border-white/10
        px-5 py-3
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      "
    >
      <div className="relative flex items-center justify-center">
        {/* Left logo */}
        <motion.div
          className="absolute left-4"
          initial="rest"
          whileHover="hover"
          animate={logoFocused ? "hover" : "rest"}
        >
          <Link to="/" className="cursor-none" onFocus={() => setLogoFocused(true)} onBlur={() => setLogoFocused(false)} aria-label="Nexera">
            <motion.div
              className="
        flex items-center overflow-hidden
        h-9 bg-black rounded-sm
        text-white font-bold text-sm
      "
              variants={{
                rest: { width: 36 },
                hover: { width: 110 },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              {/* N box (fade on hover/focus) */}
              <motion.div
                aria-hidden="true"
                className="w-9 h-9 flex items-center justify-center flex-shrink-0 font-Pixelo"
                variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                N
              </motion.div>

              {/* Animated text */}
              <div className="relative flex items-center">
                {/* Nex (from top) */}
                <motion.span
                  className="absolute left-0"
                  variants={{
                    rest: { y: -12, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  aria-hidden="true"
                >
                  Nex
                </motion.span>

                {/* era (from bottom) */}
                <motion.span
                  className="absolute left-[28px]"
                  variants={{
                    rest: { y: 12, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.27, ease: "easeOut", delay: 0.06 }}
                  aria-hidden="true"
                >
                  era
                </motion.span>

                {/* Spacer to reserve width */}
                <span className="opacity-0 select-none" aria-hidden="true">Nexera</span>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Center nav pills */}
        <div className="flex gap-3 items-center">
          {navLinks.map((link, index) => {
            const isHighlighted = pillIndex === index;

            return (
              <div key={link.path} className="relative">
                {isHighlighted && (
                  <motion.span
                    layoutId="nav-pill"
                    className="
                      absolute inset-0
                      rounded-full
                      bg-white/95
                      shadow-[0_6px_18px_rgba(0,0,0,0.12)]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 30,
                    }}
                  />
                )}

                <Link
                  to={link.path}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative px-4 py-2 cursor-none text-sm uppercase font-medium
                    transition-colors duration-200
                    ${
                      isHighlighted
                        ? "text-black"
                        : "text-white/90 hover:text-black"
                    }
                  `}
                >
                  <motion.span
                    initial={false}
                    animate={{
                      scale: hoveredIndex === index ? 1.03 : 1,
                    }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Right side */}
        <div className="absolute right-4 flex items-center gap-3">
          <span className="text-sm text-white/80">Press / for ?</span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
          <Link
            to="/contact"
            className="px-3 py-1 cursor-none rounded-md bg-yellow-300 text-black text-sm font-semibold"
          >
            Say Hello
          </Link>
          </motion.span>
        </div>
      </div>
    </motion.nav>
  );
};

export default FloatingIslandDesktop;
